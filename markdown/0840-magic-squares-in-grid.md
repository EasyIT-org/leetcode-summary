# 840. Magic Squares In Grid

- Difficulty: Medium
- Topics: Array, Hash Table, Math, Matrix
- Slug: magic-squares-in-grid
- Problem ID: 870

## Description
A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that each row, column, and both diagonals all have the same sum.
Given a row x col grid of integers, how many 3 x 3 magic square subgrids are there?
Note: while a magic square can only contain numbers from 1 to 9, grid may contain numbers up to 15.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: grid = [[4,3,8,4],[9,5,1,9],[2,7,6,2]]
Output: 1
Explanation: 
The following subgrid is a 3 x 3 magic square:

while this one is not:

In total, there is only one magic square inside the given grid.
```
Images:
- https://assets.leetcode.com/uploads/2020/09/11/magic_main.jpg

### Example 2
```text
Input: grid = [[8]]
Output: 0
```
Images:
- https://assets.leetcode.com/uploads/2020/09/11/magic_invalid.jpg


## Constraints
- row == grid.length
- col == grid[i].length
- 1 <= row, col <= 10
- 0 <= grid[i][j] <= 15

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numMagicSquaresInside(vector<vector<int>>& grid) {
        
    }
};
```

### java
```java
class Solution {
    public int numMagicSquaresInside(int[][] grid) {
        
    }
}
```

### python
```python
class Solution(object):
    def numMagicSquaresInside(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numMagicSquaresInside(self, grid: List[List[int]]) -> int:
```

### c
```c
int numMagicSquaresInside(int** grid, int gridSize, int* gridColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumMagicSquaresInside(int[][] grid) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    
};
```

### typescript
```typescript
function numMagicSquaresInside(grid: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function numMagicSquaresInside($grid) {
        
    }
}
```

### swift
```swift
class Solution {
    func numMagicSquaresInside(_ grid: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numMagicSquaresInside(grid: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numMagicSquaresInside(List<List<int>> grid) {
    
  }
}
```

### golang
```golang
func numMagicSquaresInside(grid [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} grid
# @return {Integer}
def num_magic_squares_inside(grid)
    
end
```

### scala
```scala
object Solution {
    def numMagicSquaresInside(grid: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_magic_squares_inside(grid: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-magic-squares-inside grid)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec num_magic_squares_inside(Grid :: [[integer()]]) -> integer().
num_magic_squares_inside(Grid) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_magic_squares_inside(grid :: [[integer]]) :: integer
  def num_magic_squares_inside(grid) do
    
  end
end
```
