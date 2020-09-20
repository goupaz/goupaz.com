---
date: 2017-10-22T11:58:02-04:00
title: "Tuples"
seo_title: "Tuples | Python | GOUP"
subheader:
     greeting: Python - Programming Language
     description: This course covers the basics of programming in Python. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers tuples in Python.
author: GOUP
image: tuples.png
video: DehzAA0ZIhA
url: /programming-languages/python/tuples/
weight: 13
---

## Code

{{< code lang="py" >}}
lucky_numbers = (4, 8, "fifteen", 16, 23, 42.0)
#      indexes  0  1       2      3   4   5

# lucky_numbers[0] = 90  # tuples are immutable
print(lucky_numbers[0])
print(lucky_numbers[1])
print(lucky_numbers[-1])
print(lucky_numbers[2:])
print(lucky_numbers[2:4])
print(len(lucky_numbers))
{{< /code >}}