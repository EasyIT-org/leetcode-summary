# 861. Score After Flipping Matrix

- Difficulty: Medium
- Topics: Array, Greedy, Bit Manipulation, Matrix
- Slug: score-after-flipping-matrix
- Problem ID: 891

## Description
You are given an m x n binary matrix grid.
A move consists of choosing any row or column and toggling each value in that row or column (i.e., changing all 0's to 1's, and all 1's to 0's).
Every row of the matrix is interpreted as a binary number, and the score of the matrix is the sum of these numbers.
Return the highest possible score after making any number of moves (including zero moves).
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
Output: 39
Explanation: 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
```
Images:
- https://assets.leetcode.com/uploads/2021/07/23/lc-toogle1.jpg

### Example 2
```text
Input: grid = [[0]]
Output: 1
```
Images:
- https://assets.leetcode.com/uploads/2021/07/23/lc-toogle1.jpg


## Constraints
- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 20
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
    int matrixScore(vector<vector<int>>& grid) {
        
    }
};
```

### java
```java
class Solution {
    public int matrixScore(int[][] grid) {
        
    }
}
```

### python
```python
class Solution(object):
    def matrixScore(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def matrixScore(self, grid: List[List[int]]) -> int:
```

### c
```c
int matrixScore(int** grid, int gridSize, int* gridColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MatrixScore(int[][] grid) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
    
};
```

### typescript
```typescript
function matrixScore(grid: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function matrixScore($grid) {
        
    }
}
```

### swift
```swift
class Solution {
    func matrixScore(_ grid: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun matrixScore(grid: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int matrixScore(List<List<int>> grid) {
    
  }
}
```

### golang
```golang
func matrixScore(grid [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} grid
# @return {Integer}
def matrix_score(grid)
    
end
```

### scala
```scala
object Solution {
    def matrixScore(grid: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn matrix_score(grid: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (matrix-score grid)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec matrix_score(Grid :: [[integer()]]) -> integer().
matrix_score(Grid) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec matrix_score(grid :: [[integer]]) :: integer
  def matrix_score(grid) do
    
  end
end
```
