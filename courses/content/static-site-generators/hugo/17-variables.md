---
date: 2017-09-07T20:24:16-04:00
title: "Variables"
seo_title: "Variables | Hugo | GOUP"
subheader:
     greeting: Hugo - Static Site Generator
     description: This course covers the basics of using Hugo - Static Site Generator. Work your way through the articles and we'll teach you everything you need to know to create a professional and scalable website or blog!
description: This tutorial covers how to use variables in Hugo -  Static Site Generator.
author: GOUP
image: variables.png
video: ZyXlpKkgbFc
url: /static-site-generators/hugo/variables/
weight: 17
---

Hugo is written in the Go programming language. The go language includes a small library called go HTML template. Go HTML template allows you to use logic inside your html templates to make more complex layouts and pages. It’s essentially like a mini programming language that can be used in HTML and markdown files. Hugo leverages go html templates to allow logic to be used inside templates.

Image of the go programming language logo with the hugo logo

Using go html templates and variables will allows you to infuse your hugo site will all sorts of logic.
## Using Go Template Variables
Image of the layouts folder.

Go template variables can be used inside hugo layouts. That means any files that live inside the templates folder. It’s important to note that content files (files in the Content folder) will not be able to use any of the Go HTML logic.
## Basic syntax
The basic syntax of go html template looks like this

{{< code >}}
{{ args }}
{{< /code >}}

Notice that any go html template command must be placed inside two curly brackets. You can put many different things inside the brackets, but for the purposes of this lesson we’ll be working with variables.

## Variables
Variables are storage containers with descriptive names used to store data values. When you put a variable inside the curly brackets, the value stored in that variable will be inserted into the page. The easiest example of accessing a variable using go html template is to access page front matter.

{{< code >}}
{{ .Title }} // prints the page title
{{ .Date }} // prints the date of creation
{{ .Kind }} // prints the kind of page
{{< /code >}}

 When you create a new hugo project and new hugo content pages, a bunch of variables are automatically created which you can access and use in go html templates. In a hugo layout you automatically have access to all of these predefined variables and can access them using the curly bracket notation.

 **Data Types** - Go Html templates allow the use of strings, numbers, booleans and arrays. You can also create objects using dictionaries. With these core data types you have everything you need to represent all the information about your site.

**Page** - All hugo content pages have a series of variables associated to them. These variables can be accessed using Go Html templates. For a full listing of page parameters check out the official Hugo docs: https://gohugo.io/variables/page/

**Params** - The params are variables that are contained in the front matter of a page. These variables, unlike the page one’s are created and populated by the user. You can access any page params by name using .Params.param-name

**Site** - Hugo stores several site-level variables. Site level variables have to do with the entire website, not just a specific page. These are useful in page layouts and partials. For a full listing of site parameters check out the official Hugo docs: https://gohugo.io/variables/site/

**File** - variables relate to the physical file and the file system where all the files are stored. You can get things like the file name, path and extension.  For a full listing of site parameters check out the official Hugo docs: https://gohugo.io/variables/files/

**Custom variables  $** - Hugo also let’s you create your own custom variables. Here you can store values to use in your layouts. To create a custom variable use the following notation:


{{< code >}}
{{ $myVar := value }} // assigns value to $myVar
{{ $myVar }} // prints $myVar
{{< /code >}}
