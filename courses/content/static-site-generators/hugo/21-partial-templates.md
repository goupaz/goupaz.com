---
date: 2017-09-07T20:24:18-04:00
title: "Partial Templates"
seo_title: "Partial Templates | Hugo | GOUP"
subheader:
     greeting: Hugo - Static Site Generator
     description: This course covers the basics of using Hugo - Static Site Generator. Work your way through the articles and we'll teach you everything you need to know to create a professional and scalable website or blog!
description: This tutorial covers how to use partial templates in Hugo -  Static Site Generator.
author: GOUP
image: partial-templates.png
video: pjS4pOLyB7c
url: /static-site-generators/hugo/partial-templates/
weight: 21
---

One of the most important factors in building any website is scalability. If your website can’t scale to accommodate hundreds or thousands of pages then it will eventually fail. Modularity is the answer to building a site that scales well and hugo’s answer to modularity is partial templates.
## Modularity
Modularity is a concept which relates to breaking your website into a series of parts.

For example on a normal website you have three main sections:

Header
Main body or article.
Footer

In this case we’ve broken the website into three parts. But we could break those individual parts down future.
Header
     Site logo
     Navigation Links
Main body or article.
     Table of Contents
     Page number
Footer
     Social Media Links
     Site Links

This is an example of modularity. We’re taking an entity, in this case our website, and breaking it down into smaller, more manageable parts.  Modularity is a staple of good website design, and good software design in general.

{{< article-image src="partial-templates-modularization.png" alt="Breaking a one hundred dollar bill into five twenties is a good example of modularization." >}}


Another good example for modularity is money. Imagine you had an $100 bill. All of that money is stored in that one bill. The value of $100 is all contained in that single bill. Well this is kind of a bad design. $100 bills are notoriously inconvenient because we generally buy things in our everyday lives that cost a lot less than that. We could say that the $100 bill is not very modular.

But imagine if we broke that $100 bill into 5 $20s. Suddenly we have a more modular set of bills. Those $20 will be more convenient to spend and manage, and all around better for us than that single $100 bill.
## Partial templates
Partial templates allow you to introduce modularity into your website. They let you break your website down into individual components and then insert those components into layouts to create the site.  

Creating partial templates is like splitting that $100 bill into $20s. It separates the website into smaller parts making it easier to manage. We can now tweak and change individual parts of the website without having to change or affect everything else. This is good design.

Working with partial templates is a lot like playing with lego’s, except in this case not only are we putting the lego’s together, we’re building the pieces themselves.
### Creating partials folder
To start using partials on our website we first need to create a folder to put them in. Partials are actually a type of layout, so they have to live inside the Layout’s folder. Inside the Layout’s folder create a new folder called partials. This is where all of our partial templates will live.

A good first step when creating partials is to think of what parts of your website can be turned into partials. Ask the question, what components of my website are used in a lot of places and on a lot of pages?.

Some obvious candidates for partial templates are the header and footer of your website, navigation menus, breadcrumbs, or maybe an email signup form. Anything can become a partial, but it’s important that you maintain a healthy level of modularity. In other words you don’t want to create too little or too many partials.
### Creating a partial
Creating a partial is easy. A partial is basically just an html file that contains the code for a specific component on the website. Partials are great because you can write a partial once and use it on any number of layouts. Then when you decide to update the partials code, it will automatically be updated on each layout.

In the code below we’ve designed a partial to act as the header of our example travel blog.

{{< code lang="html" >}}
     <header>
          <h1>Mike's Travel Blog</h1>
          <hr>
     </header>
{{< /code >}}

This header code can now be included in a layout using a simple command.
### Including partials in a template
To include a partial in a content layout, use the following hugo command.

{{< code >}}
{{ include “partial-name.html” }}
{{< /code >}}

This command will tell hugo to go to the partials folder and find the file inside the quotes. Then the code from that partial will be included in the layout when the website is built by Hugo.
#### Accessing Front Matter in Partials
In Hugo you can define variables for your content pages in the form or front matter. You can then access those front matter parameters inside layouts in the layout’s folder. But you can also access those front matter parameters in your partials.

If you want to use front matter parameters or other variables in a partial you have to pass them into the partial. Basically you’re giving the partial information that it can use.

In a hugo layout we can access the front matter page parameters using a dot (.) with Params after it. This dot represents the scope of all values associated with the given page. Params represents the front matter of the page. In order to access the front matter parameters in our partials we can simply pass in the scope of the page (represented by the dot) like this.

{{< code lang="html" >}}
{{ include “partial-name.html” . }}
{{< /code >}}

Once we do that we can then access page parameters inside our partial. Taking the header partial used above we could add in certain elements. Like the title of the current blog post and the author.

{{< code lang="html" >}}
   <header>
          <h1>Mike's Travel Blog</h1>
          <h2> {{ .Title }} </h2>
          <hr>
	Written By : {{ .Params.author }}
   </header>
{{< /code >}}

### Passing dict’s into partials

Aside from passing page scope into a partial you can also pass custom values. An easy way to do this is by creating and passing in a dict. Dict is short for dictionary and contains a series of key value pairs.

Dictionaries are a lot like their real world equivalent. A Dictionary store a series of key value pairs. In a physical dictionary book we store words as the keys and definitions as the values.

Imagine we were creating the header from the example above and we wanted to pass in a custom CSS color into the partial. The code for the header might look like this:

{{< code lang="html" >}}
   <header style=”background-color: {{ .color }}”>
          <h1>Mike's Travel Blog</h1>
          <hr>
     </header>
{{< /code >}}

Notice we’re accessing a variable called .color inside the style tags of our header. We can actually pass a color into the partial when we include it in our layout.

{{< code >}}
{{ partial “header.html” (dict “color” “blue” )}}
{{< /code >}}

In the code above, we’re including the partial and passing in a dict. The dict is made up of a series of key value pairs, in this case we have a key called color and a value of blue. You can add as many key/value pairs to a dict as you want.
## Wrapping it Up
Partials are an extremely useful tool when making complex hugo sites. They are built with modularity in mind.
