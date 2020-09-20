---
date: 2017-11-08T18:34:47-05:00
title: "Try & Catch"
seo_title: "Try & Catch | C# | GOUP"
subheader:
     greeting: C# - Programming Language
     description: This course covers the basics of programming in C#. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers try & catch in C#.
author: GOUP
image: try-&-catch.png
video: ZJRg8nrNeeA
url: /programming-languages/csharp/try-catch/
weight: 24
---
## Code

{{< code lang="csharp" >}}

// this code takes a number from the user and
// divides 10 by it. Enter '0' to trigger the exception
try{
  int division = 10 / Convert.ToInt32(Console.ReadLine());
}catch(DivideByZeroException e){
     Console.WriteLine(e);
}catch(Exception e){
     Console.WriteLine(e);
     // Not best practice to use general Exception
}

// throws new exception
throw new DivideByZeroException("can't divide numbers");

{{< /code >}}