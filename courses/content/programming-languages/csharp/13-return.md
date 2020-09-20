---
date: 2017-11-08T18:34:45-05:00
title: "Return"
seo_title: "Return | C# | GOUP"
subheader:
     greeting: C# - Programming Language
     description: This course covers the basics of programming in C#. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers return in C#.
author: GOUP
image: return.png
video: kxxsFmWU8YU
url: /programming-languages/csharp/return/
weight: 13
---
## Code

{{< code lang="csharp" >}}
public static void Main(string [] args){
     int sum = AddNumbers(4, 60);
     Console.WriteLine(sum);
}

public static int AddNumbers(int num1, int num2){
     return num1 + num2;
}
{{< /code >}}