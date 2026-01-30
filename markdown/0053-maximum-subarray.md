# 53. Maximum Subarray

- Difficulty: Medium
- Topics: Array, Divide and Conquer, Dynamic Programming
- Slug: maximum-subarray
- Problem ID: 53

## Description
Given an integer array nums, find the subarray with the largest sum, and return its sum.
Example 1:
Example 2:
Example 3:
Constraints:
Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

## Examples
### Example 1
```text
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
```

### Example 2
```text
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
```

### Example 3
```text
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
```


## Constraints
- 1 <= nums.length <= 105
- -104 <= nums[i] <= 104

## Hints
(none)

## Follow Ups
- If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int maxSubArray(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
```

### c
```c
int maxSubArray(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxSubArray(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
};
```

### typescript
```typescript
function maxSubArray(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxSubArray($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxSubArray(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxSubArray(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxSubArray(List<int> nums) {
    
  }
}
```

### golang
```golang
func maxSubArray(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def max_sub_array(nums)
    
end
```

### scala
```scala
object Solution {
    def maxSubArray(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_sub_array(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-sub-array nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec max_sub_array(Nums :: [integer()]) -> integer().
max_sub_array(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_sub_array(nums :: [integer]) :: integer
  def max_sub_array(nums) do
    
  end
end
```
