# 1074. Number of Submatrices That Sum to Target

- Difficulty: Hard
- Topics: Array, Hash Table, Matrix, Prefix Sum
- Slug: number-of-submatrices-that-sum-to-target
- Problem ID: 1145

## Description
Given a matrix and a target, return the number of non-empty submatrices that sum to target.
A submatrix x1, y1, x2, y2 is the set of all cells matrix[x][y] with x1 <= x <= x2 and y1 <= y <= y2.
Two submatrices (x1, y1, x2, y2) and (x1', y1', x2', y2') are different if they have some coordinate that is different: for example, if x1 != x1'.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0
Output: 4
Explanation: The four 1x1 submatrices that only contain 0.
```
Images:
- https://assets.leetcode.com/uploads/2020/09/02/mate1.jpg

### Example 2
```text
Input: matrix = [[1,-1],[-1,1]], target = 0
Output: 5
Explanation: The two 1x2 submatrices, plus the two 2x1 submatrices, plus the 2x2 submatrix.
```
Images:
- https://assets.leetcode.com/uploads/2020/09/02/mate1.jpg

### Example 3
```text
Input: matrix = [[904]], target = 0
Output: 0
```
Images:
- https://assets.leetcode.com/uploads/2020/09/02/mate1.jpg


## Constraints
- 1 <= matrix.length <= 100
- 1 <= matrix[0].length <= 100
- -1000 <= matrix[i][j] <= 1000
- -10^8 <= target <= 10^8

## Hints
- Using a 2D prefix sum, we can query the sum of any submatrix in O(1) time.
Now for each (r1, r2), we can find the largest sum of a submatrix that uses every row in [r1, r2] in linear time using a sliding window.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numSubmatrixSumTarget(vector<vector<int>>& matrix, int target) {
        
    }
};
```

### java
```java
class Solution {
    public int numSubmatrixSumTarget(int[][] matrix, int target) {
        
    }
}
```

### python
```python
class Solution(object):
    def numSubmatrixSumTarget(self, matrix, target):
        """
        :type matrix: List[List[int]]
        :type target: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numSubmatrixSumTarget(self, matrix: List[List[int]], target: int) -> int:
```

### c
```c
int numSubmatrixSumTarget(int** matrix, int matrixSize, int* matrixColSize, int target) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumSubmatrixSumTarget(int[][] matrix, int target) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
    
};
```

### typescript
```typescript
function numSubmatrixSumTarget(matrix: number[][], target: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $matrix
     * @param Integer $target
     * @return Integer
     */
    function numSubmatrixSumTarget($matrix, $target) {
        
    }
}
```

### swift
```swift
class Solution {
    func numSubmatrixSumTarget(_ matrix: [[Int]], _ target: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numSubmatrixSumTarget(matrix: Array<IntArray>, target: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numSubmatrixSumTarget(List<List<int>> matrix, int target) {
    
  }
}
```

### golang
```golang
func numSubmatrixSumTarget(matrix [][]int, target int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} matrix
# @param {Integer} target
# @return {Integer}
def num_submatrix_sum_target(matrix, target)
    
end
```

### scala
```scala
object Solution {
    def numSubmatrixSumTarget(matrix: Array[Array[Int]], target: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_submatrix_sum_target(matrix: Vec<Vec<i32>>, target: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-submatrix-sum-target matrix target)
  (-> (listof (listof exact-integer?)) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec num_submatrix_sum_target(Matrix :: [[integer()]], Target :: integer()) -> integer().
num_submatrix_sum_target(Matrix, Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_submatrix_sum_target(matrix :: [[integer]], target :: integer) :: integer
  def num_submatrix_sum_target(matrix, target) do
    
  end
end
```
