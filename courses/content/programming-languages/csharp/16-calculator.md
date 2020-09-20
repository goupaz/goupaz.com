---
date: 2017-11-08T18:34:46-05:00
title: "4 Function Calculator"
seo_title: "4 Function Calculator | C# | GOUP"
subheader:
     greeting: C# - Programming Language
     description: This course covers the basics of programming in C#. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers calculator in C#.
author: GOUP
image: calculator.png
video: tz6nioMUGuc
url: /programming-languages/csharp/calculator/
weight: 16
---
## Code

{{< code lang="csharp" >}}
Console.Write("Enter num1: ");
double num1 = Convert.ToDouble(Console.ReadLine());

Console.Write("Enter operator: ");
string op = Console.ReadLine();

Console.Write("Enter num2: ");
double num2 = Convert.ToDouble(Console.ReadLine());

if (op == "+"){
     Console.WriteLine(num1 + num2);
} else if (op == "-"){
     Console.WriteLine(num1 - num2);
} else if (op == "/"){
     Console.WriteLine(num1 / num2);
} else if (op == "*"){
     Console.WriteLine(num1 * num2);
} else {
     Console.WriteLine("Invalid Operator");
}
{{< /code >}}