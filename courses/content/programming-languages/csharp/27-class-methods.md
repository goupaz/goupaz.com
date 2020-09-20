---
date: 2017-11-08T18:34:48-05:00
title: "Class Methods"
seo_title: "Class Methods | C# | GOUP"
subheader:
     greeting: C# - Programming Language
     description: This course covers the basics of programming in C#. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers class methods in C#.
author: GOUP
image: class-methods.png
video: wZ5zl4i68Hg
url: /programming-languages/csharp/class-methods/
weight: 27
---
## Code

{{< code lang="csharp" >}}
public class Book{
     public string title;
     public string author;

     public void ReadBook(){
       Console.WriteLine($"Reading {this.title} by {this.author}");
     }
}
{{< /code >}}