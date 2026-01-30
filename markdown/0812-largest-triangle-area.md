# 812. Largest Triangle Area

- Difficulty: Easy
- Topics: Array, Math, Geometry
- Slug: largest-triangle-area
- Problem ID: 830

## Description
Given an array of points on the X-Y plane points where points[i] = [xi, yi], return the area of the largest triangle that can be formed by any three different points. Answers within 10-5 of the actual answer will be accepted.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
Output: 2.00000
Explanation: The five points are shown in the above figure. The red triangle is the largest.
```
Images:
- https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/04/1027.png

### Example 2
```text
Input: points = [[1,0],[0,0],[0,1]]
Output: 0.50000
```
Images:
- https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/04/1027.png


## Constraints
- 3 <= points.length <= 50
- -50 <= xi, yi <= 50
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
    double largestTriangleArea(vector<vector<int>>& points) {
        
    }
};
```

### java
```java
class Solution {
    public double largestTriangleArea(int[][] points) {
        
    }
}
```

### python
```python
class Solution(object):
    def largestTriangleArea(self, points):
        """
        :type points: List[List[int]]
        :rtype: float
        """
```

### python3
```python3
class Solution:
    def largestTriangleArea(self, points: List[List[int]]) -> float:
```

### c
```c
double largestTriangleArea(int** points, int pointsSize, int* pointsColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public double LargestTriangleArea(int[][] points) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    
};
```

### typescript
```typescript
function largestTriangleArea(points: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $points
     * @return Float
     */
    function largestTriangleArea($points) {
        
    }
}
```

### swift
```swift
class Solution {
    func largestTriangleArea(_ points: [[Int]]) -> Double {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun largestTriangleArea(points: Array<IntArray>): Double {
        
    }
}
```

### dart
```dart
class Solution {
  double largestTriangleArea(List<List<int>> points) {
    
  }
}
```

### golang
```golang
func largestTriangleArea(points [][]int) float64 {
    
}
```

### ruby
```ruby
# @param {Integer[][]} points
# @return {Float}
def largest_triangle_area(points)
    
end
```

### scala
```scala
object Solution {
    def largestTriangleArea(points: Array[Array[Int]]): Double = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn largest_triangle_area(points: Vec<Vec<i32>>) -> f64 {
        
    }
}
```

### racket
```racket
(define/contract (largest-triangle-area points)
  (-> (listof (listof exact-integer?)) flonum?)
  )
```

### erlang
```erlang
-spec largest_triangle_area(Points :: [[integer()]]) -> float().
largest_triangle_area(Points) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec largest_triangle_area(points :: [[integer]]) :: float
  def largest_triangle_area(points) do
    
  end
end
```
