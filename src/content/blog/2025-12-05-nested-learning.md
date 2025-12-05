---
title: 'About Nested Learning'
description: 'About Nested Learning'
pubDate: 'December 05 2025'
heroImage: '../../assets/nested-learning.png'
---

Image source: https://abehrouz.github.io/files/NL.pdf.

Welcome to another post where I yap about some AI stuff despite not being an AI major.

I, for one, am not into academia. Brain not beeg enough for that. I can still read papers if that helps. Some of my friends do be into academia though.

The perks of having friends who are in academia is that you get to stay updated with latest researches and not having to comb through every sinlge post/comment on fricking Reddit and then receive a wildly misleading view of the research. Plus, my friends know their stuff very well, so I get to hold intellectual conversations with them. And by that I mean I get to express my surprise about this and that and they get to enlighten me. It goes both ways.

Around a month ago, a paper was released. The paper proposed a new paradigm in building and training AI models called nested learning. In case you haven't realized, the link to the paper is right at the top. I also didn't know about the existence of this paper until my friend told me.

If you don't want to read the paper, you can visit [this blog](https://research.google/blog/introducing-nested-learning-a-new-ml-paradigm-for-continual-learning/) instead. And then you will realize that you want to read the paper. Unless you just want to join in the hype, in which case forget the paper.

Anyways, I'm gonna yap about nested learning, using what I extracted from the paper and from yapping to my friends.

#### 1. How does the brain work again?

Look, AI is all about mimicking the human brain. Or at least, how the human brain works anyway. We use gigawatts of electricity to run AI models and our human brain requires a medium-sized pizza. So we ain't gonna compete in the energy department.

Anyways, AI research is more or less influenced by neuroscience research, if not outright dictated. Since you kinda need to know how the brain works to even try to mimic that. And uh, funny thing. Turns out, a couple of years ago, neuroscientists suggest that the brain might not be what we think it was 20 years ago. Welcome to neuroscience research, folks. There's always something new about the brain.

For the longest time, we thought that memory was simple. Prefrontal cortex stores short-term memory, hippocampus stores long-term memory, and memory is an object.

Turns out, that was not the case. It gets a bit more complicated than that so I'm gonna resort to an example. Let's say you see a face and then try to recall that same face a couple days later. The latest research suggests that when your brain encodes a face, within it, one area encodes edges and textures, another area encodes identity, another area encodes your relationship to that person, so on and so forth. And then, when you try to recall that face, the hippocampus retrieves all those tiny bits of information and computes the face. The result of that computation is what we now call *memory*. So now, memory is a function of smaller objects.

What's more interesting, is that each of those different areas in the brain learns their respective information on different time scales. Learning edges and textures of the face might take a bit longer to stick around than learning the voice of the person. So now, high-speed learning is short-term memory and low-speed learning is long-term memory.

And most crucial of all. All these different areas learn using the same input. That's huge for reasons to be mentioned below.

Also, I'm definitely not that familiar with PhD-level papers, but good lord it was a lot of yapping to just make a single point.

#### 2. So what do we do now with this new knowledge?

Well, we first look at why we even bother to think of a different approach for AI.

Recent pipelines for AI models all look something like this. First, you have the architecture, which is a network of billions of parameters and meta paramaters. In case you're not familiar, paramaters are what define the behaviors of the AI, while meta parameters define how the AI learns. Then, you have the optimizer, which fine tunes the meta parameters so that the model could learn more efficiently. Finally, you have the AI interacting with users, known as in-context learning. You send a prompt, it understands the prompt, it incorporates the existing context, and it gives you an answer that sounds like it is aware of everything you've been saying to it.

So, what's the issue?

The issue is that raw input (texts, images, videos, whatever) can only be processed by the outermost level, the in-context learning level. Raw input is useless for either optimizer or architecture, because neither optimizer nor architecture speaks in raw input. They only speak in gradient descent. This leads to one major downside of current AI pipelines. The model cannot learn **during inference**. This is basically saying your brain cannot update anything when it receives new information *in real time*. Which is, well, just blatantly wrong. Your brain most certainly always updates memory and knowledge as it receives new data in real time. But current AI models cannot do that.

And it's fair that current AI models cannot do that. The pipeline of architecture - optimizer - in-context learning was based directly on the oudated model of the brain. Plus, it's a pipeline we've been using for decades, so there's that as well.

So now, the paper proposes nested learning, a pipeline based on the more updated model of the brain.

#### 3. So what is nested learning?

Nested learning is a recurrent neural network (RNN) which 3 layers. Innermost layer behaves like architecture, next layer behaves like optimizer, and outermost layer behaves like in-context learning.

"Wait, what? Didn't we just say the current pipeline sucks?"

That we did. But, it only sucks because the two inner layers cannot interpret raw input. The 3 components still have great relevance. The paper argues that these 3 components are just memories learning at different time scales. Sounds familiar?

Architecture learns at the slowest rate, since it's the foundation of the model. Architecture to an AI model is like identity to a person. You are a humble person. You are an aggressive person. You are a moderate person. That's identity.

Optimizer learns at a medium rate, since it's just trying to tweak how the architecture learns. An aggressive person can learn to calm down, but it's gonna take more than just a couple of days to go from agressive to humble.

In-context learning learns at the fastest rate, since well, it's answering your prompts mate. This corresponds to, unsurprisingly, you talking to other people. Your brain immediately knows what to say in response to other people. If the other person looks sad, your brain immediately knows not to say stupid shit. If the other person looks happy, your brain immediately knows you can say many things. But that's the logical aspect. Whether you can actually adhere to your brain is a different story that we're not gonna cover, because I'm no neuroscientist.

So yeah, we already have the building blocks to mimic the current model of the brain. But there's still one issue. We still don't have a common language for all these 3 layers.

And so, the paper proposes something that I shall refer to as a surprise signal. Instead of simply accepting raw input, now we measure the level of surprise, i.e. given the current state of the model, how surprised the model is when it takes in this particular input. And then the paper dedicated some 30 pages to prove a single point. That point being the math for architecture, the math for optimizer and the math for in-context learning all check out when using the surprise signal as the input instead. One ~~ring~~ signal to rule them all. There you go.

#### 4. So how does it perform?

Good question. The team built a model using this new paradigm and they named the model *HOPE*. Not the most creative name if I'm gonna be honest, but meh, I've seen worse.

*HOPE* is a RNN comprised of 3 layers like I mentioned above. While the math for optimizer and architecture didn't need much change to accommodate the suprise signal, the math for in-context learning did. Normally, in-context learning is done through KV embedding, which stores tokens, and *infers* the relationships between the tokens. Now that we have surprise signals, the paper proposed a new math framework to store and update the relationships themselves. Very straightforward.

And then the team ran *HOPE* through some experiments and benchmarks. *HOPE* confirmed one thing, that it could learn *during inference*. That means even if the context window is removed, *HOPE* still remembers what has transpired. The very architecture itself is updated in real time, not in training sessions that each costs 6 months and billions of dollars. That's huge, LLMs ain't got shit on that. *HOPE* is also a whole hell lot more lightweight compared to transformers, and performs just as well as LLMs on a couple of benchmarks.

Have we finally reached super intelligence? Hype says yes! Well, it's hype, the heck were you expecting?

Transformers are extremely bulky, but they can be efficiently parallelized, which is why LLMs could even scale in the first place and come to change the entire world. Is nested learning scalable? Uh, stay tuned for that.

#### 5. So where does this leave us?

Practically speaking, it could be the start of something new.

Theoretically speaking, the concept of nested learning is really interesting, until neuroscientists say otherwise.

Personally speaking, I got a bit less bored. Back to getting high on my weeb stuff.