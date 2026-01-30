# 992. Subarrays with K Different Integers

- Difficulty: Hard
- Topics: Array, Hash Table, Sliding Window, Counting
- Slug: subarrays-with-k-different-integers
- Problem ID: 1034

## Description
Given an integer array nums and an integer k, return the number of good subarrays of nums.
A good array is an array where the number of different integers in that array is exactly k.
A subarray is a contiguous part of an array.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,2,1,2,3], k = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]
```

### Example 2
```text
Input: nums = [1,2,1,3,4], k = 3
Output: 3
Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].
```


## Constraints
- 1 <= nums.length <= 2 * 104
- 1 <= nums[i], k <= nums.length

## Hints
- Try generating all possible subarrays and check for the number of unique integers. Increment the count accordingly.
- How about using a map to store the count of integers?
- Think about the Sliding Window and 2-pointer approach.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int subarraysWithKDistinct(vector<int>& nums, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int subarraysWithKDistinct(int[] nums, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def subarraysWithKDistinct(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def subarraysWithKDistinct(self, nums: List[int], k: int) -> int:
```

### c
```c
int subarraysWithKDistinct(int* nums, int numsSize, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int SubarraysWithKDistinct(int[] nums, int k) {
        
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
var subarraysWithKDistinct = function(nums, k) {
    
};
```

### typescript
```typescript
function subarraysWithKDistinct(nums: number[], k: number): number {
    
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
    function subarraysWithKDistinct($nums, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func subarraysWithKDistinct(_ nums: [Int], _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun subarraysWithKDistinct(nums: IntArray, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int subarraysWithKDistinct(List<int> nums, int k) {
    
  }
}
```

### golang
```golang
func subarraysWithKDistinct(nums []int, k int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def subarrays_with_k_distinct(nums, k)
    
end
```

### scala
```scala
object Solution {
    def subarraysWithKDistinct(nums: Array[Int], k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn subarrays_with_k_distinct(nums: Vec<i32>, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (subarrays-with-k-distinct nums k)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec subarrays_with_k_distinct(Nums :: [integer()], K :: integer()) -> integer().
subarrays_with_k_distinct(Nums, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec subarrays_with_k_distinct(nums :: [integer], k :: integer) :: integer
  def subarrays_with_k_distinct(nums, k) do
    
  end
end
```
