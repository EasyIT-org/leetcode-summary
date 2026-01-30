# 795. Number of Subarrays with Bounded Maximum

- Difficulty: Medium
- Topics: Array, Two Pointers
- Slug: number-of-subarrays-with-bounded-maximum
- Problem ID: 811

## Description
Given an integer array nums and two integers left and right, return the number of contiguous non-empty subarrays such that the value of the maximum array element in that subarray is in the range [left, right].
The test cases are generated so that the answer will fit in a 32-bit integer.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [2,1,4,3], left = 2, right = 3
Output: 3
Explanation: There are three subarrays that meet the requirements: [2], [2, 1], [3].
```

### Example 2
```text
Input: nums = [2,9,2,5,6], left = 2, right = 8
Output: 7
```


## Constraints
- 1 <= nums.length <= 105
- 0 <= nums[i] <= 109
- 0 <= left <= right <= 109

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numSubarrayBoundedMax(vector<int>& nums, int left, int right) {
        
    }
};
```

### java
```java
class Solution {
    public int numSubarrayBoundedMax(int[] nums, int left, int right) {
        
    }
}
```

### python
```python
class Solution(object):
    def numSubarrayBoundedMax(self, nums, left, right):
        """
        :type nums: List[int]
        :type left: int
        :type right: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numSubarrayBoundedMax(self, nums: List[int], left: int, right: int) -> int:
```

### c
```c
int numSubarrayBoundedMax(int* nums, int numsSize, int left, int right) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumSubarrayBoundedMax(int[] nums, int left, int right) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function(nums, left, right) {
    
};
```

### typescript
```typescript
function numSubarrayBoundedMax(nums: number[], left: number, right: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $left
     * @param Integer $right
     * @return Integer
     */
    function numSubarrayBoundedMax($nums, $left, $right) {
        
    }
}
```

### swift
```swift
class Solution {
    func numSubarrayBoundedMax(_ nums: [Int], _ left: Int, _ right: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numSubarrayBoundedMax(nums: IntArray, left: Int, right: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numSubarrayBoundedMax(List<int> nums, int left, int right) {
    
  }
}
```

### golang
```golang
func numSubarrayBoundedMax(nums []int, left int, right int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} left
# @param {Integer} right
# @return {Integer}
def num_subarray_bounded_max(nums, left, right)
    
end
```

### scala
```scala
object Solution {
    def numSubarrayBoundedMax(nums: Array[Int], left: Int, right: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_subarray_bounded_max(nums: Vec<i32>, left: i32, right: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-subarray-bounded-max nums left right)
  (-> (listof exact-integer?) exact-integer? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec num_subarray_bounded_max(Nums :: [integer()], Left :: integer(), Right :: integer()) -> integer().
num_subarray_bounded_max(Nums, Left, Right) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_subarray_bounded_max(nums :: [integer], left :: integer, right :: integer) :: integer
  def num_subarray_bounded_max(nums, left, right) do
    
  end
end
```
