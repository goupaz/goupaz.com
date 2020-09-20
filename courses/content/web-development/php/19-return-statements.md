---
date: 2017-11-15T17:52:38-05:00
title: "Return Statements"
seo_title: "Return Statements | PHP | GOUP"
subheader:
     greeting: PHP - Programming Language
     description: This course covers the basics of programming in PHP. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers return statements in PHP.
author: GOUP
image: return-statements.png
video: 4cf4Qtpnmt4
url: /web-development/php/return-statements/
weight: 19
---

## Code

{{< code lang="php" >}}
function addNumbers($num1, $num2=99){
     return $num1 + $num2;
}

$sum = addNumbers(4, 3);
echo $sum;
{{< /code >}}