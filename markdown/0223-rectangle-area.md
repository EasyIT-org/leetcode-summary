# 223. Rectangle Area

- Difficulty: Medium
- Topics: Math, Geometry
- Slug: rectangle-area
- Problem ID: 223

## Description
Given the coordinates of two rectilinear rectangles in a 2D plane, return the total area covered by the two rectangles.
The first rectangle is defined by its bottom-left corner (ax1, ay1) and its top-right corner (ax2, ay2).
The second rectangle is defined by its bottom-left corner (bx1, by1) and its top-right corner (bx2, by2).
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2
Output: 45
```
Images:
- https://assets.leetcode.com/uploads/2021/05/08/rectangle-plane.png

### Example 2
```text
Input: ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2
Output: 16
```
Images:
- https://assets.leetcode.com/uploads/2021/05/08/rectangle-plane.png


## Constraints
- -104 <= ax1 <= ax2 <= 104
- -104 <= ay1 <= ay2 <= 104
- -104 <= bx1 <= bx2 <= 104
- -104 <= by1 <= by2 <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int computeArea(int ax1, int ay1, int ax2, int ay2, int bx1, int by1, int bx2, int by2) {
        
    }
};
```

### java
```java
class Solution {
    public int computeArea(int ax1, int ay1, int ax2, int ay2, int bx1, int by1, int bx2, int by2) {
        
    }
}
```

### python
```python
class Solution(object):
    def computeArea(self, ax1, ay1, ax2, ay2, bx1, by1, bx2, by2):
        """
        :type ax1: int
        :type ay1: int
        :type ax2: int
        :type ay2: int
        :type bx1: int
        :type by1: int
        :type bx2: int
        :type by2: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def computeArea(self, ax1: int, ay1: int, ax2: int, ay2: int, bx1: int, by1: int, bx2: int, by2: int) -> int:
```

### c
```c
int computeArea(int ax1, int ay1, int ax2, int ay2, int bx1, int by1, int bx2, int by2) {
    
}
```

### csharp
```csharp
public class Solution {
    public int ComputeArea(int ax1, int ay1, int ax2, int ay2, int bx1, int by1, int bx2, int by2) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    
};
```

### typescript
```typescript
function computeArea(ax1: number, ay1: number, ax2: number, ay2: number, bx1: number, by1: number, bx2: number, by2: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $ax1
     * @param Integer $ay1
     * @param Integer $ax2
     * @param Integer $ay2
     * @param Integer $bx1
     * @param Integer $by1
     * @param Integer $bx2
     * @param Integer $by2
     * @return Integer
     */
    function computeArea($ax1, $ay1, $ax2, $ay2, $bx1, $by1, $bx2, $by2) {
        
    }
}
```

### swift
```swift
class Solution {
    func computeArea(_ ax1: Int, _ ay1: Int, _ ax2: Int, _ ay2: Int, _ bx1: Int, _ by1: Int, _ bx2: Int, _ by2: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun computeArea(ax1: Int, ay1: Int, ax2: Int, ay2: Int, bx1: Int, by1: Int, bx2: Int, by2: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int computeArea(int ax1, int ay1, int ax2, int ay2, int bx1, int by1, int bx2, int by2) {
    
  }
}
```

### golang
```golang
func computeArea(ax1 int, ay1 int, ax2 int, ay2 int, bx1 int, by1 int, bx2 int, by2 int) int {
    
}
```

### ruby
```ruby
# @param {Integer} ax1
# @param {Integer} ay1
# @param {Integer} ax2
# @param {Integer} ay2
# @param {Integer} bx1
# @param {Integer} by1
# @param {Integer} bx2
# @param {Integer} by2
# @return {Integer}
def compute_area(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2)
    
end
```

### scala
```scala
object Solution {
    def computeArea(ax1: Int, ay1: Int, ax2: Int, ay2: Int, bx1: Int, by1: Int, bx2: Int, by2: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn compute_area(ax1: i32, ay1: i32, ax2: i32, ay2: i32, bx1: i32, by1: i32, bx2: i32, by2: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (compute-area ax1 ay1 ax2 ay2 bx1 by1 bx2 by2)
  (-> exact-integer? exact-integer? exact-integer? exact-integer? exact-integer? exact-integer? exact-integer? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec compute_area(Ax1 :: integer(), Ay1 :: integer(), Ax2 :: integer(), Ay2 :: integer(), Bx1 :: integer(), By1 :: integer(), Bx2 :: integer(), By2 :: integer()) -> integer().
compute_area(Ax1, Ay1, Ax2, Ay2, Bx1, By1, Bx2, By2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec compute_area(ax1 :: integer, ay1 :: integer, ax2 :: integer, ay2 :: integer, bx1 :: integer, by1 :: integer, bx2 :: integer, by2 :: integer) :: integer
  def compute_area(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) do
    
  end
end
```
