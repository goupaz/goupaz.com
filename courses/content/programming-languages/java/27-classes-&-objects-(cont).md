---
date: 2017-10-22T11:34:30-04:00
title: "Classes & Objects (Cont)"
seo_title: "Classes & Objects (Cont) | Java | GOUP"
subheader:
     greeting: Java - Programming Language
     description: This course covers the basics of programming in Java. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers classes & objects (cont) in Java.
author: GOUP
image: classes-&-objects-(cont).png
video: O6BVfyW8vmg
url: /programming-languages/java/classes-objects-cont/
weight: 27
---

## Code

{{< code lang="java" >}}
class Book{
     public String title;
     public String author;
}

public class App{
     public static void main(String [] args){
          Book book1 = new Book();
          book1.title = "Harry Potter";
          book1.author = "JK Rowling";

          System.out.println(book1.title);

          Book book2 = new Book();
          book2.title = "Lord of the Rings";
          book2.author = "JRR Tolkien";

          System.out.println(book2.title);
     }
}

{{< /code >}}