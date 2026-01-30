# 850. Rectangle Area II

- Difficulty: Hard
- Topics: Array, Segment Tree, Line Sweep, Ordered Set
- Slug: rectangle-area-ii
- Problem ID: 880

## Description
You are given a 2D array of axis-aligned rectangles. Each rectangle[i] = [xi1, yi1, xi2, yi2] denotes the ith rectangle where (xi1, yi1) are the coordinates of the bottom-left corner, and (xi2, yi2) are the coordinates of the top-right corner.
Calculate the total area covered by all rectangles in the plane. Any area covered by two or more rectangles should only be counted once.
Return the total area. Since the answer may be too large, return it modulo 109 + 7.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: rectangles = [[0,0,2,2],[1,0,2,3],[1,0,3,1]]
Output: 6
Explanation: A total area of 6 is covered by all three rectangles, as illustrated in the picture.
From (1,1) to (2,2), the green and red rectangles overlap.
From (1,0) to (2,3), all three rectangles overlap.
```
Images:
- https://s3-lc-upload.s3.amazonaws.com/uploads/2018/06/06/rectangle_area_ii_pic.png

### Example 2
```text
Input: rectangles = [[0,0,1000000000,1000000000]]
Output: 49
Explanation: The answer is 1018 modulo (109 + 7), which is 49.
```
Images:
- https://s3-lc-upload.s3.amazonaws.com/uploads/2018/06/06/rectangle_area_ii_pic.png


## Constraints
- 1 <= rectangles.length <= 200
- rectanges[i].length == 4
- 0 <= xi1, yi1, xi2, yi2 <= 109
- xi1 <= xi2
- yi1 <= yi2
- All rectangles have non zero area.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int rectangleArea(vector<vector<int>>& rectangles) {
        
    }
};
```

### java
```java
class Solution {
    public int rectangleArea(int[][] rectangles) {
        
    }
}
```

### python
```python
class Solution(object):
    def rectangleArea(self, rectangles):
        """
        :type rectangles: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def rectangleArea(self, rectangles: List[List[int]]) -> int:
```

### c
```c
int rectangleArea(int** rectangles, int rectanglesSize, int* rectanglesColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int RectangleArea(int[][] rectangles) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var rectangleArea = function(rectangles) {
    
};
```

### typescript
```typescript
function rectangleArea(rectangles: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $rectangles
     * @return Integer
     */
    function rectangleArea($rectangles) {
        
    }
}
```

### swift
```swift
class Solution {
    func rectangleArea(_ rectangles: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun rectangleArea(rectangles: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int rectangleArea(List<List<int>> rectangles) {
    
  }
}
```

### golang
```golang
func rectangleArea(rectangles [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} rectangles
# @return {Integer}
def rectangle_area(rectangles)
    
end
```

### scala
```scala
object Solution {
    def rectangleArea(rectangles: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn rectangle_area(rectangles: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (rectangle-area rectangles)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec rectangle_area(Rectangles :: [[integer()]]) -> integer().
rectangle_area(Rectangles) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec rectangle_area(rectangles :: [[integer]]) :: integer
  def rectangle_area(rectangles) do
    
  end
end
```
