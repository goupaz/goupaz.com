---
date: 2017-12-22T11:54:13-05:00
title: "Updating & Deleting Documents"
seo_title: "Updating & Deleting Documents | MongoDB | GOUP"
subheader:
     greeting: MongoDB - noSQL Database
     description: This course covers the basics of working with MongoDB. Work your way through the videos/articles and I'll teach you everything you need to know to interact with Mongo's flexible document database management system and create powerful document databases!
description: This tutorial covers updating deleting documents in MongoDB.
author: GOUP
image: updating-deleting-documents.png
video: 2yWPqPO6Zkk
url: /databases/mongodb/updating-deleting-documents/
weight: 7
---

## Code

{{< code >}}
// same filters as inserting
db.stuents.updateOne(<filter>, <update>, <options>)

// Do this twice so we can change it back with updateMany
db.students.updateOne(
     {major: "Biology"},
     {
       $set:
          {major: "Bio"}
     }
)

db.students.updateMany(
     {major: "Bio"},
     {
       $set:
          {major: "Biology"}
     }
)

// replaceMany()
db.students.replaceOne(
     {major: "Bio"},
     {name: "new name", major: "new major", gpa: 4.0}
)

// Delete all documents
db.students.deleteMany({})

db.students.deleteOne({major: "Biology"})

db.students.deleteMany({gpa: {$gte: 3.5}})
{{< /code >}}

