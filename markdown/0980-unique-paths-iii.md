# 980. Unique Paths III

- Difficulty: Hard
- Topics: Array, Backtracking, Bit Manipulation, Matrix
- Slug: unique-paths-iii
- Problem ID: 1022

## Description
You are given an m x n integer array grid where grid[i][j] could be:
Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
Output: 2
Explanation: We have the following two paths: 
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)
```
Images:
- https://assets.leetcode.com/uploads/2021/08/02/lc-unique1.jpg

### Example 2
```text
Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
Output: 4
Explanation: We have the following four paths: 
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)
```
Images:
- https://assets.leetcode.com/uploads/2021/08/02/lc-unique2.jpg

### Example 3
```text
Input: grid = [[0,1],[2,0]]
Output: 0
Explanation: There is no path that walks over every empty square exactly once.
Note that the starting and ending square can be anywhere in the grid.
```
Images:
- https://assets.leetcode.com/uploads/2021/08/02/lc-unique3-.jpg


## Constraints
- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 20
- 1 <= m * n <= 20
- -1 <= grid[i][j] <= 2
- There is exactly one starting cell and one ending cell.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int uniquePathsIII(vector<vector<int>>& grid) {
        
    }
};
```

### java
```java
class Solution {
    public int uniquePathsIII(int[][] grid) {
        
    }
}
```

### python
```python
class Solution(object):
    def uniquePathsIII(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def uniquePathsIII(self, grid: List[List[int]]) -> int:
```

### c
```c
int uniquePathsIII(int** grid, int gridSize, int* gridColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int UniquePathsIII(int[][] grid) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    
};
```

### typescript
```typescript
function uniquePathsIII(grid: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function uniquePathsIII($grid) {
        
    }
}
```

### swift
```swift
class Solution {
    func uniquePathsIII(_ grid: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun uniquePathsIII(grid: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int uniquePathsIII(List<List<int>> grid) {
    
  }
}
```

### golang
```golang
func uniquePathsIII(grid [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} grid
# @return {Integer}
def unique_paths_iii(grid)
    
end
```

### scala
```scala
object Solution {
    def uniquePathsIII(grid: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn unique_paths_iii(grid: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (unique-paths-iii grid)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec unique_paths_iii(Grid :: [[integer()]]) -> integer().
unique_paths_iii(Grid) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec unique_paths_iii(grid :: [[integer]]) :: integer
  def unique_paths_iii(grid) do
    
  end
end
```
