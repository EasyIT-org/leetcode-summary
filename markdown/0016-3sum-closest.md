# 16. 3Sum Closest

- Difficulty: Medium
- Topics: Array, Two Pointers, Sorting
- Slug: 3sum-closest
- Problem ID: 16

## Description
Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
Return the sum of the three integers.
You may assume that each input would have exactly one solution.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
```

### Example 2
```text
Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
```


## Constraints
- 3 <= nums.length <= 500
- -1000 <= nums[i] <= 1000
- -104 <= target <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
        
    }
};
```

### java
```java
class Solution {
    public int threeSumClosest(int[] nums, int target) {
        
    }
}
```

### python
```python
class Solution(object):
    def threeSumClosest(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
```

### c
```c
int threeSumClosest(int* nums, int numsSize, int target) {
    
}
```

### csharp
```csharp
public class Solution {
    public int ThreeSumClosest(int[] nums, int target) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    
};
```

### typescript
```typescript
function threeSumClosest(nums: number[], target: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer
     */
    function threeSumClosest($nums, $target) {
        
    }
}
```

### swift
```swift
class Solution {
    func threeSumClosest(_ nums: [Int], _ target: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun threeSumClosest(nums: IntArray, target: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int threeSumClosest(List<int> nums, int target) {
    
  }
}
```

### golang
```golang
func threeSumClosest(nums []int, target int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def three_sum_closest(nums, target)
    
end
```

### scala
```scala
object Solution {
    def threeSumClosest(nums: Array[Int], target: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn three_sum_closest(nums: Vec<i32>, target: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (three-sum-closest nums target)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec three_sum_closest(Nums :: [integer()], Target :: integer()) -> integer().
three_sum_closest(Nums, Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec three_sum_closest(nums :: [integer], target :: integer) :: integer
  def three_sum_closest(nums, target) do
    
  end
end
```
