# 363. Max Sum of Rectangle No Larger Than K

- Difficulty: Hard
- Topics: Array, Binary Search, Matrix, Prefix Sum, Ordered Set
- Slug: max-sum-of-rectangle-no-larger-than-k
- Problem ID: 363

## Description
Given an m x n matrix matrix and an integer k, return the max sum of a rectangle in the matrix such that its sum is no larger than k.
It is guaranteed that there will be a rectangle with a sum no larger than k.
Example 1:
Example 2:
Constraints:
Follow up: What if the number of rows is much larger than the number of columns?

## Examples
### Example 1
```text
Input: matrix = [[1,0,1],[0,-2,3]], k = 2
Output: 2
Explanation: Because the sum of the blue rectangle [[0, 1], [-2, 3]] is 2, and 2 is the max number no larger than k (k = 2).
```
Images:
- https://assets.leetcode.com/uploads/2021/03/18/sum-grid.jpg

### Example 2
```text
Input: matrix = [[2,2,-1]], k = 3
Output: 3
```
Images:
- https://assets.leetcode.com/uploads/2021/03/18/sum-grid.jpg


## Constraints
- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 100
- -100 <= matrix[i][j] <= 100
- -105 <= k <= 105

## Hints
(none)

## Follow Ups
- What if the number of rows is much larger than the number of columns?

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxSumSubmatrix(vector<vector<int>>& matrix, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int maxSumSubmatrix(int[][] matrix, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxSumSubmatrix(self, matrix, k):
        """
        :type matrix: List[List[int]]
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxSumSubmatrix(self, matrix: List[List[int]], k: int) -> int:
```

### c
```c
int maxSumSubmatrix(int** matrix, int matrixSize, int* matrixColSize, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxSumSubmatrix(int[][] matrix, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
    
};
```

### typescript
```typescript
function maxSumSubmatrix(matrix: number[][], k: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $matrix
     * @param Integer $k
     * @return Integer
     */
    function maxSumSubmatrix($matrix, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxSumSubmatrix(_ matrix: [[Int]], _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxSumSubmatrix(matrix: Array<IntArray>, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxSumSubmatrix(List<List<int>> matrix, int k) {
    
  }
}
```

### golang
```golang
func maxSumSubmatrix(matrix [][]int, k int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} matrix
# @param {Integer} k
# @return {Integer}
def max_sum_submatrix(matrix, k)
    
end
```

### scala
```scala
object Solution {
    def maxSumSubmatrix(matrix: Array[Array[Int]], k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_sum_submatrix(matrix: Vec<Vec<i32>>, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-sum-submatrix matrix k)
  (-> (listof (listof exact-integer?)) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec max_sum_submatrix(Matrix :: [[integer()]], K :: integer()) -> integer().
max_sum_submatrix(Matrix, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_sum_submatrix(matrix :: [[integer]], k :: integer) :: integer
  def max_sum_submatrix(matrix, k) do
    
  end
end
```
