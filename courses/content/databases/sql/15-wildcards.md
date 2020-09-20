---
date: 2017-12-22T11:48:56-05:00
title: "Wildcards"
seo_title: "Wildcards | SQL | GOUP"
subheader:
     greeting: SQL - Database Programming Language
     description: This course covers the basics of working with SQL. Work your way through the videos/articles and I'll teach you everything you need to know to interact with database management systems and create powerful relational databases!
description: This tutorial covers wildcards in SQL.
author: GOUP
image: wildcards.png
video: _POPNI4HFsc
url: /databases/sql/wildcards/
weight: 15
---

## Code

{{< code lang="sql" >}}
-- % = any # characters, _ = one character

-- Find any client's who are an LLC
SELECT *
FROM client
WHERE client_name LIKE '%LLC';

-- Find any branch suppliers who are in the label business
SELECT *
FROM branch_supplier
WHERE supplier_name LIKE '% Label%';

-- Find any employee born on the 10th day of the month
SELECT *
FROM employee
WHERE birth_day LIKE '_____10%';

-- Find any clients who are schools
SELECT *
FROM client
WHERE client_name LIKE '%Highschool%';
{{< /code >}}

