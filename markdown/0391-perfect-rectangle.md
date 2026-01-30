# 391. Perfect Rectangle

- Difficulty: Hard
- Topics: Array, Hash Table, Math, Geometry, Line Sweep
- Slug: perfect-rectangle
- Problem ID: 391

## Description
Given an array rectangles where rectangles[i] = [xi, yi, ai, bi] represents an axis-aligned rectangle. The bottom-left point of the rectangle is (xi, yi) and the top-right point of it is (ai, bi).
Return true if all the rectangles together form an exact cover of a rectangular region.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: rectangles = [[1,1,3,3],[3,1,4,2],[3,2,4,4],[1,3,2,4],[2,3,3,4]]
Output: true
Explanation: All 5 rectangles together form an exact cover of a rectangular region.
```
Images:
- https://assets.leetcode.com/uploads/2021/03/27/perectrec1-plane.jpg

### Example 2
```text
Input: rectangles = [[1,1,2,3],[1,3,2,4],[3,1,4,2],[3,2,4,4]]
Output: false
Explanation: Because there is a gap between the two rectangular regions.
```
Images:
- https://assets.leetcode.com/uploads/2021/03/27/perfectrec2-plane.jpg

### Example 3
```text
Input: rectangles = [[1,1,3,3],[3,1,4,2],[1,3,2,4],[2,2,4,4]]
Output: false
Explanation: Because two of the rectangles overlap with each other.
```
Images:
- https://assets.leetcode.com/uploads/2021/03/27/perfecrrec4-plane.jpg


## Constraints
- 1 <= rectangles.length <= 2 * 104
- rectangles[i].length == 4
- -105 <= xi < ai <= 105
- -105 <= yi < bi <= 105

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isRectangleCover(vector<vector<int>>& rectangles) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isRectangleCover(int[][] rectangles) {
        
    }
}
```

### python
```python
class Solution(object):
    def isRectangleCover(self, rectangles):
        """
        :type rectangles: List[List[int]]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isRectangleCover(self, rectangles: List[List[int]]) -> bool:
```

### c
```c
bool isRectangleCover(int** rectangles, int rectanglesSize, int* rectanglesColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsRectangleCover(int[][] rectangles) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {
    
};
```

### typescript
```typescript
function isRectangleCover(rectangles: number[][]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $rectangles
     * @return Boolean
     */
    function isRectangleCover($rectangles) {
        
    }
}
```

### swift
```swift
class Solution {
    func isRectangleCover(_ rectangles: [[Int]]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isRectangleCover(rectangles: Array<IntArray>): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isRectangleCover(List<List<int>> rectangles) {
    
  }
}
```

### golang
```golang
func isRectangleCover(rectangles [][]int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[][]} rectangles
# @return {Boolean}
def is_rectangle_cover(rectangles)
    
end
```

### scala
```scala
object Solution {
    def isRectangleCover(rectangles: Array[Array[Int]]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_rectangle_cover(rectangles: Vec<Vec<i32>>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-rectangle-cover rectangles)
  (-> (listof (listof exact-integer?)) boolean?)
  )
```

### erlang
```erlang
-spec is_rectangle_cover(Rectangles :: [[integer()]]) -> boolean().
is_rectangle_cover(Rectangles) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_rectangle_cover(rectangles :: [[integer]]) :: boolean
  def is_rectangle_cover(rectangles) do
    
  end
end
```
