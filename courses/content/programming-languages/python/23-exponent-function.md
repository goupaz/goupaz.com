---
date: 2017-10-22T11:58:04-04:00
title: "Exponent Function"
seo_title: "Exponent Function | Python | GOUP"
subheader:
     greeting: Python - Programming Language
     description: This course covers the basics of programming in Python. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers exponent function in Python.
author: GOUP
image: exponent-function.png
video: WUjXTRhFrrs
url: /programming-languages/python/exponent-function/
weight: 23
---

## Code

{{< code lang="py" >}}
def raise_to_power(base_num, pow_num):
     result = 1
     for index in range(pow_num):
          result *= base_num
     return result
{{< /code >}}