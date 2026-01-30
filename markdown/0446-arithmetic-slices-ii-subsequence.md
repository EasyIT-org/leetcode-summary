# 446. Arithmetic Slices II - Subsequence

- Difficulty: Hard
- Topics: Array, Dynamic Programming
- Slug: arithmetic-slices-ii-subsequence
- Problem ID: 446

## Description
Given an integer array nums, return the number of all the arithmetic subsequences of nums.
A sequence of numbers is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.
A subsequence of an array is a sequence that can be formed by removing some elements (possibly none) of the array.
The test cases are generated so that the answer fits in 32-bit integer.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [2,4,6,8,10]
Output: 7
Explanation: All arithmetic subsequence slices are:
[2,4,6]
[4,6,8]
[6,8,10]
[2,4,6,8]
[4,6,8,10]
[2,4,6,8,10]
[2,6,10]
```

### Example 2
```text
Input: nums = [7,7,7,7,7]
Output: 16
Explanation: Any subsequence of this array is arithmetic.
```


## Constraints
- 1  <= nums.length <= 1000
- -231 <= nums[i] <= 231 - 1

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numberOfArithmeticSlices(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int numberOfArithmeticSlices(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def numberOfArithmeticSlices(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numberOfArithmeticSlices(self, nums: List[int]) -> int:
```

### c
```c
int numberOfArithmeticSlices(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumberOfArithmeticSlices(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    
};
```

### typescript
```typescript
function numberOfArithmeticSlices(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function numberOfArithmeticSlices($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func numberOfArithmeticSlices(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numberOfArithmeticSlices(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numberOfArithmeticSlices(List<int> nums) {
    
  }
}
```

### golang
```golang
func numberOfArithmeticSlices(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def number_of_arithmetic_slices(nums)
    
end
```

### scala
```scala
object Solution {
    def numberOfArithmeticSlices(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn number_of_arithmetic_slices(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (number-of-arithmetic-slices nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec number_of_arithmetic_slices(Nums :: [integer()]) -> integer().
number_of_arithmetic_slices(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec number_of_arithmetic_slices(nums :: [integer]) :: integer
  def number_of_arithmetic_slices(nums) do
    
  end
end
```
