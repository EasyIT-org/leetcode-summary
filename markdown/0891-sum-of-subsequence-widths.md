# 891. Sum of Subsequence Widths

- Difficulty: Hard
- Topics: Array, Math, Sorting
- Slug: sum-of-subsequence-widths
- Problem ID: 927

## Description
The width of a sequence is the difference between the maximum and minimum elements in the sequence.
Given an array of integers nums, return the sum of the widths of all the non-empty subsequences of nums. Since the answer may be very large, return it modulo 109 + 7.
A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [2,1,3]
Output: 6
Explanation: The subsequences are [1], [2], [3], [2,1], [2,3], [1,3], [2,1,3].
The corresponding widths are 0, 0, 0, 1, 1, 2, 2.
The sum of these widths is 6.
```

### Example 2
```text
Input: nums = [2]
Output: 0
```


## Constraints
- 1 <= nums.length <= 105
- 1 <= nums[i] <= 105

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int sumSubseqWidths(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int sumSubseqWidths(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def sumSubseqWidths(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def sumSubseqWidths(self, nums: List[int]) -> int:
```

### c
```c
int sumSubseqWidths(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int SumSubseqWidths(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumSubseqWidths = function(nums) {
    
};
```

### typescript
```typescript
function sumSubseqWidths(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function sumSubseqWidths($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func sumSubseqWidths(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun sumSubseqWidths(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int sumSubseqWidths(List<int> nums) {
    
  }
}
```

### golang
```golang
func sumSubseqWidths(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def sum_subseq_widths(nums)
    
end
```

### scala
```scala
object Solution {
    def sumSubseqWidths(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn sum_subseq_widths(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (sum-subseq-widths nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec sum_subseq_widths(Nums :: [integer()]) -> integer().
sum_subseq_widths(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec sum_subseq_widths(nums :: [integer]) :: integer
  def sum_subseq_widths(nums) do
    
  end
end
```
