---
date: 2017-11-01T00:17:52-04:00
title: "Dereferencing Pointers"
seo_title: "Dereferencing Pointers | C | GOUP"
subheader:
     greeting: C - Programming Language
     description: This course covers the basics of programming in C. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers dereferencing pointers in C.
author: GOUP
image: dereferencing-pointers.png
video: v_kHaR6QMIY
url: /programming-languages/c/dereferencing-pointers/
weight: 28
---

## Code

{{< code lang="c" >}}
int num = 10;
printf("%p \n", &num);

int *pNum = &num;
printf("%p \n", pNum);
printf("%d \n", *pNum);
{{< /code >}}