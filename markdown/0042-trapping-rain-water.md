# 42. Trapping Rain Water

- Difficulty: Hard
- Topics: Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack
- Slug: trapping-rain-water
- Problem ID: 42

## Description
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
```
Images:
- https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png

### Example 2
```text
Input: height = [4,2,0,3,2,5]
Output: 9
```
Images:
- https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png


## Constraints
- n == height.length
- 1 <= n <= 2 * 104
- 0 <= height[i] <= 105

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int trap(vector<int>& height) {
        
    }
};
```

### java
```java
class Solution {
    public int trap(int[] height) {
        
    }
}
```

### python
```python
class Solution(object):
    def trap(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def trap(self, height: List[int]) -> int:
```

### c
```c
int trap(int* height, int heightSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int Trap(int[] height) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
};
```

### typescript
```typescript
function trap(height: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $height
     * @return Integer
     */
    function trap($height) {
        
    }
}
```

### swift
```swift
class Solution {
    func trap(_ height: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun trap(height: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int trap(List<int> height) {
    
  }
}
```

### golang
```golang
func trap(height []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} height
# @return {Integer}
def trap(height)
    
end
```

### scala
```scala
object Solution {
    def trap(height: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn trap(height: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (trap height)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec trap(Height :: [integer()]) -> integer().
trap(Height) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec trap(height :: [integer]) :: integer
  def trap(height) do
    
  end
end
```
