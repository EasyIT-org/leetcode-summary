# 995. Minimum Number of K Consecutive Bit Flips

- Difficulty: Hard
- Topics: Array, Bit Manipulation, Queue, Sliding Window, Prefix Sum
- Slug: minimum-number-of-k-consecutive-bit-flips
- Problem ID: 1037

## Description
You are given a binary array nums and an integer k.
A k-bit flip is choosing a subarray of length k from nums and simultaneously changing every 0 in the subarray to 1, and every 1 in the subarray to 0.
Return the minimum number of k-bit flips required so that there is no 0 in the array. If it is not possible, return -1.
A subarray is a contiguous part of an array.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [0,1,0], k = 1
Output: 2
Explanation: Flip nums[0], then flip nums[2].
```

### Example 2
```text
Input: nums = [1,1,0], k = 2
Output: -1
Explanation: No matter how we flip subarrays of size 2, we cannot make the array become [1,1,1].
```

### Example 3
```text
Input: nums = [0,0,0,1,0,1,1,0], k = 3
Output: 3
Explanation: 
Flip nums[0],nums[1],nums[2]: nums becomes [1,1,1,1,0,1,1,0]
Flip nums[4],nums[5],nums[6]: nums becomes [1,1,1,1,1,0,0,0]
Flip nums[5],nums[6],nums[7]: nums becomes [1,1,1,1,1,1,1,1]
```


## Constraints
- 1 <= nums.length <= 105
- 1 <= k <= nums.length

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int minKBitFlips(vector<int>& nums, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int minKBitFlips(int[] nums, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def minKBitFlips(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minKBitFlips(self, nums: List[int], k: int) -> int:
```

### c
```c
int minKBitFlips(int* nums, int numsSize, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinKBitFlips(int[] nums, int k) {
        
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
var minKBitFlips = function(nums, k) {
    
};
```

### typescript
```typescript
function minKBitFlips(nums: number[], k: number): number {
    
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
    function minKBitFlips($nums, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func minKBitFlips(_ nums: [Int], _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minKBitFlips(nums: IntArray, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minKBitFlips(List<int> nums, int k) {
    
  }
}
```

### golang
```golang
func minKBitFlips(nums []int, k int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def min_k_bit_flips(nums, k)
    
end
```

### scala
```scala
object Solution {
    def minKBitFlips(nums: Array[Int], k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn min_k_bit_flips(nums: Vec<i32>, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (min-k-bit-flips nums k)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec min_k_bit_flips(Nums :: [integer()], K :: integer()) -> integer().
min_k_bit_flips(Nums, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec min_k_bit_flips(nums :: [integer], k :: integer) :: integer
  def min_k_bit_flips(nums, k) do
    
  end
end
```
