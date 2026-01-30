# 48. Rotate Image

- Difficulty: Medium
- Topics: Array, Math, Matrix
- Slug: rotate-image
- Problem ID: 48

## Description
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
```
Images:
- https://assets.leetcode.com/uploads/2020/08/28/mat1.jpg

### Example 2
```text
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
```
Images:
- https://assets.leetcode.com/uploads/2020/08/28/mat2.jpg


## Constraints
- n == matrix.length == matrix[i].length
- 1 <= n <= 20
- -1000 <= matrix[i][j] <= 1000

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        
    }
};
```

### java
```java
class Solution {
    public void rotate(int[][] matrix) {
        
    }
}
```

### python
```python
class Solution(object):
    def rotate(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: None Do not return anything, modify matrix in-place instead.
        """
```

### python3
```python3
class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
```

### c
```c
void rotate(int** matrix, int matrixSize, int* matrixColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public void Rotate(int[][] matrix) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
};
```

### typescript
```typescript
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $matrix
     * @return NULL
     */
    function rotate(&$matrix) {
        
    }
}
```

### swift
```swift
class Solution {
    func rotate(_ matrix: inout [[Int]]) {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun rotate(matrix: Array<IntArray>): Unit {
        
    }
}
```

### dart
```dart
class Solution {
  void rotate(List<List<int>> matrix) {
    
  }
}
```

### golang
```golang
func rotate(matrix [][]int)  {
    
}
```

### ruby
```ruby
# @param {Integer[][]} matrix
# @return {Void} Do not return anything, modify matrix in-place instead.
def rotate(matrix)
    
end
```

### scala
```scala
object Solution {
    def rotate(matrix: Array[Array[Int]]): Unit = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn rotate(matrix: &mut Vec<Vec<i32>>) {
        
    }
}
```
