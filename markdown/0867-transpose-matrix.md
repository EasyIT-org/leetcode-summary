# 867. Transpose Matrix

- Difficulty: Easy
- Topics: Array, Matrix, Simulation
- Slug: transpose-matrix
- Problem ID: 898

## Description
Given a 2D integer array matrix, return the transpose of matrix.
The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
```
Images:
- https://assets.leetcode.com/uploads/2021/02/10/hint_transpose.png

### Example 2
```text
Input: matrix = [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]
```
Images:
- https://assets.leetcode.com/uploads/2021/02/10/hint_transpose.png


## Constraints
- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 1000
- 1 <= m * n <= 105
- -109 <= matrix[i][j] <= 109

## Hints
- We don't need any special algorithms to do this. You just need to know what the transpose of a matrix looks like. Rows become columns and vice versa!

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> transpose(vector<vector<int>>& matrix) {
        
    }
};
```

### java
```java
class Solution {
    public int[][] transpose(int[][] matrix) {
        
    }
}
```

### python
```python
class Solution(object):
    def transpose(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** transpose(int** matrix, int matrixSize, int* matrixColSize, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[][] Transpose(int[][] matrix) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    
};
```

### typescript
```typescript
function transpose(matrix: number[][]): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $matrix
     * @return Integer[][]
     */
    function transpose($matrix) {
        
    }
}
```

### swift
```swift
class Solution {
    func transpose(_ matrix: [[Int]]) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun transpose(matrix: Array<IntArray>): Array<IntArray> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> transpose(List<List<int>> matrix) {
    
  }
}
```

### golang
```golang
func transpose(matrix [][]int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} matrix
# @return {Integer[][]}
def transpose(matrix)
    
end
```

### scala
```scala
object Solution {
    def transpose(matrix: Array[Array[Int]]): Array[Array[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn transpose(matrix: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (transpose matrix)
  (-> (listof (listof exact-integer?)) (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec transpose(Matrix :: [[integer()]]) -> [[integer()]].
transpose(Matrix) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec transpose(matrix :: [[integer]]) :: [[integer]]
  def transpose(matrix) do
    
  end
end
```
