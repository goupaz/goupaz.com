---
date: 2017-11-01T00:17:36-04:00
title: "Math"
seo_title: "Math | C | GOUP"
subheader:
     greeting: C - Programming Language
     description: This course covers the basics of programming in C. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers math in C.
author: GOUP
image: math.png
video: YDnwasDnjvY
url: /programming-languages/c/math/
weight: 9
code:
    a: |+
          printf("%d \n", 2 * 3);       // Basic Arithmetic: +, -, /, *
          printf("%d \n", 10 % 3);      // Modulus Op. : returns remainder of 10/3
          printf("%d \n", 1 + 2 * 3);   // order of operations
          printf("%f \n", 10 / 3.0);    // int's and doubles
---

{{% programming-language-articles/math lang="C" code-lang="c" %}}

## Video Code

{{< code lang="c" >}}
printf("%d \n", 2 * 3);       // Basic Arithmetic: +, -, /, *
printf("%d \n", 10 % 3);      // Modulus Op. : returns remainder of 10/3
printf("%d \n", 1 + 2 * 3);   // order of operations
printf("%f \n", 10 / 3.0);    // int's and doubles


int num = 10;
num += 100;                   // +=, -=, /=, *=
printf("%d \n",num);

num++;
printf("%d \n", num);

printf("%f \n", pow(2, 3));
printf("%f \n", sqrt(144));
printf("%f \n", round(2.7));
{{< /code >}}