# 1072. Flip Columns For Maximum Number of Equal Rows

- Difficulty: Medium
- Topics: Array, Hash Table, Matrix
- Slug: flip-columns-for-maximum-number-of-equal-rows
- Problem ID: 1147

## Description
You are given an m x n binary matrix matrix.
You can choose any number of columns in the matrix and flip every cell in that column (i.e., Change the value of the cell from 0 to 1 or vice versa).
Return the maximum number of rows that have all values equal after some number of flips.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: matrix = [[0,1],[1,1]]
Output: 1
Explanation: After flipping no values, 1 row has all values equal.
```

### Example 2
```text
Input: matrix = [[0,1],[1,0]]
Output: 2
Explanation: After flipping values in the first column, both rows have equal values.
```

### Example 3
```text
Input: matrix = [[0,0,0],[0,0,1],[1,1,0]]
Output: 2
Explanation: After flipping values in the first two columns, the last two rows have equal values.
```


## Constraints
- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 300
- matrix[i][j] is either 0 or 1.

## Hints
- Flipping a subset of columns is like doing a bitwise XOR of some number K onto each row.  We want rows X with X ^ K = all 0s or all 1s.  This is the same as X = X^K ^K = (all 0s or all 1s) ^ K, so we want to count rows that have opposite bits set.  For example, if K = 1, then we count rows X = (00000...001, or 1111....110).

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxEqualRowsAfterFlips(vector<vector<int>>& matrix) {
        
    }
};
```

### java
```java
class Solution {
    public int maxEqualRowsAfterFlips(int[][] matrix) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxEqualRowsAfterFlips(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxEqualRowsAfterFlips(self, matrix: List[List[int]]) -> int:
```

### c
```c
int maxEqualRowsAfterFlips(int** matrix, int matrixSize, int* matrixColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxEqualRowsAfterFlips(int[][] matrix) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
    
};
```

### typescript
```typescript
function maxEqualRowsAfterFlips(matrix: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $matrix
     * @return Integer
     */
    function maxEqualRowsAfterFlips($matrix) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxEqualRowsAfterFlips(_ matrix: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxEqualRowsAfterFlips(matrix: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxEqualRowsAfterFlips(List<List<int>> matrix) {
    
  }
}
```

### golang
```golang
func maxEqualRowsAfterFlips(matrix [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} matrix
# @return {Integer}
def max_equal_rows_after_flips(matrix)
    
end
```

### scala
```scala
object Solution {
    def maxEqualRowsAfterFlips(matrix: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_equal_rows_after_flips(matrix: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-equal-rows-after-flips matrix)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec max_equal_rows_after_flips(Matrix :: [[integer()]]) -> integer().
max_equal_rows_after_flips(Matrix) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_equal_rows_after_flips(matrix :: [[integer]]) :: integer
  def max_equal_rows_after_flips(matrix) do
    
  end
end
```
