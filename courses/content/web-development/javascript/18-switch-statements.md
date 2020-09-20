---
date: 2017-10-22T11:23:35-04:00
title: "Switch Statements"
seo_title: "Switch Statements | Javascript | GOUP"
subheader:
     greeting: Javascript - Program the Web
     description: This course covers the basics of programming in Javascript. Work your way through the videos/articles and I'll teach you everything you need to know to make your website more responsive!
description: This tutorial covers switch statements in Javascript.
author: GOUP
image: switch-statements.png
video: in_At_MyLiA
url: /web-development/javascript/switch-statements/
weight: 18
code:
    a: |+
          var myGrade = "A";
          switch(myGrade){
              case "A":
                    document.write("You Pass");
                    break;
              case "F":
                    document.write("You fail");
                    break;
              default:
                    document.write("Invalid grade");
          }
---

{{% programming-language-articles/switch-statements lang="JavaScript" code-lang="js" %}}
