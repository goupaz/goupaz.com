---
date: 2017-12-22T11:48:56-05:00
title: "Basic Queries"
seo_title: "Basic Queries | SQL | GOUP"
subheader:
     greeting: SQL - Database Programming Language
     description: This course covers the basics of working with SQL. Work your way through the videos/articles and I'll teach you everything you need to know to interact with database management systems and create powerful relational databases!
description: This tutorial covers basic queries in SQL.
author: GOUP
image: basic-queries.png
video: xfHqi11gjyg
url: /databases/sql/basic-queries/
weight: 10
---

## Code

{{< code lang="sql" >}}
SELECT *
FROM student;

SELECT student.name, student.major
FROM student;

SELECT *
FROM student
WHERE name = 'Jack';

SELECT *
FROM student
WHERE student_id > 2;

SELECT *
FROM student
WHERE major = 'Biology' AND student_id > 1;
{{< /code >}}

