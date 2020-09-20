---
date: 2017-11-07T01:21:25-05:00
title: "Math"
seo_title: "Math | C++ | GOUP"
subheader:
     greeting: C++ - Programming Language
     description: This course covers the basics of programming in C++. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers math in C++.
author: GOUP
image: math.png
video: GN8qbn9Phqg
url: /programming-languages/c++/math/
weight: 9
code:
    a: |+
          cout << 2 * 3 << endl;         // Basic Arithmetic: +, -, /, *
          cout << 10 % 3 << endl;        // Modulus Op. : returns remainder of 10/3
          cout << 1 + 2 * 3 << endl;     // order of operations
          cout << 10 / 3.0 << endl;      // int's and doubles
---

{{% programming-language-articles/math lang="C++" code-lang="cpp" %}}

## Video Code

{{< code lang="cpp" >}}
cout << 2 * 3 << endl;         // Basic Arithmetic: +, -, /, *
cout << 10 % 3 << endl;        // Modulus Op. : returns remainder of 10/3
cout << 1 + 2 * 3 << endl;     // order of operations
cout << 10 / 3.0 << endl;      // int's and doubles


int num = 10;
num += 100; // +=, -=, /=, *=
cout << num << endl;

num++;
cout << num << endl;

// #include <cmath>
cout << pow(2, 3) << endl;
cout << sqrt(144) << endl;
cout << round(2.7) << endl;
{{< /code >}}