---
date: 2017-11-01T00:17:44-04:00
title: "If Statements"
seo_title: "If Statements | C | GOUP"
subheader:
     greeting: C - Programming Language
     description: This course covers the basics of programming in C. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers if statements in C.
author: GOUP
image: if-statements.png
video: GBFhRR1hTz0
url: /programming-languages/c/if-statements/
weight: 18
code:
    a: |+
          int isStudent = 0;
          int isSmart = 0;

          if(isStudent != 0 && isSmart != 0){
              printf("You are a student\n");
          } else if(isStudent != 0 && isSmart == 0){
              printf("You are not a smart student\n");
          } else {
              printf("You are not a student and not smart\n");
          }

          // >, <, >=, <=, !=, ==
          if(1 > 3){
              printf("number comparison was true\n");
          }

          if('a' > 'b'){
              printf("character comparison was true\n");
          }
---

{{% programming-language-articles/if-statements lang="C" code-lang="c" %}}
