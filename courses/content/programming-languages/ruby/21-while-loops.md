---
date: 2017-11-01T00:12:43-04:00
title: "While Loops"
seo_title: "While Loops | Ruby | GOUP"
subheader:
     greeting: Ruby - Programming Language
     description: This course covers the basics of programming in Ruby. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers while loops in Ruby.
author: GOUP
image: while-loops.png
video: 3bXd6h8Zsfk
url: /programming-languages/ruby/while-loops/
weight: 21
code:
    a: |+
          index = 1
          while index <= 5:
            puts index
            index += 1
          end
    b: |+
          index = 1
          while True:
            puts index
            index += 1
            if index > 5:
              break;
          end
---

{{% programming-language-articles/while-loops lang="Ruby" code-lang="rb" %}}
