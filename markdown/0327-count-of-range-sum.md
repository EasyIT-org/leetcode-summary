# 327. Count of Range Sum

- Difficulty: Hard
- Topics: Array, Binary Search, Divide and Conquer, Binary Indexed Tree, Segment Tree, Merge Sort, Ordered Set
- Slug: count-of-range-sum
- Problem ID: 327

## Description
Given an integer array nums and two integers lower and upper, return the number of range sums that lie in [lower, upper] inclusive.
Range sum S(i, j) is defined as the sum of the elements in nums between indices i and j inclusive, where i <= j.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [-2,5,-1], lower = -2, upper = 2
Output: 3
Explanation: The three ranges are: [0,0], [2,2], and [0,2] and their respective sums are: -2, -1, 2.
```

### Example 2
```text
Input: nums = [0], lower = 0, upper = 0
Output: 1
```


## Constraints
- 1 <= nums.length <= 105
- -231 <= nums[i] <= 231 - 1
- -105 <= lower <= upper <= 105
- The answer is guaranteed to fit in a 32-bit integer.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int countRangeSum(vector<int>& nums, int lower, int upper) {
        
    }
};
```

### java
```java
class Solution {
    public int countRangeSum(int[] nums, int lower, int upper) {
        
    }
}
```

### python
```python
class Solution(object):
    def countRangeSum(self, nums, lower, upper):
        """
        :type nums: List[int]
        :type lower: int
        :type upper: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def countRangeSum(self, nums: List[int], lower: int, upper: int) -> int:
```

### c
```c
int countRangeSum(int* nums, int numsSize, int lower, int upper) {
    
}
```

### csharp
```csharp
public class Solution {
    public int CountRangeSum(int[] nums, int lower, int upper) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
    
};
```

### typescript
```typescript
function countRangeSum(nums: number[], lower: number, upper: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $lower
     * @param Integer $upper
     * @return Integer
     */
    function countRangeSum($nums, $lower, $upper) {
        
    }
}
```

### swift
```swift
class Solution {
    func countRangeSum(_ nums: [Int], _ lower: Int, _ upper: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun countRangeSum(nums: IntArray, lower: Int, upper: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int countRangeSum(List<int> nums, int lower, int upper) {
    
  }
}
```

### golang
```golang
func countRangeSum(nums []int, lower int, upper int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} lower
# @param {Integer} upper
# @return {Integer}
def count_range_sum(nums, lower, upper)
    
end
```

### scala
```scala
object Solution {
    def countRangeSum(nums: Array[Int], lower: Int, upper: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn count_range_sum(nums: Vec<i32>, lower: i32, upper: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (count-range-sum nums lower upper)
  (-> (listof exact-integer?) exact-integer? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec count_range_sum(Nums :: [integer()], Lower :: integer(), Upper :: integer()) -> integer().
count_range_sum(Nums, Lower, Upper) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec count_range_sum(nums :: [integer], lower :: integer, upper :: integer) :: integer
  def count_range_sum(nums, lower, upper) do
    
  end
end
```
