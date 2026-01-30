# 64. Minimum Path Sum

- Difficulty: Medium
- Topics: Array, Dynamic Programming, Matrix
- Slug: minimum-path-sum
- Problem ID: 64

## Description
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.
Note: You can only move either down or right at any point in time.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
```
Images:
- https://assets.leetcode.com/uploads/2020/11/05/minpath.jpg

### Example 2
```text
Input: grid = [[1,2,3],[4,5,6]]
Output: 12
```
Images:
- https://assets.leetcode.com/uploads/2020/11/05/minpath.jpg


## Constraints
- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 200
- 0 <= grid[i][j] <= 200

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int minPathSum(vector<vector<int>>& grid) {
        
    }
};
```

### java
```java
class Solution {
    public int minPathSum(int[][] grid) {
        
    }
}
```

### python
```python
class Solution(object):
    def minPathSum(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
```

### c
```c
int minPathSum(int** grid, int gridSize, int* gridColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinPathSum(int[][] grid) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    
};
```

### typescript
```typescript
function minPathSum(grid: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function minPathSum($grid) {
        
    }
}
```

### swift
```swift
class Solution {
    func minPathSum(_ grid: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minPathSum(grid: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minPathSum(List<List<int>> grid) {
    
  }
}
```

### golang
```golang
func minPathSum(grid [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} grid
# @return {Integer}
def min_path_sum(grid)
    
end
```

### scala
```scala
object Solution {
    def minPathSum(grid: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn min_path_sum(grid: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (min-path-sum grid)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec min_path_sum(Grid :: [[integer()]]) -> integer().
min_path_sum(Grid) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec min_path_sum(grid :: [[integer]]) :: integer
  def min_path_sum(grid) do
    
  end
end
```
