# 885. Spiral Matrix III

- Difficulty: Medium
- Topics: Array, Matrix, Simulation
- Slug: spiral-matrix-iii
- Problem ID: 921

## Description
You start at the cell (rStart, cStart) of an rows x cols grid facing east. The northwest corner is at the first row and column in the grid, and the southeast corner is at the last row and column.
You will walk in a clockwise spiral shape to visit every position in this grid. Whenever you move outside the grid's boundary, we continue our walk outside the grid (but may return to the grid boundary later.). Eventually, we reach all rows * cols spaces of the grid.
Return an array of coordinates representing the positions of the grid in the order you visited them.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: rows = 1, cols = 4, rStart = 0, cStart = 0
Output: [[0,0],[0,1],[0,2],[0,3]]
```
Images:
- https://s3-lc-upload.s3.amazonaws.com/uploads/2018/08/24/example_1.png

### Example 2
```text
Input: rows = 5, cols = 6, rStart = 1, cStart = 4
Output: [[1,4],[1,5],[2,5],[2,4],[2,3],[1,3],[0,3],[0,4],[0,5],[3,5],[3,4],[3,3],[3,2],[2,2],[1,2],[0,2],[4,5],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[0,1],[4,0],[3,0],[2,0],[1,0],[0,0]]
```
Images:
- https://s3-lc-upload.s3.amazonaws.com/uploads/2018/08/24/example_2.png


## Constraints
- 1 <= rows, cols <= 100
- 0 <= rStart < rows
- 0 <= cStart < cols

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> spiralMatrixIII(int rows, int cols, int rStart, int cStart) {
        
    }
};
```

### java
```java
class Solution {
    public int[][] spiralMatrixIII(int rows, int cols, int rStart, int cStart) {
        
    }
}
```

### python
```python
class Solution(object):
    def spiralMatrixIII(self, rows, cols, rStart, cStart):
        """
        :type rows: int
        :type cols: int
        :type rStart: int
        :type cStart: int
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def spiralMatrixIII(self, rows: int, cols: int, rStart: int, cStart: int) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** spiralMatrixIII(int rows, int cols, int rStart, int cStart, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[][] SpiralMatrixIII(int rows, int cols, int rStart, int cStart) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    
};
```

### typescript
```typescript
function spiralMatrixIII(rows: number, cols: number, rStart: number, cStart: number): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $rows
     * @param Integer $cols
     * @param Integer $rStart
     * @param Integer $cStart
     * @return Integer[][]
     */
    function spiralMatrixIII($rows, $cols, $rStart, $cStart) {
        
    }
}
```

### swift
```swift
class Solution {
    func spiralMatrixIII(_ rows: Int, _ cols: Int, _ rStart: Int, _ cStart: Int) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun spiralMatrixIII(rows: Int, cols: Int, rStart: Int, cStart: Int): Array<IntArray> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> spiralMatrixIII(int rows, int cols, int rStart, int cStart) {
    
  }
}
```

### golang
```golang
func spiralMatrixIII(rows int, cols int, rStart int, cStart int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer} rows
# @param {Integer} cols
# @param {Integer} r_start
# @param {Integer} c_start
# @return {Integer[][]}
def spiral_matrix_iii(rows, cols, r_start, c_start)
    
end
```

### scala
```scala
object Solution {
    def spiralMatrixIII(rows: Int, cols: Int, rStart: Int, cStart: Int): Array[Array[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn spiral_matrix_iii(rows: i32, cols: i32, r_start: i32, c_start: i32) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (spiral-matrix-iii rows cols rStart cStart)
  (-> exact-integer? exact-integer? exact-integer? exact-integer? (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec spiral_matrix_iii(Rows :: integer(), Cols :: integer(), RStart :: integer(), CStart :: integer()) -> [[integer()]].
spiral_matrix_iii(Rows, Cols, RStart, CStart) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec spiral_matrix_iii(rows :: integer, cols :: integer, r_start :: integer, c_start :: integer) :: [[integer]]
  def spiral_matrix_iii(rows, cols, r_start, c_start) do
    
  end
end
```
