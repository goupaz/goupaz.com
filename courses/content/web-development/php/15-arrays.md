---
date: 2017-11-15T17:52:37-05:00
title: "Arrays"
seo_title: "Arrays | PHP | GOUP"
subheader:
     greeting: PHP - Programming Language
     description: This course covers the basics of programming in PHP. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers arrays in PHP.
author: GOUP
image: arrays.png
video: NMJ_VWe87XM
url: /web-development/php/arrays/
weight: 15
code:
    a: |+
          $lucky_numbers = [4, 8, "fifteen", 16, 23, 42.0];
          //       indexes  0  1       2      3   4   5
    b: |+
          $lucky_numbers[0] = 90;
          echo $lucky_numbers[0]."<br>";
          echo $lucky_numbers[1]."<br>";
          echo count($lucky_numbers)."<br>";
---

{{% programming-language-articles/arrays lang="PHP" code-lang="php" %}}
