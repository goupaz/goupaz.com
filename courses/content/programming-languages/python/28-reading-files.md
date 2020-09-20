---
date: 2017-10-22T11:58:05-04:00
title: "Reading Files"
seo_title: "Reading Files | Python | GOUP"
subheader:
     greeting: Python - Programming Language
     description: This course covers the basics of programming in Python. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers reading files in Python.
author: GOUP
image: reading-files.png
video: jC7CPoSDNzE
url: /programming-languages/python/reading-files/
weight: 28
---

## Code

{{< code lang="py" >}}
employee_file = open("employees.txt", "r")

for employee in employee_file.read_lines():
     print(employee)

employee_file.close()
{{< /code >}}