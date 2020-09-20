---
date: 2017-12-22T11:54:13-05:00
title: "Inserting"
seo_title: "Inserting | MongoDB | GOUP"
subheader:
     greeting: MongoDB - noSQL Database
     description: This course covers the basics of working with MongoDB. Work your way through the videos/articles and I'll teach you everything you need to know to interact with Mongo's flexible document database management system and create powerful document databases!
description: This tutorial covers inserting in MongoDB.
author: GOUP
image: inserting.png
video: 4EXR5rhcEtw
url: /databases/mongodb/inserting/
weight: 5
---

## Code
{{< code >}}
// Data Types
{
     string: "String of text",
     int: 405,
     double: 3.565,
     boolean: true, // false
     array: [1, 2, 3],
     object: {attr1: "attr1", attr2: "attr2"},
     date: new Date("<YYYY-mm-dd>"),
     object_id: <ObjectId>,
     no_value: null
}

/*
Additional Data Types
---------------------
Timestamp
Binary data
Regular expressions
JS Code
*/

// Inserting
db.students.insertOne({name: "Jack", major: "Biology", gpa: 3.5})
db.students.insertOne({name: "Claire", major: "Marketing", gpa: 3.7, awards: ["Valedictorian", "Summa Cum Laude"]} )
db.students.insertOne({name: "Evan", major: "Astronomy", gpa: 3.7, grades: [90, 88, 95, 78] } )
db.students.insertOne({name: "Kate", major: "Sociology", gpa: 3.2, contact: {phone: "333-3333", email: "student@school.edu"}})
db.students.insertOne({name: "Phil", major: "Chemistry", gpa: 2.5, startdate: new Date("2012-08-23")})
db.students.insertOne({_id: 4, name: "John", major: "Biology", gpa: 3.2})
db.students.insertMany([
     {name: "Mike", major: "Computer Science", gpa: 2.7},
     {name: "Andrea", major: "Math", gpa: 4.0, awards: ["Summa Cum Laude"]}
])
{{< /code >}}

