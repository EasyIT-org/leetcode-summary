# 200. Number of Islands

- Difficulty: Medium
- Topics: Array, Depth-First Search, Breadth-First Search, Union Find, Matrix
- Slug: number-of-islands
- Problem ID: 200

## Description
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
```

### Example 2
```text
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
```


## Constraints
- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 300
- grid[i][j] is '0' or '1'.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        
    }
};
```

### java
```java
class Solution {
    public int numIslands(char[][] grid) {
        
    }
}
```

### python
```python
class Solution(object):
    def numIslands(self, grid):
        """
        :type grid: List[List[str]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
```

### c
```c
int numIslands(char** grid, int gridSize, int* gridColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumIslands(char[][] grid) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
};
```

### typescript
```typescript
function numIslands(grid: string[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[][] $grid
     * @return Integer
     */
    function numIslands($grid) {
        
    }
}
```

### swift
```swift
class Solution {
    func numIslands(_ grid: [[Character]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numIslands(grid: Array<CharArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numIslands(List<List<String>> grid) {
    
  }
}
```

### golang
```golang
func numIslands(grid [][]byte) int {
    
}
```

### ruby
```ruby
# @param {Character[][]} grid
# @return {Integer}
def num_islands(grid)
    
end
```

### scala
```scala
object Solution {
    def numIslands(grid: Array[Array[Char]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_islands(grid: Vec<Vec<char>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-islands grid)
  (-> (listof (listof char?)) exact-integer?)
  )
```

### erlang
```erlang
-spec num_islands(Grid :: [[char()]]) -> integer().
num_islands(Grid) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_islands(grid :: [[char]]) :: integer
  def num_islands(grid) do
    
  end
end
```
