---
date: 2017-09-07T20:24:16-04:00
title: "Block Templates"
seo_title: "Block Templates | Hugo | GOUP"
subheader:
     greeting: Hugo - Static Site Generator
     description: This course covers the basics of using Hugo - Static Site Generator. Work your way through the articles and we'll teach you everything you need to know to create a professional and scalable website or blog!
description: This tutorial covers how to use block templates in Hugo -  Static Site Generator.
author: GOUP
image: block-templates.png
video: QVOMCYitLEc
url: /static-site-generators/hugo/block-templates/
weight: 16
---

Block templates give developers a way to supercharge the amount of control they have over templates and layouts. By incorporating block templates into your hugo website design, you’ll seriously increase the scalability and modularity of your site.

Block temples are an advanced type of hugo template that allows you to build high level templates by specifying specific blocks of content which can be implemented by lower level templates. It’s a very powerful feature for building complex layouts and template structures.
## Block Templates in the Real World

The best way to understand block templates is with a real world example. And a good example of block or block templates in the real world is in cars. Imagine we were trying to define a basic layout for building a car. We don’t wanna get too specific here. We might say you need a chassis, a body, 4 wheels and an engine (obviously this is a simple car).

This is a high level layout of a car. We can look at each of those component as blocks. The engine is a block, the body is a block, the chassis is a block, etc. These are all components that NEED to be in a car, but for the purpose of our high level layout we don’t want to specify what type of body, or what style of chassis or what size  wheels. We’ll instead leave that to the car manufactures.

When ford comes in and they want to make a truck, they’ll take that high level layout of the car and implement each one of the blocks. They might use a V8 engine, a square shaped body and 17” wheels. Similarly tesla might come in and use an electric based engine, a rounded body and 15” wheels.

{{< article-image src="block-template-car-example.png" alt="All cars implement the same series of blocks, just like hugo block templates" >}}

When we define the high level layout we don’t care what type of attribute is put in there, in other words we don’t care what size the wheels are or what kind of engine the car has, we’re just saying that those things needs to be present. It’s up to the car manufactures to implement those things. So it is with block templates. The base template is like the high level layout of the car, and lower level templates implement those blocks.

Hugo allows us to define very general blocks in a high level template. These are generally website components like a header, a body, a footer, maybe a navigation bar. And just like with the car's, lower level templates will implement each of those blocks in their own way.
## Using Block Templates
Block template are defined inside of hugo layouts and therefore live inside the Layout’s folder.
### Recognize the base template
The first thing we have to understand is the concept of a base template. A base template is any template that other templates use as a template. I’ll say that again: A base template is a template that other templates inherit from. Blocks can be used by base templates to make them more powerful.

The highest level template in Hugo is the baseof template in the \_default sub folder.

This is the template that the list, single and home templates will inherit from.
### Defining blocks in the base template
A block is essentially a piece of content that may differ with each page of the website (it won’t necessarily be different for each page but it CAN). Unlike a partial, a block doesn’t have one specific layout or format. Rather various child layouts can implement their own versions of a block.

For example, a base template might define a main block. This would be used to encompass the main part of the webpage like an article or a blog post. This main might look and feel different if you’re on a list page or a single page. Instead of just using one partial each child template can implement a different main block which will get inserted into the base template.

Defining a block is fairly straightforward. Image we were building a website using the following baseof template:

{{< code lang="html" >}}
<html>
<head>
     <meta charset="UTF-8">
     <title>{{ block "title" . }}
    	  {{ end }}
</title>
</head>
<body>
{{ block "main" . }}
      <!-- The part of the page that will to differ between templates -->
 {{ end }}
</body>
</html>
{{< /code >}}

In the example above we’ve defined two content blocks. The first is a title. Perhaps we want the title to look differently between layouts. We also defined a main block. This block will be overridden by each template depending on how they want to structure and style it.
### Implementing blocks in the child template
Now that we’ve create blocks in our baseof template, we can implement those blocks in lower level templates like list or single.

Here we are defining a single template that implements the title and main blocks.

{{< code lang="html" >}}
{{ define "title" }}
  {{ .Title }} | Mike’s Travel Blog
{{ end }}
{{ define "main" }}
  <article>
  	<h1>{{ .Title }}</h1>
   	{{ .Content }}
    </article>
  {{ end }}
{{ end }}
{{< /code >}}

This layout implements the main block and the title block. Notice that we can define a title the same way it was defined in the baseof template.