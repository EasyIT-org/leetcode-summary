# 1050. Actors and Directors Who Cooperated At Least Three Times

- Difficulty: Easy
- Topics: Database
- Slug: actors-and-directors-who-cooperated-at-least-three-times
- Problem ID: 1136

## Description
Table: ActorDirector
Write a solution to find all the pairs (actor_id, director_id) where the actor has cooperated with the director at least three times.
Return the result table in any order.
The result format is in the following example.
Example 1:

## Examples
### Example 1
```text
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| actor_id    | int     |
| director_id | int     |
| timestamp   | int     |
+-------------+---------+
timestamp is the primary key (column with unique values) for this table.
```

### Example 2
```text
Input: 
ActorDirector table:
+-------------+-------------+-------------+
| actor_id    | director_id | timestamp   |
+-------------+-------------+-------------+
| 1           | 1           | 0           |
| 1           | 1           | 1           |
| 1           | 1           | 2           |
| 1           | 2           | 3           |
| 1           | 2           | 4           |
| 2           | 1           | 5           |
| 2           | 1           | 6           |
+-------------+-------------+-------------+
Output: 
+-------------+-------------+
| actor_id    | director_id |
+-------------+-------------+
| 1           | 1           |
+-------------+-------------+
Explanation: The only pair is (1, 1) where they cooperated exactly 3 times.
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

def actors_and_directors(actor_director: pd.DataFrame) -> pd.DataFrame:
```

### postgresql
```postgresql
-- Write your PostgreSQL query statement below
```
