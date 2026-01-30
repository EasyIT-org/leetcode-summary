# 892. Surface Area of 3D Shapes

- Difficulty: Easy
- Topics: Array, Math, Geometry, Matrix
- Slug: surface-area-of-3d-shapes
- Problem ID: 928

## Description
You are given an n x n grid where you have placed some 1 x 1 x 1 cubes. Each value v = grid[i][j] represents a tower of v cubes placed on top of cell (i, j).
After placing these cubes, you have decided to glue any directly adjacent cubes to each other, forming several irregular 3D shapes.
Return the total surface area of the resulting shapes.
Note: The bottom face of each shape counts toward its surface area.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: grid = [[1,2],[3,4]]
Output: 34
```
Images:
- https://assets.leetcode.com/uploads/2021/01/08/tmp-grid2.jpg

### Example 2
```text
Input: grid = [[1,1,1],[1,0,1],[1,1,1]]
Output: 32
```
Images:
- https://assets.leetcode.com/uploads/2021/01/08/tmp-grid4.jpg

### Example 3
```text
Input: grid = [[2,2,2],[2,1,2],[2,2,2]]
Output: 46
```
Images:
- https://assets.leetcode.com/uploads/2021/01/08/tmp-grid5.jpg


## Constraints
- n == grid.length == grid[i].length
- 1 <= n <= 50
- 0 <= grid[i][j] <= 50

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int surfaceArea(vector<vector<int>>& grid) {
        
    }
};
```

### java
```java
class Solution {
    public int surfaceArea(int[][] grid) {
        
    }
}
```

### python
```python
class Solution(object):
    def surfaceArea(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def surfaceArea(self, grid: List[List[int]]) -> int:
```

### c
```c
int surfaceArea(int** grid, int gridSize, int* gridColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int SurfaceArea(int[][] grid) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    
};
```

### typescript
```typescript
function surfaceArea(grid: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function surfaceArea($grid) {
        
    }
}
```

### swift
```swift
class Solution {
    func surfaceArea(_ grid: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun surfaceArea(grid: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int surfaceArea(List<List<int>> grid) {
    
  }
}
```

### golang
```golang
func surfaceArea(grid [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} grid
# @return {Integer}
def surface_area(grid)
    
end
```

### scala
```scala
object Solution {
    def surfaceArea(grid: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn surface_area(grid: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (surface-area grid)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec surface_area(Grid :: [[integer()]]) -> integer().
surface_area(Grid) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec surface_area(grid :: [[integer]]) :: integer
  def surface_area(grid) do
    
  end
end
```
