# 1004. Max Consecutive Ones III

- Difficulty: Medium
- Topics: Array, Binary Search, Sliding Window, Prefix Sum
- Slug: max-consecutive-ones-iii
- Problem ID: 1046

## Description
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
```

### Example 2
```text
Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
```


## Constraints
- 1 <= nums.length <= 105
- nums[i] is either 0 or 1.
- 0 <= k <= nums.length

## Hints
- One thing's for sure, we will only flip a zero if it extends an existing window of 1s. Otherwise, there's no point in doing it, right? Think Sliding Window!
- Since we know this problem can be solved using the sliding window construct, we might as well focus in that direction for hints. Basically, in a given window, we can never have > K zeros, right?
- We don't have a fixed size window in this case. The window size can grow and shrink depending upon the number of zeros we have (we don't actually have to flip the zeros here!).
- The way to shrink or expand a window would be based on the number of zeros that can still be flipped and so on.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int longestOnes(vector<int>& nums, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int longestOnes(int[] nums, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def longestOnes(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
```

### c
```c
int longestOnes(int* nums, int numsSize, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int LongestOnes(int[] nums, int k) {
        
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
var longestOnes = function(nums, k) {
    
};
```

### typescript
```typescript
function longestOnes(nums: number[], k: number): number {
    
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
    function longestOnes($nums, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func longestOnes(_ nums: [Int], _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun longestOnes(nums: IntArray, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int longestOnes(List<int> nums, int k) {
    
  }
}
```

### golang
```golang
func longestOnes(nums []int, k int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def longest_ones(nums, k)
    
end
```

### scala
```scala
object Solution {
    def longestOnes(nums: Array[Int], k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn longest_ones(nums: Vec<i32>, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (longest-ones nums k)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec longest_ones(Nums :: [integer()], K :: integer()) -> integer().
longest_ones(Nums, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec longest_ones(nums :: [integer], k :: integer) :: integer
  def longest_ones(nums, k) do
    
  end
end
```
