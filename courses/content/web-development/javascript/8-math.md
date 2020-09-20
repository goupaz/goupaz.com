---
date: 2017-10-22T11:23:34-04:00
title: "Math"
seo_title: "Math | Javascript | GOUP"
subheader:
     greeting: Javascript - Program the Web
     description: This course covers the basics of programming in Javascript. Work your way through the videos/articles and I'll teach you everything you need to know to make your website more responsive!
description: This tutorial covers math in Javascript.
author: GOUP
image: math.png
video: 1qm_SSLunkw
url: /web-development/javascript/math/
weight: 8
code:
    a: |+
          document.write( 2 * 3 + "<br>" );       // Basic Arithmetic: +, -, /, *
          document.write( 2**3 + "<br>" );        // Exponents
          document.write( 10 % 3 + "<br>" );      // Modulus Op. : returns remainder of 10/3
          document.write( 1 + 2 * 3 + "<br>" );   // order of operations
          document.write(10 / 3.0 + "<br><br>");  // int's and doubles
---

{{% programming-language-articles/math lang="JavaScript" code-lang="js" %}}

## Video Code

{{< code lang="js" >}}
document.write( 2 * 3 + "<br>" );       // Basic Arithmetic: +, -, /, *
document.write( 2**3 + "<br>" );        // Exponents
document.write( 10 % 3 + "<br>" );      // Modulus Op. : returns remainder of 10/3
document.write( 1 + 2 * 3 + "<br>" );   // order of operations
document.write(10 / 3.0 + "<br><br>");  // int's and doubles


var num = 10;
num += 100;                              // +=, -=, /=, *=
document.write(num + "<br>");

num++;
document.write(num + "<br><br>");

// Math class has useful math methods
document.write( Math.pow(2, 3) + "<br>" );
document.write( Math.sqrt(144) + "<br>" );
document.write( Math.round(2.7) + "<br>" );
{{< /code >}}