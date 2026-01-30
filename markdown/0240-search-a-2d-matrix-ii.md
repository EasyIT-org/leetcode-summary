# 240. Search a 2D Matrix II

- Difficulty: Medium
- Topics: Array, Binary Search, Divide and Conquer, Matrix
- Slug: search-a-2d-matrix-ii
- Problem ID: 240

## Description
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true
```
Images:
- https://assets.leetcode.com/uploads/2020/11/24/searchgrid2.jpg

### Example 2
```text
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
Output: false
```
Images:
- https://assets.leetcode.com/uploads/2020/11/24/searchgrid.jpg


## Constraints
- m == matrix.length
- n == matrix[i].length
- 1 <= n, m <= 300
- -109 <= matrix[i][j] <= 109
- All the integers in each row are sorted in ascending order.
- All the integers in each column are sorted in ascending order.
- -109 <= target <= 109

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


bool searchMatrix(int** matrix, int matrixSize, int* matrixColSize, int target){

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
