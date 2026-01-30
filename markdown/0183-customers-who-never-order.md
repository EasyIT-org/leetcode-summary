# 183. Customers Who Never Order

- Difficulty: Easy
- Topics: Database
- Slug: customers-who-never-order
- Problem ID: 183

## Description
Table: Customers
Table: Orders
Write a solution to find all customers who never order anything.
Return the result table in any order.
The result format is in the following example.
Example 1:

## Examples
### Example 1
```text
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
+-------------+---------+
id is the primary key (column with unique values) for this table.
Each row of this table indicates the ID and name of a customer.
```

### Example 2
```text
+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| customerId  | int  |
+-------------+------+
id is the primary key (column with unique values) for this table.
customerId is a foreign key (reference columns) of the ID from the Customers table.
Each row of this table indicates the ID of an order and the ID of the customer who ordered it.
```

### Example 3
```text
Input: 
Customers table:
+----+-------+
| id | name  |
+----+-------+
| 1  | Joe   |
| 2  | Henry |
| 3  | Sam   |
| 4  | Max   |
+----+-------+
Orders table:
+----+------------+
| id | customerId |
+----+------------+
| 1  | 3          |
| 2  | 1          |
+----+------------+
Output: 
+-----------+
| Customers |
+-----------+
| Henry     |
| Max       |
+-----------+
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

def find_customers(customers: pd.DataFrame, orders: pd.DataFrame) -> pd.DataFrame:
```

### postgresql
```postgresql
-- Write your PostgreSQL query statement below
```
