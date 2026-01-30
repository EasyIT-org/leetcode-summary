# 962. Maximum Width Ramp

- Difficulty: Medium
- Topics: Array, Two Pointers, Stack, Monotonic Stack
- Slug: maximum-width-ramp
- Problem ID: 1002

## Description
A ramp in an integer array nums is a pair (i, j) for which i < j and nums[i] <= nums[j]. The width of such a ramp is j - i.
Given an integer array nums, return the maximum width of a ramp in nums. If there is no ramp in nums, return 0.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [6,0,8,2,1,5]
Output: 4
Explanation: The maximum width ramp is achieved at (i, j) = (1, 5): nums[1] = 0 and nums[5] = 5.
```

### Example 2
```text
Input: nums = [9,8,1,0,1,9,4,0,4,1]
Output: 7
Explanation: The maximum width ramp is achieved at (i, j) = (2, 9): nums[2] = 1 and nums[9] = 1.
```


## Constraints
- 2 <= nums.length <= 5 * 104
- 0 <= nums[i] <= 5 * 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxWidthRamp(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int maxWidthRamp(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxWidthRamp(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxWidthRamp(self, nums: List[int]) -> int:
```

### c
```c
int maxWidthRamp(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxWidthRamp(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
    
};
```

### typescript
```typescript
function maxWidthRamp(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxWidthRamp($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxWidthRamp(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxWidthRamp(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxWidthRamp(List<int> nums) {
    
  }
}
```

### golang
```golang
func maxWidthRamp(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def max_width_ramp(nums)
    
end
```

### scala
```scala
object Solution {
    def maxWidthRamp(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_width_ramp(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-width-ramp nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec max_width_ramp(Nums :: [integer()]) -> integer().
max_width_ramp(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_width_ramp(nums :: [integer]) :: integer
  def max_width_ramp(nums) do
    
  end
end
```
