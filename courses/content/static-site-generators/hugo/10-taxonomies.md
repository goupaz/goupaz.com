---
date: 2017-09-07T20:24:13-04:00
title: "Taxonomies"
seo_title: "Taxonomies | Hugo | GOUP"
subheader:
     greeting: Hugo - Static Site Generator
     description: This course covers the basics of using Hugo - Static Site Generator. Work your way through the articles and we'll teach you everything you need to know to create a professional and scalable website or blog!
description: This tutorial covers how to use taxonomies in Hugo -  Static Site Generator.
author: GOUP
image: taxonomies.png
video: pCPCQgqC8RA
url: /static-site-generators/hugo/taxonomies/
weight: 10
---

Taxonomies are hugo’s way of letting users group content together. Taxonomies allow users to classify their content, and represent relationships in a variety of ways.

To really wrap your head around what taxonomies are and what they do, it will be helpful to look at a real world example. A simple example of a taxonomy in real life is music genres. Throughout the ages music has been classified into various groups. We say some songs are rock, others are pop, country, or classical. There are hundreds of genres and for the most part, every song can be placed into one or more.

Taxonomies are also used to classify living things. Take human beings for example, we are classified as homo sapiens and also as mammals. These are two groups that help to identify us in the larger spectrum of life.

When you’re building a website or blog that has a lot of content, it can be useful to group and organize that content into taxonomies. Hugo recognizes the need for taxonomies and has taken great efforts to integrate taxonomies into its framework.
## Defining taxonomies
Hugo comes with two taxonomies automatically built in, tags and categories. Theses are two of the most common taxonomies for blogs and websites. Generally you could tag your content with taxonomy keywords, this can aid in searching and filtering. You can also categorize your content into various groups. This makes it easier for users to find what they’re looking for.

With these two taxonomies you can build a seriously awesome and scalable website. But Hugo also gives you the ability to create your own taxonomies. This is a powerful feature and lets developers supercharge the organization on their websites.

To create a custom taxonomy we have to go into the config.toml file. Taxonomies are site wide entities, and they play an important role in how hugo manages your content. Therefore when we make a new one, we need to let Hugo know inside the config file. Be careful when working inside this file as it’s very important, you don’t want to mess anything up in the config file, it could be bad for you website.

Once inside the config file we need to add a couple lines to the bottom. For the purposes of this lesson, let’s say we’re creating a travel blog with blog pages highlighting all of the countries we visit. One useful taxonomy for a travel blog might be language. For each country’s blog page we could indicate the languages spoken in that country using a taxonomy. Then, if we ever wanted to filter by countries who spoke, for example, spanish, we could easily do that.

{{< code >}}
[taxonomies]
  tag = "tags"
  category = "categories"
  languages = "languages"
{{< /code >}}

Add the TOML code above to the bottom of your config file. It’s important that, in addition to adding the new taxonomy languages, you also add tags and categories (if you want to keep using them). Whenever you want to add a new taxonomy, it can be placed inside the config file.

Generally when you modify the config file you have to restart your hugo site, so if you’re running hugo server, terminate it and restart for the changes to take effect.
## Using Taxonomies With Content
Values can be assigned to taxonomies in the front matter of a page. Once you give the specific taxonomy a value, hugo automatically knows what to do with it and will generate pages listing all of the taxonomies, their terms and the content attached to the taxonomies.

Taxonomy groupings are composed of three attributes. The taxonomy itself, which is the category that is being used to classify content, the term which is the key within the taxonomy and the value which is the content page assigned to the term.

In the previous section we created a new language taxonomy for our travel blog. Let’s assume that our travel blog has pages for a variety of countries in different continents.

We want to add the language taxonomy to each of these country pages. Then we can group and filter them by language spoken. For this example let’s go into the file for Ireland and add the language taxonomy.

{{< code >}}
+++
title = "Ireland"
Description = “Ireland is sometimes referred to as the Emerald Isle”
Author = “GOUP”
languages = [ "Irish", “English” ]

+++
{{< /code >}}

Notice above that we’ve defined two language taxonomy terms for Ireland. In Ireland they speak two main languages, the traditional Irish (sometimes called Gaelic) and English. We could repeat this process for all of the country pages in our travel blog and we would have a good grouping of languages.
## Using Taxonomy Terms

There are many ways of using and organizing data with taxonomies. Displaying content with the same taxonomy term is a great way to group content together even if that content isnt in the same directory in the content folder. All you have to do is iterate over .SIte.Taxonomies.taxonomy-name.taxonomy term.

Once we’ve tagged all of your travel blog posts with a languages taxonomy, we can use that taxonomy to find countries. For example imagine we wanted to find all countries that spoke English as one of their languages. Inside the website homepage, we could write something like this:

{{< code >}}
{{ range .Site.Taxonomies.languages.english }}
	// in here we can access the page’s information
	{{ .Title }}
	{{ .Description }}
{{ end }}
{{< /code >}}

Taxonomies can help you to organize and manage your content. Consider implementing them in your hugo site, especially if you plan on having a website with a large amount of content.