---
date: 2017-10-22T11:58:04-04:00
title: "2d Arrays & Nested Loops"
seo_title: "2d Lists & Nested Loops | Python | GOUP"
subheader:
     greeting: Python - Programming Language
     description: This course covers the basics of programming in Python. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers 2d lists & nested loops in Python.
author: GOUP
image: 2d-arrays-&-nested-loops.png
video: B5GhlXhDfoE
url: /programming-languages/python/2d-lists-nested-loops/
weight: 24
---

## Code

{{< code lang="py" >}}
number_grid = [ [1, 2], [3, 4] ]

number_grid[0][1] = 99
print(number_grid[0][0])
print(number_grid[0][1])

for row in number_grid:
     for row in col:
          print(col)

{{< /code >}}