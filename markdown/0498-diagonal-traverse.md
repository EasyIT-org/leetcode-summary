# 498. Diagonal Traverse

- Difficulty: Medium
- Topics: Array, Matrix, Simulation
- Slug: diagonal-traverse
- Problem ID: 498

## Description
Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,4,7,5,3,6,8,9]
```
Images:
- https://assets.leetcode.com/uploads/2021/04/10/diag1-grid.jpg

### Example 2
```text
Input: mat = [[1,2],[3,4]]
Output: [1,2,3,4]
```
Images:
- https://assets.leetcode.com/uploads/2021/04/10/diag1-grid.jpg


## Constraints
- m == mat.length
- n == mat[i].length
- 1 <= m, n <= 104
- 1 <= m * n <= 104
- -105 <= mat[i][j] <= 105

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> findDiagonalOrder(vector<vector<int>>& mat) {
        
    }
};
```

### java
```java
class Solution {
    public int[] findDiagonalOrder(int[][] mat) {
        
    }
}
```

### python
```python
class Solution(object):
    def findDiagonalOrder(self, mat):
        """
        :type mat: List[List[int]]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def findDiagonalOrder(self, mat: List[List[int]]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* findDiagonalOrder(int** mat, int matSize, int* matColSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] FindDiagonalOrder(int[][] mat) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    
};
```

### typescript
```typescript
function findDiagonalOrder(mat: number[][]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $mat
     * @return Integer[]
     */
    function findDiagonalOrder($mat) {
        
    }
}
```

### swift
```swift
class Solution {
    func findDiagonalOrder(_ mat: [[Int]]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findDiagonalOrder(mat: Array<IntArray>): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> findDiagonalOrder(List<List<int>> mat) {
    
  }
}
```

### golang
```golang
func findDiagonalOrder(mat [][]int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} mat
# @return {Integer[]}
def find_diagonal_order(mat)
    
end
```

### scala
```scala
object Solution {
    def findDiagonalOrder(mat: Array[Array[Int]]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_diagonal_order(mat: Vec<Vec<i32>>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (find-diagonal-order mat)
  (-> (listof (listof exact-integer?)) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec find_diagonal_order(Mat :: [[integer()]]) -> [integer()].
find_diagonal_order(Mat) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_diagonal_order(mat :: [[integer]]) :: [integer]
  def find_diagonal_order(mat) do
    
  end
end
```
