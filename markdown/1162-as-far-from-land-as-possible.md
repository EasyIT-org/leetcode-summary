# 1162. As Far from Land as Possible

- Difficulty: Medium
- Topics: Array, Dynamic Programming, Breadth-First Search, Matrix
- Slug: as-far-from-land-as-possible
- Problem ID: 1117

## Description
Given an n x n grid containing only values 0 and 1, where 0 represents water and 1 represents land, find a water cell such that its distance to the nearest land cell is maximized, and return the distance. If no land or water exists in the grid, return -1.
The distance used in this problem is the Manhattan distance: the distance between two cells (x0, y0) and (x1, y1) is |x0 - x1| + |y0 - y1|.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: grid = [[1,0,1],[0,0,0],[1,0,1]]
Output: 2
Explanation: The cell (1, 1) is as far as possible from all the land with distance 2.
```
Images:
- https://assets.leetcode.com/uploads/2019/05/03/1336_ex1.JPG

### Example 2
```text
Input: grid = [[1,0,0],[0,0,0],[0,0,0]]
Output: 4
Explanation: The cell (2, 2) is as far as possible from all the land with distance 4.
```
Images:
- https://assets.leetcode.com/uploads/2019/05/03/1336_ex2.JPG


## Constraints
- n == grid.length
- n == grid[i].length
- 1 <= n <= 100
- grid[i][j] is 0 or 1

## Hints
- Can you think of this problem in a backwards way ?
- Imagine expanding outward from each land cell. What kind of search does that ?
- Use BFS starting from all land cells in the same time.
- When do you reach the furthest water cell?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxDistance(vector<vector<int>>& grid) {
        
    }
};
```

### java
```java
class Solution {
    public int maxDistance(int[][] grid) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxDistance(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxDistance(self, grid: List[List[int]]) -> int:
```

### c
```c
int maxDistance(int** grid, int gridSize, int* gridColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxDistance(int[][] grid) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    
};
```

### typescript
```typescript
function maxDistance(grid: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function maxDistance($grid) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxDistance(_ grid: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxDistance(grid: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxDistance(List<List<int>> grid) {
    
  }
}
```

### golang
```golang
func maxDistance(grid [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} grid
# @return {Integer}
def max_distance(grid)
    
end
```

### scala
```scala
object Solution {
    def maxDistance(grid: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_distance(grid: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-distance grid)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec max_distance(Grid :: [[integer()]]) -> integer().
max_distance(Grid) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_distance(grid :: [[integer]]) :: integer
  def max_distance(grid) do
    
  end
end
```
