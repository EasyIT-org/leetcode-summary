# 994. Rotting Oranges

- Difficulty: Medium
- Topics: Array, Breadth-First Search, Matrix
- Slug: rotting-oranges
- Problem ID: 1036

## Description
You are given an m x n grid where each cell can have one of three values:
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
```
Images:
- https://assets.leetcode.com/uploads/2019/02/16/oranges.png

### Example 2
```text
Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
```
Images:
- https://assets.leetcode.com/uploads/2019/02/16/oranges.png

### Example 3
```text
Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
```
Images:
- https://assets.leetcode.com/uploads/2019/02/16/oranges.png


## Constraints
- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 10
- grid[i][j] is 0, 1, or 2.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int orangesRotting(vector<vector<int>>& grid) {
        
    }
};
```

### java
```java
class Solution {
    public int orangesRotting(int[][] grid) {
        
    }
}
```

### python
```python
class Solution(object):
    def orangesRotting(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
```

### c
```c
int orangesRotting(int** grid, int gridSize, int* gridColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int OrangesRotting(int[][] grid) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    
};
```

### typescript
```typescript
function orangesRotting(grid: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function orangesRotting($grid) {
        
    }
}
```

### swift
```swift
class Solution {
    func orangesRotting(_ grid: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun orangesRotting(grid: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int orangesRotting(List<List<int>> grid) {
    
  }
}
```

### golang
```golang
func orangesRotting(grid [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} grid
# @return {Integer}
def oranges_rotting(grid)
    
end
```

### scala
```scala
object Solution {
    def orangesRotting(grid: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn oranges_rotting(grid: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (oranges-rotting grid)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec oranges_rotting(Grid :: [[integer()]]) -> integer().
oranges_rotting(Grid) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec oranges_rotting(grid :: [[integer]]) :: integer
  def oranges_rotting(grid) do
    
  end
end
```
