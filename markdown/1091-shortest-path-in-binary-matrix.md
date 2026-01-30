# 1091. Shortest Path in Binary Matrix

- Difficulty: Medium
- Topics: Array, Breadth-First Search, Matrix
- Slug: shortest-path-in-binary-matrix
- Problem ID: 1171

## Description
Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.
A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:
The length of a clear path is the number of visited cells of this path.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: grid = [[0,1],[1,0]]
Output: 2
```
Images:
- https://assets.leetcode.com/uploads/2021/02/18/example1_1.png

### Example 2
```text
Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
Output: 4
```
Images:
- https://assets.leetcode.com/uploads/2021/02/18/example2_1.png

### Example 3
```text
Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
Output: -1
```
Images:
- https://assets.leetcode.com/uploads/2021/02/18/example2_1.png


## Constraints
- n == grid.length
- n == grid[i].length
- 1 <= n <= 100
- grid[i][j] is 0 or 1

## Hints
- Do a breadth first search to find the shortest path.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int shortestPathBinaryMatrix(vector<vector<int>>& grid) {
        
    }
};
```

### java
```java
class Solution {
    public int shortestPathBinaryMatrix(int[][] grid) {
        
    }
}
```

### python
```python
class Solution(object):
    def shortestPathBinaryMatrix(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
```

### c
```c
int shortestPathBinaryMatrix(int** grid, int gridSize, int* gridColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int ShortestPathBinaryMatrix(int[][] grid) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    
};
```

### typescript
```typescript
function shortestPathBinaryMatrix(grid: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function shortestPathBinaryMatrix($grid) {
        
    }
}
```

### swift
```swift
class Solution {
    func shortestPathBinaryMatrix(_ grid: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun shortestPathBinaryMatrix(grid: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int shortestPathBinaryMatrix(List<List<int>> grid) {
    
  }
}
```

### golang
```golang
func shortestPathBinaryMatrix(grid [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} grid
# @return {Integer}
def shortest_path_binary_matrix(grid)
    
end
```

### scala
```scala
object Solution {
    def shortestPathBinaryMatrix(grid: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn shortest_path_binary_matrix(grid: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (shortest-path-binary-matrix grid)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec shortest_path_binary_matrix(Grid :: [[integer()]]) -> integer().
shortest_path_binary_matrix(Grid) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec shortest_path_binary_matrix(grid :: [[integer]]) :: integer
  def shortest_path_binary_matrix(grid) do
    
  end
end
```
