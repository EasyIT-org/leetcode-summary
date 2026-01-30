# 1034. Coloring A Border

- Difficulty: Medium
- Topics: Array, Depth-First Search, Breadth-First Search, Matrix
- Slug: coloring-a-border
- Problem ID: 1104

## Description
You are given an m x n integer matrix grid, and three integers row, col, and color. Each value in the grid represents the color of the grid square at that location.
Two squares are called adjacent if they are next to each other in any of the 4 directions.
Two squares belong to the same connected component if they have the same color and they are adjacent.
The border of a connected component is all the squares in the connected component that are either adjacent to (at least) a square not in the component, or on the boundary of the grid (the first or last row or column).
You should color the border of the connected component that contains the square grid[row][col] with color.
Return the final grid.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: grid = [[1,1],[1,2]], row = 0, col = 0, color = 3
Output: [[3,3],[3,2]]
```

### Example 2
```text
Input: grid = [[1,2,2],[2,3,2]], row = 0, col = 1, color = 3
Output: [[1,3,3],[2,3,3]]
```

### Example 3
```text
Input: grid = [[1,1,1],[1,1,1],[1,1,1]], row = 1, col = 1, color = 2
Output: [[2,2,2],[2,1,2],[2,2,2]]
```


## Constraints
- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 50
- 1 <= grid[i][j], color <= 1000
- 0 <= row < m
- 0 <= col < n

## Hints
- Use a DFS to find every square in the component.  Then for each square, color it if it has a neighbor that is outside the grid or a different color.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> colorBorder(vector<vector<int>>& grid, int row, int col, int color) {
        
    }
};
```

### java
```java
class Solution {
    public int[][] colorBorder(int[][] grid, int row, int col, int color) {
        
    }
}
```

### python
```python
class Solution(object):
    def colorBorder(self, grid, row, col, color):
        """
        :type grid: List[List[int]]
        :type row: int
        :type col: int
        :type color: int
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def colorBorder(self, grid: List[List[int]], row: int, col: int, color: int) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** colorBorder(int** grid, int gridSize, int* gridColSize, int row, int col, int color, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[][] ColorBorder(int[][] grid, int row, int col, int color) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function(grid, row, col, color) {
    
};
```

### typescript
```typescript
function colorBorder(grid: number[][], row: number, col: number, color: number): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $grid
     * @param Integer $row
     * @param Integer $col
     * @param Integer $color
     * @return Integer[][]
     */
    function colorBorder($grid, $row, $col, $color) {
        
    }
}
```

### swift
```swift
class Solution {
    func colorBorder(_ grid: [[Int]], _ row: Int, _ col: Int, _ color: Int) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun colorBorder(grid: Array<IntArray>, row: Int, col: Int, color: Int): Array<IntArray> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> colorBorder(List<List<int>> grid, int row, int col, int color) {
    
  }
}
```

### golang
```golang
func colorBorder(grid [][]int, row int, col int, color int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} grid
# @param {Integer} row
# @param {Integer} col
# @param {Integer} color
# @return {Integer[][]}
def color_border(grid, row, col, color)
    
end
```

### scala
```scala
object Solution {
    def colorBorder(grid: Array[Array[Int]], row: Int, col: Int, color: Int): Array[Array[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn color_border(grid: Vec<Vec<i32>>, row: i32, col: i32, color: i32) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (color-border grid row col color)
  (-> (listof (listof exact-integer?)) exact-integer? exact-integer? exact-integer? (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec color_border(Grid :: [[integer()]], Row :: integer(), Col :: integer(), Color :: integer()) -> [[integer()]].
color_border(Grid, Row, Col, Color) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec color_border(grid :: [[integer]], row :: integer, col :: integer, color :: integer) :: [[integer]]
  def color_border(grid, row, col, color) do
    
  end
end
```
