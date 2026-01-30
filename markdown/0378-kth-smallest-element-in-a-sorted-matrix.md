# 378. Kth Smallest Element in a Sorted Matrix

- Difficulty: Medium
- Topics: Array, Binary Search, Sorting, Heap (Priority Queue), Matrix
- Slug: kth-smallest-element-in-a-sorted-matrix
- Problem ID: 378

## Description
Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.
Note that it is the kth smallest element in the sorted order, not the kth distinct element.
You must find a solution with a memory complexity better than O(n2).
Example 1:
Example 2:
Constraints:
Follow up:

## Examples
### Example 1
```text
Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
Output: 13
Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
```

### Example 2
```text
Input: matrix = [[-5]], k = 1
Output: -5
```


## Constraints
- n == matrix.length == matrix[i].length
- 1 <= n <= 300
- -109 <= matrix[i][j] <= 109
- All the rows and columns of matrix are guaranteed to be sorted in non-decreasing order.
- 1 <= k <= n2

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int kthSmallest(vector<vector<int>>& matrix, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int kthSmallest(int[][] matrix, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def kthSmallest(self, matrix, k):
        """
        :type matrix: List[List[int]]
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
```

### c
```c
int kthSmallest(int** matrix, int matrixSize, int* matrixColSize, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int KthSmallest(int[][] matrix, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    
};
```

### typescript
```typescript
function kthSmallest(matrix: number[][], k: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $matrix
     * @param Integer $k
     * @return Integer
     */
    function kthSmallest($matrix, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func kthSmallest(_ matrix: [[Int]], _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun kthSmallest(matrix: Array<IntArray>, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int kthSmallest(List<List<int>> matrix, int k) {
    
  }
}
```

### golang
```golang
func kthSmallest(matrix [][]int, k int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} matrix
# @param {Integer} k
# @return {Integer}
def kth_smallest(matrix, k)
    
end
```

### scala
```scala
object Solution {
    def kthSmallest(matrix: Array[Array[Int]], k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn kth_smallest(matrix: Vec<Vec<i32>>, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (kth-smallest matrix k)
  (-> (listof (listof exact-integer?)) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec kth_smallest(Matrix :: [[integer()]], K :: integer()) -> integer().
kth_smallest(Matrix, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec kth_smallest(matrix :: [[integer]], k :: integer) :: integer
  def kth_smallest(matrix, k) do
    
  end
end
```
