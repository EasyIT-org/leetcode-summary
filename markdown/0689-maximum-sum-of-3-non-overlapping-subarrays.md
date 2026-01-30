# 689. Maximum Sum of 3 Non-Overlapping Subarrays

- Difficulty: Hard
- Topics: Array, Dynamic Programming, Sliding Window, Prefix Sum
- Slug: maximum-sum-of-3-non-overlapping-subarrays
- Problem ID: 689

## Description
Given an integer array nums and an integer k, find three non-overlapping subarrays of length k with maximum sum and return them.
Return the result as a list of indices representing the starting position of each interval (0-indexed). If there are multiple answers, return the lexicographically smallest one.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,2,1,2,6,7,5,1], k = 2
Output: [0,3,5]
Explanation: Subarrays [1, 2], [2, 6], [7, 5] correspond to the starting indices [0, 3, 5].
We could have also taken [2, 1], but an answer of [1, 3, 5] would be lexicographically larger.
```

### Example 2
```text
Input: nums = [1,2,1,2,1,2,1,2,1], k = 2
Output: [0,2,4]
```


## Constraints
- 1 <= nums.length <= 2 * 104
- 1 <= nums[i] < 216
- 1 <= k <= floor(nums.length / 3)

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> maxSumOfThreeSubarrays(vector<int>& nums, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int[] maxSumOfThreeSubarrays(int[] nums, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxSumOfThreeSubarrays(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def maxSumOfThreeSubarrays(self, nums: List[int], k: int) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* maxSumOfThreeSubarrays(int* nums, int numsSize, int k, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] MaxSumOfThreeSubarrays(int[] nums, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
    
};
```

### typescript
```typescript
function maxSumOfThreeSubarrays(nums: number[], k: number): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer[]
     */
    function maxSumOfThreeSubarrays($nums, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxSumOfThreeSubarrays(_ nums: [Int], _ k: Int) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxSumOfThreeSubarrays(nums: IntArray, k: Int): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> maxSumOfThreeSubarrays(List<int> nums, int k) {
    
  }
}
```

### golang
```golang
func maxSumOfThreeSubarrays(nums []int, k int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer[]}
def max_sum_of_three_subarrays(nums, k)
    
end
```

### scala
```scala
object Solution {
    def maxSumOfThreeSubarrays(nums: Array[Int], k: Int): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_sum_of_three_subarrays(nums: Vec<i32>, k: i32) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (max-sum-of-three-subarrays nums k)
  (-> (listof exact-integer?) exact-integer? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec max_sum_of_three_subarrays(Nums :: [integer()], K :: integer()) -> [integer()].
max_sum_of_three_subarrays(Nums, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_sum_of_three_subarrays(nums :: [integer], k :: integer) :: [integer]
  def max_sum_of_three_subarrays(nums, k) do
    
  end
end
```
