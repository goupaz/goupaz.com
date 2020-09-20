---
date: 2017-11-07T01:21:26-05:00
title: "Building An Exponent Function"
seo_title: "Building An Exponent Function | C++ | GOUP"
subheader:
     greeting: C++ - Programming Language
     description: This course covers the basics of programming in C++. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers building an exponent function in C++.
author: GOUP
image: building-an-exponent-function.png
video: ZZ2VFnBLRmE
url: /programming-languages/c++/building-an-exponent-function/
weight: 23
---

## Code

{{< code lang="cpp" >}}
int power(int baseNum, powNum){
     int result = 1;
     for(int i = 0; i < powNum; i++){
          result = result * baseNum;
     }
     return result;
}
{{< /code >}}