---
date: 2017-11-01T00:17:41-04:00
title: "Creating A Calculator"
seo_title: "Creating A Calculator | C | GOUP"
subheader:
     greeting: C - Programming Language
     description: This course covers the basics of programming in C. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers creating a calculator in C.
author: GOUP
image: creating-a-calculator.png
video: v4L07CTb9j8
url: /programming-languages/c/creating-a-calculator/
weight: 13
---

## Code

{{< code lang="c" >}}
double num1, num2;

printf("num1: ");
scanf("%lf", &num1);

printf("num2: ");
scanf("%lf", &num2);

printf("%f", num1 + num2);
{{< /code >}}