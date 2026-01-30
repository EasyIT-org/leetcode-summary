# 1037. Valid Boomerang

- Difficulty: Easy
- Topics: Array, Math, Geometry
- Slug: valid-boomerang
- Problem ID: 1115

## Description
Given an array points where points[i] = [xi, yi] represents a point on the X-Y plane, return true if these points are a boomerang.
A boomerang is a set of three points that are all distinct and not in a straight line.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: points = [[1,1],[2,3],[3,2]]
Output: true
```

### Example 2
```text
Input: points = [[1,1],[2,2],[3,3]]
Output: false
```


## Constraints
- points.length == 3
- points[i].length == 2
- 0 <= xi, yi <= 100

## Hints
- 3 points form a boomerang if and only if the triangle formed from them has non-zero area.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isBoomerang(vector<vector<int>>& points) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isBoomerang(int[][] points) {
        
    }
}
```

### python
```python
class Solution(object):
    def isBoomerang(self, points):
        """
        :type points: List[List[int]]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isBoomerang(self, points: List[List[int]]) -> bool:
```

### c
```c
bool isBoomerang(int** points, int pointsSize, int* pointsColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsBoomerang(int[][] points) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    
};
```

### typescript
```typescript
function isBoomerang(points: number[][]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $points
     * @return Boolean
     */
    function isBoomerang($points) {
        
    }
}
```

### swift
```swift
class Solution {
    func isBoomerang(_ points: [[Int]]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isBoomerang(points: Array<IntArray>): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isBoomerang(List<List<int>> points) {
    
  }
}
```

### golang
```golang
func isBoomerang(points [][]int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[][]} points
# @return {Boolean}
def is_boomerang(points)
    
end
```

### scala
```scala
object Solution {
    def isBoomerang(points: Array[Array[Int]]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_boomerang(points: Vec<Vec<i32>>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-boomerang points)
  (-> (listof (listof exact-integer?)) boolean?)
  )
```

### erlang
```erlang
-spec is_boomerang(Points :: [[integer()]]) -> boolean().
is_boomerang(Points) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_boomerang(points :: [[integer]]) :: boolean
  def is_boomerang(points) do
    
  end
end
```
