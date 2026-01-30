# 939. Minimum Area Rectangle

- Difficulty: Medium
- Topics: Array, Hash Table, Math, Geometry, Sorting
- Slug: minimum-area-rectangle
- Problem ID: 976

## Description
You are given an array of points in the X-Y plane points where points[i] = [xi, yi].
Return the minimum area of a rectangle formed from these points, with sides parallel to the X and Y axes. If there is not any such rectangle, return 0.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: points = [[1,1],[1,3],[3,1],[3,3],[2,2]]
Output: 4
```
Images:
- https://assets.leetcode.com/uploads/2021/08/03/rec1.JPG

### Example 2
```text
Input: points = [[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]
Output: 2
```
Images:
- https://assets.leetcode.com/uploads/2021/08/03/rec2.JPG


## Constraints
- 1 <= points.length <= 500
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
    int minAreaRect(vector<vector<int>>& points) {
        
    }
};
```

### java
```java
class Solution {
    public int minAreaRect(int[][] points) {
        
    }
}
```

### python
```python
class Solution(object):
    def minAreaRect(self, points):
        """
        :type points: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minAreaRect(self, points: List[List[int]]) -> int:
```

### c
```c
int minAreaRect(int** points, int pointsSize, int* pointsColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinAreaRect(int[][] points) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
    
};
```

### typescript
```typescript
function minAreaRect(points: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $points
     * @return Integer
     */
    function minAreaRect($points) {
        
    }
}
```

### swift
```swift
class Solution {
    func minAreaRect(_ points: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minAreaRect(points: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minAreaRect(List<List<int>> points) {
    
  }
}
```

### golang
```golang
func minAreaRect(points [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} points
# @return {Integer}
def min_area_rect(points)
    
end
```

### scala
```scala
object Solution {
    def minAreaRect(points: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn min_area_rect(points: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (min-area-rect points)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec min_area_rect(Points :: [[integer()]]) -> integer().
min_area_rect(Points) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec min_area_rect(points :: [[integer]]) :: integer
  def min_area_rect(points) do
    
  end
end
```
