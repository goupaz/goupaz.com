---
date: 2017-10-22T11:58:03-04:00
title: "If Statements (Cont)"
seo_title: "If Statements (Cont) | Python | GOUP"
subheader:
     greeting: Python - Programming Language
     description: This course covers the basics of programming in Python. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers if statements (cont) in Python.
author: GOUP
image: if-statements-(cont).png
video: -I6AhyPcmTA
url: /programming-languages/python/if-statements-cont/
weight: 17
---

## Code

{{< code lang="py" >}}
is_student = False
is_smart = False

if is_student and is_smart:
	print("You are a student")
elif is_student and not(is_smart):
	print("You are not a smart student")
else:
	print("You are not a student and not smart")


# >, <, >=, <=, !=, ==
if 1 > 3:
	print("number omparison was true")


if "dog" == "cat":
   print("string omparison was true")
{{< /code >}}