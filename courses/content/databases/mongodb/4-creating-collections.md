---
date: 2017-12-22T11:54:13-05:00
title: "Creating Collections"
seo_title: "Creating Collections | MongoDB | GOUP"
subheader:
     greeting: MongoDB - noSQL Database
     description: This course covers the basics of working with MongoDB. Work your way through the videos/articles and I'll teach you everything you need to know to interact with Mongo's flexible document database management system and create powerful document databases!
description: This tutorial covers creating collections in MongoDB.
author: GOUP
image: creating-collections.png
video: llHWCpCel-4
url: /databases/mongodb/creating-collections/
weight: 4
---

## Code

{{< code >}}
// if you insert into a non-existant collection it will be created automatically
db.createCollection("students")

// https://docs.mongodb.com/manual/reference/method/db.createCollection/index.html
db.createCollection("students", {options})

db.dropCollection("students")

show collections
{{< /code >}}

