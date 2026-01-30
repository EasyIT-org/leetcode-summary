# 84. Largest Rectangle in Histogram

- Difficulty: Hard
- Topics: Array, Stack, Monotonic Stack
- Slug: largest-rectangle-in-histogram
- Problem ID: 84

## Description
Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.
```
Images:
- https://assets.leetcode.com/uploads/2021/01/04/histogram.jpg

### Example 2
```text
Input: heights = [2,4]
Output: 4
```
Images:
- https://assets.leetcode.com/uploads/2021/01/04/histogram-1.jpg


## Constraints
- 1 <= heights.length <= 105
- 0 <= heights[i] <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        
    }
};
```

### java
```java
class Solution {
    public int largestRectangleArea(int[] heights) {
        
    }
}
```

### python
```python
class Solution(object):
    def largestRectangleArea(self, heights):
        """
        :type heights: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
```

### c
```c
int largestRectangleArea(int* heights, int heightsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int LargestRectangleArea(int[] heights) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    
};
```

### typescript
```typescript
function largestRectangleArea(heights: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $heights
     * @return Integer
     */
    function largestRectangleArea($heights) {
        
    }
}
```

### swift
```swift
class Solution {
    func largestRectangleArea(_ heights: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun largestRectangleArea(heights: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int largestRectangleArea(List<int> heights) {
    
  }
}
```

### golang
```golang
func largestRectangleArea(heights []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} heights
# @return {Integer}
def largest_rectangle_area(heights)
    
end
```

### scala
```scala
object Solution {
    def largestRectangleArea(heights: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn largest_rectangle_area(heights: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (largest-rectangle-area heights)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec largest_rectangle_area(Heights :: [integer()]) -> integer().
largest_rectangle_area(Heights) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec largest_rectangle_area(heights :: [integer]) :: integer
  def largest_rectangle_area(heights) do
    
  end
end
```
