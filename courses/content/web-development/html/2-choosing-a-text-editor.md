---
date: 2017-10-09T15:35:15-04:00
title: "Choosing A Text Editor"
seo_title: "Choosing A Text Editor | HTML | GOUP"
subheader:
     greeting: HTML - Build a Website
     description: This course covers the basics of building a website using HTML. Work your way through the videos/articles and I'll teach you everything you need to know to create a basic website!
description: This tutorial covers how to use choosing a text editor in HTML.
author: GOUP
image: choosing-a-text-editor.png
video: uGGTXUsk7EM
url: /web-development/html/choosing-a-text-editor/
weight: 2
---

As we begin our journey to becoming HTML masters, we'll start with a simple discussion about text editors.

If you're new to programming, this concept might sound a bit foreign. Normally when people think of text editors they think of Microsoft Word, Google Docs, or even just the basic notepad editor that came with their operating system.

Popular text editors like Microsoft Word are what we would refer to as a word processors. They're software applications which are specifically designed to write reports, academic papers, formal documents, and can be used for most school or work related things.

But when we're writing HTML code, believe it or not a word processor is generally not going to work very well. Word processors are designed for documents which are meant to be read by humans. But when we're writing HTML we're writing something that is going to be read by a web browser.

{{% spotlight %}}Almost no developers use traditional word processors like the one's you're most likely used to using. Instead specialized text editors have been built to suit the specific needs of web developers.{{% /spotlight %}}

A lot of the syntax, formatting and special characters we're going to be using will be foreign for programs like Microsoft Word or Google Docs. Therefore, if we want to make our lives easier, it will be better to use a text editor which is more specifically designed for writing HTML.

## IDE

An IDE, which stands for Integrated Development Environment, is a specialized text editor designed to be used for writing HTML (as well as other programming languages).

IDEs have all sorts of features and functions which makes it really easy to write code cleaner and better. While you technically can use any text editor that can save a file in a `.HTML` format, I'm going to strongly recommend that you consider downloading one of these IDEs.

Since you're most likely not super familiar with what an IDE is and why it might be useful, allow me to explain some of the cool features that are generally included in them.

### Syntax Highlighting

Probably one of the most useful features is syntax highlighting. When we're writing HTML, we're going to be dealing with all sorts of unique and descriptive syntax. One of the fundamental entities of an HTML document are tags, looking something like this `<p></p>`. These tags, as well as all sorts of other special text that will go in and around them make up the structure and format of an HTML document.

When writing and working with large HTML documents, it's often a lot easier to read and understand what's going on when these things are colored.

To demonstrate, let's take a look at the same HTML program but with and without syntax highlighting:


{{< code lang="text" >}}
<head>
 <meta charset="UTF-8">
 <meta name="description" content="This is a great website">
 <title>My Website Title</title>
</head>
{{< /code >}}

{{< code lang="html" >}}
<head>
 <meta charset="UTF-8">
 <meta name="description" content="This is a great website">
 <title>My Website Title</title>
</head>
{{< /code >}}

As you can see, even without knowing HTML, the text below is a lot easier to look at. A good IDE will color the text like this automatically, and it's ideal for beginners because everything becomes so much more visual!

### Linting

Linting is a common word use in software development which essentially means checking your program for correctness. HTML uses a lot of complex syntax, and if that syntax isn't organized correctly the website won't render correctly in the browser.

{{% spotlight %}}
Most IDEs will automatically look through your program and check to make sure everything is organized right, and you're not making any obvious or small mistakes.
{{% /spotlight %}}

As a beginner, one of the biggest learning curves for HTML will be getting used to the syntax. Therefore an IDE with linting and autocomplete features can be a great way to lean how to do things the right way, and not develop bad habits.

### File Explorers

Any time you're working with HTML, specifically if you're building a website with multiple pages, it will be useful to keep all of your files organized. All modern IDEs will provide some sort of a file explorer to help you do exactly that.

{{< article-image src="file-explorer.png" >}}

Here's a view of my file explorer as I write this article.

You can see that I have all of my files, along with their corresponding folder structures laid out nicely. I know which file I'm currently editing, and I can add/delete/rename files right from the IDE.

It might not be super obvious why this is useful when you just have your normal file explorer for your operating system. But trust me, the more code you write, the more time you'll spend jumping between one file and another. File explorers like this are a must!

## Popular IDEs

So hopefully I've convinced you why using an IDE is a good idea when learning to write HTML. Now I'll give you a few suggestions based on my experience using a bunch of different ones.

Keep in mind that this is by no means an exhaustive list, and ultimately the right IDE is going to be the one you enjoy using. I would try a couple of these out and maybe do some research of your own!

Here's some recommendations in no particular order

1. {{% link href="https://code.visualstudio.com/" %}}Visual Studio Code (my personal choice){{% /link %}}
2. {{% link href="https://atom.io/" %}}Atom{{% /link %}}
3. {{% link href="https://www.sublimetext.com/" %}}Sublime{{% /link %}}
3. {{% link href="https://www.jetbrains.com/webstorm/" %}}Web Storm{{% /link %}}

If you don't know which to pick, I'll recommend Visual Studio Code, but again, you can't go wrong with any of them!


