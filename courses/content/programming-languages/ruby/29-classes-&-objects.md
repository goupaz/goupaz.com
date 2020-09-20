---
date: 2017-11-01T00:12:45-04:00
title: "Classes & Objects"
seo_title: "Classes & Objects | Ruby | GOUP"
subheader:
     greeting: Ruby - Programming Language
     description: This course covers the basics of programming in Ruby. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers classes & objects in Ruby.
author: GOUP
image: classes-&-objects.png
video: sc5RhTIBf4c
url: /programming-languages/ruby/classes-objects/
weight: 29
code:
    a: |+
          class Book
              attr_accessor :title, :author, :numPages
          end
    b: |+
          class Book
              attr_accessor :title, :author, :numPages
          end

          book1 = Book.new()
          book1.title = "Harry Potter"
          book1.author = "JK Rowling"
          book1.numPages = 500

          puts book1.title
---

{{% programming-language-articles/classes-objects lang="Ruby" code-lang="rb" %}}
