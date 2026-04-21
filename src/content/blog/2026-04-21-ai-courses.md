---
title: "About AI Courses"
description: "About AI Courses"
pubDate: 'April 21 2026'
heroImage: '../../assets/ai-courses.png'
---

Image source: my Neural Network course notes.

For some particular reasons that I couldn't seem to recall, I decided to take a whopping total of 3 courses about AI/ML for this past term. Maybe because I desperately needed CS electives and I wasn't gonna do any OS-related course just yet. Or compilers, for that matter. There were software development courses but I kinda dreaded my time doing the OOP course project. Anyways, I took a bunch of AI/ML courses and here's my review about each of them. Now that my exams are over.

#### 1. AMATH 449 / CS 479 / CS 679 - Neural Networks

You learn about neural networks in this course, as the name might suggest. You first learn about how biological neurons and synapses work. Then you learn about feedforward neural network and spend your time crunching vector calculus. Glory to backpropagation. Then you learn about other neural network architectures, like CNN, LSTM/GRU, VAE, Attention/Transformer, the whole nine yards. Then you circle back to biology and learn architectures that try to better mimic the biology instead of just mimicking neurons and call it a day. Population coding and biological backpropagation are two such attempts. Population coding is neat actually, it's commonly used in neurorobotics. You know, the kind of tech that allows you to possess telekinesis via robot arms. Finally, you take a final exam. Oh right, you also have a midterm before that.

I probably should have known better when I noticed a cross-listing with applied math (which is the AMATH you're seeing). The course doesn't require a prerequisite in vector calculus, which itself requires a prerequisite in multivariate calculus. To be honest, it should have. Because I walked into this course with formal training in neither, and I had to take some time to get used to the basics. Fortunately, I knew about them enough beforehand thanks to 3Blue1Brown. But I cannot say the same for many others.

Assignments were pretty chill actually. The math questions were quite enjoyable, as in they weren't sadistic and actually allowed you to practice your calculus without feeling overwhelmed. The coding questions were also nice, you get to experience implementing various neural network architectures.

For the most part, I enjoyed the course. I disliked how the CNN chapter was just there to teach us how to count the number of parameters used in a CNN. I really wish we dived a bit more into the details. But then again, there's always CS 484, Computational Vision, which goes *deep* into computer vision. Maybe I could consider taking that course in the future.

#### 2. CS 480 / CS 680 - Introduction to Machine Learning

This was **not** introduction to machine learning.

This was statistical machine learning.

You examine different machine learning architectures under the lens of statistics. K-nearest neighbor, regression, decision tree, feedforward neural network, VAE, clustering, the whole nine yards. Practically the same content coverage as Neural Networks, and more.

Remember how I said this was statistical machine learning? Yeah, by "statistics" I meant "multivariate statistics". And guess what? This course doesn't require a prerequisite in that either. Learning calculus was fine. Learning statistics was not. Somehow, I still managed to understand what the heck was going on with all the maths. That being said, it was still rather interesting to learn about machine learning when it's framed as a statistical problem. And by that, I mean it like this.

Machine learning is more or less learning some dataset to make predictions on future datasets. So, it makes sense to view the training dataset as a data distribution and the future dataset as another data distribution, and then design architectures and evaluate its performance using the tools of statistics. In fact, by understanding what assumptions you're making about the distribution of your data, you can easily narrow down on the possible choices for your model design.

An example I like to use is linear regression. You might have ssen this. Let `X` be the input, `Y` be the target output, then linear regression assumes `Y = aX + b` for some `a` and `b`, your job is finding `a` and `b`. And then you learn that the loss function to be used is mean squared error (MSE). Well, where the heck did MSE come from? It came from the fact that you assume the error between your prediction and your target follows a normal distribution (y'know, Gaussian bell curve). Then you frame the problem as finding `a` and `b` to maximize the likelihood of the training dataset. When you solve for the maximum likelihood estimator, you get the MSE formula.

In a nutshell, there's a very clear framework for working with machine learning. It ain't just "if data is A then use model B", which is unfortunately how many people approach AI/ML. And that framework uses statistics.

Still, I could have really used some multivariate statistics training.

#### 3. CS 489 / CS 689 - Introduction to Natural Language Processing

CS 489/689 is actually *Advanced Topics in Computer Science*. It just so happened that this term offered the very first iteration of a course on NLP. Naturally (or maybe not), I took the course.

You pretty much go through the entire history of NLP. You learn what people believe to be NLP in different periods of the history, and you learn the techniques and architectures people came up with during each period.

Initially, people assigned numerical IDs to words in the vocabulary and tried to use computational logic to store knowledge and perform inference. This was called symbolic NLP. Unfortunately, it failed to handle the flexible nature of natural languages. 

So came the second period, where people view NLP as a statisical problem. It was the exact same shit I just yapped about in Machine Learning. Statistical NLP was how you were able to perform a Google search. But statistical NLP still treated words as symbols, and that still severely harmed flexibility. It still couldn't encode context either.

So people got a bit more clever. "What if we represent words as vectors and use vectors to infer similar contexts and meanings?" There came the third period, representational learning. Which has been for a good decade I believe. Attention and transformers, large language models and world models, they are at the heart of this current period. Still, the technology is not quite complete. If you know your linear algebra, you also know the limitations of this approach, and you also might already know that our current researches are more or less band-aiding the shit out of this approach.

But who knows, research is moving at light speed and one day we might discover something entirely new. That is, if we have someone willing to gamble and implement it. Allow me to remind you, attention/transformer didn't make that much noise until OpenAI took the risk and implemented it. And even then shit didn't work well enough until GPT-**3**.

Anyways, back to the course logistics.

There were two assignments of 25% each and one final project of 50%. So yeah, no exams. First assignment had me work on tokenizers. Second assignment had me guessing the PCFGs. That shit was super painful. Final project was building a next-character prediction model, using whatever voodoo magic you may find useful. But there were certain restrictions, i.e. max memory, max inference time, etc., so that did limit our possible options. It was fun actually, to explore various different dark magicks, and learn what works and what does not. Training was of course not fun, but when has it ever? The project also taught me to better appreciate the importance of understanding your goddamn data (distribution).

The contents of the course were fine. The assigments and project could use a lot of improvements. But I'd say the course did well enough for the first iteration.

#### 4. Final words

Don't do what I did if you're bad at math. Whether it's taking an AI course or taking three AI courses. I mean it.