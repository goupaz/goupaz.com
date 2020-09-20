---
date: 2017-11-08T18:34:47-05:00
title: "Classes & Objects"
seo_title: "Classes & Objects | C# | GOUP"
subheader:
     greeting: C# - Programming Language
     description: This course covers the basics of programming in C#. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers classes & objects in C#.
author: GOUP
image: classes-&-objects.png
video: -ETZ0nOCU14
url: /programming-languages/csharp/classes-objects/
weight: 25
code:
    a: |+
          public class Book{
              public string title;
              public string author;
              public int numPages;
          }
    b: |+
          public class Book{
              public string title;
              public string author;
              public int numPages;
          }

          public class App
          {
              public static void Main(string[] args)
              {
                    Book book1 = new Book();
                    book1.title = "Harry Potter";
                    book1.author = "JK Rowling";
                    book1.numPages = 400;

                    Console.WriteLine(book1.title);

                    Book book2 = new Book();
                    book2.title = "Lord of the Rings";
                    book2.author = "JRR Tolkien";
                    book2.numPages = 300;

                    Console.WriteLine(book2.title);
              }
          }
---

{{% programming-language-articles/classes-objects lang="C#" code-lang="cs" %}}
