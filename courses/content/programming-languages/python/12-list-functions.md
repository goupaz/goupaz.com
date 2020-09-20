---
date: 2017-10-22T11:58:02-04:00
title: "List Functions"
seo_title: "List Functions | Python | GOUP"
subheader:
     greeting: Python - Programming Language
     description: This course covers the basics of programming in Python. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers list functions in Python.
author: GOUP
image: array-functions.png
video: MKpVFaeT6uk
url: /programming-languages/python/list-functions/
weight: 12
---

## Code

{{< code lang="py" >}}
friends = []
friends.append("Oscar")
friends.append("Angela")
friends.insert(1, "Kevin")

# friends.remove("Kevin")
print( friends )
print( friends.index("Oscar") )
print( friends.count("Angela") )
friends.sort()
print( friends )
friends.clear()
print( friends )
{{< /code >}}