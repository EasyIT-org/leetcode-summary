# 329. Longest Increasing Path in a Matrix

- Difficulty: Hard
- Topics: Array, Dynamic Programming, Depth-First Search, Breadth-First Search, Graph, Topological Sort, Memoization, Matrix
- Slug: longest-increasing-path-in-a-matrix
- Problem ID: 329

## Description
Given an m x n integers matrix, return the length of the longest increasing path in matrix.
From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
Output: 4
Explanation: The longest increasing path is [1, 2, 6, 9].
```
Images:
- https://assets.leetcode.com/uploads/2021/01/05/grid1.jpg

### Example 2
```text
Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
Output: 4
Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
```
Images:
- https://assets.leetcode.com/uploads/2021/01/27/tmp-grid.jpg

### Example 3
```text
Input: matrix = [[1]]
Output: 1
```
Images:
- https://assets.leetcode.com/uploads/2021/01/27/tmp-grid.jpg


## Constraints
- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 200
- 0 <= matrix[i][j] <= 231 - 1

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int longestIncreasingPath(vector<vector<int>>& matrix) {
        
    }
};
```

### java
```java
class Solution {
    public int longestIncreasingPath(int[][] matrix) {
        
    }
}
```

### python
```python
class Solution(object):
    def longestIncreasingPath(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def longestIncreasingPath(self, matrix: List[List[int]]) -> int:
```

### c
```c
int longestIncreasingPath(int** matrix, int matrixSize, int* matrixColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int LongestIncreasingPath(int[][] matrix) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    
};
```

### typescript
```typescript
function longestIncreasingPath(matrix: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $matrix
     * @return Integer
     */
    function longestIncreasingPath($matrix) {
        
    }
}
```

### swift
```swift
class Solution {
    func longestIncreasingPath(_ matrix: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun longestIncreasingPath(matrix: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int longestIncreasingPath(List<List<int>> matrix) {
    
  }
}
```

### golang
```golang
func longestIncreasingPath(matrix [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} matrix
# @return {Integer}
def longest_increasing_path(matrix)
    
end
```

### scala
```scala
object Solution {
    def longestIncreasingPath(matrix: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn longest_increasing_path(matrix: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (longest-increasing-path matrix)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec longest_increasing_path(Matrix :: [[integer()]]) -> integer().
longest_increasing_path(Matrix) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec longest_increasing_path(matrix :: [[integer]]) :: integer
  def longest_increasing_path(matrix) do
    
  end
end
```
