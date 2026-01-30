# 827. Making A Large Island

- Difficulty: Hard
- Topics: Array, Depth-First Search, Breadth-First Search, Union Find, Matrix
- Slug: making-a-large-island
- Problem ID: 854

## Description
You are given an n x n binary matrix grid. You are allowed to change at most one 0 to be 1.
Return the size of the largest island in grid after applying this operation.
An island is a 4-directionally connected group of 1s.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: grid = [[1,0],[0,1]]
Output: 3
Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.
```

### Example 2
```text
Input: grid = [[1,1],[1,0]]
Output: 4
Explanation: Change the 0 to 1 and make the island bigger, only one island with area = 4.
```

### Example 3
```text
Input: grid = [[1,1],[1,1]]
Output: 4
Explanation: Can't change any 0 to 1, only one island with area = 4.
```


## Constraints
- n == grid.length
- n == grid[i].length
- 1 <= n <= 500
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
    int largestIsland(vector<vector<int>>& grid) {
        
    }
};
```

### java
```java
class Solution {
    public int largestIsland(int[][] grid) {
        
    }
}
```

### python
```python
class Solution(object):
    def largestIsland(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def largestIsland(self, grid: List[List[int]]) -> int:
```

### c
```c
int largestIsland(int** grid, int gridSize, int* gridColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int LargestIsland(int[][] grid) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    
};
```

### typescript
```typescript
function largestIsland(grid: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function largestIsland($grid) {
        
    }
}
```

### swift
```swift
class Solution {
    func largestIsland(_ grid: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun largestIsland(grid: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int largestIsland(List<List<int>> grid) {
    
  }
}
```

### golang
```golang
func largestIsland(grid [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} grid
# @return {Integer}
def largest_island(grid)
    
end
```

### scala
```scala
object Solution {
    def largestIsland(grid: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn largest_island(grid: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (largest-island grid)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec largest_island(Grid :: [[integer()]]) -> integer().
largest_island(Grid) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec largest_island(grid :: [[integer]]) :: integer
  def largest_island(grid) do
    
  end
end
```
