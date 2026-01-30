# 974. Subarray Sums Divisible by K

- Difficulty: Medium
- Topics: Array, Hash Table, Prefix Sum
- Slug: subarray-sums-divisible-by-k
- Problem ID: 1016

## Description
Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.
A subarray is a contiguous part of an array.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [4,5,0,-2,-3,1], k = 5
Output: 7
Explanation: There are 7 subarrays with a sum divisible by k = 5:
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
```

### Example 2
```text
Input: nums = [5], k = 9
Output: 0
```


## Constraints
- 1 <= nums.length <= 3 * 104
- -104 <= nums[i] <= 104
- 2 <= k <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int subarraysDivByK(vector<int>& nums, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int subarraysDivByK(int[] nums, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def subarraysDivByK(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def subarraysDivByK(self, nums: List[int], k: int) -> int:
```

### c
```c
int subarraysDivByK(int* nums, int numsSize, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int SubarraysDivByK(int[] nums, int k) {
        
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
var subarraysDivByK = function(nums, k) {
    
};
```

### typescript
```typescript
function subarraysDivByK(nums: number[], k: number): number {
    
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
    function subarraysDivByK($nums, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func subarraysDivByK(_ nums: [Int], _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun subarraysDivByK(nums: IntArray, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int subarraysDivByK(List<int> nums, int k) {
    
  }
}
```

### golang
```golang
func subarraysDivByK(nums []int, k int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def subarrays_div_by_k(nums, k)
    
end
```

### scala
```scala
object Solution {
    def subarraysDivByK(nums: Array[Int], k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn subarrays_div_by_k(nums: Vec<i32>, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (subarrays-div-by-k nums k)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec subarrays_div_by_k(Nums :: [integer()], K :: integer()) -> integer().
subarrays_div_by_k(Nums, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec subarrays_div_by_k(nums :: [integer], k :: integer) :: integer
  def subarrays_div_by_k(nums, k) do
    
  end
end
```
