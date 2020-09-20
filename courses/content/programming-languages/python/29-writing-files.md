---
date: 2017-10-22T11:58:05-04:00
title: "Writing Files"
seo_title: "Writing Files | Python | GOUP"
subheader:
     greeting: Python - Programming Language
     description: This course covers the basics of programming in Python. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers writing files in Python.
author: GOUP
image: writing-files.png
video: E1gDJU9Q4kg
url: /programming-languages/python/writing-files/
weight: 29
---

## Code

{{< code lang="py" >}}
employee_file = open("employees.txt", "w") # also try "a" for append

employee_file.write("\nKelly - Customer Service")

employee_file.close()
{{< /code >}}