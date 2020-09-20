---
date: 2017-11-01T00:17:49-04:00
title: "2d Arrays & Nested Loops"
seo_title: "2d Arrays & Nested Loops | C | GOUP"
subheader:
     greeting: C - Programming Language
     description: This course covers the basics of programming in C. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers 2d arrays & nested loops in C.
author: GOUP
image: 2d-arrays-&-nested-loops.png
video: kh6nWhD6QKQ
url: /programming-languages/c/2d-arrays-nested-loops/
weight: 25
---

## Code

{{< code lang="c" >}}
// int  numberGrid[2][3];
int numberGrid[2][3] = { {1, 2, 3}, {4, 5, 6} };

numberGrid[0][1] = 99;
cout << numberGrid[0][0] << endl;
cout << numberGrid[0][1] << endl;

for(int i = 0; i < 2; i++){
     for(int j = 0; j < 3; j++){
          printf("%d", numberGrid[i][j]);
     }
}
{{< /code >}}