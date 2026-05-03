---
title: "About Multi-hop Reasoning"
description: "About Multi-hop Reasoning"
pubDate: 'May 02 2026'
heroImage: '../../assets/multihop-reasoning.png'
---

Image source: https://isaacus.com/.

The thumbnail will make sense in a moment, I promise.

#### 1. Boredom really is something

While I still have until April 2027 to finish my coursework at UWaterloo, my friends in Vietnam are already on their way to graduation within this year. One of them is working on a capstone project, which is the generic term over there, but really he's working on a research paper. The topic is temporal legal QA with multi-hop reasoning. He's been working on it with his team since last year's October I think.

When he told us of his project, it was interesting to me, but not that interesting, since he's a researcher and I ain't. But boredom could do wonders. I decided to pick up that topic. But my friend's work involved a novel framework and a novel dataset and a novel benchmark and all that. I wasn't gonna do all that just to make myself less bored. Instead, I tried to see what could be done using only the tools of software engineering.

#### 2. What are all of those jargons?!

I'm glad you asked. I do love a good session of yapping. We'll build it up one step at a time.

Legal QA is somewhat self-explanatory. It's essentially designing a system for interpreting questions and providing answers, all in the context of legal documents. For example, if you ask a system "Is cooking meth legal?", it should definitely say "NO" without fail. I kinda don't have a more concise example to give you, though I will admit that I watched *Breaking Bad* too many times.

Temporal legal QA is legal QA but now you wanna take into account the factor of time. Legislations change all the time, so if you ask "Is using meth legal?" in the 1920s, then the answer would surprisingly be "YES". Same question, but in 2026, then the answer is a definitive "NO".

Multi-hop reasoning is a jargon of the LLM era. Basically, given a question, instead of asking the LLM to just answer that question right away, which is prone to a lot of halluncination even with reasoning, you break the initial question into subquestions in a way such that each subquestion simply requires extracting facts and no reasoning is needed. Then, after you have all the facts, you let the LLM reason about those facts to answer the initial question. By constraining the LLM to only the extracted relevant facts, you make it very unlikely to hallucinate. If it does, then it's reasoning skill issue. In other words, use a better model.

Here's an example of multi-hop reasoning. Let's say the question is "Which university did the CEO of Tesla attend?". Multi-hop reasoning would break this one into two subquestions, first would be "Who is the CEO of Tesla?", and then "Given that I know who the CEO of Tesla is, which university did they attend?". For any of those subquestions, you could see that it's just a matter of extracting facts. The money is in how you get the system to know that it should first figure out the identity of the CEO of Tesla, and then it should include that identity in the next question about university. In shorter terms, multi-hop reasoning should know what subquestions to ask and how to combine the answers of those subquestions.

One subtle thing that I haven't mentioned is that you want the system to provide answers based solely on the legal documents you provide it with. That way, you can control its behaviors, loosely speaking.

And that, ladies and gentlemen, is temporal legal QA with multi-hop reasoning.

Also, just in case you're wondering why they even bother doing this when LLM is too good already, I dare you to follow the legal advice of an LLM.

#### 3. A few words about my friend's research

Not that I have the full details anyway. But I have some good details.

There are essentially three aspects to this research project:
- The system should be able to ingest legal documents and make a knowledge base out of those documents.
- The system should accurately reason about the question like a law practitioner would. 
- The system should be able to answer like a law practitioner would.

If the last two sound confusing, just think of it this way: understanding what is to be answered is one thing, choosing how to convey the answer is another thing.

The first requirement is more of a software engineering thing. You just kinda experiment with a bunch of RAG frameworks and figure out which works best for your use case.

The last two requires fine-tuning the multi-hop reasoning. First, you define what it means to perform multi-hop reasoning, i.e. creating the framework. Then, you fine-tune a model on its multi-hop reasoning behaviors, based on that framework you just defined. And oh yeah, you perform this whole thing separately for each requirement.

Fine-tuning in this circumstance was "interesting" for my friend's team, to say the least. To fine-tune, you need a dataset. In this case, a dataset of pairs of question-and-answer in the legal field, with temporal elements like year and month included.

If you work in AI, you know that dataset is the biggest problem. If you know someone working in AI, they will tell you that dataset is the biggest problem. So really, the true question is, how big of a problem is the dataset? In this case, **very big**. Because there wasn't a *single* usable dataset for legal QA (in Vietnam) to begin with, let alone temporal legal QA.

As such, a major portion of the research was in fact, crafting the necessary dataset. Which was royally painful. Then they defined the multi-hop reasoning framework. Then they fine-tuned the model, validated it, see that it barely worked, reviewed the architecture design, modified it. Then the process repeated. You know, typical AI research.

#### 4. My bootleg version of my friend's work

I decided to focus on anything that doesn't require fine-tuning, since that thing requires dataset and I wasn't gonna craft one. Not on my own anyway.

As a result, my bootleg project was concerned with building knowledge base from legal documents, and constructing a somewhat decent multi-hop reasoning framework. I did slander LLM on legal QA earlier, but for a funny small project, it worked well enough to impress people.

Now, onto the shenanigans I experienced while working on the project.

#### 5. RAG is NOT trivial

Never let anyone convince you otherwise.

Before you could even think of setting up RAG, you need to be able to extract information from the documents first. And whenever I encounter an arbitrary PDF, half of the time it does NOT have standard formatting. Exhibit A are my lecture slides, 10% text and 90% images with text. What the heck professors? Exhibit B are Vietnamese legal documents, they possess formattings so ancient I couldn't even copy-paste the damn text properly.

So I tried to take care of the extraction phase. Tried a couple of local approaches until I decided to give up and instead spam API calls to LlamaParse to get beautifully formatted documents in markdown files. It's really good, it just works, plus you get 10,000 free credits.

Next, you need to choose a chunking strategy. Your average tutorial would tell you to chunk at some specific length with some common chunking algorithm and it just works. Nuh uh. Legal documents are very specific in how they format the text. You must customize the chunking for legal documents. Unless you wanna spend 1 hour asking "why the F does retrieval suck so bad?" like I did.

And then, and only then, do you finally get to say "just RAG it". I just did the standard. Embed the chunks, store them in some vector database, then use top-k retrieval. voila.

Actually, for embedding, I used Kanon-2 embedding model from Isaacus because it was tailored to legal documents. And because it was API-based, and I got tired with running HuggingFace models on my GPU-is-not-real laptop.

#### 6. Multi-hop reasoning isn't that hard if you don't care about fine-tuning

I seriously mean it.

Recall that multi-hop reasoning should know what subquestions to ask and how to combine the answers of those subquestions. My approach was to just let an LLM construct the subquestions and trust that they come in the right order, and then, after subquestion `k` was answered, include that answer as context for subquestion `k + 1`. And then I just wrote some code to make sure the LLM didn't stray from that pattern. If anything, the only non-trivial I did was implementing a hybrid retrieval approach to increase the accuracy of retrieval.

If you care about accuracy, which is ideally what you should strive for in a research paper about legal documents, then you must fine-tune all of those behaviors. How to construct the right subquestions in the right order, how to extract the right keywords, how to combine the answers of multiple subquestions, the whole nine yards. And things get especially tricky on how to combine the answers of subquestions. Do you just pass answer `k` as context for question `k + 1` like I did? Do you combine a specific subset of subquestions before moving forward? Do you combine all subquestions? Do you do both and figure out the right time and place to perform each of them?

Just to sum it up, there's a reason why this topic (that my friend's team came up with) qualified for a research paper in the first place.

#### 7. My thoughts about the project

My pipeline works well enough, assuming you're giving it questions that don't require a 300 bucks consultation with an attorney.

Even when I was just doing a bootleg version of my friend's research project, it was somewhat interesting to explore and consider the tradeoffs of different frameworks and techniques. So, good practice for software engineering, and maybe systems design as well. I wouldn't call it fun, partly because I jumped straight into this project without considering that maybe legal documents deserved a customized approach.

On the other hand, if you're like my friend and you wanna do this for a research paper, then this is quite the uncharted territory for you to freely explore. I mean, I don't really see that much of an ecosystem in LLM + legislations, and the ones that are there (and supposedly work really well according to advertisement) are proprietary. Exhibit A: https://www.harvey.ai/.

But I have to admit. This was NOT that good of an idea to make me less bored. Don't even ask me why I went through the whole thing, because I don't know that myself either.

Oh yeah, here's a link to my GitHub repo: https://github.com/KuroganeToyama/multihop_reasoning.