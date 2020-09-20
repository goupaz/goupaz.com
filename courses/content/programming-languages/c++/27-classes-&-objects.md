---
date: 2017-11-07T01:21:27-05:00
title: "Classes & Objects"
seo_title: "Classes & Objects | C++ | GOUP"
subheader:
     greeting: C++ - Programming Language
     description: This course covers the basics of programming in C++. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers classes & objects in C++.
author: GOUP
image: classes-&-objects.png
video: wGyCsWXVD9E
url: /programming-languages/c++/classes-objects/
weight: 27
code:
    a: |+
          class Book{
              public:
                    string title;
                    string author;
                    int numPages;
          };
    b: |+
          class Book{
              public:
                    string title;
                    string author;
                    int numPages;
          };

          int main(){

              Book book1;
              book1.title = "Harry Potter";
              book1.author = "JK Rowling";
              book1.numPages = 500;

              cout << book1.title << endl;

              Book book2;
              book2.title = "Lord of the Rings";
              book2.author = "JRR Tolkien";
              book2.numPages = 300;

              cout << book2.title << endl;

              return 0;
          }
    
---

{{% programming-language-articles/classes-objects lang="C++" code-lang="cpp" %}}
