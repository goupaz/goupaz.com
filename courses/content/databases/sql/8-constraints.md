---
date: 2017-12-22T11:48:55-05:00
title: "Constraints"
seo_title: "Constraints | SQL | GOUP"
subheader:
     greeting: SQL - Database Programming Language
     description: This course covers the basics of working with SQL. Work your way through the videos/articles and I'll teach you everything you need to know to interact with database management systems and create powerful relational databases!
description: This tutorial covers constraints in SQL.
author: GOUP
image: constraints.png
video: 9WP35xwZ3tk
url: /databases/sql/constraints/
weight: 8
---

## Code

{{< code lang="sql" >}}
CREATE TABLE student (
  student_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(40) NOT NULL,
  -- name VARCHAR(40) UNIQUE,
  major VARCHAR(40) DEFAULT 'undecided',
);
{{< /code >}}

