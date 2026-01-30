# 1045. Customers Who Bought All Products

- Difficulty: Medium
- Topics: Database
- Slug: customers-who-bought-all-products
- Problem ID: 1135

## Description
Table: Customer
Table: Product
Write a solution to report the customer ids from the Customer table that bought all the products in the Product table.
Return the result table in any order.
The result format is in the following example.
Example 1:

## Examples
### Example 1
```text
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| customer_id | int     |
| product_key | int     |
+-------------+---------+
This table may contain duplicates rows. 
customer_id is not NULL.
product_key is a foreign key (reference column) to Product table.
```

### Example 2
```text
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| product_key | int     |
+-------------+---------+
product_key is the primary key (column with unique values) for this table.
```

### Example 3
```text
Input: 
Customer table:
+-------------+-------------+
| customer_id | product_key |
+-------------+-------------+
| 1           | 5           |
| 2           | 6           |
| 3           | 5           |
| 3           | 6           |
| 1           | 6           |
+-------------+-------------+
Product table:
+-------------+
| product_key |
+-------------+
| 5           |
| 6           |
+-------------+
Output: 
+-------------+
| customer_id |
+-------------+
| 1           |
| 3           |
+-------------+
Explanation: 
The customers who bought all the products (5 and 6) are customers with IDs 1 and 3.
```


## Constraints
(none)

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### mysql
```mysql
# Write your MySQL query statement below
```

### mssql
```mssql
/* Write your T-SQL query statement below */
```

### oraclesql
```oraclesql
/* Write your PL/SQL query statement below */
```

### pythondata
```pythondata
import pandas as pd

def find_customers(customer: pd.DataFrame, product: pd.DataFrame) -> pd.DataFrame:
```

### postgresql
```postgresql
-- Write your PostgreSQL query statement below
```
