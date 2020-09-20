---
date: 2017-11-01T00:17:44-04:00
title: "Functions"
seo_title: "Functions | C | GOUP"
subheader:
     greeting: C - Programming Language
     description: This course covers the basics of programming in C. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers functions in C.
author: GOUP
image: functions.png
video: GhsfjfgJY0E
url: /programming-languages/c/functions/
weight: 16
---

## Code

{{< code lang="c" >}}
int addNumbers(int num1, int num2);

int main(){
     int sum = addNumbers(4, 60);
     printf("%d \n", sum);

     return 0;
}

int addNumbers(int num1, int num2){
     return num1 + num2;
}
{{< /code >}}