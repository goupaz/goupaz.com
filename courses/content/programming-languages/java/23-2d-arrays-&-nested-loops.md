---
date: 2017-10-22T11:34:30-04:00
title: "2d Arrays & Nested Loops"
seo_title: "2d Arrays & Nested Loops | Java | GOUP"
subheader:
     greeting: Java - Programming Language
     description: This course covers the basics of programming in Java. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers 2d arrays & nested loops in Java.
author: GOUP
image: 2d-arrays-&-nested-loops.png
video: w-9ZTeO7q_E
url: /programming-languages/java/2d-arrays-nested-loops/
weight: 23
---

## Code

{{< code lang="java" >}}

// int [][] numberGrid = new int[2][3];
int [][] numberGrid = { {1, 2}, {3, 4} };
numberGrid[0][1] = 99;

System.out.println(numberGrid[0][0]);
System.out.println(numberGrid[0][1]);

for(int i = 0; i < numberGrid.length; i++){
     for(int j = 0; j < numberGrid[i].length; j++){
          System.out.println(numberGrid[i][j]);
     }
     System.out.println();
}


{{< /code >}}