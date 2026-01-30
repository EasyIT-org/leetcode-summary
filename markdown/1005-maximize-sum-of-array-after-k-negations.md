# 1005. Maximize Sum Of Array After K Negations

- Difficulty: Easy
- Topics: Array, Greedy, Sorting
- Slug: maximize-sum-of-array-after-k-negations
- Problem ID: 1047

## Description
Given an integer array nums and an integer k, modify the array in the following way:
You should apply this process exactly k times. You may choose the same index i multiple times.
Return the largest possible sum of the array after modifying it in this way.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [4,2,3], k = 1
Output: 5
Explanation: Choose index 1 and nums becomes [4,-2,3].
```

### Example 2
```text
Input: nums = [3,-1,0,2], k = 3
Output: 6
Explanation: Choose indices (1, 2, 2) and nums becomes [3,1,0,2].
```

### Example 3
```text
Input: nums = [2,-3,-1,5,-4], k = 2
Output: 13
Explanation: Choose indices (1, 4) and nums becomes [2,3,-1,5,4].
```


## Constraints
- 1 <= nums.length <= 104
- -100 <= nums[i] <= 100
- 1 <= k <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int largestSumAfterKNegations(vector<int>& nums, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int largestSumAfterKNegations(int[] nums, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def largestSumAfterKNegations(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def largestSumAfterKNegations(self, nums: List[int], k: int) -> int:
```

### c
```c
int largestSumAfterKNegations(int* nums, int numsSize, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int LargestSumAfterKNegations(int[] nums, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    
};
```

### typescript
```typescript
function largestSumAfterKNegations(nums: number[], k: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function largestSumAfterKNegations($nums, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func largestSumAfterKNegations(_ nums: [Int], _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun largestSumAfterKNegations(nums: IntArray, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int largestSumAfterKNegations(List<int> nums, int k) {
    
  }
}
```

### golang
```golang
func largestSumAfterKNegations(nums []int, k int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def largest_sum_after_k_negations(nums, k)
    
end
```

### scala
```scala
object Solution {
    def largestSumAfterKNegations(nums: Array[Int], k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn largest_sum_after_k_negations(nums: Vec<i32>, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (largest-sum-after-k-negations nums k)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec largest_sum_after_k_negations(Nums :: [integer()], K :: integer()) -> integer().
largest_sum_after_k_negations(Nums, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec largest_sum_after_k_negations(nums :: [integer], k :: integer) :: integer
  def largest_sum_after_k_negations(nums, k) do
    
  end
end
```
