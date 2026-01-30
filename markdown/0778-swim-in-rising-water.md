# 778. Swim in Rising Water

- Difficulty: Hard
- Topics: Array, Binary Search, Depth-First Search, Breadth-First Search, Union Find, Heap (Priority Queue), Matrix
- Slug: swim-in-rising-water
- Problem ID: 794

## Description
You are given an n x n integer matrix grid where each value grid[i][j] represents the elevation at that point (i, j).
It starts raining, and water gradually rises over time. At time t, the water level is t, meaning any cell with elevation less than equal to t is submerged or reachable.
You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most t. You can swim infinite distances in zero time. Of course, you must stay within the boundaries of the grid during your swim.
Return the minimum time until you can reach the bottom right square (n - 1, n - 1) if you start at the top left square (0, 0).
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: grid = [[0,2],[1,3]]
Output: 3
Explanation:
At time 0, you are in grid location (0, 0).
You cannot go anywhere else because 4-directionally adjacent neighbors have a higher elevation than t = 0.
You cannot reach point (1, 1) until time 3.
When the depth of water is 3, we can swim anywhere inside the grid.
```
Images:
- https://assets.leetcode.com/uploads/2021/06/29/swim1-grid.jpg

### Example 2
```text
Input: grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
Output: 16
Explanation: The final route is shown.
We need to wait until time 16 so that (0, 0) and (4, 4) are connected.
```
Images:
- https://assets.leetcode.com/uploads/2021/06/29/swim2-grid-1.jpg


## Constraints
- n == grid.length
- n == grid[i].length
- 1 <= n <= 50
- 0 <= grid[i][j] < n2
- Each value grid[i][j] is unique.

## Hints
- Use either Dijkstra's, or binary search for the best time T for which you can reach the end if you only step on squares at most T.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int swimInWater(vector<vector<int>>& grid) {
        
    }
};
```

### java
```java
class Solution {
    public int swimInWater(int[][] grid) {
        
    }
}
```

### python
```python
class Solution(object):
    def swimInWater(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
```

### c
```c
int swimInWater(int** grid, int gridSize, int* gridColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int SwimInWater(int[][] grid) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    
};
```

### typescript
```typescript
function swimInWater(grid: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function swimInWater($grid) {
        
    }
}
```

### swift
```swift
class Solution {
    func swimInWater(_ grid: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun swimInWater(grid: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int swimInWater(List<List<int>> grid) {
    
  }
}
```

### golang
```golang
func swimInWater(grid [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} grid
# @return {Integer}
def swim_in_water(grid)
    
end
```

### scala
```scala
object Solution {
    def swimInWater(grid: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn swim_in_water(grid: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (swim-in-water grid)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec swim_in_water(Grid :: [[integer()]]) -> integer().
swim_in_water(Grid) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec swim_in_water(grid :: [[integer]]) :: integer
  def swim_in_water(grid) do
    
  end
end
```
