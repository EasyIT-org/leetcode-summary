# 410. Split Array Largest Sum

- Difficulty: Hard
- Topics: Array, Binary Search, Dynamic Programming, Greedy, Prefix Sum
- Slug: split-array-largest-sum
- Problem ID: 410

## Description
Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized.
Return the minimized largest sum of the split.
A subarray is a contiguous part of the array.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [7,2,5,10,8], k = 2
Output: 18
Explanation: There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8], where the largest sum among the two subarrays is only 18.
```

### Example 2
```text
Input: nums = [1,2,3,4,5], k = 2
Output: 9
Explanation: There are four ways to split nums into two subarrays.
The best way is to split it into [1,2,3] and [4,5], where the largest sum among the two subarrays is only 9.
```


## Constraints
- 1 <= nums.length <= 1000
- 0 <= nums[i] <= 106
- 1 <= k <= min(50, nums.length)

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int splitArray(vector<int>& nums, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int splitArray(int[] nums, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def splitArray(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def splitArray(self, nums: List[int], k: int) -> int:
```

### c
```c
int splitArray(int* nums, int numsSize, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int SplitArray(int[] nums, int k) {
        
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
var splitArray = function(nums, k) {
    
};
```

### typescript
```typescript
function splitArray(nums: number[], k: number): number {
    
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
    function splitArray($nums, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func splitArray(_ nums: [Int], _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun splitArray(nums: IntArray, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int splitArray(List<int> nums, int k) {
    
  }
}
```

### golang
```golang
func splitArray(nums []int, k int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def split_array(nums, k)
    
end
```

### scala
```scala
object Solution {
    def splitArray(nums: Array[Int], k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn split_array(nums: Vec<i32>, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (split-array nums k)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec split_array(Nums :: [integer()], K :: integer()) -> integer().
split_array(Nums, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec split_array(nums :: [integer], k :: integer) :: integer
  def split_array(nums, k) do
    
  end
end
```
