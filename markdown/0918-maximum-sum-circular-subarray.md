# 918. Maximum Sum Circular Subarray

- Difficulty: Medium
- Topics: Array, Divide and Conquer, Dynamic Programming, Queue, Monotonic Queue
- Slug: maximum-sum-circular-subarray
- Problem ID: 954

## Description
Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.
A circular array means the end of the array connects to the beginning of the array. Formally, the next element of nums[i] is nums[(i + 1) % n] and the previous element of nums[i] is nums[(i - 1 + n) % n].
A subarray may only include each element of the fixed buffer nums at most once. Formally, for a subarray nums[i], nums[i + 1], ..., nums[j], there does not exist i <= k1, k2 <= j with k1 % n == k2 % n.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,-2,3,-2]
Output: 3
Explanation: Subarray [3] has maximum sum 3.
```

### Example 2
```text
Input: nums = [5,-3,5]
Output: 10
Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.
```

### Example 3
```text
Input: nums = [-3,-2,-3]
Output: -2
Explanation: Subarray [-2] has maximum sum -2.
```


## Constraints
- n == nums.length
- 1 <= n <= 3 * 104
- -3 * 104 <= nums[i] <= 3 * 104

## Hints
- For those of you who are familiar with the <b>Kadane's algorithm</b>, think in terms of that. For the newbies, Kadane's algorithm is used to finding the maximum sum subarray from a given array. This problem is a twist on that idea and it is advisable to read up on that algorithm first before starting this problem. Unless you already have a great algorithm brewing up in your mind in which case, go right ahead!
- What is an alternate way of representing a circular array so that it appears to be a straight array?
Essentially, there are two cases of this problem that we need to take care of. Let's look at the figure below to understand those two cases:

<br>
<img src="https://assets.leetcode.com/uploads/2019/10/20/circular_subarray_hint_1.png" width="700"/>
- The first case can be handled by the good old Kadane's algorithm. However, is there a smarter way of going about handling the second case as well?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxSubarraySumCircular(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int maxSubarraySumCircular(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxSubarraySumCircular(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxSubarraySumCircular(self, nums: List[int]) -> int:
```

### c
```c
int maxSubarraySumCircular(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxSubarraySumCircular(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    
};
```

### typescript
```typescript
function maxSubarraySumCircular(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxSubarraySumCircular($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxSubarraySumCircular(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxSubarraySumCircular(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxSubarraySumCircular(List<int> nums) {
    
  }
}
```

### golang
```golang
func maxSubarraySumCircular(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def max_subarray_sum_circular(nums)
    
end
```

### scala
```scala
object Solution {
    def maxSubarraySumCircular(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_subarray_sum_circular(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-subarray-sum-circular nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec max_subarray_sum_circular(Nums :: [integer()]) -> integer().
max_subarray_sum_circular(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_subarray_sum_circular(nums :: [integer]) :: integer
  def max_subarray_sum_circular(nums) do
    
  end
end
```
