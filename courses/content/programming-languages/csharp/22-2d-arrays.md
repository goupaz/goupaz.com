---
date: 2017-11-08T18:34:46-05:00
title: "2d Arrays"
seo_title: "2d Arrays | C# | GOUP"
subheader:
     greeting: C# - Programming Language
     description: This course covers the basics of programming in C#. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers 2d arrays in C#.
author: GOUP
image: 2d-arrays.png
video: bqEBIKbtm7Q
url: /programming-languages/csharp/2d-arrays/
weight: 22
---
## Code

{{< code lang="csharp" >}}
// int [][] numberGrid = new int[2][3];
int[][] numberGrid = { new int[]{ 1, 2 }, new int[]{ 3, 4 } };

numberGrid[0][1] = 99;
Console.WriteLine(numberGrid[0][0]);
Console.WriteLine(numberGrid[0][1]);

for(int i = 0; i < numberGrid.Length; i++){
     for(int j = 0; j < numberGrid[i].Length; j++){
          Console.WriteLine(numberGrid[i][j]);
     }
}

{{< /code >}}