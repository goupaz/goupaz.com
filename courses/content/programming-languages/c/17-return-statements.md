---
date: 2017-11-01T00:17:44-04:00
title: "Return Statements"
seo_title: "Return Statements | C | GOUP"
subheader:
     greeting: C - Programming Language
     description: This course covers the basics of programming in C. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers return statements in C.
author: GOUP
image: return-statements.png
video: -xouSMuAc8s
url: /programming-languages/c/return-statements/
weight: 17
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