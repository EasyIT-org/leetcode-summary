# 1224. Maximum Equal Frequency

- Difficulty: Hard
- Topics: Array, Hash Table
- Slug: maximum-equal-frequency
- Problem ID: 1344

## Description
Given an array nums of positive integers, return the longest possible length of an array prefix of nums, such that it is possible to remove exactly one element from this prefix so that every number that has appeared in it will have the same number of occurrences.
If after removing one element there are no remaining elements, it's still considered that every appeared number has the same number of ocurrences (0).
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [2,2,1,1,5,3,3,5]
Output: 7
Explanation: For the subarray [2,2,1,1,5,3,3] of length 7, if we remove nums[4] = 5, we will get [2,2,1,1,3,3], so that each number will appear exactly twice.
```

### Example 2
```text
Input: nums = [1,1,1,2,2,2,3,3,3,4,4,4,5]
Output: 13
```


## Constraints
- 2 <= nums.length <= 105
- 1 <= nums[i] <= 105

## Hints
- Keep track of the min and max frequencies.
- The number to be eliminated must have a frequency of 1, same as the others or the same +1.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxEqualFreq(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int maxEqualFreq(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxEqualFreq(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxEqualFreq(self, nums: List[int]) -> int:
```

### c
```c
int maxEqualFreq(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxEqualFreq(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxEqualFreq = function(nums) {
    
};
```

### typescript
```typescript
function maxEqualFreq(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxEqualFreq($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxEqualFreq(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxEqualFreq(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxEqualFreq(List<int> nums) {
    
  }
}
```

### golang
```golang
func maxEqualFreq(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def max_equal_freq(nums)
    
end
```

### scala
```scala
object Solution {
    def maxEqualFreq(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_equal_freq(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-equal-freq nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec max_equal_freq(Nums :: [integer()]) -> integer().
max_equal_freq(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_equal_freq(nums :: [integer]) :: integer
  def max_equal_freq(nums) do
    
  end
end
```
