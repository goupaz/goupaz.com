---
date: 2017-09-07T20:24:12-04:00
title: "Front Matter"
seo_title: "Front Matter | Hugo | GOUP"
subheader:
     greeting: Hugo - Static Site Generator
     description: This course covers the basics of using Hugo - Static Site Generator. Work your way through the articles and we'll teach you everything you need to know to create a professional and scalable website or blog!
description: This tutorial covers how to use front matter in Hugo -  Static Site Generator.
author: GOUP
image: front-matter.png
video: Yh2xKRJGff4
url: /static-site-generators/hugo/front-matter/
weight: 7
---

Hugo makes it really easy to write static content for the web. But not only is hugo easy to use, it’s also super powerful. In this lesson we’re gonna look at one of the most powerful tools Hugo has in it’s arsenal, front matter.
## Front matter
When you create a new content page using the hugo new filename command, hugo automatically creates a new file and fills it with some default information.

This information is actually TOML (or YAML, JSON) code that hugo calls front matter.

Front matter is a list of information that describes attributes about a content page. This could be information like the title of the page, the date that the page was created, the author of the page, or a list of topics the page covers.  Front matter allows you to provide this information about each page and use it in layouts and other site elements.

Front matter is what we call meta-data, it’s data about data. When you think about it, human beings have their own type of front matter, things like name, age, height weight social security number, all describe us. In a way all of these things are our front matter.

But for a hugo content page, front matters let's us give each individual page certain attributes that we can use elsewhere (like in layouts) to make the website more complex.
### YAML, TOML, JSON

Front matter can be encoded using three different markup languages, TOML, YAML and JSON. All of these languages are similar and very easy to learn, but for Hugo the default language is TOML, which we recommend.

{{< article-image src="toml-yaml-json.png" alt="TOML, YAML & JSON can all be used to encode front matter in hugo" >}}

YAML, TOML and JSON are all just different ways of doing the same things. These languages all allow the user to represent key value pairings of data. If you’re familiar with programming, they are essentially ways of defining objects.

We use these languages to encode our front matter, because front matter is just a collection of key value pairs about each page.
### Accessing front matter params
You can store all types of attributes in front matter, but they don't do any good if they’re just sitting there. Non-content pages like layouts can actually access these attributes or parameters and use them. For example you could put the title of the page in the HTML title tag in a layout.  

{{< code lang="html" >}}
<html>
<head>
     <meta charset="UTF-8">
     <title>{{ .Params.Title }}</title>
</head>
<body>
     <p>Written By : {{ .Params.Author }}</p>
     {{ .Content }}
</body>
</html>
{{< /code >}}

Notice in the code above that we’re inserting the title parameter into the HTML title tags and the Author parameter into the Written By paragraph. To access page front matter you open and close two sets of curly braces, and access the variable. In this case we’re using .Params.Title and .Params.Author to access this data. .Params gives you access to all parameters in the front matter, and you can specify which one you want by using it’s name.

You can access these front matter parameters in any site layouts or partials. If used correctly they can be really useful in trying to organize and structure your content.