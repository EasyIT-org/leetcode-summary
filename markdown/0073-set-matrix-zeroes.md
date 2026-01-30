# 73. Set Matrix Zeroes

- Difficulty: Medium
- Topics: Array, Hash Table, Matrix
- Slug: set-matrix-zeroes
- Problem ID: 73

## Description
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
You must do it in place.
Example 1:
Example 2:
Constraints:
Follow up:

## Examples
### Example 1
```text
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
```
Images:
- https://assets.leetcode.com/uploads/2020/08/17/mat1.jpg

### Example 2
```text
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
```
Images:
- https://assets.leetcode.com/uploads/2020/08/17/mat2.jpg


## Constraints
- m == matrix.length
- n == matrix[0].length
- 1 <= m, n <= 200
- -231 <= matrix[i][j] <= 231 - 1

## Hints
- If any cell of the matrix has a zero we can record its row and column number using additional memory.
But if you don't want to use extra memory then you can manipulate the array instead. i.e. simulating exactly what the question says.
- Setting cell values to zero on the fly while iterating might lead to discrepancies. What if you use some other integer value as your marker?
There is still a better approach for this problem with O(1) space.
- We could have used 2 sets to keep a record of rows/columns which need to be set to zero. But for an O(1) space solution, you can use one of the rows and and one of the columns to keep track of this information.
- We can use the first cell of every row and column as a flag. This flag would determine whether a row or column has been set to zero.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        
    }
};
```

### java
```java
class Solution {
    public void setZeroes(int[][] matrix) {
        
    }
}
```

### python
```python
class Solution(object):
    def setZeroes(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: None Do not return anything, modify matrix in-place instead.
        """
```

### python3
```python3
class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
```

### c
```c
void setZeroes(int** matrix, int matrixSize, int* matrixColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public void SetZeroes(int[][] matrix) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    
};
```

### typescript
```typescript
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $matrix
     * @return NULL
     */
    function setZeroes(&$matrix) {
        
    }
}
```

### swift
```swift
class Solution {
    func setZeroes(_ matrix: inout [[Int]]) {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun setZeroes(matrix: Array<IntArray>): Unit {
        
    }
}
```

### dart
```dart
class Solution {
  void setZeroes(List<List<int>> matrix) {
    
  }
}
```

### golang
```golang
func setZeroes(matrix [][]int)  {
    
}
```

### ruby
```ruby
# @param {Integer[][]} matrix
# @return {Void} Do not return anything, modify matrix in-place instead.
def set_zeroes(matrix)
    
end
```

### scala
```scala
object Solution {
    def setZeroes(matrix: Array[Array[Int]]): Unit = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn set_zeroes(matrix: &mut Vec<Vec<i32>>) {
        
    }
}
```
