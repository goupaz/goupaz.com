---
date: 2017-10-22T11:23:35-04:00
title: "If Statements"
seo_title: "If Statements | Javascript | GOUP"
subheader:
     greeting: Javascript - Program the Web
     description: This course covers the basics of programming in Javascript. Work your way through the videos/articles and I'll teach you everything you need to know to make your website more responsive!
description: This tutorial covers if statements in Javascript.
author: GOUP
image: if-statements.png
video: Pi7sqKg11O0
url: /web-development/javascript/if-statements/
weight: 16
code:
    a: |+
          var isStudent = false;
          var isSmart = false;

          if(isStudent && isSmart){
              document.write("You are a student");
          } else if(isStudent && !isSmart){
              document.write("You are not a smart student");
          } else {
              document.write("You are not a student and not smart");
          }
          document.write("<br>");

          // >, <, >=, <=, !=, ==
          if(1 > 3){
              document.write("number comparison was true");
          }
          document.write("<br>");

          if("dog" != "dog"){
              document.write("string comparison was true");
          }
---

{{% programming-language-articles/if-statements lang="JavaScript" code-lang="js" %}}
