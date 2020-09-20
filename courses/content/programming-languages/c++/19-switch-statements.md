---
date: 2017-11-07T01:21:26-05:00
title: "Switch Statements"
seo_title: "Switch Statements | C++ | GOUP"
subheader:
     greeting: C++ - Programming Language
     description: This course covers the basics of programming in C++. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers switch statements in C++.
author: GOUP
image: switch-statements.png
video: gjAN71oqvFI
url: /programming-languages/c++/switch-statements/
weight: 19
code:
    a: |+
          char myGrade = 'A';
          switch(myGrade){
              case 'A':
                    cout << "You Pass" << endl;
                    break;
              case 'F':
                    cout << "You fail" << endl;
                    break;
              default:
                    cout << "Invalid grade" << endl;
          }
---

{{% programming-language-articles/switch-statements lang="C++" code-lang="cpp" %}}
