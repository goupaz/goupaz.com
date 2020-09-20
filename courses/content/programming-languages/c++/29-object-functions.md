---
date: 2017-11-07T01:21:27-05:00
title: "Object Functions"
seo_title: "Object Functions | C++ | GOUP"
subheader:
     greeting: C++ - Programming Language
     description: This course covers the basics of programming in C++. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers object functions in C++.
author: GOUP
image: object-functions.png
video: eRhXgan1FFQ
url: /programming-languages/c++/object-functions/
weight: 29
---

## Code

{{< code lang="cpp" >}}
class Book{
     public:
          string title;
          string author;

          void readBook(){
               cout << "Reading " + this->title + " by " + this->author << endl;
          }
};
{{< /code >}}