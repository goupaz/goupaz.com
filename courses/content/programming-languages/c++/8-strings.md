---
date: 2017-11-07T01:21:25-05:00
title: "Strings"
seo_title: "Strings | C++ | GOUP"
subheader:
     greeting: C++ - Programming Language
     description: This course covers the basics of programming in C++. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers strings in C++.
author: GOUP
image: strings.png
video: dAxQkg9IXP8
url: /programming-languages/c++/strings/
weight: 8
code:
    a: |+
          string greeting = "Hello";
    b: |+
          string greeting = "Hello";
          //      indexes:   01234
    c: |+
          cout << greeting[0] << endl;
    d: |+
          cout << greeting.length();
---

{{% programming-language-articles/strings lang="C++" code-lang="cpp" %}}


## Video Code

{{< code lang="cpp" >}}
// #include <string>
string greeting = "Hello";
//      indexes:   01234


cout << greeting[0] << endl;
cout << greeting.find("llo") << endl;
cout << greeting.substr(2) << endl;
cout << greeting.substr(1, 3) << endl;
{{< /code >}}