---
date: 2017-10-22T11:34:30-04:00
title: "Classes & Objects"
seo_title: "Classes & Objects | Java | GOUP"
subheader:
     greeting: Java - Programming Language
     description: This course covers the basics of programming in Java. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers classes & objects in Java.
author: GOUP
image: classes-&-objects.png
video: Mm06BuD3PlY
url: /programming-languages/java/classes-objects/
weight: 26
code:
    a: |+
          public class Book{
              public String title;
              public String author;
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
              public static void main(String [] args)
              {
                    Book book1 = new Book();
                    book1.title = "Harry Potter";
                    book1.author = "JK Rowling";
                    book1.numPages = 400;

                    System.out.println(book1.title);

                    Book book2 = new Book();
                    book2.title = "Lord of the Rings";
                    book2.author = "JRR Tolkien";
                    book2.numPages = 300;

                    System.out.println(book2.title);
              }
          }
---

{{% programming-language-articles/classes-objects lang="Java" code-lang="java" %}}
