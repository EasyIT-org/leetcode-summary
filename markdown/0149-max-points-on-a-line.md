# 149. Max Points on a Line

- Difficulty: Hard
- Topics: Array, Hash Table, Math, Geometry
- Slug: max-points-on-a-line
- Problem ID: 149

## Description
Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: points = [[1,1],[2,2],[3,3]]
Output: 3
```
Images:
- https://assets.leetcode.com/uploads/2021/02/25/plane1.jpg

### Example 2
```text
Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
Output: 4
```
Images:
- https://assets.leetcode.com/uploads/2021/02/25/plane2.jpg


## Constraints
- 1 <= points.length <= 300
- points[i].length == 2
- -104 <= xi, yi <= 104
- All the points are unique.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxPoints(vector<vector<int>>& points) {
        
    }
};
```

### java
```java
class Solution {
    public int maxPoints(int[][] points) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxPoints(self, points):
        """
        :type points: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxPoints(self, points: List[List[int]]) -> int:
```

### c
```c
int maxPoints(int** points, int pointsSize, int* pointsColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxPoints(int[][] points) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    
};
```

### typescript
```typescript
function maxPoints(points: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $points
     * @return Integer
     */
    function maxPoints($points) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxPoints(_ points: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxPoints(points: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxPoints(List<List<int>> points) {
    
  }
}
```

### golang
```golang
func maxPoints(points [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} points
# @return {Integer}
def max_points(points)
    
end
```

### scala
```scala
object Solution {
    def maxPoints(points: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_points(points: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-points points)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec max_points(Points :: [[integer()]]) -> integer().
max_points(Points) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_points(points :: [[integer]]) :: integer
  def max_points(points) do
    
  end
end
```
