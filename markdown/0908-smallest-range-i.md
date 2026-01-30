# 908. Smallest Range I

- Difficulty: Easy
- Topics: Array, Math
- Slug: smallest-range-i
- Problem ID: 944

## Description
You are given an integer array nums and an integer k.
In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.
The score of nums is the difference between the maximum and minimum elements in nums.
Return the minimum score of nums after applying the mentioned operation at most once for each index in it.
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
Output: 0
Explanation: Change nums to be [4, 4, 4]. The score is max(nums) - min(nums) = 4 - 4 = 0.
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
    int smallestRangeI(vector<int>& nums, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int smallestRangeI(int[] nums, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def smallestRangeI(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def smallestRangeI(self, nums: List[int], k: int) -> int:
```

### c
```c
int smallestRangeI(int* nums, int numsSize, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int SmallestRangeI(int[] nums, int k) {
        
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
var smallestRangeI = function(nums, k) {
    
};
```

### typescript
```typescript
function smallestRangeI(nums: number[], k: number): number {
    
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
    function smallestRangeI($nums, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func smallestRangeI(_ nums: [Int], _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun smallestRangeI(nums: IntArray, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int smallestRangeI(List<int> nums, int k) {
    
  }
}
```

### golang
```golang
func smallestRangeI(nums []int, k int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def smallest_range_i(nums, k)
    
end
```

### scala
```scala
object Solution {
    def smallestRangeI(nums: Array[Int], k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn smallest_range_i(nums: Vec<i32>, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (smallest-range-i nums k)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec smallest_range_i(Nums :: [integer()], K :: integer()) -> integer().
smallest_range_i(Nums, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec smallest_range_i(nums :: [integer], k :: integer) :: integer
  def smallest_range_i(nums, k) do
    
  end
end
```
