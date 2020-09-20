---
date: 2017-12-22T11:48:56-05:00
title: "Joins"
seo_title: "Joins | SQL | GOUP"
subheader:
     greeting: SQL - Database Programming Language
     description: This course covers the basics of working with SQL. Work your way through the videos/articles and I'll teach you everything you need to know to interact with database management systems and create powerful relational databases!
description: This tutorial covers joins in SQL.
author: GOUP
image: joins.png
video: efpFCd8iFAQ
url: /databases/sql/joins/
weight: 17
---

## Code

{{< code lang="sql" >}}
-- Add the extra branch
INSERT INTO branch VALUES(4, "Buffalo", NULL, NULL);

SELECT employee.emp_id, employee.first_name, branch.branch_name
FROM employee
JOIN branch    -- LEFT JOIN, RIGHT JOIN
ON employee.emp_id = branch.mgr_id;
{{< /code >}}

