---
date: 2017-11-08T18:34:45-05:00
title: "If Statements"
seo_title: "If Statements | C# | GOUP"
subheader:
     greeting: C# - Programming Language
     description: This course covers the basics of programming in C#. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers if statements in C#.
author: GOUP
image: if-statements.png
video: ciV3ERNABb8
url: /programming-languages/csharp/if-statements/
weight: 14
code:
    a: |+
          bool isStudent = false;
          bool isSmart = false;

          if (isStudent && isSmart)
          {
            Console.WriteLine("You are a student");
          }
          else if (isStudent && !isSmart)
          {
            Console.WriteLine("You are not a smart student");
          }
          else
          {
            Console.WriteLine("You are not a student and not smart");
          }

          // >, <, >=, <=, !=, ==
          if (1 < 3)
          {
            Console.WriteLine("number comparison was true");
          }
---

{{% programming-language-articles/if-statements lang="C#" code-lang="cs" %}}
