# 931. Minimum Falling Path Sum

- Difficulty: Medium
- Topics: Array, Dynamic Programming, Matrix
- Slug: minimum-falling-path-sum
- Problem ID: 967

## Description
Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.
A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: matrix = [[2,1,3],[6,5,4],[7,8,9]]
Output: 13
Explanation: There are two falling paths with a minimum sum as shown.
```
Images:
- https://assets.leetcode.com/uploads/2021/11/03/failing1-grid.jpg

### Example 2
```text
Input: matrix = [[-19,57],[-40,-5]]
Output: -59
Explanation: The falling path with a minimum sum is shown.
```
Images:
- https://assets.leetcode.com/uploads/2021/11/03/failing2-grid.jpg


## Constraints
- n == matrix.length == matrix[i].length
- 1 <= n <= 100
- -100 <= matrix[i][j] <= 100

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int minFallingPathSum(vector<vector<int>>& matrix) {
        
    }
};
```

### java
```java
class Solution {
    public int minFallingPathSum(int[][] matrix) {
        
    }
}
```

### python
```python
class Solution(object):
    def minFallingPathSum(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minFallingPathSum(self, matrix: List[List[int]]) -> int:
```

### c
```c
int minFallingPathSum(int** matrix, int matrixSize, int* matrixColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinFallingPathSum(int[][] matrix) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    
};
```

### typescript
```typescript
function minFallingPathSum(matrix: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $matrix
     * @return Integer
     */
    function minFallingPathSum($matrix) {
        
    }
}
```

### swift
```swift
class Solution {
    func minFallingPathSum(_ matrix: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minFallingPathSum(matrix: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minFallingPathSum(List<List<int>> matrix) {
    
  }
}
```

### golang
```golang
func minFallingPathSum(matrix [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} matrix
# @return {Integer}
def min_falling_path_sum(matrix)
    
end
```

### scala
```scala
object Solution {
    def minFallingPathSum(matrix: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn min_falling_path_sum(matrix: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (min-falling-path-sum matrix)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec min_falling_path_sum(Matrix :: [[integer()]]) -> integer().
min_falling_path_sum(Matrix) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec min_falling_path_sum(matrix :: [[integer]]) :: integer
  def min_falling_path_sum(matrix) do
    
  end
end
```
