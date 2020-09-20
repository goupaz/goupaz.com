---
date: 2017-11-15T17:52:38-05:00
title: "Switch Statements"
seo_title: "Switch Statements | PHP | GOUP"
subheader:
     greeting: PHP - Programming Language
     description: This course covers the basics of programming in PHP. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers switch statements in PHP.
author: GOUP
image: switch-statements.png
video: nUTqC1Qtnmo
url: /web-development/php/switch-statements/
weight: 23
code:
    a: |+
          $myGrade = "A";
          switch($myGrade){
              case "A":
                    echo "You Pass";
                    break;
              case "F":
                    echo "You fail";
                    break;
              default:
                    echo "Invalid grade";
          }
---

{{% programming-language-articles/switch-statements lang="JavaScript" code-lang="js" %}}
