# 883. Projection Area of 3D Shapes

- Difficulty: Easy
- Topics: Array, Math, Geometry, Matrix
- Slug: projection-area-of-3d-shapes
- Problem ID: 919

## Description
You are given an n x n grid where we place some 1 x 1 x 1 cubes that are axis-aligned with the x, y, and z axes.
Each value v = grid[i][j] represents a tower of v cubes placed on top of the cell (i, j).
We view the projection of these cubes onto the xy, yz, and zx planes.
A projection is like a shadow, that maps our 3-dimensional figure to a 2-dimensional plane. We are viewing the "shadow" when looking at the cubes from the top, the front, and the side.
Return the total area of all three projections.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: grid = [[1,2],[3,4]]
Output: 17
Explanation: Here are the three projections ("shadows") of the shape made with each axis-aligned plane.
```
Images:
- https://s3-lc-upload.s3.amazonaws.com/uploads/2018/08/02/shadow.png

### Example 2
```text
Input: grid = [[2]]
Output: 5
```
Images:
- https://s3-lc-upload.s3.amazonaws.com/uploads/2018/08/02/shadow.png

### Example 3
```text
Input: grid = [[1,0],[0,2]]
Output: 8
```
Images:
- https://s3-lc-upload.s3.amazonaws.com/uploads/2018/08/02/shadow.png


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
    int projectionArea(vector<vector<int>>& grid) {
        
    }
};
```

### java
```java
class Solution {
    public int projectionArea(int[][] grid) {
        
    }
}
```

### python
```python
class Solution(object):
    def projectionArea(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def projectionArea(self, grid: List[List[int]]) -> int:
```

### c
```c
int projectionArea(int** grid, int gridSize, int* gridColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int ProjectionArea(int[][] grid) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    
};
```

### typescript
```typescript
function projectionArea(grid: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function projectionArea($grid) {
        
    }
}
```

### swift
```swift
class Solution {
    func projectionArea(_ grid: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun projectionArea(grid: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int projectionArea(List<List<int>> grid) {
    
  }
}
```

### golang
```golang
func projectionArea(grid [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} grid
# @return {Integer}
def projection_area(grid)
    
end
```

### scala
```scala
object Solution {
    def projectionArea(grid: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn projection_area(grid: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (projection-area grid)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec projection_area(Grid :: [[integer()]]) -> integer().
projection_area(Grid) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec projection_area(grid :: [[integer]]) :: integer
  def projection_area(grid) do
    
  end
end
```
