---
date: 2017-10-22T11:58:02-04:00
title: "Strings"
seo_title: "Strings | Python | GOUP"
subheader:
     greeting: Python - Programming Language
     description: This course covers the basics of programming in Python. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers strings in Python.
author: GOUP
image: strings.png
video: LZLGt2GWFt8
url: /programming-languages/python/strings/
weight: 6
code:
    a: |+
          greeting = "Hello"
    b: |+
          greeting = "Hello"
          #indexes:   01234 
    c: |+
          print( greeting[0] )
    d: |+
          print( len(greeting) )
---

{{% programming-language-articles/strings lang="Python" code-lang="py" %}}

## Video Code

{{< code lang="py" >}}
greeting = "Hello"
#indexes:   01234

print( len(greeting) )
print( greeting[0] )
print( greeting[-1] )
print( greeting.find("llo") )
print( greeting.find("z") )
print( greeting[2:] )
print( greeting[2:3] )
{{< /code >}}