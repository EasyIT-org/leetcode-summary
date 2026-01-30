# 1031. Maximum Sum of Two Non-Overlapping Subarrays

- Difficulty: Medium
- Topics: Array, Dynamic Programming, Sliding Window
- Slug: maximum-sum-of-two-non-overlapping-subarrays
- Problem ID: 1096

## Description
Given an integer array nums and two integers firstLen and secondLen, return the maximum sum of elements in two non-overlapping subarrays with lengths firstLen and secondLen.
The array with length firstLen could occur before or after the array with length secondLen, but they have to be non-overlapping.
A subarray is a contiguous part of an array.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [0,6,5,2,2,5,1,9,4], firstLen = 1, secondLen = 2
Output: 20
Explanation: One choice of subarrays is [9] with length 1, and [6,5] with length 2.
```

### Example 2
```text
Input: nums = [3,8,1,3,2,1,8,9,0], firstLen = 3, secondLen = 2
Output: 29
Explanation: One choice of subarrays is [3,8,1] with length 3, and [8,9] with length 2.
```

### Example 3
```text
Input: nums = [2,1,5,6,0,9,5,0,3,8], firstLen = 4, secondLen = 3
Output: 31
Explanation: One choice of subarrays is [5,6,0,9] with length 4, and [0,3,8] with length 3.
```


## Constraints
- 1 <= firstLen, secondLen <= 1000
- 2 <= firstLen + secondLen <= 1000
- firstLen + secondLen <= nums.length <= 1000
- 0 <= nums[i] <= 1000

## Hints
- We can use prefix sums to calculate any subarray sum quickly.
For each L length subarray, find the best possible M length subarray that occurs before and after it.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxSumTwoNoOverlap(vector<int>& nums, int firstLen, int secondLen) {
        
    }
};
```

### java
```java
class Solution {
    public int maxSumTwoNoOverlap(int[] nums, int firstLen, int secondLen) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxSumTwoNoOverlap(self, nums, firstLen, secondLen):
        """
        :type nums: List[int]
        :type firstLen: int
        :type secondLen: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxSumTwoNoOverlap(self, nums: List[int], firstLen: int, secondLen: int) -> int:
```

### c
```c
int maxSumTwoNoOverlap(int* nums, int numsSize, int firstLen, int secondLen) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxSumTwoNoOverlap(int[] nums, int firstLen, int secondLen) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {
    
};
```

### typescript
```typescript
function maxSumTwoNoOverlap(nums: number[], firstLen: number, secondLen: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $firstLen
     * @param Integer $secondLen
     * @return Integer
     */
    function maxSumTwoNoOverlap($nums, $firstLen, $secondLen) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxSumTwoNoOverlap(_ nums: [Int], _ firstLen: Int, _ secondLen: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxSumTwoNoOverlap(nums: IntArray, firstLen: Int, secondLen: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxSumTwoNoOverlap(List<int> nums, int firstLen, int secondLen) {
    
  }
}
```

### golang
```golang
func maxSumTwoNoOverlap(nums []int, firstLen int, secondLen int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} first_len
# @param {Integer} second_len
# @return {Integer}
def max_sum_two_no_overlap(nums, first_len, second_len)
    
end
```

### scala
```scala
object Solution {
    def maxSumTwoNoOverlap(nums: Array[Int], firstLen: Int, secondLen: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_sum_two_no_overlap(nums: Vec<i32>, first_len: i32, second_len: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-sum-two-no-overlap nums firstLen secondLen)
  (-> (listof exact-integer?) exact-integer? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec max_sum_two_no_overlap(Nums :: [integer()], FirstLen :: integer(), SecondLen :: integer()) -> integer().
max_sum_two_no_overlap(Nums, FirstLen, SecondLen) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_sum_two_no_overlap(nums :: [integer], first_len :: integer, second_len :: integer) :: integer
  def max_sum_two_no_overlap(nums, first_len, second_len) do
    
  end
end
```
