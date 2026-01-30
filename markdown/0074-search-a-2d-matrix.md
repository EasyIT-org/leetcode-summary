# 74. Search a 2D Matrix

- Difficulty: Medium
- Topics: Array, Binary Search, Matrix
- Slug: search-a-2d-matrix
- Problem ID: 74

## Description
You are given an m x n integer matrix matrix with the following two properties:
Given an integer target, return true if target is in matrix or false otherwise.
You must write a solution in O(log(m * n)) time complexity.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
```
Images:
- https://assets.leetcode.com/uploads/2020/10/05/mat.jpg

### Example 2
```text
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
```
Images:
- https://assets.leetcode.com/uploads/2020/10/05/mat2.jpg


## Constraints
- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 100
- -104 <= matrix[i][j], target <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        
    }
};
```

### java
```java
class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        
    }
}
```

### python
```python
class Solution(object):
    def searchMatrix(self, matrix, target):
        """
        :type matrix: List[List[int]]
        :type target: int
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
```

### c
```c
bool searchMatrix(int** matrix, int matrixSize, int* matrixColSize, int target) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool SearchMatrix(int[][] matrix, int target) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
};
```

### typescript
```typescript
function searchMatrix(matrix: number[][], target: number): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $matrix
     * @param Integer $target
     * @return Boolean
     */
    function searchMatrix($matrix, $target) {
        
    }
}
```

### swift
```swift
class Solution {
    func searchMatrix(_ matrix: [[Int]], _ target: Int) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun searchMatrix(matrix: Array<IntArray>, target: Int): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool searchMatrix(List<List<int>> matrix, int target) {
    
  }
}
```

### golang
```golang
func searchMatrix(matrix [][]int, target int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[][]} matrix
# @param {Integer} target
# @return {Boolean}
def search_matrix(matrix, target)
    
end
```

### scala
```scala
object Solution {
    def searchMatrix(matrix: Array[Array[Int]], target: Int): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn search_matrix(matrix: Vec<Vec<i32>>, target: i32) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (search-matrix matrix target)
  (-> (listof (listof exact-integer?)) exact-integer? boolean?)
  )
```

### erlang
```erlang
-spec search_matrix(Matrix :: [[integer()]], Target :: integer()) -> boolean().
search_matrix(Matrix, Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec search_matrix(matrix :: [[integer]], target :: integer) :: boolean
  def search_matrix(matrix, target) do
    
  end
end
```
