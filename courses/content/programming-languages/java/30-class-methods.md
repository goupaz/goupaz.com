---
date: 2017-10-22T11:34:30-04:00
title: "Class Methods"
seo_title: "Class Methods | Java | GOUP"
subheader:
     greeting: Java - Programming Language
     description: This course covers the basics of programming in Java. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers class methods in Java.
author: GOUP
image: class-methods.png
video: MCMcmL3Lm54
url: /programming-languages/java/class-methods/
weight: 30
---

## Code

{{< code lang="java" >}}

class Book{
     public String title;
     public String author;

     public void readBook(){
          System.out.println("Reading " + this.title + " by " + this.author);
     }
}

{{< /code >}}