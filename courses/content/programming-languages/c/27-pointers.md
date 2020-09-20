---
date: 2017-11-01T00:17:52-04:00
title: "Pointers"
seo_title: "Pointers | C | GOUP"
subheader:
     greeting: C - Programming Language
     description: This course covers the basics of programming in C. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers pointers in C.
author: GOUP
image: pointers.png
video: RjwD1jdOHBc
url: /programming-languages/c/pointers/
weight: 27
---

## Code

{{< code lang="c" >}}
int num = 10;
printf("%p \n", &num);

int *pNum = &num;
printf("%p \n", pNum);
{{< /code >}}