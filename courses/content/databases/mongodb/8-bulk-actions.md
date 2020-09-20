---
date: 2017-12-22T11:54:13-05:00
title: "Bulk Actions"
seo_title: "Bulk Actions | MongoDB | GOUP"
subheader:
     greeting: MongoDB - noSQL Database
     description: This course covers the basics of working with MongoDB. Work your way through the videos/articles and I'll teach you everything you need to know to interact with Mongo's flexible document database management system and create powerful document databases!
description: This tutorial covers bulk actions in MongoDB.
author: GOUP
image: bulk-actions.png
video: iHmbRQc1JX0
url: /databases/mongodb/bulk-actions/
weight: 8
---

## Code

{{< code lang="javascript">}}
db.students.bulkWrite(
      [
         { insertOne :
            {
               "document" :
               {
                  name: "Andrew", major: "Architecture", gpa: 3.2
               }
            }
         },
         { insertOne :
            {
               "document" :
               {
                  name: "Terry", major: "Math", gpa: 3.8
               }
            }
         },
         { updateOne :
            {
               filter : { name : "Terry" },
               update : { $set : { gpa : 4.0 } }
            }
         },
         { deleteOne :
            { filter : { name : "Kate"} }
         },
         { replaceOne :
            {
               filter : { name : "Claire" },
               replacement : { name: "Genny", major: "Counsling", gpa: 2.4 }
            }
         }
    ],
    {ordered: false}
   );
{{< /code >}}

