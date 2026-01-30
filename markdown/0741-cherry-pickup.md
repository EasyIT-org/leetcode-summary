# 741. Cherry Pickup

- Difficulty: Hard
- Topics: Array, Dynamic Programming, Matrix
- Slug: cherry-pickup
- Problem ID: 741

## Description
You are given an n x n grid representing a field of cherries, each cell is one of three possible integers.
Return the maximum number of cherries you can collect by following the rules below:
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: grid = [[0,1,-1],[1,0,-1],[1,1,1]]
Output: 5
Explanation: The player started at (0, 0) and went down, down, right right to reach (2, 2).
4 cherries were picked up during this single trip, and the matrix becomes [[0,1,-1],[0,0,-1],[0,0,0]].
Then, the player went left, up, up, left to return home, picking up one more cherry.
The total number of cherries picked up is 5, and this is the maximum possible.
```
Images:
- https://assets.leetcode.com/uploads/2020/12/14/grid.jpg

### Example 2
```text
Input: grid = [[1,1,-1],[1,-1,1],[-1,1,1]]
Output: 0
```
Images:
- https://assets.leetcode.com/uploads/2020/12/14/grid.jpg


## Constraints
- n == grid.length
- n == grid[i].length
- 1 <= n <= 50
- grid[i][j] is -1, 0, or 1.
- grid[0][0] != -1
- grid[n - 1][n - 1] != -1

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int cherryPickup(vector<vector<int>>& grid) {
        
    }
};
```

### java
```java
class Solution {
    public int cherryPickup(int[][] grid) {
        
    }
}
```

### python
```python
class Solution(object):
    def cherryPickup(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def cherryPickup(self, grid: List[List[int]]) -> int:
```

### c
```c
int cherryPickup(int** grid, int gridSize, int* gridColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int CherryPickup(int[][] grid) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    
};
```

### typescript
```typescript
function cherryPickup(grid: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function cherryPickup($grid) {
        
    }
}
```

### swift
```swift
class Solution {
    func cherryPickup(_ grid: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun cherryPickup(grid: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int cherryPickup(List<List<int>> grid) {
    
  }
}
```

### golang
```golang
func cherryPickup(grid [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} grid
# @return {Integer}
def cherry_pickup(grid)
    
end
```

### scala
```scala
object Solution {
    def cherryPickup(grid: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn cherry_pickup(grid: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (cherry-pickup grid)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec cherry_pickup(Grid :: [[integer()]]) -> integer().
cherry_pickup(Grid) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec cherry_pickup(grid :: [[integer]]) :: integer
  def cherry_pickup(grid) do
    
  end
end
```
