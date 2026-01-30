# 54. Spiral Matrix

- Difficulty: Medium
- Topics: Array, Matrix, Simulation
- Slug: spiral-matrix
- Problem ID: 54

## Description
Given an m x n matrix, return all elements of the matrix in spiral order.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
```
Images:
- https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg

### Example 2
```text
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
```
Images:
- https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg


## Constraints
- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 10
- -100 <= matrix[i][j] <= 100

## Hints
- Well for some problems, the best way really is to come up with some algorithms for simulation. Basically, you need to simulate what the problem asks us to do.
- We go boundary by boundary and move inwards. That is the essential operation. First row, last column, last row, first column, and then we move inwards by 1 and repeat. That's all. That is all the simulation that we need.
- Think about when you want to switch the progress on one of the indexes. If you progress on i out of [i, j], you'll shift in the same column. Similarly, by changing values for j, you'd be shifting in the same row.
Also, keep track of the end of a boundary so that you can move inwards and then keep repeating. It's always best to simulate edge cases like a single column or a single row to see if anything breaks or not.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        
    }
};
```

### java
```java
class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        
    }
}
```

### python
```python
class Solution(object):
    def spiralOrder(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* spiralOrder(int** matrix, int matrixSize, int* matrixColSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<int> SpiralOrder(int[][] matrix) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    
};
```

### typescript
```typescript
function spiralOrder(matrix: number[][]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $matrix
     * @return Integer[]
     */
    function spiralOrder($matrix) {
        
    }
}
```

### swift
```swift
class Solution {
    func spiralOrder(_ matrix: [[Int]]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun spiralOrder(matrix: Array<IntArray>): List<Int> {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> spiralOrder(List<List<int>> matrix) {
    
  }
}
```

### golang
```golang
func spiralOrder(matrix [][]int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} matrix
# @return {Integer[]}
def spiral_order(matrix)
    
end
```

### scala
```scala
object Solution {
    def spiralOrder(matrix: Array[Array[Int]]): List[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn spiral_order(matrix: Vec<Vec<i32>>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (spiral-order matrix)
  (-> (listof (listof exact-integer?)) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec spiral_order(Matrix :: [[integer()]]) -> [integer()].
spiral_order(Matrix) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec spiral_order(matrix :: [[integer]]) :: [integer]
  def spiral_order(matrix) do
    
  end
end
```
