---
date: 2017-12-22T11:48:55-05:00
title: "Creating Tables"
seo_title: "Creating Tables | SQL | GOUP"
subheader:
     greeting: SQL - Database Programming Language
     description: This course covers the basics of working with SQL. Work your way through the videos/articles and I'll teach you everything you need to know to interact with database management systems and create powerful relational databases!
description: This tutorial covers creating tables in SQL.
author: GOUP
image: creating-tables.png
video: SPPTQwx4FfE
url: /databases/sql/creating-tables/
weight: 6
---

## Code

{{< code lang="sql" >}}
INT                           -- Whole Numbers
DECIMAL(M,N)                  -- Decimal Numbers - Exact Value
VARCHAR(l)                    -- String of text of length l
BLOB                          -- Binary Large Object, Stores large data
DATE                          -- 'YYYY-MM-DD'
TIMESTAMP                     -- 'YYYY-MM-DD HH:MM:SS' - used for recording events

-- Creating tables
CREATE TABLE student (
  student_id INT PRIMARY KEY,
  name VARCHAR(40),
  major VARCHAR(40)
  -- PRIMARY KEY(student_id)
);

DESCRIBE student;
DROP TABLE student;
ALTER TABLE student ADD gpa DECIMAL;
ALTER TABLE student DROP COLUMN gpa;
{{< /code >}}

