# 910. Smallest Range II

- Difficulty: Medium
- Topics: Array, Math, Greedy, Sorting
- Slug: smallest-range-ii
- Problem ID: 946

## Description
You are given an integer array nums and an integer k.
For each index i where 0 <= i < nums.length, change nums[i] to be either nums[i] + k or nums[i] - k.
The score of nums is the difference between the maximum and minimum elements in nums.
Return the minimum score of nums after changing the values at each index.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1], k = 0
Output: 0
Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.
```

### Example 2
```text
Input: nums = [0,10], k = 2
Output: 6
Explanation: Change nums to be [2, 8]. The score is max(nums) - min(nums) = 8 - 2 = 6.
```

### Example 3
```text
Input: nums = [1,3,6], k = 3
Output: 3
Explanation: Change nums to be [4, 6, 3]. The score is max(nums) - min(nums) = 6 - 3 = 3.
```


## Constraints
- 1 <= nums.length <= 104
- 0 <= nums[i] <= 104
- 0 <= k <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int smallestRangeII(vector<int>& nums, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int smallestRangeII(int[] nums, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def smallestRangeII(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def smallestRangeII(self, nums: List[int], k: int) -> int:
```

### c
```c
int smallestRangeII(int* nums, int numsSize, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int SmallestRangeII(int[] nums, int k) {
        
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
var smallestRangeII = function(nums, k) {
    
};
```

### typescript
```typescript
function smallestRangeII(nums: number[], k: number): number {
    
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
    function smallestRangeII($nums, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func smallestRangeII(_ nums: [Int], _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun smallestRangeII(nums: IntArray, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int smallestRangeII(List<int> nums, int k) {
    
  }
}
```

### golang
```golang
func smallestRangeII(nums []int, k int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def smallest_range_ii(nums, k)
    
end
```

### scala
```scala
object Solution {
    def smallestRangeII(nums: Array[Int], k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn smallest_range_ii(nums: Vec<i32>, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (smallest-range-ii nums k)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec smallest_range_ii(Nums :: [integer()], K :: integer()) -> integer().
smallest_range_ii(Nums, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec smallest_range_ii(nums :: [integer], k :: integer) :: integer
  def smallest_range_ii(nums, k) do
    
  end
end
```
