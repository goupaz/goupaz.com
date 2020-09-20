---
date: 2017-11-08T18:34:46-05:00
title: "Switch Statements"
seo_title: "Switch Statements | C# | GOUP"
subheader:
     greeting: C# - Programming Language
     description: This course covers the basics of programming in C#. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers switch statements in C#.
author: GOUP
image: switch-statements.png
video: Te43aPhxycs
url: /programming-languages/csharp/switch-statements/
weight: 17
code:
    a: |+
          char myGrade = 'A';
          switch(myGrade){
              case 'A':
                    Console.WriteLine("You Pass");
                    break;
              case 'F':
                    Console.WriteLine("You fail");
                    break;
              default:
                    Console.WriteLine("Invalid grade");
          }
---

{{% programming-language-articles/switch-statements lang="C#" code-lang="cs" %}}
