# 713. Subarray Product Less Than K

- Difficulty: Medium
- Topics: Array, Binary Search, Sliding Window, Prefix Sum
- Slug: subarray-product-less-than-k
- Problem ID: 713

## Description
Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [10,5,2,6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
```

### Example 2
```text
Input: nums = [1,2,3], k = 0
Output: 0
```


## Constraints
- 1 <= nums.length <= 3 * 104
- 1 <= nums[i] <= 1000
- 0 <= k <= 106

## Hints
- For each j, let opt(j) be the smallest i so that nums[i] * nums[i+1] * ... * nums[j] is less than k.  opt is an increasing function.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numSubarrayProductLessThanK(vector<int>& nums, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int numSubarrayProductLessThanK(int[] nums, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def numSubarrayProductLessThanK(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
```

### c
```c
int numSubarrayProductLessThanK(int* nums, int numsSize, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumSubarrayProductLessThanK(int[] nums, int k) {
        
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
var numSubarrayProductLessThanK = function(nums, k) {
    
};
```

### typescript
```typescript
function numSubarrayProductLessThanK(nums: number[], k: number): number {
    
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
    function numSubarrayProductLessThanK($nums, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func numSubarrayProductLessThanK(_ nums: [Int], _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numSubarrayProductLessThanK(nums: IntArray, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numSubarrayProductLessThanK(List<int> nums, int k) {
    
  }
}
```

### golang
```golang
func numSubarrayProductLessThanK(nums []int, k int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def num_subarray_product_less_than_k(nums, k)
    
end
```

### scala
```scala
object Solution {
    def numSubarrayProductLessThanK(nums: Array[Int], k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_subarray_product_less_than_k(nums: Vec<i32>, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-subarray-product-less-than-k nums k)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec num_subarray_product_less_than_k(Nums :: [integer()], K :: integer()) -> integer().
num_subarray_product_less_than_k(Nums, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_subarray_product_less_than_k(nums :: [integer], k :: integer) :: integer
  def num_subarray_product_less_than_k(nums, k) do
    
  end
end
```
