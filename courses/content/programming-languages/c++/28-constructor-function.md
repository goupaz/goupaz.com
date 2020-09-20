---
date: 2017-11-07T01:21:27-05:00
title: "Constructor Function"
seo_title: "Constructor Function | C++ | GOUP"
subheader:
     greeting: C++ - Programming Language
     description: This course covers the basics of programming in C++. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers constructor function in C++.
author: GOUP
image: constructor-function.png
video: RMI0yaqScEw
url: /programming-languages/c++/constructor-function/
weight: 28
---

## Code

{{< code lang="cpp" >}}
class Book{
     public:
          string title;
          string author;

          Book(string title, string author){
               this->title = title;
               this->author = author;
          }
};

int main(){

     Book book1("Harry Potter", "JK Rowling");
     cout << book1.title << endl;

     Book book2("Lord of the Rings", "JRR Tolkien");
     cout << book2.title << endl;

     return 0;
}
{{< /code >}}