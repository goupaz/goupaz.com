---
date: 2017-11-08T18:34:45-05:00
title: "Creating A Calculator"
seo_title: "Creating A Calculator | C# | GOUP"
subheader:
     greeting: C# - Programming Language
     description: This course covers the basics of programming in C#. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers creating a calculator in C#.
author: GOUP
image: creating-a-calculator.png
video: VvYeMgKX3BE
url: /programming-languages/csharp/creating-a-calculator/
weight: 9
---
## Code

{{< code lang="csharp" >}}
Console.Write("Enter num1: ");
double num1 = Convert.ToDouble(Console.ReadLine());

Console.Write("Enter num2: ");
double num2 = Convert.ToDouble(Console.ReadLine());

Console.WriteLine(num1 + num2);
{{< /code >}}