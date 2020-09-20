---
date: 2017-09-07T20:24:18-04:00
title: "Shortcode Templates"
seo_title: "Shortcode Templates | Hugo | GOUP"
subheader:
     greeting: Hugo - Static Site Generator
     description: This course covers the basics of using Hugo - Static Site Generator. Work your way through the articles and we'll teach you everything you need to know to create a professional and scalable website or blog!
description: This tutorial covers how to use shortcode templates in Hugo -  Static Site Generator.
author: GOUP
image: shortcode-templates.png
video: Eu4zSaKOY4A
url: /static-site-generators/hugo/shortcode-templates/
weight: 22
---
Often times when you’re writing content for your blog or website, there will be certain components that you are using multiple times across all your posts. Maybe you like to surround all your images with a stylish CSS border, or you embed youtube videos into your posts. These components all use the same code and logic. Instead of having to copy and paste this code whenever we want to include one of these component, it would be easier to just put the code in one central place and have hugo insert it into our pages when it builds our site.

We do this with partial templates, but you can’t use partial templates in content files. That’s where shortcodes come in.

Shortcodes are snippets of code that can be inserted into hugo content pages. They are similar to partial templates, but unlike partial templates they can be used along side markup and html in content pages. Shortcode allow you to abstract certain similar components of your content files into reusable snippets of code.
## Creating a shortcode
Shortcodes are technically layouts, so they live in a subfolder inside the Layouts folder called shortcodes. Creating a shortcode one is a lot like creating a partial template. You create a file with the name you want to give to the shortcode and write any html you want inside.

Image we are building a travel blog site. This blog site is going to have a lot of images. Let’s say we want to surround each image with a border and place a caption box below it. This will require a few lines of code. Instead of having to copy this code hundreds of time throughout our content pages we can just make a shortcode for it called image.html

There are two types of shortcodes we can create, a single tag shortcode and a start/end tag shortcode. It's important to create the right one, otherwise you would overly complicate your content files.
### Single tag Shortcodes
The first type of shortcode is a single tag. These are shortcodes that only have one tag and therefore won’t be wrapping any content in our HTML or markdown content. Single tag templates are perfect for media elements like videos or images. This is the type of tag we’ll use with our image.html shortcode file.

{{< code >}}
<div style=”border: 1px solid black” >
<img src=”{{ .Get `image-src`}}” />
</div>
<p>{{ .Get “caption” }}</p>
{{< /code >}}

Above is the contents of the image.html file. This will wrap an image in a purple border and display a caption below. Notice in the image source we’re calling a function Get with a name parameter. Like Partial templates, shortcodes can accept parameters from. In this case we are passing an image source and down below a caption into the shortcode. By letting content pages pass parameters into them, shortcodes become a very powerful ally to a hugo developer.

This shortcode will only require one tag to be included in the content page (see below). We only need one tag because this image isn’t incorporating any of the actual content from the page into it. It’s just displaying an image.
### Start and End Tag
The second type of shortcode has a starting tag and an ending tag, similar to a lot of html tags (ex <p>). These types of shortcodes can wrap page content and even other shortcodes inside of them.

In addition to our image.html shortcode, image we wanted to create another shortcode that makes the text inside of it colored (this is a simple example, but it will illustrate the concepts). We’ll take the code to do this a put it in a new file called colored-text.html

{{< code >}}
<span style=”color: {{ .Get `text-color` }}”>
	{{ .Inner }}
</span>
{{< /code >}}

The code above uses a span which set the text color to the value of  a parameter that’s passed in. Notice inside the span the {{ .Inner }} tag, .Inner store all of the content inside the two tags. You can wrap colored-text tags around text in your content files and it will color that text with the color you pass into it.

## Using a Shortcodes
Once you create your shortcode you can instantiate it in your markdown or html content file. In our case we’ll implement our image.html and colored-text.html tags
