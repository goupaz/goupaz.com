---
date: 2017-10-22T11:58:03-04:00
title: "Better Calculator"
seo_title: "Better Calculator | Python | GOUP"
subheader:
     greeting: Python - Programming Language
     description: This course covers the basics of programming in Python. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers better calculator in Python.
author: GOUP
image: better-calculator.png
video: 62Rbtc5gpsw
url: /programming-languages/python/better-calculator/
weight: 18
---

## Code

{{< code lang="py" >}}
num1 = int(input("num1: "))
op = input("Operator: ")
num1 = int(input("num1: "))

if op == "+":
     print(num1 + num2)
elif op == "-":
     print(num1 - num2)
elif op == "/":
     print(num1 / num2)
elif op == "*":
     print(num1 * num2)
else:
     print("Invalid Operator")
{{< /code >}}