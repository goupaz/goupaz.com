---
date: 2017-11-08T18:34:46-05:00
title: "Building An Exponent Method"
seo_title: "Building An Exponent Method | C# | GOUP"
subheader:
     greeting: C# - Programming Language
     description: This course covers the basics of programming in C#. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers building an exponent function in C#.
author: GOUP
image: building-an-exponent-function.png
video: r9albE9h1Jg
url: /programming-languages/csharp/building-an-exponent-function/
weight: 21
---
## Code

{{< code lang="csharp" >}}
static int GetPow(int baseNum, int powNum)
{
     int result = 1;
     for(int i = 0; i < powNum; i++){
          result = result * baseNum;
     }
     return result;
}
{{< /code >}}