---
title: 'About Compiler Course'
description: 'About Compiler Course'
pubDate: 'July 24 2025'
heroImage: '../../assets/compiler.png'
---

Before you speculate anything, no this is not a tutorial on compilers. There are enough of those on the internet. I ain't gonna teach anything here.

If you're a CS major at the University of Waterloo, you most likely have taken the course CS 241. It's a course that teaches you how a compiler works, by forcing you to build a fully functioning one in the form of assignments. You can use either C++ or Racket to build it. The only thing provided to you is a CFG for WLP4, a subset of the C language. Other than that, you build the damn thing, *from scratch*. That means your own DFA, your own tokenizer, your own parser, your own AST, your own type checker, and of course your own code generator. The only saving grace is that C has no garbage collection, and neither does WLP4. I do not kid you when I say you can never forget a single step in building a compiler after taking this course. Though, I'm not entirely sure if that's a good thing. Maybe it is if you're into a career in compilers.

IF you're a CS major at the University of Waterloo and you're into advanced courses, there's CS 241E (E for enriched). It's the exact same as CS 241, with one big difference. You build a compiler for Scala, the functional programming version of Java. That sucks even more than WLP4 for 3 reasons:

- It's a functional language. Ensuring immutatability is *not* trivial.
- It's an OOP language. Managing objects is even less trivial than the above.
- It has a garbage collector. You either know how to implement it or you take the L.

Also, you use Scala to build a compiler for Scala. Diabolical, I know. You can tell that I only took CS 241 and not the enriched one. And even then I still get haunted by it.

If you're a CS major at the University of South Florida, there's COP 4620/6625. You build a compiler for DJ (short for Diminished Java), a subset of Java. You already knew what Java has, I literally just crashed out right above. However, you build your own CFG. If any of your subsequent components fails to work, that's on you, that means your CFG wasn't good enough. You also work on tokenizer, AST (by reducing the provided parse tree), type checker and code generator. Also, you use C. That sucks royally. My friend took it not so long ago, and there were mixed reactions. On one hand, the assignments gave him a very hard time. On the other hand, he chose to work on the same DJ compiler but with more Java features for his research project.

IF you're a CS major at Ho Chi Minh City University of Technology, there's CO3005. You build a compiler for MiniGo, a subset of Golang. Same deal as DJ, except you use ANTLR4 (and Python as a result) as the framework for the entire compiler. Though, for whatever reason, the damn framework runs on Java, so you need to set up Java as well. And if you're on Windows like most students in Vietnam are, you might or might not have a hard time with that. My friend did fine on the assignments. The exams sent him into oblivion though.

What about you? What was your experience with a compiler course?