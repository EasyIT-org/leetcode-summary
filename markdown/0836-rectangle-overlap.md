# 836. Rectangle Overlap

- Difficulty: Easy
- Topics: Math, Geometry
- Slug: rectangle-overlap
- Problem ID: 866

## Description
An axis-aligned rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) is the coordinate of its bottom-left corner, and (x2, y2) is the coordinate of its top-right corner. Its top and bottom edges are parallel to the X-axis, and its left and right edges are parallel to the Y-axis.
Two rectangles overlap if the area of their intersection is positive. To be clear, two rectangles that only touch at the corner or edges do not overlap.
Given two axis-aligned rectangles rec1 and rec2, return true if they overlap, otherwise return false.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
Output: true
```

### Example 2
```text
Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1]
Output: false
```

### Example 3
```text
Input: rec1 = [0,0,1,1], rec2 = [2,2,3,3]
Output: false
```


## Constraints
- rec1.length == 4
- rec2.length == 4
- -109 <= rec1[i], rec2[i] <= 109
- rec1 and rec2 represent a valid rectangle with a non-zero area.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isRectangleOverlap(vector<int>& rec1, vector<int>& rec2) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isRectangleOverlap(int[] rec1, int[] rec2) {
        
    }
}
```

### python
```python
class Solution(object):
    def isRectangleOverlap(self, rec1, rec2):
        """
        :type rec1: List[int]
        :type rec2: List[int]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isRectangleOverlap(self, rec1: List[int], rec2: List[int]) -> bool:
```

### c
```c
bool isRectangleOverlap(int* rec1, int rec1Size, int* rec2, int rec2Size) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsRectangleOverlap(int[] rec1, int[] rec2) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    
};
```

### typescript
```typescript
function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $rec1
     * @param Integer[] $rec2
     * @return Boolean
     */
    function isRectangleOverlap($rec1, $rec2) {
        
    }
}
```

### swift
```swift
class Solution {
    func isRectangleOverlap(_ rec1: [Int], _ rec2: [Int]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isRectangleOverlap(rec1: IntArray, rec2: IntArray): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isRectangleOverlap(List<int> rec1, List<int> rec2) {
    
  }
}
```

### golang
```golang
func isRectangleOverlap(rec1 []int, rec2 []int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} rec1
# @param {Integer[]} rec2
# @return {Boolean}
def is_rectangle_overlap(rec1, rec2)
    
end
```

### scala
```scala
object Solution {
    def isRectangleOverlap(rec1: Array[Int], rec2: Array[Int]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_rectangle_overlap(rec1: Vec<i32>, rec2: Vec<i32>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-rectangle-overlap rec1 rec2)
  (-> (listof exact-integer?) (listof exact-integer?) boolean?)
  )
```

### erlang
```erlang
-spec is_rectangle_overlap(Rec1 :: [integer()], Rec2 :: [integer()]) -> boolean().
is_rectangle_overlap(Rec1, Rec2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_rectangle_overlap(rec1 :: [integer], rec2 :: [integer]) :: boolean
  def is_rectangle_overlap(rec1, rec2) do
    
  end
end
```
