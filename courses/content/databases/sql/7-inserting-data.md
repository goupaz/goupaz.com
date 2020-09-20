---
date: 2017-12-22T11:48:55-05:00
title: "Inserting Data"
seo_title: "Inserting Data | SQL | GOUP"
subheader:
     greeting: SQL - Database Programming Language
     description: This course covers the basics of working with SQL. Work your way through the videos/articles and I'll teach you everything you need to know to interact with database management systems and create powerful relational databases!
description: This tutorial covers inserting data in SQL.
author: GOUP
image: inserting-data.png
video: 3Qq93zqO3GE
url: /databases/sql/inserting-data/
weight: 7
---

## Code

{{< code lang="sql" >}}
INSERT INTO student VALUES(1, 'Jack', 'Biology');
INSERT INTO student VALUES(2, 'Kate', 'Sociology');
INSERT INTO student(student_id, name) VALUES(3, 'Claire');
INSERT INTO student VALUES(4, 'Jack', 'Biology');
INSERT INTO student VALUES(5, 'Mike', 'Computer Science');
{{< /code >}}

