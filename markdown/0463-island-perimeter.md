# 463. Island Perimeter

- Difficulty: Easy
- Topics: Array, Depth-First Search, Breadth-First Search, Matrix
- Slug: island-perimeter
- Problem ID: 463

## Description
You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.
Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
Output: 16
Explanation: The perimeter is the 16 yellow stripes in the image above.
```
Images:
- https://assets.leetcode.com/uploads/2018/10/12/island.png

### Example 2
```text
Input: grid = [[1]]
Output: 4
```
Images:
- https://assets.leetcode.com/uploads/2018/10/12/island.png

### Example 3
```text
Input: grid = [[1,0]]
Output: 4
```
Images:
- https://assets.leetcode.com/uploads/2018/10/12/island.png


## Constraints
- row == grid.length
- col == grid[i].length
- 1 <= row, col <= 100
- grid[i][j] is 0 or 1.
- There is exactly one island in grid.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int islandPerimeter(vector<vector<int>>& grid) {
        
    }
};
```

### java
```java
class Solution {
    public int islandPerimeter(int[][] grid) {
        
    }
}
```

### python
```python
class Solution(object):
    def islandPerimeter(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
```

### c
```c
int islandPerimeter(int** grid, int gridSize, int* gridColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int IslandPerimeter(int[][] grid) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    
};
```

### typescript
```typescript
function islandPerimeter(grid: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function islandPerimeter($grid) {
        
    }
}
```

### swift
```swift
class Solution {
    func islandPerimeter(_ grid: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun islandPerimeter(grid: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int islandPerimeter(List<List<int>> grid) {
    
  }
}
```

### golang
```golang
func islandPerimeter(grid [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} grid
# @return {Integer}
def island_perimeter(grid)
    
end
```

### scala
```scala
object Solution {
    def islandPerimeter(grid: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn island_perimeter(grid: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (island-perimeter grid)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec island_perimeter(Grid :: [[integer()]]) -> integer().
island_perimeter(Grid) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec island_perimeter(grid :: [[integer]]) :: integer
  def island_perimeter(grid) do
    
  end
end
```
