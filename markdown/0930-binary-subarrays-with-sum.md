# 930. Binary Subarrays With Sum

- Difficulty: Medium
- Topics: Array, Hash Table, Sliding Window, Prefix Sum
- Slug: binary-subarrays-with-sum
- Problem ID: 966

## Description
Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.
A subarray is a contiguous part of the array.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,0,1,0,1], goal = 2
Output: 4
Explanation: The 4 subarrays are bolded and underlined below:
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
```

### Example 2
```text
Input: nums = [0,0,0,0,0], goal = 0
Output: 15
```


## Constraints
- 1 <= nums.length <= 3 * 104
- nums[i] is either 0 or 1.
- 0 <= goal <= nums.length

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numSubarraysWithSum(vector<int>& nums, int goal) {
        
    }
};
```

### java
```java
class Solution {
    public int numSubarraysWithSum(int[] nums, int goal) {
        
    }
}
```

### python
```python
class Solution(object):
    def numSubarraysWithSum(self, nums, goal):
        """
        :type nums: List[int]
        :type goal: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
```

### c
```c
int numSubarraysWithSum(int* nums, int numsSize, int goal) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumSubarraysWithSum(int[] nums, int goal) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    
};
```

### typescript
```typescript
function numSubarraysWithSum(nums: number[], goal: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $goal
     * @return Integer
     */
    function numSubarraysWithSum($nums, $goal) {
        
    }
}
```

### swift
```swift
class Solution {
    func numSubarraysWithSum(_ nums: [Int], _ goal: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numSubarraysWithSum(nums: IntArray, goal: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numSubarraysWithSum(List<int> nums, int goal) {
    
  }
}
```

### golang
```golang
func numSubarraysWithSum(nums []int, goal int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} goal
# @return {Integer}
def num_subarrays_with_sum(nums, goal)
    
end
```

### scala
```scala
object Solution {
    def numSubarraysWithSum(nums: Array[Int], goal: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_subarrays_with_sum(nums: Vec<i32>, goal: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-subarrays-with-sum nums goal)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec num_subarrays_with_sum(Nums :: [integer()], Goal :: integer()) -> integer().
num_subarrays_with_sum(Nums, Goal) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_subarrays_with_sum(nums :: [integer], goal :: integer) :: integer
  def num_subarrays_with_sum(nums, goal) do
    
  end
end
```
