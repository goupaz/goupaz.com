---
date: 2017-11-01T00:17:45-04:00
title: "Building A Better Calculator"
seo_title: "Building A Better Calculator | C | GOUP"
subheader:
     greeting: C - Programming Language
     description: This course covers the basics of programming in C. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers building a better calculator in C.
author: GOUP
image: building-a-better-calculator.png
video: pxuw6fg_UQQ
url: /programming-languages/c/building-a-better-calculator/
weight: 19
---

## Code

{{< code lang="c" >}}
int num1, num2;
char op;

printf(("Enter num1: ");
scanf("%d", &num1);

printf(("Enter Operator: ");
scanf("%c", &op);

printf(("Enter num2: ");
scanf("%d", &num2);

if(op == '+'){
     printf("%d", num1 + num2);
} else if(op == '-'){
     printf("%d", num1 - num2);
} else if(op == '/'){
     printf("%d", num1 / num2);
} else if(op == '*'){
     printf("%d", num1 * num2);
} else {
     printf("Invalid Operator");
}
{{< /code >}}