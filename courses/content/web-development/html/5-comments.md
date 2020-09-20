---
date: 2017-10-09T15:35:15-04:00
title: "Comments"
seo_title: "Comments | HTML | GOUP"
subheader:
     greeting: HTML - Build a Website
     description: This course covers the basics of building a website using HTML. Work your way through the videos/articles and I'll teach you everything you need to know to create a basic website!
description: This tutorial covers how to use comments in HTML.
author: GOUP
image: comments.png
video: OGkEwGNI9O8
url: /web-development/html/comments/
weight: 5
---


As you continue to sharpen your HTML skills and get more and more comfortable building websites, you'll eventually become really good at reading code. Just by looking at a line or two you'll be able to tell what the website will look like and what content it will display. 

But in a lot of cases, merely relying on the HTML tags to properly explain or document themselves can be ineffective, and often times in the course of writing a webpage you'll want to mark things down or explain why you're doing things a certain way. This is where comments can be your best friend. 

A comment is basically a piece of HTML which the browser will ignore. Unlike all of the really cool and interesting tags we've learned so far, comment's actually don't do anything... Well at least not as far as the browser is concerned. 

Comments are generally used to make small notes to yourself or other developers, explain particularly complex collections of tags, or even temporarily remove parts of the code altogether. 

You can write a comment like so

{{< code lang="html" >}}
<!--
this is a comment

it can be multi-line
-->
{{< /code >}}

A comment like the one above can be a really good tool for helping to document or notate things in your code. 

Notice how it has two distinct sequences of character at it's start and end: `<!--` and `-->`. These act very similarly to opening and closing tags for HTML container tags. Anything in between these two comment tags is going to be ignored by the browser. 


## Using comments wisely

There are no hard set rules for when you should and shouldn’t use comments when building webpages. In a lot of cases it’s just personal preference. 

I will mention one thing however, it’s usually a bad idea to rely on comments to make your webpages understandable. If you’re looking at a line of HTML code, and can’t tell what it’s doing without reading a corresponding comment, then, except for in rare cases, that line of HTML can probably be re-written. 

For myself personally I really like using comments to _comment out_ parts of my code when I’m writing it. As you write more and more complex webpages, a lot of times you’ll run into problems where the browser isn't rendering something correctly. In cases like this, I will generally _comment out_, that is to say, surround with comments, the code I think is causing the problem, and if the website goes back to normal then I’ve found the culprit. 

## Wrapping Up

At the end of the day comments are a great tool which can help with documenting code and giving you an easy way to quickly remove code without actually deleting it. 

As we go forward in the course I would encourage you to start using comments to enhance your code and look for ways they can make your life easier as a web developer!
