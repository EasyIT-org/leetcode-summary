# 608. Tree Node

- Difficulty: Medium
- Topics: Database
- Slug: tree-node
- Problem ID: 608

## Description
Table: Tree
Each node in the tree can be one of three types:
Write a solution to report the type of each node in the tree.
Return the result table in any order.
The result format is in the following example.
Example 1:
Example 2:
Note: This question is the same as  3054: Binary Tree Nodes.

## Examples
### Example 1
```text
+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| p_id        | int  |
+-------------+------+
id is the column with unique values for this table.
Each row of this table contains information about the id of a node and the id of its parent node in a tree.
The given structure is always a valid tree.
```

### Example 2
```text
Input: 
Tree table:
+----+------+
| id | p_id |
+----+------+
| 1  | null |
| 2  | 1    |
| 3  | 1    |
| 4  | 2    |
| 5  | 2    |
+----+------+
Output: 
+----+-------+
| id | type  |
+----+-------+
| 1  | Root  |
| 2  | Inner |
| 3  | Leaf  |
| 4  | Leaf  |
| 5  | Leaf  |
+----+-------+
Explanation: 
Node 1 is the root node because its parent node is null and it has child nodes 2 and 3.
Node 2 is an inner node because it has parent node 1 and child node 4 and 5.
Nodes 3, 4, and 5 are leaf nodes because they have parent nodes and they do not have child nodes.
```
Images:
- https://assets.leetcode.com/uploads/2021/10/22/tree1.jpg

### Example 3
```text
Input: 
Tree table:
+----+------+
| id | p_id |
+----+------+
| 1  | null |
+----+------+
Output: 
+----+-------+
| id | type  |
+----+-------+
| 1  | Root  |
+----+-------+
Explanation: If there is only one node on the tree, you only need to output its root attributes.
```
Images:
- https://assets.leetcode.com/uploads/2021/10/22/tree2.jpg


## Constraints
(none)

## Hints
- You can judge the node type by querying whether the node's id shows up in p_id column and whether the node's p_id is null.

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

def tree_node(tree: pd.DataFrame) -> pd.DataFrame:
```

### postgresql
```postgresql
-- Write your PostgreSQL query statement below
```
