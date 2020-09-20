---
date: 2017-11-15T17:52:38-05:00
title: "Building A Better Calculator"
seo_title: "Building A Better Calculator | PHP | GOUP"
subheader:
     greeting: PHP - Programming Language
     description: This course covers the basics of programming in PHP. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers building a better calculator in PHP.
author: GOUP
image: building-a-better-calculator.png
video: gTh-Vm32YgU
url: /web-development/php/building-a-better-calculator/
weight: 22
---

## Code

{{< code lang="php" file="site.php">}}
<form action="site.php" method="GET">
     Num1: <input type="number" name="num1">
     Operator: <input type="text" name="op">
     Num2: <input type="number" name="num2">
     <input type="submit">
</form>

<?php
     $num1 = $_GET["num1"];
     $num2 = $_GET["num2"];
     $op = $_GET["op"];

     if($op == "+"){
          echo $num1 + $num2;
     } elseif($op == "-"){
          echo $num1 - $num2;
     } elseif($op == "/"){
          echo $num1 / $num2;
     } elseif($op == "*"){
          echo $num1 * $num2;
     } else {
          echo "Invalid Operator";
     }
?>
{{< /code >}}