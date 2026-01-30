# 11. Container With Most Water

- Difficulty: Medium
- Topics: Array, Two Pointers, Greedy
- Slug: container-with-most-water
- Problem ID: 11

## Description
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
```
Images:
- https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg

### Example 2
```text
Input: height = [1,1]
Output: 1
```
Images:
- https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg


## Constraints
- n == height.length
- 2 <= n <= 105
- 0 <= height[i] <= 104

## Hints
- If you simulate the problem, it will be O(n^2) which is not efficient.
- Try to use two-pointers. Set one pointer to the left and one to the right of the array. Always move the pointer that points to the lower line.
- How can you calculate the amount of water at each step?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxArea(vector<int>& height) {
        
    }
};
```

### java
```java
class Solution {
    public int maxArea(int[] height) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxArea(self, height: List[int]) -> int:
```

### c
```c
int maxArea(int* height, int heightSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxArea(int[] height) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
};
```

### typescript
```typescript
function maxArea(height: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $height
     * @return Integer
     */
    function maxArea($height) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxArea(_ height: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxArea(height: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxArea(List<int> height) {
    
  }
}
```

### golang
```golang
func maxArea(height []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} height
# @return {Integer}
def max_area(height)
    
end
```

### scala
```scala
object Solution {
    def maxArea(height: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_area(height: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-area height)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec max_area(Height :: [integer()]) -> integer().
max_area(Height) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_area(height :: [integer]) :: integer
  def max_area(height) do
    
  end
end
```
