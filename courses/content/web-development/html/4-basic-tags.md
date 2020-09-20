---
date: 2017-10-09T15:35:15-04:00
title: "Basic Tags"
seo_title: "Basic Tags | HTML | GOUP"
subheader:
     greeting: HTML - Build a Website
     description: This course covers the basics of building a website using HTML. Work your way through the videos/articles and I'll teach you everything you need to know to create a basic website!
description: This tutorial covers how to use basic tags in HTML.
author: GOUP
image: basic-tags.png
video: YTxrjJS6rpE
url: /web-development/html/basic-tags/
weight: 4
---

In this lesson we'll take a look at some basic HTML tags that you can use to start adding some basic organization and styling to your websites!

To give you a taste of what we're going to be doing I'll show you the final product, an HTML document that uses a variety of tags to format a basic website:

{{< code lang="html" >}}
<html>
     <head>
          <meta charset="UTF-8">
          <meta name="description" content="This is a great website">
          <title>My Website Title</title>
     </head>
     <body>
          <h1>My Website</h1>
          <hr/>
          <p>
               <big>This</big> is <small>my</small> <b><i>paragraph</i></b>
          </p>

          <p>
               10<sup>2</sup>
          </p>
     </body>
</html>
{{< /code >}}

Throughout this lesson we'll walk through each of these unique tags and I'll discuss how to use them. 

{{% spotlight %}}The current version of the HTML language (HTML5) has over 200 built in tags, all of which do different things in the scope of your website. The good news is however that to be productive in HTML you only need to know about 10-15. {{% /spotlight %}}

As a beginner, one of the most important things you can do is get comfortable working with some basic HTML tags. The best way to learn is to play around and build small websites using these a variety of tags. 

## Meta Tags

With that being said let's take a look at some simple tags that you can play around with. First let's check out some cool tags we can put in the head of our website. 

{{< code lang="html" >}}
<html>
     <head>
          <meta charset="UTF-8" />
          <meta name="description" content="This is a great website" />
          <title>My Website Title</title>
     </head>
    <body></body>
</html>
{{< /code >}}

I'll point your attention to the two tags in the head named `<meta .../>`. The first thing you might notice is that theses are non-container tags, they don't have a start and and end tag. 

Meta tags are used in the head of the website to provide meta data to the browser as well as other applications like web scrapers (little bots which index websites). You can use meta tags to add a description, author, date of publication, keywords, etc, to the meta data of your site. 

{{% spotlight %}}In case you're not familiar, the term meta data refers to data _about_ data. So these meta tags are information about our webpage. {{% /spotlight %}}

Above we have two common meta tags, a meta description and a meta charset. You'll notice that we can add information to a tag like so: `name="description"` or `charset="UTF8"`. These little key value pairs are called attributes, and they provide input into an HTML tag with more information about what it's doing. There are hundreds of these attributes, and in the case of the meta tags, they're specifying different pieces of meta information. 

It's usually a good idea to give your website a description, and it helps the browser when you add a charset. 

## Headers

The next type of tag in our final product is a header tag displayed below:

{{< code lang="html" >}}
<h1>My Website</h1>
{{< /code >}}

This tag indicates that this is a header on our website. Essentially it just means that this is a big bolded piece of text that should announce a section of the website. 

Notice the name of the tag `<h1>`. 

In all there are 6 different types of headers we can use `<h1>, <h2>, ... , <h6>`. As the numbers get smaller so does the text that they display. Check out an illustration of different header sizing below:  

{{< article-image src="headers.png" alt="HTML headers h1-h6" >}}

Headers are great for organizing the sections of your websites, and also help let search engines know how the text on your website is structured. Generally when you're using header tags you want to use them sequentially. So structure them just like you would headers in a word document or any formal paper you are writing!

In my personal experience I normally will only go as small as h3, I generally don't have text on my websites that have more than 3 sub sections, but you can go as small as h6. Anytime you need a header, be sure to use one of these. 

## Horizontal Rule & Paragraphs

Now we'll take a look at formatting our pages a little bit. Let's begin by looking at the horizontal rule tag:

{{< code lang="html" >}}
<hr/> 
{{< /code >}}

This is a useful tag which will render a horizontal line across the webpage. Try this one out and take a look at what it does. I generally use these to separate different sections of content, or to provide a nice separator for images. 

In addition to using horizontal rules to separate content, you can also use a tag specifically designed for text which will format it into sections. The paragraph tag will wrap a paragraph of text and automatically space it out from other content on the page. You can create a paragraph like so:

{{< code lang="html" >}}
<p>
  Paragraph 1
</p>

<p>
  Paragraph 2
</p>
{{< /code >}}

Above we have an example of two paragraphs of text stacked on top of each other. If you run this in your browser, you'll see how they get formatted. Paragraph tags are some of the most commonly used tags in all of HTML. In fact, the text you're reading right now is being rendered in a paragraph tag!

Generally only text that is meant to be displayed as a paragraph should go in these tags. If you just have some loose text, or the text for a button or text used as a label, there are other more specialized tags for those circumstances. 

## Text Formatters

Now that we've learned about paragraphs and headers, I'll show you some tags that can be used to format text in common ways. These are all container tags that, like the `<p>...</p>` tag, will surround text that we want formatted. 

Let's modify our paragraphs from above to use some of these formatting tags:

{{< code lang="html" >}}
<p>
  <big>This</big> is <small>my</small> <b><i>paragraph</i></b>
</p>

<p>
  10<sup>2</sup>
</p>
{{< /code >}}

If you haven't already, I would encourage you to copy this into your own webpage and open it in your browser to take a look. I'll also include this html below so you can see how it looks on this webpage:

<hr />
<p>
  <big>This</big> is <small>my</small> <b><i>paragraph</i></b>
</p>

<p>
  10<sup>2</sup>
</p>
<hr />

There's a few tags here for us to talk about. I'll start with `<big>` and `<small>`. These should be fairly obvious, they make the text inside of them either bigger or smaller than normal text would be. These are good for quick size changes, although there are more powerful and specific ways of changing text size on a large scale. These are really useful though in the right context. 

Next we have tags for making text bold and italic. Text surrounded with `<b>` tags will become bold (you can also use `<strong>`). Text surrounded with `<i>` tags will become italicized. You can also nest these together, putting a set of italic tags inside a set of bold tags as I've done above.

Finally at the bottom we have the `<sup>` tag which stands for superscript, this allows you to format exponents and anything else that needs a superscript. 

## Bringing it All Together

So there you have it, a quick explanation of some simple HTML tags which will allow you to start laying out your pages. 

Honestly just with the header and paragraph tags alone you could begin building some awesome websites with great text content. Believe it or not the majority of this webpage is actually just headers and paragraphs (along with some other cools tags we'll see later on).

If you peek back up at the finished program I show you in the beginning of the article you can see how this can all come together to make a webpage. Again I would encourage you to just play around with this. Get a feel for how these tags work and get used to using HTML in general. 