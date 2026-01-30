# 523. Continuous Subarray Sum

- Difficulty: Medium
- Topics: Array, Hash Table, Math, Prefix Sum
- Slug: continuous-subarray-sum
- Problem ID: 523

## Description
Given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.
A good subarray is a subarray where:
Note that:
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [23,2,4,6,7], k = 6
Output: true
Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.
```

### Example 2
```text
Input: nums = [23,2,6,4,7], k = 6
Output: true
Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.
```

### Example 3
```text
Input: nums = [23,2,6,4,7], k = 13
Output: false
```


## Constraints
- 1 <= nums.length <= 105
- 0 <= nums[i] <= 109
- 0 <= sum(nums[i]) <= 231 - 1
- 1 <= k <= 231 - 1

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool checkSubarraySum(vector<int>& nums, int k) {
        
    }
};
```

### java
```java
class Solution {
    public boolean checkSubarraySum(int[] nums, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def checkSubarraySum(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
```

### c
```c
bool checkSubarraySum(int* nums, int numsSize, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool CheckSubarraySum(int[] nums, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    
};
```

### typescript
```typescript
function checkSubarraySum(nums: number[], k: number): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Boolean
     */
    function checkSubarraySum($nums, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func checkSubarraySum(_ nums: [Int], _ k: Int) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun checkSubarraySum(nums: IntArray, k: Int): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool checkSubarraySum(List<int> nums, int k) {
    
  }
}
```

### golang
```golang
func checkSubarraySum(nums []int, k int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} k
# @return {Boolean}
def check_subarray_sum(nums, k)
    
end
```

### scala
```scala
object Solution {
    def checkSubarraySum(nums: Array[Int], k: Int): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn check_subarray_sum(nums: Vec<i32>, k: i32) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (check-subarray-sum nums k)
  (-> (listof exact-integer?) exact-integer? boolean?)
  )
```

### erlang
```erlang
-spec check_subarray_sum(Nums :: [integer()], K :: integer()) -> boolean().
check_subarray_sum(Nums, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec check_subarray_sum(nums :: [integer], k :: integer) :: boolean
  def check_subarray_sum(nums, k) do
    
  end
end
```
