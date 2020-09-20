---
date: 2017-10-22T11:34:29-04:00
title: "Switch Statements"
seo_title: "Switch Statements | Java | GOUP"
subheader:
     greeting: Java - Programming Language
     description: This course covers the basics of programming in Java. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers switch statements in Java.
author: GOUP
image: switch-statements.png
video: QneahuoJ41A
url: /programming-languages/java/switch-statements/
weight: 18
code:
    a: |+
          char myGrade = 'A';
          switch(myGrade){
              case 'A':
                    System.out.println("You Pass");
                    break;
              case 'F':
                    System.out.println("You fail");
                    break;
              default:
                    System.out.println("Invalid grade");
          }
---

{{% programming-language-articles/switch-statements lang="Java" code-lang="java" %}}
