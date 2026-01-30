# 807. Max Increase to Keep City Skyline

- Difficulty: Medium
- Topics: Array, Greedy, Matrix
- Slug: max-increase-to-keep-city-skyline
- Problem ID: 825

## Description
There is a city composed of n x n blocks, where each block contains a single building shaped like a vertical square prism. You are given a 0-indexed n x n integer matrix grid where grid[r][c] represents the height of the building located in the block at row r and column c.
A city's skyline is the outer contour formed by all the building when viewing the side of the city from a distance. The skyline from each cardinal direction north, east, south, and west may be different.
We are allowed to increase the height of any number of buildings by any amount (the amount can be different per building). The height of a 0-height building can also be increased. However, increasing the height of a building should not affect the city's skyline from any cardinal direction.
Return the maximum total sum that the height of the buildings can be increased by without changing the city's skyline from any cardinal direction.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
Output: 35
Explanation: The building heights are shown in the center of the above image.
The skylines when viewed from each cardinal direction are drawn in red.
The grid after increasing the height of buildings without affecting skylines is:
gridNew = [ [8, 4, 8, 7],
            [7, 4, 7, 7],
            [9, 4, 8, 7],
            [3, 3, 3, 3] ]
```
Images:
- https://assets.leetcode.com/uploads/2021/06/21/807-ex1.png

### Example 2
```text
Input: grid = [[0,0,0],[0,0,0],[0,0,0]]
Output: 0
Explanation: Increasing the height of any building will result in the skyline changing.
```
Images:
- https://assets.leetcode.com/uploads/2021/06/21/807-ex1.png


## Constraints
- n == grid.length
- n == grid[r].length
- 2 <= n <= 50
- 0 <= grid[r][c] <= 100

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxIncreaseKeepingSkyline(vector<vector<int>>& grid) {
        
    }
};
```

### java
```java
class Solution {
    public int maxIncreaseKeepingSkyline(int[][] grid) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxIncreaseKeepingSkyline(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxIncreaseKeepingSkyline(self, grid: List[List[int]]) -> int:
```

### c
```c
int maxIncreaseKeepingSkyline(int** grid, int gridSize, int* gridColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxIncreaseKeepingSkyline(int[][] grid) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    
};
```

### typescript
```typescript
function maxIncreaseKeepingSkyline(grid: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function maxIncreaseKeepingSkyline($grid) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxIncreaseKeepingSkyline(_ grid: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxIncreaseKeepingSkyline(grid: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxIncreaseKeepingSkyline(List<List<int>> grid) {
    
  }
}
```

### golang
```golang
func maxIncreaseKeepingSkyline(grid [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} grid
# @return {Integer}
def max_increase_keeping_skyline(grid)
    
end
```

### scala
```scala
object Solution {
    def maxIncreaseKeepingSkyline(grid: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_increase_keeping_skyline(grid: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-increase-keeping-skyline grid)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec max_increase_keeping_skyline(Grid :: [[integer()]]) -> integer().
max_increase_keeping_skyline(Grid) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_increase_keeping_skyline(grid :: [[integer]]) :: integer
  def max_increase_keeping_skyline(grid) do
    
  end
end
```
