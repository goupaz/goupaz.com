---
date: 2017-11-01T00:12:43-04:00
title: "Case Expressions"
seo_title: "Case Expressions | Ruby | GOUP"
subheader:
     greeting: Ruby - Programming Language
     description: This course covers the basics of programming in Ruby. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers switch statements in Ruby.
author: GOUP
image: switch-statements.png
video: eBtz-QBbWV0
url: /programming-languages/ruby/case-expressions/
weight: 20
code:
    a: |+
          my_grade = "A"
          case my_grade
              when "A"
              puts "You Pass"
              when "F"
                puts "You fail"
              else
                puts "Invalid grade"
          end
---

{{% programming-language-articles/switch-statements lang="Ruby" code-lang="rb" %}}
