# 566. Reshape the Matrix

- Difficulty: Easy
- Topics: Array, Matrix, Simulation
- Slug: reshape-the-matrix
- Problem ID: 566

## Description
In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.
You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.
The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.
If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]
```
Images:
- https://assets.leetcode.com/uploads/2021/04/24/reshape1-grid.jpg

### Example 2
```text
Input: mat = [[1,2],[3,4]], r = 2, c = 4
Output: [[1,2],[3,4]]
```
Images:
- https://assets.leetcode.com/uploads/2021/04/24/reshape2-grid.jpg


## Constraints
- m == mat.length
- n == mat[i].length
- 1 <= m, n <= 100
- -1000 <= mat[i][j] <= 1000
- 1 <= r, c <= 300

## Hints
- Do you know how 2d matrix is stored in 1d memory? Try to map 2-dimensions into one.
- M[i][j]=M[n*i+j] , where n is the number of cols. 
This is the one way of converting 2-d indices into one 1-d index.  
Now, how will you convert 1-d index into 2-d indices?
- Try to use division and modulus to convert 1-d index into 2-d indices.
- M[i] =>  M[i/n][i%n] Will it result in right mapping? Take some example and check this formula.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> matrixReshape(vector<vector<int>>& mat, int r, int c) {
        
    }
};
```

### java
```java
class Solution {
    public int[][] matrixReshape(int[][] mat, int r, int c) {
        
    }
}
```

### python
```python
class Solution(object):
    def matrixReshape(self, mat, r, c):
        """
        :type mat: List[List[int]]
        :type r: int
        :type c: int
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def matrixReshape(self, mat: List[List[int]], r: int, c: int) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** matrixReshape(int** mat, int matSize, int* matColSize, int r, int c, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[][] MatrixReshape(int[][] mat, int r, int c) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    
};
```

### typescript
```typescript
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $mat
     * @param Integer $r
     * @param Integer $c
     * @return Integer[][]
     */
    function matrixReshape($mat, $r, $c) {
        
    }
}
```

### swift
```swift
class Solution {
    func matrixReshape(_ mat: [[Int]], _ r: Int, _ c: Int) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun matrixReshape(mat: Array<IntArray>, r: Int, c: Int): Array<IntArray> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> matrixReshape(List<List<int>> mat, int r, int c) {
    
  }
}
```

### golang
```golang
func matrixReshape(mat [][]int, r int, c int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} mat
# @param {Integer} r
# @param {Integer} c
# @return {Integer[][]}
def matrix_reshape(mat, r, c)
    
end
```

### scala
```scala
object Solution {
    def matrixReshape(mat: Array[Array[Int]], r: Int, c: Int): Array[Array[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn matrix_reshape(mat: Vec<Vec<i32>>, r: i32, c: i32) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (matrix-reshape mat r c)
  (-> (listof (listof exact-integer?)) exact-integer? exact-integer? (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec matrix_reshape(Mat :: [[integer()]], R :: integer(), C :: integer()) -> [[integer()]].
matrix_reshape(Mat, R, C) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec matrix_reshape(mat :: [[integer]], r :: integer, c :: integer) :: [[integer]]
  def matrix_reshape(mat, r, c) do
    
  end
end
```
