---
date: 2017-11-07T01:21:26-05:00
title: "If Statements"
seo_title: "If Statements | C++ | GOUP"
subheader:
     greeting: C++ - Programming Language
     description: This course covers the basics of programming in C++. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers if statements in C++.
author: GOUP
image: if-statements.png
video: QdSiBbr2FwU
url: /programming-languages/c++/if-statements/
weight: 16
code:
    a: |+
          bool isStudent = false;
          bool isSmart = false;

          if(isStudent && isSmart){
              cout << "You are a student" << endl;
          } else if(isStudent && !isSmart){
              cout << "You are not a smart student" << endl;
          } else {
              cout << "You are not a student and not smart" << endl;
          }

          // >, <, >=, <=, !=, ==
          if(1 > 3){
              cout << "number comparison was true" << endl;
          }

          if('a' > 'b'){
              cout << "character comparison was true" << endl;
          }

          string myString = "cat";
          if(myString.compare("cat") != 0){
              cout << "string comparison was true" << endl;
          }
---

{{% programming-language-articles/if-statements lang="C++" code-lang="cpp" %}}
