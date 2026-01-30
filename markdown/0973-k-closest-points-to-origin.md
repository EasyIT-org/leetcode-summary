# 973. K Closest Points to Origin

- Difficulty: Medium
- Topics: Array, Math, Divide and Conquer, Geometry, Sorting, Heap (Priority Queue), Quickselect
- Slug: k-closest-points-to-origin
- Problem ID: 1014

## Description
Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).
The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).
You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]
Explanation:
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
```
Images:
- https://assets.leetcode.com/uploads/2021/03/03/closestplane1.jpg

### Example 2
```text
Input: points = [[3,3],[5,-1],[-2,4]], k = 2
Output: [[3,3],[-2,4]]
Explanation: The answer [[-2,4],[3,3]] would also be accepted.
```
Images:
- https://assets.leetcode.com/uploads/2021/03/03/closestplane1.jpg


## Constraints
- 1 <= k <= points.length <= 104
- -104 <= xi, yi <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int[][] kClosest(int[][] points, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def kClosest(self, points, k):
        """
        :type points: List[List[int]]
        :type k: int
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** kClosest(int** points, int pointsSize, int* pointsColSize, int k, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[][] KClosest(int[][] points, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    
};
```

### typescript
```typescript
function kClosest(points: number[][], k: number): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $points
     * @param Integer $k
     * @return Integer[][]
     */
    function kClosest($points, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func kClosest(_ points: [[Int]], _ k: Int) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun kClosest(points: Array<IntArray>, k: Int): Array<IntArray> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> kClosest(List<List<int>> points, int k) {
    
  }
}
```

### golang
```golang
func kClosest(points [][]int, k int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} points
# @param {Integer} k
# @return {Integer[][]}
def k_closest(points, k)
    
end
```

### scala
```scala
object Solution {
    def kClosest(points: Array[Array[Int]], k: Int): Array[Array[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn k_closest(points: Vec<Vec<i32>>, k: i32) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (k-closest points k)
  (-> (listof (listof exact-integer?)) exact-integer? (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec k_closest(Points :: [[integer()]], K :: integer()) -> [[integer()]].
k_closest(Points, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec k_closest(points :: [[integer]], k :: integer) :: [[integer]]
  def k_closest(points, k) do
    
  end
end
```
