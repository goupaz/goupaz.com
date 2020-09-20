---
date: 2017-09-07T20:24:16-04:00
title: "Functions"
seo_title: "Functions | Hugo | GOUP"
subheader:
     greeting: Hugo - Static Site Generator
     description: This course covers the basics of using Hugo - Static Site Generator. Work your way through the articles and we'll teach you everything you need to know to create a professional and scalable website or blog!
description: This tutorial covers how to use functions in Hugo -  Static Site Generator.
author: GOUP
image: functions.png
video: w1NkCb3IJd0
url: /static-site-generators/hugo/functions/
weight: 18
---

Go template functions give you a series of useful functions that you can use to add logic into your templates. These functions perform a variety of tasks like adding numbers, splicing strings or looping through lists of values.
## How functions work
Functions are formatted as follows

{{< code >}}
{{  func-name arg1, arg2, … , argX }}
{{< /code >}}

Inside double curly brackets, you put the name of the function and then pass the function arguments. Different functions will require different arguments. Functions allow you to infuse your hugo website with a large amount of logic and make doing complex operations easier.
## Some Useful Functions
Below is a list of some functions I’ve found useful while using Hugo. Keep in mind that this is a small list, Hugo has dozens of useful functions that can make your life a lot easier.
### Range
One of the most useful functions in Go is the range function. Range is used to loop or iterate through a list of data values. There are many instances in hugo where you’ll need to deal with lists of information. The most common use case is looping through pages in a list file. Hugo supports three basic content types, home, single and list. List pages are used as an index for a section. So if you had a travel blog you might have a list page which had links to blog pages about countries you visited.

Image of the content folder

If we wanted to list each of those countries on the list page we could use the range function to loop through them.

{{< code >}}
{{ .Range .Site.Sections.Asia.Pages }}
	{{ .Title }}
{{ end }}
{{< /code >}}

The above code loops through all the files in the Asia folder and prints out the title.
#### First
The first function is used to limit the amount of items you want to iterate through to the first x, x being the number of items you want to loop through. If we only wanted to display the first 3 countries on our list page we could modify the above code.

{{< code >}}
{{ .Range first 3 .Site.Sections.Asia.Pages }}
	{{ .Title }}
{{ end }}
{{< /code >}}
#### Last
Last is the same as first but reversed. It's used to limit the amount of items you want to loop iterate through to the last x. We could modify the above code to instead print the last 3 countries on the list.

{{< code >}}
{{ .Range last 3 .Site.Sections.Asia.Pages }}
	{{ .Title }}
{{ end }}
{{< /code >}}

#### Where
Where can be used in combination with range to loop through only those items in a list that match a specific condition. This is a very useful function as it will allow you to only loop through specific items in a list. Where conditions can get complicated fast, so be sure to watch your syntax.

We’ll modify the above code to only print countries that have Korea in them (ie. North and South Korea)

{{< code >}}
{{ .Range .Site.Sections.Asia.Pages where “Title” contains “Korea” }}
	{{ .Title }}
{{ end }}
{{< /code >}}

### Truncate
Truncate can be used to limit the amount of characters in long strings. This is useful for a number of styling reasons, like for example when you want to limit the size of a vertical navigation menu.

{{< code >}}
{{$longString := “This is a reall long string that should be truncated”}}
{{ truncate $longString 20 }}
{{< /code >}}

The above code will truncate the long string to only 20 characters.
### Math
Go templates come with a number of useful math function like add and subtract. These are useful in a variety of situations, but especially when dealing with numbers in the front matter.

{{< code >}}
	{{ add 3 5 }} // 3 + 5
	{{ sub 5 2 }} // 5 - 2
	{{ add (sub 4 2) 6 }} // (4-2) + 6
{{< /code >}}