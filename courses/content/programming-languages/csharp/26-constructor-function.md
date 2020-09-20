---
date: 2017-11-08T18:34:47-05:00
title: "Constructor Function"
seo_title: "Constructor Function | C# | GOUP"
subheader:
     greeting: C# - Programming Language
     description: This course covers the basics of programming in C#. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers constructor function in C#.
author: GOUP
image: constructor-function.png
video: Reeefq-Nxkk
url: /programming-languages/csharp/constructor-function/
weight: 26
---
## Code

{{< code lang="csharp" >}}
public class Book{
     public String title;
     public String author;

     public Book(String title, String author){
          this.title = title;
          this.author = author;
     }
}

public class App
{
     public static void Main(string[] args)
     {
          Book book1 = new Book("Harry Potter", "JK Rowling");
          Console.WriteLine(book1.title);

          Book book2 = new Book("Lord of the Rings", "JRR Tolkien");
          Console.WriteLine(book2.title);
     }
}
{{< /code >}}