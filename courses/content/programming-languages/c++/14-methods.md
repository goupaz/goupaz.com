---
date: 2017-11-07T01:21:26-05:00
title: "Methods"
seo_title: "Methods | C++ | GOUP"
subheader:
     greeting: C++ - Programming Language
     description: This course covers the basics of programming in C++. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers methods in C++.
author: GOUP
image: methods.png
video: eG_4onafcgc
url: /programming-languages/c++/methods/
weight: 14
code:
    a: |+
          void sayHi();

          int main(){
              return 0;
          }

          void sayHi(){
            cout << "Hello" << endl;
          }
    b: |+
          int main(){
              sayHi();
              return 0;
          }
    c: |+
          void sayHi(string name);

          int main(){
              sayHi();
              return 0;
          }

          void sayHi(string name){
            cout << "Hello " + name << endl;
          }
    d: |+
          int main(){
              sayHi("Mike");
              return 0;
          }
    e: |+
          void sayHi(string name, int age);

          int main(){
              sayHi("Mike", 24);
              return 0;
          }

          void sayHi(string name, int age){
            cout << "Hello " + name + " you are " + age << endl;
          }
---

{{% programming-language-articles/methods lang="C++" code-lang="cpp" term="Method" %}}
