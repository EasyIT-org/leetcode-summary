# 1030. Matrix Cells in Distance Order

- Difficulty: Easy
- Topics: Array, Math, Geometry, Sorting, Matrix
- Slug: matrix-cells-in-distance-order
- Problem ID: 1094

## Description
You are given four integers row, cols, rCenter, and cCenter. There is a rows x cols matrix and you are on the cell with the coordinates (rCenter, cCenter).
Return the coordinates of all cells in the matrix, sorted by their distance from (rCenter, cCenter) from the smallest distance to the largest distance. You may return the answer in any order that satisfies this condition.
The distance between two cells (r1, c1) and (r2, c2) is |r1 - r2| + |c1 - c2|.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: rows = 1, cols = 2, rCenter = 0, cCenter = 0
Output: [[0,0],[0,1]]
Explanation: The distances from (0, 0) to other cells are: [0,1]
```

### Example 2
```text
Input: rows = 2, cols = 2, rCenter = 0, cCenter = 1
Output: [[0,1],[0,0],[1,1],[1,0]]
Explanation: The distances from (0, 1) to other cells are: [0,1,1,2]
The answer [[0,1],[1,1],[0,0],[1,0]] would also be accepted as correct.
```

### Example 3
```text
Input: rows = 2, cols = 3, rCenter = 1, cCenter = 2
Output: [[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]
Explanation: The distances from (1, 2) to other cells are: [0,1,1,2,2,3]
There are other answers that would also be accepted as correct, such as [[1,2],[1,1],[0,2],[1,0],[0,1],[0,0]].
```


## Constraints
- 1 <= rows, cols <= 100
- 0 <= rCenter < rows
- 0 <= cCenter < cols

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> allCellsDistOrder(int rows, int cols, int rCenter, int cCenter) {
        
    }
};
```

### java
```java
class Solution {
    public int[][] allCellsDistOrder(int rows, int cols, int rCenter, int cCenter) {
        
    }
}
```

### python
```python
class Solution(object):
    def allCellsDistOrder(self, rows, cols, rCenter, cCenter):
        """
        :type rows: int
        :type cols: int
        :type rCenter: int
        :type cCenter: int
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def allCellsDistOrder(self, rows: int, cols: int, rCenter: int, cCenter: int) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** allCellsDistOrder(int rows, int cols, int rCenter, int cCenter, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[][] AllCellsDistOrder(int rows, int cols, int rCenter, int cCenter) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    
};
```

### typescript
```typescript
function allCellsDistOrder(rows: number, cols: number, rCenter: number, cCenter: number): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $rows
     * @param Integer $cols
     * @param Integer $rCenter
     * @param Integer $cCenter
     * @return Integer[][]
     */
    function allCellsDistOrder($rows, $cols, $rCenter, $cCenter) {
        
    }
}
```

### swift
```swift
class Solution {
    func allCellsDistOrder(_ rows: Int, _ cols: Int, _ rCenter: Int, _ cCenter: Int) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun allCellsDistOrder(rows: Int, cols: Int, rCenter: Int, cCenter: Int): Array<IntArray> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> allCellsDistOrder(int rows, int cols, int rCenter, int cCenter) {
    
  }
}
```

### golang
```golang
func allCellsDistOrder(rows int, cols int, rCenter int, cCenter int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer} rows
# @param {Integer} cols
# @param {Integer} r_center
# @param {Integer} c_center
# @return {Integer[][]}
def all_cells_dist_order(rows, cols, r_center, c_center)
    
end
```

### scala
```scala
object Solution {
    def allCellsDistOrder(rows: Int, cols: Int, rCenter: Int, cCenter: Int): Array[Array[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn all_cells_dist_order(rows: i32, cols: i32, r_center: i32, c_center: i32) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (all-cells-dist-order rows cols rCenter cCenter)
  (-> exact-integer? exact-integer? exact-integer? exact-integer? (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec all_cells_dist_order(Rows :: integer(), Cols :: integer(), RCenter :: integer(), CCenter :: integer()) -> [[integer()]].
all_cells_dist_order(Rows, Cols, RCenter, CCenter) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec all_cells_dist_order(rows :: integer, cols :: integer, r_center :: integer, c_center :: integer) :: [[integer]]
  def all_cells_dist_order(rows, cols, r_center, c_center) do
    
  end
end
```
