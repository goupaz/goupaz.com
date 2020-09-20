---
date: 2017-11-07T01:21:27-05:00
title: "Memory & Pointers"
seo_title: "Memory & Pointers | C++ | GOUP"
subheader:
     greeting: C++ - Programming Language
     description: This course covers the basics of programming in C++. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers memory & pointers in C++.
author: GOUP
image: memory-&-pointers.png
video: 5jXDfk4OmjM
url: /programming-languages/c++/memory-pointers/
weight: 26
---

## Code

{{< code lang="cpp" >}}
int num = 10;
cout << &num << endl;

int *pNum = &num;
cout << pNum << endl;
cout << *pNum << endl;
{{< /code >}}