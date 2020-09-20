---
date: 2017-09-07T20:24:12-04:00
title: "Archetypes"
seo_title: "Archetypes | Hugo | GOUP"
subheader:
     greeting: Hugo - Static Site Generator
     description: This course covers the basics of using Hugo - Static Site Generator. Work your way through the articles and we'll teach you everything you need to know to create a professional and scalable website or blog!
description: This tutorial covers how to use archetypes in Hugo -  Static Site Generator.
author: GOUP
image: archetypes.png
video: bcme8AzVh6o
url: /static-site-generators/hugo/archetypes/
weight: 8
---

When you create a new page using the hugo new command, Hugo automatically populates the page with several front matter attributes. By default you get the title, date and a draft attribute.
But what if you want to add more attributes by default. For example if you wanted to store the author of a page in the front matter on all your pages. Hugo has a way where you can define what the default front matter will be on each page. You can create a configuration file called an archetype.

An archetype is basically a template for default front matter. You can create archetype files and when you use the hugo new filename command, that default frontmatter will automatically be included.

Archetypes are an advanced way to structure and power your content pages. To create a new archetype first go to the Archetypes folder at the root of your project folder. Then create a new file called default.toml (archetypes can be created in YAML and JSON too).

The default archetype file should contain the front matter that all pages will inherit by default. This will override any front matter Hugo included before. Simply put the front matter attributes you want in this file and when a new file gets created, it will inherit those attributes. In the example above, we’re defining a default archetype that includes the page title, date, draft, and author.

