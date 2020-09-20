---
date: 2017-11-08T18:34:44-05:00
title: "Data Types"
seo_title: "Data Types | C# | GOUP"
subheader:
     greeting: C# - Programming Language
     description: This course covers the basics of programming in C#. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers data types in C#.
author: GOUP
image: data-types.png
video: 6CW-znzcqx4
url: /programming-languages/csharp/data-types/
weight: 5
code:
    a: |+
          string name = "Mike";    // String's are objects not primitives
          char testGrade = 'A';    // single 16-bit Unicode character.

          // short, int, long can be pre-pended with 'u' for 'unsigned'
          byte age0 = 0;           // 8-bit unsigned integer
          short age1 = 10;         // 16-bit signed integer.
          int age2 = 20;           // 32-bit signed integer
          long age3 = 30L;         // 64-bit signed integer

          float gpa0 = 2.5F;       // 32-bit floating point
          double gpa1 = 3.5;       // 64-bit double-precision floating point
          decimal gpa2 = 4.5M;     // 128-bit precise decimal

          bool isTall;             // 1 bit -> true/false
          isTall = true;

          name = "John";

          Console.WriteLine("Your name is " + name);
          Console.WriteLine($"Your name is {name}");
---

{{% programming-language-articles/data-types lang="C#" code-lang="cs" %}}
