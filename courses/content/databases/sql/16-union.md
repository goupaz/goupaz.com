---
date: 2017-12-22T11:48:56-05:00
title: "Union"
seo_title: "Union | SQL | GOUP"
subheader:
     greeting: SQL - Database Programming Language
     description: This course covers the basics of working with SQL. Work your way through the videos/articles and I'll teach you everything you need to know to interact with database management systems and create powerful relational databases!
description: This tutorial covers union in SQL.
author: GOUP
image: union.png
video: OLDJuELLFsA
url: /databases/sql/union/
weight: 16
---

## Code

{{< code lang="sql" >}}
-- Find a list of employee and branch names
SELECT employee.first_name AS Employee_Branch_Names
FROM employee
UNION
SELECT branch.branch_name
FROM branch;

-- Find a list of all clients & branch suppliers' names
SELECT client.client_name AS Non-Employee_Entities, client.branch_id AS Branch_ID
FROM client
UNION
SELECT branch_supplier.supplier_name, branch_supplier.branch_id
FROM branch_supplier;
{{< /code >}}

