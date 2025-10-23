---
title: 'About Groups, Rings and Fields'
description: 'About Groups, Rings and Fields'
pubDate: 'October 22 2025'
heroImage: '../../assets/groups-rings-fields.png'
---

Image source: https://iu.pressbooks.pub/maggieschildt/chapter/rings/.

Full disclaimer, I'm a CS major, and even then I have not taken any pure math courses, nor do I plan to in the foreseeable future. But hey, if it's interesting, why not yap about it?

Before we jump right into the rabbit hole, I wanna talk a bit about how I even came across these stuff. You see, back when I was an ISA on my first co-op job, I befriended a colleague who was my senior. His name was Mark. Mark was a CFM student. And CFM stands for Computing and Finance Management, which is more or less CS + Finance in a single degree. Except, he told me, whenever he applied to jobs, he simply always said he was a CS student because no employer knew what the heck CFM even means. So there's that. Anyways, Mark was a very brilliant student. He's got a very big brain. My guy always took 6 courses every term and never broke a sweat, while I'm here contemplating whether I should do the standard 5 or just 4. Mark was smart enough to do a minor in pure math just because pure math was *fun* to him. And I made it very clear, it was **fun** to him. As such, he tended to yap about his pure math coursework whenever we finished our tasks and had nothing else to do. So, that was how I got introduced to the world of pure math, despite never wanting to do with any of it.

Now, there are **a lot** of shit to learn in pure math. But, for starters, we have the famous trilogy. Groups, rings and fields. And I said "trilogy" because you usually would be taught about those in 3 separate courses. Group theory, ring theory, and field theory. So, let's get started.

#### 1. What the heck are these things?

To begin, groups, rings and fields are simply algebraic structures, meaning they are structures that do funny stuff with algebra. More specifically, groups, rings and fields are sets. And a set is simply a collection of distinct elements. But here, we're not really concerned with what the elements look like. Rather, we're digging into how the elements interact with each other, regardless of whether it's a number, a matrix, or a bloody sequence.

Now, the formal mathematical definitions.

A group is non-empty set $G$ equipped with a binary operation $\cdot$ on $G$, such that it satifies these conditions:
- **Closure**: If $a, b \in G$, then $a \cdot b \in G$.
- **Associativity**: $(a \cdot b) \cdot c = a \cdot (b \cdot c)$.
- **Identity Element**: There exists $e \in G$ such that for all $a \in G$, $e \cdot a = a \cdot e = a$.
- **Inverse Element**: For each $a \in G$, there exists $b \in G$ such that $a \cdot b = b \cdot a = e$, where $e$ is the identity element.

By the way, these conditions are known in the lingo as axioms. If any set satisfies the axioms of a group, it's a group. 

And to make this simpler to visualize, a group is any set that supports addition and subtraction, similar to the way we normally think about addition and subtraction.

A ring is a non-empty set $R$ equipped with 2 binary operations, $+$ (addition) and $\cdot$ (multiplication), such that it satisfies these axioms:
- **Additive Closure**: If $a, b \in R$, then $a + b \in R$.
- **Additive Associativity**: $(a + b) + c = a + (b + c)$.
- **Additive Commutativity**: $a + b = b + a$.
- **Additive Identity**: There exists an element $0$ in $R$ such that for all $a \in R$, $a + 0 = 0 + a = a$.
- **Additive Inverse**: For each $a \in R$, there exists $-a \in R$ such that $a \cdot (-a) = (-a) \cdot a = 0$.
- **Multiplicative Closure**: If $a, b \in R$, then $a \cdot b \in R$.
- **Multiplicative Associativity**: $(a \cdot b) \cdot c = a \cdot (b \cdot c)$.
- **Multiplicative Identity**: There exists $1 \in R$ such that for all $a \in R$, $1 \cdot a = a \cdot 1 = a$.
- **Left Multiplicative Distributivity**: $a \cdot (b + c) = (a \cdot b) + (a \cdot c)$.
- **Right Multiplicative Distributivity**: $(b + c) \cdot a = (b \cdot a) + (c \cdot a)$.

I'd like to remind you that sometimes math tend to not give a shit about reusing symbols. $0$ and $1$ here do not mean the natural numbers $0$ and $1$. They are simply used as placeholders for elements whose property is described above. Confusing, I know. But you get used to it.

Anyway, once again, to make this simpler to visualize, a ring is any set that supports addition, subtraction, and multiplication.

A field is a set $F$ equipped with 2 binary operations, $+$ (addition) and $\cdot$ (multiplication), such that it satisfies these axioms:
- **Associativity of addition and multiplication**: $a + (b + c) = (a + b) + c$, and $a \cdot (b \cdot c) = (a \cdot b) \cdot c$.
- **Commutativity of addition and multiplication**: $a + b = b + a$, and $a \cdot b = b \cdot a$.
- **Additive and multiplicative identity**: there exist two distinct elements $0$ and $1$ in $F$ such that $a + 0 = a$ and $a \cdot 1 = a$.
- **Additive inverses**: for every $a \in F$, there exists an element in $F$, denoted $−a$, called the additive inverse of $a$, such that $a + (−a) = 0$.
- **Multiplicative inverses**: for every $a \neq 0$ in $F$, there exists an element in $F$, denoted by $a^{-1}$ or $1/a$, called the multiplicative inverse of $a$, such that $a \cdot a^{-1} = 1$.
- **Distributivity of multiplication over addition**: $a \cdot (b + c) = (a \cdot b) + (a \cdot c)$.

Same charade. A field is any set that supports addition, subtraction, multiplication, and division.

#### 2. What the heck do these things even mean?

Well, an astute mind might notice what stands out for each structure. But I don't have an astute mind. So I'm gonna spell it out right here.

A group supports addition and subtraction, that much I've already told you. But also, that's the math way to say it. Intuitively, a group supports combining stuff and undoing stuff. Think about rotations. You rotate a square by 90 degrees clockwise, then you rotate it by 45 degrees clockwise. What you just did is adding up rotations, and the end result is the same as if you have rotated the square once by 135 degrees clockwise. Let's do another one. You rotate a square by 90 degrees clockwise, then you rotate a square by 45 degrees anticlockwise. What you just did is subtracting a rotation from another, and the end result is the same as if you have rotated the square once by 45 degrees clockwise. Essentially, a group represents any system where you can freely combine and reverse actions. And it's not always the case that you can reverse your actions. Breaking a glass cup into pieces is very much **not** reversible. But rotating stuff certainly is.

A ring is the same as group, except now it also supports multiplication. But now, you also ask yourself, "wait what the hell does multiplication represent then?". In the best way possible that I could come up with to answer in one sentence, multiplcation represents composing effects. But that sucks doesn't it. So I'm gonna go with another example. Imagine you have 2 cogwheels, each of different size and whatnot, and they're connected. To describe rotation on a single cogwheel, well you just need a group. But then think about this. Rotating 1 wheel 90 degrees clockwise doesn't necessarily mean the other wheel also rotates 90 degrees clockwise. And dou you even know what really happens when *both* wheels rotate at the same time? 1 plus 1 does not seem to equal 2, does it. That's where multiplication jumps in. It can describe the overall effect of the 2 cogwheels. So, a ring represents any system where two elements, not only can one add up to the other, but also can influence each other at the same time.

And finally, a field is a ring that supports division. Division is the inverse of multiplication. So this tells you that with a field, you can undo the effects of multiplication. Think about it this way. Earlier, I told you that multiplication is like turning 2 cogwheels at the same time with different turning on each wheel and that produces a very different overall effect. Division here means given any overall effect, there exists a way to turn each cogwheel to reverse that overall effect. You're decomposing the overall effect into the individual actions of each cogwheel.

And that's as much visualization as I could give you. Terribly sorry if it sounds bad, because it really does.

#### 3. Why the heck do we even care about these things?

Ah, now we get to the most important question of all. Why give a shit at all?

Well, pure math doesn't stay around because mathematicians are all insane. Well, they kinda are, but that's not why pure math remains relevant since time immemorial until this very present day. Pure math stays around because practical sciences actually rely on it to create shit that have now become inseparable parts of your daily life without you realizing they even exist. 

Group theory describes combining and reversing actions. That allows scientists to encode systems with concise formulas, to reason about their systems logically to ensure that they wouldn't blow up when applied to real life, and to use the tools that pure mathematicians have kindly provided them to manipulate said systems with ease. You know those robots that have become more and more human-like in their actions? That's group theory at work. Rotations and translations (fancy word for moving from location x to location y) are all described in group theory, making it very concise and very accurate to reason about.

Ring theory adds composition of effects to the stack. Now this lets scientists reason even better about systems with combination of effects that does not follow $1 + 1 = 2$. Like group theory, pure mathematicians have kindly provided us with tools to analyze and manipulate said systems. You ever heard the term "rocket science"? Well, in rocket science, element A affects element B, element B affects element C like half the time, and element C somehow affects both element A and element B. To figure out the overall effect, addition ain't gonna cut it. That's why we need ring theory and its tools.

Finally, field theory adds decomposition of effects to the stack. For this one, I'd like to speak about two things. 

First, calculus. Calculus is the study of continuous change, how a system changes over a very small period of time, and how those small changes add up over a large period of time. As long as a system qualifies for field theory, you can apply calculus on that system. And if you wanna know just how applied calculus is, do yourself a favor and search it up. 

Second, cryptography. The idea about cryptography is that you make communication secured, i.e. if Alice sends a message to Bob, Alice and Bob are the only two people in the world who can read the contents of that message (ideally speaking). So, the message has to be encrypted in a way such that no one besides Alice and Bob can decrypt it, and that Alice and Bob must each be able to decrypt it on their own. So, Alice and Bob will each hold a private key, Alice should not know Bob's private key and vice versa. Then, they have a public key that they share, the key used to encrypt the message. So, here's how it goes. Alice sends a message, meesage is encrypted using public key, encrypted message goes to Bob, Bob decrypts the encrypted message using Bob's private key, Bob reads message. And then vice versa. So, the one thing to keep in mind here, is that the private key and the public key must have some relationship. More specifically, if the message is encrypted with this public key, then the private key better be able to decrypt it. There's a forward action and a backward action. So that's where field theory jumps in. Computer scientists use some of the most complex fields ever for cryptography, so complex that no human mind could visualize, and yet they could still say with confidence that their system is bloody secured because field theory offers tools to verify that.

#### 4. What's the lesson?

Well, it's totally understandable if you don't wanna get involved with these stuff. I mean, I only got to know them because my senpai was way too enthusiastic about them. But remember, they stay around for a reason. And a very very good reason at that.

Also, side story. A guy in my club, who is actually taking courses on these stuff at the time of this post, watched an Instagram reel of some other guy making fun of these stuff, and got quite pissed off. Actually, he was indeed pissed off.