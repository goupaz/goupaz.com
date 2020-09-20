---
date: 2017-10-09T15:35:15-04:00
title: "Creating An Html File"
seo_title: "Creating An Html File | HTML | GOUP"
subheader:
     greeting: HTML - Build a Website
     description: This course covers the basics of building a website using HTML. Work your way through the videos/articles and I'll teach you everything you need to know to create a basic website!
description: This tutorial covers how to use creating an html file in HTML.
author: GOUP
image: creating-an-html-file.png
video: zKRHZ092ICM
url: /web-development/html/creating-an-html-file/
weight: 3
---

HTML is a markup language which browsers use to determine how a webpage should be displayed. By learning HTML, you'll be able to write code which describes the look and feel of a website you're trying to build. 

All of this HTML code is going to be contained inside a `.html` file. This is any file which has a `.html` extension. Most text editors you're used to using will most likely not be able to save files into the `.html` format. Therefore the first thing I would recommend doing is downloading an IDE that supports HTML. See the previous lesson for a full introduction on how to do this!

Once you're set up with your IDE we can start creating our first HTML file!

## Your First Webpage

When we're working in HTML we're creating web-pages. HTML documents are meant to be read and processed by a web browser. In order to create a website that it organized properly, we'll want to make sure that all of the HTML files we create are inside the same folder.

Let's begin by creating an empty folder for all of our HTML files going forward in the course. You can call it whatever you want, most people will name it the same as their website. 

Now that we have an empty folder we can create our HTML file. If your IDE supports it, I would recommend adding this new folder to the IDE's file explorer or workspace. This will make it easier to see what's going on without having to leave the editor. 

### Creating index.html

Inside the new folder create a file named `index.html`. `index.html` is a special file name which indicates that this is the default webpage for this directory of our website. 

Just like most people organize their files into folders and sub-folders, websites are also organized in this same way. When your website is run by the browser it will use the directory of the HTML file to determine the web page's URL. This URL is either relative to your local file system, or to your hosted website. 

{{% spotlight %}}In this case, all you need to know is that when we name the HTML file `index.html`, and it's at the root directory of our website, the browser will think that it's the homepage of our site!{{% /spotlight %}}

Now that we have our file created, let's add some text in it and test it out on the browser. Inside `index.html` type `Hello World`. 

{{< code lang="html" >}}
Hello World
{{< /code >}}

This is the most basic form a website can take, just some plain text written out. 

Now find `index.html` in your file system and open it with your browser. There should be an option to do this, and usually by default .html files will open in your browser if you double click them.

Whe the page loads on the browser it should say `Hello World`!

{{< article-image src="hello-world.png" alt="webpage with the words 'Hello World'" >}}

Believe it or not you've just created your first website. It's really basic and only has a few words on it, but it's still a website and you've made your first step towards becoming a web developer.

### Tags

While our current website is impressive in it's own right, it's not technically a properly structured HTML document. HTML documents are all required to be structured in a certain way to ensure that they will display correctly in all different versions of different browsers. 

Our HTML document, with only plain text, will display fine, but if we try to do anything more complex we run the risk of some older browsers not understanding the page. 

In order to make this a proper HTML document let's format it correctly. 

{{< code lang="html" >}}
<!DOCTYPE html>
<html>
     <head>
          <title>My Website Title</title>
     </head>
     <body>
          Hello World
     </body>
</html>
{{< /code >}}

Take a look at the updated HTML document above. This is now structured correctly, and should be understandable by every browser. 

Now, your first thought is most likely _What are those weird < /> things_. It's a good thought, if this is your first time seeing HTML code then you'll be wondering what those are. 

Those symbols with the `<` and `>` signs are called tags. HTML tags are used to structure and format the HTML document, and can be used to describe the layout of a website. 

All of the content in our webpage is going to be contained in these tags. There are hundreds of HTML tags, although luckily most of the time you can get by with only knowing 10-15 of them. All tags have names associated to them, and depending on what you're trying to display on the webpage you'll use a different tag. 

### Container vs Non-Container Tags

There are two basic types of tags in HTML, container tags and non-container tags. 

Container Tags are comprised of two tags that go together, an opening and a closing tag. In the example above we have a bunch of container tags. Take a look at the `<html> ... </html>` tags and you'll get an idea of how these work. 

All tags are comprised of a `<...>`, with the name of the tag being printed in the middle. End tags are special because they contain a `/` right before the name of the tag (as you can see in `</html>`). 

Container tags encapsulate other tags and plain text. Container tags are also nest-able, meaning you could have a container tag within another container tag. This nesting gives way to parent child relationships. Generally an html container tag can have a _parent_ tag and also _child_ tags. 

Next are non-container tags (I sometimes call these _single_ tags). These are tags which don't have a starting and an ending component, instead they're just a single `<.../>` structure. These tags will have a forward slash right next to the greater-than sign on the right. 

In the code above we don't have any non-container tags (they're more rare), but we'll look at a bunch of them throughout the course. 

## Learning the Code

Now that we know some more about tags, let's break down that html program above and see what it's doing. We'll start with the first line:

{{< code lang="html" >}}
<!DOCTYPE html>
{{< /code >}}

This is the DOCTYPE declaration. It's actually not technically an HTML tag, rather it's a declaration which tells the web browser what type of file this is. The browser will see this and know to treat the file as HTML document. 

After the doctype declaration we can place all of our HTML:

{{< code lang="html" >}}
<html>
     <head>
          <title>My Website Title</title>
     </head>
     <body>
          Hello World
     </body>
</html>
{{< /code >}}

This is the most basic structure we can have in HTML. All HTML documents are encapsulate by a set of `<html></html>` tags. These act as a wrapper for the entire document. 

Inside these `html` tags we have two distinct set's of container tags. The `<head></head>` tags and the `<body></body>` tags. 

The head tags are basically the _settings_ for your HTML document. In here we can place all sorts of special tags which will help to configure and provide meta-data about the html document itself. Above we have some `<title></title>` tags. These specify the name of the webpage, and whatever is in here will show up in the tab of the page. 

Nothing that you put in the head tags will show up in the actual html document. Like I said, this section is mainly for the browser and for things like search engines to use to learn about your html file. 

Below the head tags we have the body tags. It's inside of these tags that we'll place all of the content that is meant to appear on the web-page. 

Right now all we have is our _Hello World_ text, but eventually we'll learn some more tags which will allow us to have more control over how this content is arranged and displayed on the page. 

## Making Changes

Now that you have `index.html` open on your browser, whenever you want to change something you can simply make the change in your text editor, then refresh the webpage on the browser. 

A lot of times developers will split their screen between their text editor and the browser so they don't have to be constantly switching between screens. As you start writing more HTML you'll find what works for you, but in the mean time it's worth trying!
