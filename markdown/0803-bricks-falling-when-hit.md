# 803. Bricks Falling When Hit

- Difficulty: Hard
- Topics: Array, Union Find, Matrix
- Slug: bricks-falling-when-hit
- Problem ID: 821

## Description
You are given an m x n binary grid, where each 1 represents a brick and 0 represents an empty space. A brick is stable if:
You are also given an array hits, which is a sequence of erasures we want to apply. Each time we want to erase the brick at the location hits[i] = (rowi, coli). The brick on that location (if it exists) will disappear. Some other bricks may no longer be stable because of that erasure and will fall. Once a brick falls, it is immediately erased from the grid (i.e., it does not land on other stable bricks).
Return an array result, where each result[i] is the number of bricks that will fall after the ith erasure is applied.
Note that an erasure may refer to a location with no brick, and if it does, no bricks drop.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: grid = [[1,0,0,0],[1,1,1,0]], hits = [[1,0]]
Output: [2]
Explanation: Starting with the grid:
[[1,0,0,0],
 [1,1,1,0]]
We erase the underlined brick at (1,0), resulting in the grid:
[[1,0,0,0],
 [0,1,1,0]]
The two underlined bricks are no longer stable as they are no longer connected to the top nor adjacent to another stable brick, so they will fall. The resulting grid is:
[[1,0,0,0],
 [0,0,0,0]]
Hence the result is [2].
```

### Example 2
```text
Input: grid = [[1,0,0,0],[1,1,0,0]], hits = [[1,1],[1,0]]
Output: [0,0]
Explanation: Starting with the grid:
[[1,0,0,0],
 [1,1,0,0]]
We erase the underlined brick at (1,1), resulting in the grid:
[[1,0,0,0],
 [1,0,0,0]]
All remaining bricks are still stable, so no bricks fall. The grid remains the same:
[[1,0,0,0],
 [1,0,0,0]]
Next, we erase the underlined brick at (1,0), resulting in the grid:
[[1,0,0,0],
 [0,0,0,0]]
Once again, all remaining bricks are still stable, so no bricks fall.
Hence the result is [0,0].
```


## Constraints
- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 200
- grid[i][j] is 0 or 1.
- 1 <= hits.length <= 4 * 104
- hits[i].length == 2
- 0 <= xi <= m - 1
- 0 <= yi <= n - 1
- All (xi, yi) are unique.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> hitBricks(vector<vector<int>>& grid, vector<vector<int>>& hits) {
        
    }
};
```

### java
```java
class Solution {
    public int[] hitBricks(int[][] grid, int[][] hits) {
        
    }
}
```

### python
```python
class Solution(object):
    def hitBricks(self, grid, hits):
        """
        :type grid: List[List[int]]
        :type hits: List[List[int]]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def hitBricks(self, grid: List[List[int]], hits: List[List[int]]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* hitBricks(int** grid, int gridSize, int* gridColSize, int** hits, int hitsSize, int* hitsColSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] HitBricks(int[][] grid, int[][] hits) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} grid
 * @param {number[][]} hits
 * @return {number[]}
 */
var hitBricks = function(grid, hits) {
    
};
```

### typescript
```typescript
function hitBricks(grid: number[][], hits: number[][]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $grid
     * @param Integer[][] $hits
     * @return Integer[]
     */
    function hitBricks($grid, $hits) {
        
    }
}
```

### swift
```swift
class Solution {
    func hitBricks(_ grid: [[Int]], _ hits: [[Int]]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun hitBricks(grid: Array<IntArray>, hits: Array<IntArray>): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> hitBricks(List<List<int>> grid, List<List<int>> hits) {
    
  }
}
```

### golang
```golang
func hitBricks(grid [][]int, hits [][]int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} grid
# @param {Integer[][]} hits
# @return {Integer[]}
def hit_bricks(grid, hits)
    
end
```

### scala
```scala
object Solution {
    def hitBricks(grid: Array[Array[Int]], hits: Array[Array[Int]]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn hit_bricks(grid: Vec<Vec<i32>>, hits: Vec<Vec<i32>>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (hit-bricks grid hits)
  (-> (listof (listof exact-integer?)) (listof (listof exact-integer?)) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec hit_bricks(Grid :: [[integer()]], Hits :: [[integer()]]) -> [integer()].
hit_bricks(Grid, Hits) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec hit_bricks(grid :: [[integer]], hits :: [[integer]]) :: [integer]
  def hit_bricks(grid, hits) do
    
  end
end
```
