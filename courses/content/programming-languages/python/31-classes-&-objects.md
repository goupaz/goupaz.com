---
date: 2017-10-22T11:58:05-04:00
title: "Classes & Objects"
seo_title: "Classes & Objects | Python | GOUP"
subheader:
     greeting: Python - Programming Language
     description: This course covers the basics of programming in Python. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers classes & objects in Python.
author: GOUP
image: classes-&-objects.png
video: 6chvxajS3yc
url: /programming-languages/python/classes-objects/
weight: 31
code:
    a: |+
          class Book:
            def __init__(self, title, author, numPages):
                self.title = title
                self.author = author
                self.numPages = numPages
    b: |+
          class Book:
            def __init__(self, title, author, numPages):
                self.title = title
                self.author = author
                self.numPages = numPages

          book1 = Book("Harry Potter", "JK Rowling", 500);
          # book1.title = "Half-Blood Prince"

          print(book1.title)
---

{{% programming-language-articles/classes-objects lang="Python" code-lang="py" %}}
