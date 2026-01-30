# 766. Toeplitz Matrix

- Difficulty: Easy
- Topics: Array, Matrix
- Slug: toeplitz-matrix
- Problem ID: 777

## Description
Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.
Example 1:
Example 2:
Constraints:
Follow up:

## Examples
### Example 1
```text
Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
Output: true
Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.
```
Images:
- https://assets.leetcode.com/uploads/2020/11/04/ex1.jpg

### Example 2
```text
Input: matrix = [[1,2],[2,2]]
Output: false
Explanation:
The diagonal "[1, 2]" has different elements.
```
Images:
- https://assets.leetcode.com/uploads/2020/11/04/ex2.jpg


## Constraints
- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 20
- 0 <= matrix[i][j] <= 99

## Hints
- Check whether each value is equal to the value of it's top-left neighbor.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isToeplitzMatrix(vector<vector<int>>& matrix) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isToeplitzMatrix(int[][] matrix) {
        
    }
}
```

### python
```python
class Solution(object):
    def isToeplitzMatrix(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isToeplitzMatrix(self, matrix: List[List[int]]) -> bool:
```

### c
```c
bool isToeplitzMatrix(int** matrix, int matrixSize, int* matrixColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsToeplitzMatrix(int[][] matrix) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    
};
```

### typescript
```typescript
function isToeplitzMatrix(matrix: number[][]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $matrix
     * @return Boolean
     */
    function isToeplitzMatrix($matrix) {
        
    }
}
```

### swift
```swift
class Solution {
    func isToeplitzMatrix(_ matrix: [[Int]]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isToeplitzMatrix(matrix: Array<IntArray>): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isToeplitzMatrix(List<List<int>> matrix) {
    
  }
}
```

### golang
```golang
func isToeplitzMatrix(matrix [][]int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[][]} matrix
# @return {Boolean}
def is_toeplitz_matrix(matrix)
    
end
```

### scala
```scala
object Solution {
    def isToeplitzMatrix(matrix: Array[Array[Int]]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_toeplitz_matrix(matrix: Vec<Vec<i32>>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-toeplitz-matrix matrix)
  (-> (listof (listof exact-integer?)) boolean?)
  )
```

### erlang
```erlang
-spec is_toeplitz_matrix(Matrix :: [[integer()]]) -> boolean().
is_toeplitz_matrix(Matrix) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_toeplitz_matrix(matrix :: [[integer]]) :: boolean
  def is_toeplitz_matrix(matrix) do
    
  end
end
```
