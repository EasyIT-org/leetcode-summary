# 934. Shortest Bridge

- Difficulty: Medium
- Topics: Array, Depth-First Search, Breadth-First Search, Matrix
- Slug: shortest-bridge
- Problem ID: 971

## Description
You are given an n x n binary matrix grid where 1 represents land and 0 represents water.
An island is a 4-directionally connected group of 1's not connected to any other 1's. There are exactly two islands in grid.
You may change 0's to 1's to connect the two islands to form one island.
Return the smallest number of 0's you must flip to connect the two islands.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: grid = [[0,1],[1,0]]
Output: 1
```

### Example 2
```text
Input: grid = [[0,1,0],[0,0,0],[0,0,1]]
Output: 2
```

### Example 3
```text
Input: grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Output: 1
```


## Constraints
- n == grid.length == grid[i].length
- 2 <= n <= 100
- grid[i][j] is either 0 or 1.
- There are exactly two islands in grid.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int shortestBridge(vector<vector<int>>& grid) {
        
    }
};
```

### java
```java
class Solution {
    public int shortestBridge(int[][] grid) {
        
    }
}
```

### python
```python
class Solution(object):
    def shortestBridge(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def shortestBridge(self, grid: List[List[int]]) -> int:
```

### c
```c
int shortestBridge(int** grid, int gridSize, int* gridColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int ShortestBridge(int[][] grid) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
    
};
```

### typescript
```typescript
function shortestBridge(grid: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function shortestBridge($grid) {
        
    }
}
```

### swift
```swift
class Solution {
    func shortestBridge(_ grid: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun shortestBridge(grid: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int shortestBridge(List<List<int>> grid) {
    
  }
}
```

### golang
```golang
func shortestBridge(grid [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} grid
# @return {Integer}
def shortest_bridge(grid)
    
end
```

### scala
```scala
object Solution {
    def shortestBridge(grid: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn shortest_bridge(grid: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (shortest-bridge grid)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec shortest_bridge(Grid :: [[integer()]]) -> integer().
shortest_bridge(Grid) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec shortest_bridge(grid :: [[integer]]) :: integer
  def shortest_bridge(grid) do
    
  end
end
```
