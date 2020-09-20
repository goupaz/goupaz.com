---
date: 2017-12-22T11:54:13-05:00
title: "Text Indexing"
seo_title: "Text Indexing | MongoDB | GOUP"
subheader:
     greeting: MongoDB - noSQL Database
     description: This course covers the basics of working with MongoDB. Work your way through the videos/articles and I'll teach you everything you need to know to interact with Mongo's flexible document database management system and create powerful document databases!
description: This tutorial covers text indexing in MongoDB.
author: GOUP
image: text-indexing.png
video: dTN8cBDEG_Q
url: /databases/mongodb/text-indexing/
weight: 9
---

## Code

{{< code lang="javascript">}}
db.stores.insertMany(
   [
     { _id: 1, name: "Java Hut", description: "Coffee and cakes" },
     { _id: 2, name: "Burger Buns", description: "Gourmet hamburgers" },
     { _id: 3, name: "Coffee Shop", description: "Just coffee" },
     { _id: 4, name: "Clothes Clothes Clothes", description: "Discount clothing" },
     { _id: 5, name: "Java Shopping", description: "Indonesian goods" }
   ]
)

db.stores.createIndex( { name: "text", description: "text" } )

db.stores.find({ $text: {$search: "Coffee" } })

db.stores.find({ $text: {$search: "Java Hut Coffee" } })

db.stores.find(
   { $text: { $search: "java hut coffee" } },
   { score: { $meta: "textScore" } }
).sort( { score: { $meta: "textScore" } } )
{{< /code >}}

