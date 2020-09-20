---
date: 2017-10-22T11:58:02-04:00
title: "Math"
seo_title: "Math | Python | GOUP"
subheader:
     greeting: Python - Programming Language
     description: This course covers the basics of programming in Python. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers math in Python.
author: GOUP
image: math.png
video: MXe8JT-zjAU
url: /programming-languages/python/math/
weight: 7
code:
    a: |+
          print( 2 * 3 )       # Basic Arithmetic: +, -, /, *
          print( 2**3 )        # Basic Arithmetic: +, -, /, *
          print( 10 % 3 )      # Modulus Op. : returns remainder of 10/3
          print( 1 + 2 * 3 )   # order of operations
          print(10 / 3.0)      # int's and doubles
---

{{% programming-language-articles/math lang="Python" code-lang="py" %}}

## Video Code

{{< code lang="py" >}}
print( 2 * 3 )       # Basic Arithmetic: +, -, /, *
print( 2**3 )        # Basic Arithmetic: +, -, /, *
print( 10 % 3 )      # Modulus Op. : returns remainder of 10/3
print( 1 + 2 * 3 )   # order of operations
print(10 / 3.0)      # int's and doubles


num = 10
num += 100 # +=, -=, /=, *=
print(num)

++num
print(num)

# Math module has useful math methods
import math
print( pow(2, 3) )
print( math.sqrt(144) )
print( round(2.7) )
{{< /code >}}