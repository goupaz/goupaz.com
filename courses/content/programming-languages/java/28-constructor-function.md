---
date: 2017-10-22T11:34:30-04:00
title: "Constructor Function"
seo_title: "Constructor Function | Java | GOUP"
subheader:
     greeting: Java - Programming Language
     description: This course covers the basics of programming in Java. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers constructor function in Java.
author: GOUP
image: constructor-function.png
video: jbcng9VhaSY
url: /programming-languages/java/constructor-function/
weight: 28
---

## Code

{{< code lang="java" >}}
class Book{
     public String title;
     public String author;

     public Book(String title, String author){
          this.title = title;
          this.author = author;
     }

}

public class App{
     public static void main(String [] args){

          Book book1 = new Book("Harry Potter", "JK Rowling");
          System.out.println(book1.title);

          Book book2 = new Book("Lord of the Rings", "JRR Tolkien");
          System.out.println(book2.title);

     }
}

{{< /code >}}