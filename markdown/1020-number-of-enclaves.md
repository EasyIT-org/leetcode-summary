# 1020. Number of Enclaves

- Difficulty: Medium
- Topics: Array, Depth-First Search, Breadth-First Search, Union Find, Matrix
- Slug: number-of-enclaves
- Problem ID: 1073

## Description
You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.
A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the grid.
Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
Output: 3
Explanation: There are three 1s that are enclosed by 0s, and one 1 that is not enclosed because its on the boundary.
```
Images:
- https://assets.leetcode.com/uploads/2021/02/18/enclaves1.jpg

### Example 2
```text
Input: grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
Output: 0
Explanation: All 1s are either on the boundary or can reach the boundary.
```
Images:
- https://assets.leetcode.com/uploads/2021/02/18/enclaves2.jpg


## Constraints
- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 500
- grid[i][j] is either 0 or 1.

## Hints
- Can you model this problem as a graph problem?  Create n * m + 1 nodes where n * m nodes represents each cell of the map and one extra node to represent the exterior of the map.
- In the map add edges between neighbors on land cells. And add edges between the exterior and land nodes which are in the boundary.
Return as answer the number of nodes that are not reachable from the exterior node.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numEnclaves(vector<vector<int>>& grid) {
        
    }
};
```

### java
```java
class Solution {
    public int numEnclaves(int[][] grid) {
        
    }
}
```

### python
```python
class Solution(object):
    def numEnclaves(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numEnclaves(self, grid: List[List[int]]) -> int:
```

### c
```c
int numEnclaves(int** grid, int gridSize, int* gridColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumEnclaves(int[][] grid) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    
};
```

### typescript
```typescript
function numEnclaves(grid: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function numEnclaves($grid) {
        
    }
}
```

### swift
```swift
class Solution {
    func numEnclaves(_ grid: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numEnclaves(grid: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numEnclaves(List<List<int>> grid) {
    
  }
}
```

### golang
```golang
func numEnclaves(grid [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} grid
# @return {Integer}
def num_enclaves(grid)
    
end
```

### scala
```scala
object Solution {
    def numEnclaves(grid: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_enclaves(grid: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-enclaves grid)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec num_enclaves(Grid :: [[integer()]]) -> integer().
num_enclaves(Grid) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_enclaves(grid :: [[integer]]) :: integer
  def num_enclaves(grid) do
    
  end
end
```
