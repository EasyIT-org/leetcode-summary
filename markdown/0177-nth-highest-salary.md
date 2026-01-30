# 177. Nth Highest Salary

- Difficulty: Medium
- Topics: Database
- Slug: nth-highest-salary
- Problem ID: 177

## Description
Table: Employee
Write a solution to find the nth highest distinct salary from the Employee table. If there are less than n distinct salaries, return null.
The result format is in the following example.
Example 1:
Example 2:

## Examples
### Example 1
```text
+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| salary      | int  |
+-------------+------+
id is the primary key (column with unique values) for this table.
Each row of this table contains information about the salary of an employee.
```

### Example 2
```text
Input: 
Employee table:
+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
n = 2
Output: 
+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| 200                    |
+------------------------+
```

### Example 3
```text
Input: 
Employee table:
+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
+----+--------+
n = 2
Output: 
+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| null                   |
+------------------------+
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
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN (
      # Write your MySQL query statement below.

  );
END
```

### mssql
```mssql
CREATE FUNCTION getNthHighestSalary(@N INT) RETURNS INT AS
BEGIN
    RETURN (
        /* Write your T-SQL query statement below. */

    );
END
```

### oraclesql
```oraclesql
CREATE FUNCTION getNthHighestSalary(N IN NUMBER) RETURN NUMBER IS
result NUMBER;
BEGIN
    /* Write your PL/SQL query statement below */

    RETURN result;
END;
```

### pythondata
```pythondata
import pandas as pd

def nth_highest_salary(employee: pd.DataFrame, N: int) -> pd.DataFrame:
```

### postgresql
```postgresql
CREATE OR REPLACE FUNCTION NthHighestSalary(N INT) RETURNS TABLE (Salary INT) AS $$
BEGIN
  RETURN QUERY (
    -- Write your PostgreSQL query statement below.
    
      
  );
END;
$$ LANGUAGE plpgsql;
```
