---
date: 2017-10-22T11:58:03-04:00
title: "While Loops"
seo_title: "While Loops | Python | GOUP"
subheader:
     greeting: Python - Programming Language
     description: This course covers the basics of programming in Python. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers while loops in Python.
author: GOUP
image: while-loops.png
video: Ghz4YwOXtTA
url: /programming-languages/python/while-loops/
weight: 20
code:
    a: |+
          index = 1
          while index <= 5:
            print(index)
            index += 1
    b: |+
          index = 1
          while True:
            print(index)
            index += 1
            if index > 5:
              break;
---

{{% programming-language-articles/while-loops lang="Python" code-lang="py" %}}
