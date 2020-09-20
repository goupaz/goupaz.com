---
date: 2017-09-07T20:24:17-04:00
title: "Data Templates"
seo_title: "Data Templates | Hugo | GOUP"
subheader:
     greeting: Hugo - Static Site Generator
     description: This course covers the basics of using Hugo - Static Site Generator. Work your way through the articles and we'll teach you everything you need to know to create a professional and scalable website or blog!
description: This tutorial covers how to use data templates in Hugo -  Static Site Generator.
author: GOUP
image: data-templates.png
video: FyPgSuwIMWQ
url: /static-site-generators/hugo/data-templates/
weight: 20
---

Data is the backbone of any good website. Often times, even with a static site, there will be certain information that you want to store separate from your actual content files. Hugo makes it really easy to store static data in custom TOML, YAML or JSON files. This data acts as a type of database that hugo partials and layouts can pull information from.

All Hugo data is stored in the Data folder at the root of the site. You can think of the data folder as a kind of mini, read only database.
## Creating a data file
Creating a data file is easy, you simply create a TOML, YAML or JSON file inside the Data folder. Then put all the data you want inside the file. It’s smart to group similar data in the same file as it will make it easier to access in the next step.
### TOML, YAML, JSON
All three of these formats can be used for storing data. For data files in particular it is popular to use JSON format as this is more widely used and accepted on the web than TOML or YAML.

Let’s use an example to illustrate using data in Hugo. Imagine we were creating a travel blog and we had an entire section of content about various States (in the USA) that we’ve visited. There’s a bunch of information about USA States that could be useful for that content, things like state code, capital and latitude and longitude information.

Let’s make a datafile called state-info.json with all of that information and store it in the data folder.

{{< code file="data/state-info.json">}}
{
 "AL": {
   "name": "Alabama",
   "capital": "Montgomery",
   "lat": "32.361538",
   "long": "-86.279118"
 },
 "AK": {
   "name": "Alaska",
   "capital": "Juneau",
   "lat": "58.301935",
   "long": "-134.419740"
 },
 "AZ": {
   "name": "Arizona",
   "capital": "Phoenix",
...
{{< /code >}}

Then, inside a layout we can loop through the information in that data file using the range function. You can reference a specific data file using ```.Site.Data.filename```.

{{< code lang="html" >}}
{{ range .Site.Data.state-info }}
	<h2>{{ .name }}</h2>
	<p>hello{{ .capital }}</p>
	Location : {{ .lat }}, {{ .long }}
{{end}}
{{< /code >}}

## Accessing data in a file
Accessing data in a file is as simple as as storing it there. The most common practice is to loop through data. In the case of our travel blog we might look through east state’s data on a list page.

{{< code lang="html" >}}
{{ range .Site.Data.state-info }}
	<h2>{{ .name }}</h2>
	<p>{{ .capital }}</p>
	Location : {{ .lat }}, {{ .long }}
{{end}}
{{< /code >}}

Aside from looping through that data on a list page you could also access that data on each state page and only show information for the current state.

{{< code lang="html" >}}
{{ range .Site.Data.state-info where “name” “==” .title }}
	<h2>{{ .name }}</h2>
	<p>{{ .capital }}</p>
	Location : {{ .lat }}, {{ .long }}
{{end}}
{{< /code >}}