---
date: 2017-12-22T11:48:55-05:00
title: "Mysql Mac Installation"
seo_title: "Mysql Mac Installation | SQL | GOUP"
subheader:
     greeting: SQL - Database Programming Language
     description: This course covers the basics of working with SQL. Work your way through the videos/articles and I'll teach you everything you need to know to interact with database management systems and create powerful relational databases!
description: This tutorial covers mysql mac installation in SQL.
author: GOUP
image: mysql-mac-installation.png
video: TpOMn5_YIyw
url: /databases/sql/mysql-mac-installation/
weight: 5
---
## Instructions
1. Download mySQL Community Server - https://dev.mysql.com/downloads/mysql/
2. Run installer
3. Write down temporary password
4. Open 'MySQL' in System Preferences and start the server
5. Configure command line to recognize 'mysql' command
     - echo 'export PATH=/usr/local/mysql/bin:$PATH' >> ~/.bash_profile
     - . ~/.bash_profile
6. mysql -u root -p
     - Enter temporary password from step 3 when prompted
7. Change temporary password
{{< code lang="sql" >}}
ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_password';
{{< /code >}}
8. Test to make sure new password worked
     - exit
     - mysql -u root -p
          - Enter new password when prompted
9. Create a database
{{< code lang="sql" >}}
     CREATE DATABASE giraffe_db;
{{< /code >}}
10. Done!


