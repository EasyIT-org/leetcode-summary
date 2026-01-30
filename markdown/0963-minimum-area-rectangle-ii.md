# 963. Minimum Area Rectangle II

- Difficulty: Medium
- Topics: Array, Hash Table, Math, Geometry
- Slug: minimum-area-rectangle-ii
- Problem ID: 1003

## Description
You are given an array of points in the X-Y plane points where points[i] = [xi, yi].
Return the minimum area of any rectangle formed from these points, with sides not necessarily parallel to the X and Y axes. If there is not any such rectangle, return 0.
Answers within 10-5 of the actual answer will be accepted.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: points = [[1,2],[2,1],[1,0],[0,1]]
Output: 2.00000
Explanation: The minimum area rectangle occurs at [1,2],[2,1],[1,0],[0,1], with an area of 2.
```
Images:
- https://assets.leetcode.com/uploads/2018/12/21/1a.png

### Example 2
```text
Input: points = [[0,1],[2,1],[1,1],[1,0],[2,0]]
Output: 1.00000
Explanation: The minimum area rectangle occurs at [1,0],[1,1],[2,1],[2,0], with an area of 1.
```
Images:
- https://assets.leetcode.com/uploads/2018/12/22/2.png

### Example 3
```text
Input: points = [[0,3],[1,2],[3,1],[1,3],[2,1]]
Output: 0
Explanation: There is no possible rectangle to form from these points.
```
Images:
- https://assets.leetcode.com/uploads/2018/12/22/3.png


## Constraints
- 1 <= points.length <= 50
- points[i].length == 2
- 0 <= xi, yi <= 4 * 104
- All the given points are unique.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    double minAreaFreeRect(vector<vector<int>>& points) {
        
    }
};
```

### java
```java
class Solution {
    public double minAreaFreeRect(int[][] points) {
        
    }
}
```

### python
```python
class Solution(object):
    def minAreaFreeRect(self, points):
        """
        :type points: List[List[int]]
        :rtype: float
        """
```

### python3
```python3
class Solution:
    def minAreaFreeRect(self, points: List[List[int]]) -> float:
```

### c
```c
double minAreaFreeRect(int** points, int pointsSize, int* pointsColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public double MinAreaFreeRect(int[][] points) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaFreeRect = function(points) {
    
};
```

### typescript
```typescript
function minAreaFreeRect(points: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $points
     * @return Float
     */
    function minAreaFreeRect($points) {
        
    }
}
```

### swift
```swift
class Solution {
    func minAreaFreeRect(_ points: [[Int]]) -> Double {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minAreaFreeRect(points: Array<IntArray>): Double {
        
    }
}
```

### dart
```dart
class Solution {
  double minAreaFreeRect(List<List<int>> points) {
    
  }
}
```

### golang
```golang
func minAreaFreeRect(points [][]int) float64 {
    
}
```

### ruby
```ruby
# @param {Integer[][]} points
# @return {Float}
def min_area_free_rect(points)
    
end
```

### scala
```scala
object Solution {
    def minAreaFreeRect(points: Array[Array[Int]]): Double = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn min_area_free_rect(points: Vec<Vec<i32>>) -> f64 {
        
    }
}
```

### racket
```racket
(define/contract (min-area-free-rect points)
  (-> (listof (listof exact-integer?)) flonum?)
  )
```

### erlang
```erlang
-spec min_area_free_rect(Points :: [[integer()]]) -> float().
min_area_free_rect(Points) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec min_area_free_rect(points :: [[integer]]) :: float
  def min_area_free_rect(points) do
    
  end
end
```
