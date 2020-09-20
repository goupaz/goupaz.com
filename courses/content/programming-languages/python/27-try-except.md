---
date: 2017-10-22T11:58:04-04:00
title: "Try Except"
seo_title: "Try Except | Python | GOUP"
subheader:
     greeting: Python - Programming Language
     description: This course covers the basics of programming in Python. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers try except in Python.
author: GOUP
image: try-except.png
video: KdMAj8Et4xk
url: /programming-languages/python/try-except/
weight: 27
---

## Code

{{< code lang="py" >}}
# code asks user for number and divides 10 by it
# enter '0' to trigger exception
try:
    answer = 10 / int(input("Enter Number: "))
except ZeroDivisionError as e:
    print(e)
except:
    print("Caught any exception")
{{< /code >}}