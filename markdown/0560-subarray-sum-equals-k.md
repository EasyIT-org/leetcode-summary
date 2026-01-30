# 560. Subarray Sum Equals K

- Difficulty: Medium
- Topics: Array, Hash Table, Prefix Sum
- Slug: subarray-sum-equals-k
- Problem ID: 560

## Description
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
A subarray is a contiguous non-empty sequence of elements within an array.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,1,1], k = 2
Output: 2
```

### Example 2
```text
Input: nums = [1,2,3], k = 3
Output: 2
```


## Constraints
- 1 <= nums.length <= 2 * 104
- -1000 <= nums[i] <= 1000
- -107 <= k <= 107

## Hints
- Will Brute force work here? Try to optimize it.
- Can we optimize it by using some extra space?
- What about storing sum frequencies in a hash table? Will it be useful?
- sum(i,j)=sum(0,j)-sum(0,i), where sum(i,j) represents the sum of all the elements from index i to j-1.

Can we use this property to optimize it.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int subarraySum(int[] nums, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def subarraySum(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
```

### c
```c
int subarraySum(int* nums, int numsSize, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int SubarraySum(int[] nums, int k) {
        
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
var subarraySum = function(nums, k) {
    
};
```

### typescript
```typescript
function subarraySum(nums: number[], k: number): number {
    
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
    function subarraySum($nums, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func subarraySum(_ nums: [Int], _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun subarraySum(nums: IntArray, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int subarraySum(List<int> nums, int k) {
    
  }
}
```

### golang
```golang
func subarraySum(nums []int, k int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def subarray_sum(nums, k)
    
end
```

### scala
```scala
object Solution {
    def subarraySum(nums: Array[Int], k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn subarray_sum(nums: Vec<i32>, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (subarray-sum nums k)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec subarray_sum(Nums :: [integer()], K :: integer()) -> integer().
subarray_sum(Nums, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec subarray_sum(nums :: [integer], k :: integer) :: integer
  def subarray_sum(nums, k) do
    
  end
end
```
