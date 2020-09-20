---
date: 2017-10-22T11:58:03-04:00
title: "Dictionaries"
seo_title: "Dictionaries | Python | GOUP"
subheader:
     greeting: Python - Programming Language
     description: This course covers the basics of programming in Python. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers dictionaries in Python.
author: GOUP
image: dictionaries.png
video: dKg5hzE0I00
url: /programming-languages/python/dictionaries/
weight: 19
---

## Code

{{< code lang="py" >}}
test_grades = {
    "Andy" : "B+",
    "Stanley" : "C",
    "Ryan" : "A",
    3 : 95.2
}

print( test_grades["Andy"] )
print( test_grades.get("Ryan", "No Student Found") )
print( test_grades[3] )
{{< /code >}}