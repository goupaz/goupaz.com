---
date: 2017-11-08T18:34:44-05:00
title: "Math"
seo_title: "Math | C# | GOUP"
subheader:
     greeting: C# - Programming Language
     description: This course covers the basics of programming in C#. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers math in C#.
author: GOUP
image: math.png
video: WIrUmeIcD_I
url: /programming-languages/csharp/math/
weight: 7
code:
    a: |+
          Console.WriteLine(2 * 3);         // Basic Arithmetic: +, -, /, *
          Console.WriteLine(10 % 3);        // Modulus Op. : returns remainder of 10/3
          Console.WriteLine(1 + 2 * 3);     // order of operations
          Console.WriteLine(10 / 3.0);      // int's and doubles
---

{{% programming-language-articles/math lang="C#" code-lang="cs" %}}

## Video Code

{{< code lang="csharp" >}}
Console.WriteLine(2 * 3);         // Basic Arithmetic: +, -, /, *
Console.WriteLine(10 % 3);        // Modulus Op. : returns remainder of 10/3
Console.WriteLine(1 + 2 * 3);     // order of operations
Console.WriteLine(10 / 3.0);      // int's and doubles


int num = 10;
num += 100; // +=, -=, /=, *=
Console.WriteLine(num);

num++;
Console.WriteLine(num);

Console.WriteLine( Math.Pow(2, 3) );
Console.WriteLine( Math.Sqrt(144) );
Console.WriteLine( Math.Round(2.7) );
{{< /code >}}