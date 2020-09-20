---
date: 2017-11-08T18:34:46-05:00
title: "While Loops"
seo_title: "While Loops | C# | GOUP"
subheader:
     greeting: C# - Programming Language
     description: This course covers the basics of programming in C#. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers while loops in C#.
author: GOUP
image: while-loops.png
video: uqMbyuATj2Y
url: /programming-languages/csharp/while-loops/
weight: 18
code:
    a: |+
          int index = 1;
          while(index <= 5){
              Console.WriteLine(index);
              index++;
          }
    b: |+
          index = 1;
          do{
            Console.WriteLine(index);
            index++;
          }while(index <= 5);
---

{{% programming-language-articles/while-loops lang="C#" code-lang="cs" %}}
