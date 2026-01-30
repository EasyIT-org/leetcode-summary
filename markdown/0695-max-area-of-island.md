# 695. Max Area of Island

- Difficulty: Medium
- Topics: Array, Depth-First Search, Breadth-First Search, Union Find, Matrix
- Slug: max-area-of-island
- Problem ID: 695

## Description
You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
The area of an island is the number of cells with a value 1 in the island.
Return the maximum area of an island in grid. If there is no island, return 0.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.
```
Images:
- https://assets.leetcode.com/uploads/2021/05/01/maxarea1-grid.jpg

### Example 2
```text
Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0
```
Images:
- https://assets.leetcode.com/uploads/2021/05/01/maxarea1-grid.jpg


## Constraints
- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 50
- grid[i][j] is either 0 or 1.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxAreaOfIsland(vector<vector<int>>& grid) {
        
    }
};
```

### java
```java
class Solution {
    public int maxAreaOfIsland(int[][] grid) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxAreaOfIsland(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
```

### c
```c
int maxAreaOfIsland(int** grid, int gridSize, int* gridColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxAreaOfIsland(int[][] grid) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    
};
```

### typescript
```typescript
function maxAreaOfIsland(grid: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function maxAreaOfIsland($grid) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxAreaOfIsland(_ grid: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxAreaOfIsland(grid: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxAreaOfIsland(List<List<int>> grid) {
    
  }
}
```

### golang
```golang
func maxAreaOfIsland(grid [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} grid
# @return {Integer}
def max_area_of_island(grid)
    
end
```

### scala
```scala
object Solution {
    def maxAreaOfIsland(grid: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_area_of_island(grid: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-area-of-island grid)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec max_area_of_island(Grid :: [[integer()]]) -> integer().
max_area_of_island(Grid) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_area_of_island(grid :: [[integer]]) :: integer
  def max_area_of_island(grid) do
    
  end
end
```
