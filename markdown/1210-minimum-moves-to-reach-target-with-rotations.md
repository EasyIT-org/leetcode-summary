# 1210. Minimum Moves to Reach Target with Rotations

- Difficulty: Hard
- Topics: Array, Breadth-First Search, Matrix
- Slug: minimum-moves-to-reach-target-with-rotations
- Problem ID: 1322

## Description
In an n*n grid, there is a snake that spans 2 cells and starts moving from the top left corner at (0, 0) and (0, 1). The grid has empty cells represented by zeros and blocked cells represented by ones. The snake wants to reach the lower right corner at (n-1, n-2) and (n-1, n-1).
In one move the snake can:
Return the minimum number of moves to reach the target.
If there is no way to reach the target, return -1.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: grid = [[0,0,0,0,0,1],
               [1,1,0,0,1,0],
               [0,0,0,0,1,1],
               [0,0,1,0,1,0],
               [0,1,1,0,0,0],
               [0,1,1,0,0,0]]
Output: 11
Explanation:
One possible solution is [right, right, rotate clockwise, right, down, down, down, down, rotate counterclockwise, right, down].
```
Images:
- https://assets.leetcode.com/uploads/2019/09/24/image.png

### Example 2
```text
Input: grid = [[0,0,1,1,1,1],
               [0,0,0,0,1,1],
               [1,1,0,0,0,1],
               [1,1,1,0,0,1],
               [1,1,1,0,0,1],
               [1,1,1,0,0,0]]
Output: 9
```
Images:
- https://assets.leetcode.com/uploads/2019/09/24/image.png


## Constraints
- 2 <= n <= 100
- 0 <= grid[i][j] <= 1
- It is guaranteed that the snake starts at empty cells.

## Hints
- Use BFS to find the answer.
- The state of the BFS is the position (x, y) along with a binary value that specifies if the position is horizontal or vertical.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int minimumMoves(vector<vector<int>>& grid) {
        
    }
};
```

### java
```java
class Solution {
    public int minimumMoves(int[][] grid) {
        
    }
}
```

### python
```python
class Solution(object):
    def minimumMoves(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minimumMoves(self, grid: List[List[int]]) -> int:
```

### c
```c


int minimumMoves(int** grid, int gridSize, int* gridColSize){

}
```

### csharp
```csharp
public class Solution {
    public int MinimumMoves(int[][] grid) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function(grid) {
    
};
```

### typescript
```typescript
function minimumMoves(grid: number[][]): number {

};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function minimumMoves($grid) {
        
    }
}
```

### swift
```swift
class Solution {
    func minimumMoves(_ grid: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minimumMoves(grid: Array<IntArray>): Int {
        
    }
}
```

### golang
```golang
func minimumMoves(grid [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} grid
# @return {Integer}
def minimum_moves(grid)
    
end
```

### scala
```scala
object Solution {
    def minimumMoves(grid: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn minimum_moves(grid: Vec<Vec<i32>>) -> i32 {
        
    }
}
```
