---
date: 2017-11-01T00:12:41-04:00
title: "Strings"
seo_title: "Strings | Ruby | GOUP"
subheader:
     greeting: Ruby - Programming Language
     description: This course covers the basics of programming in Ruby. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers strings in Ruby.
author: GOUP
image: strings.png
video: 9HB4iIAxuh0
url: /programming-languages/ruby/strings/
weight: 8
code:
    a: |+
          greeting = "Hello"
    b: |+
          greeting = "Hello"
          #indexes:   01234
    b: |+
          print( greeting[0] )
    c: |+
          print( len(greeting) )
---

{{% programming-language-articles/strings lang="Ruby" code-lang="rb" %}}

## Video Code

{{< code lang="rb" >}}
greeting = "Hello"
#indexes:   01234

puts greeting.length
puts greeting[0]
puts greeting.include? "llo"
puts greeting.include? "z"
puts greeting[1,3]
{{< /code >}}