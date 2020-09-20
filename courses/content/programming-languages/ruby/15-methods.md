---
date: 2017-11-01T00:12:42-04:00
title: "Methods"
seo_title: "Methods | Ruby | GOUP"
subheader:
     greeting: Ruby - Programming Language
     description: This course covers the basics of programming in Ruby. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers methods in Ruby.
author: GOUP
image: methods.png
video: e1EpXUgSfN8
url: /programming-languages/ruby/methods/
weight: 15
code:
    a: |+
          def sayHi()
              puts "Hello"
    b: |+
          def sayHi()
              puts "Hello"

          sayHi()
    c: |+
          def sayHi(name)
              puts "Hello " + name
    d: |+
          def sayHi(name)
              puts "Hello " + name
          end

          sayHi("Mike")
    e: |+
          def sayHi(name)
              puts "Hello " + name + " you are " + age
          end

          sayHi("Mike", 24)
---

{{% programming-language-articles/methods lang="Ruby" code-lang="rb" term="Method" %}}
