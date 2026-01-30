# 1018. Binary Prefix Divisible By 5

- Difficulty: Easy
- Topics: Array, Bit Manipulation
- Slug: binary-prefix-divisible-by-5
- Problem ID: 1071

## Description
You are given a binary array nums (0-indexed).
We define xi as the number whose binary representation is the subarray nums[0..i] (from most-significant-bit to least-significant-bit).
Return an array of booleans answer where answer[i] is true if xi is divisible by 5.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [0,1,1]
Output: [true,false,false]
Explanation: The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base-10.
Only the first number is divisible by 5, so answer[0] is true.
```

### Example 2
```text
Input: nums = [1,1,1]
Output: [false,false,false]
```


## Constraints
- 1 <= nums.length <= 105
- nums[i] is either 0 or 1.

## Hints
- If X is the first i digits of the array as a binary number, then 2X + A[i] is the first i+1 digits.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<bool> prefixesDivBy5(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public List<Boolean> prefixesDivBy5(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def prefixesDivBy5(self, nums):
        """
        :type nums: List[int]
        :rtype: List[bool]
        """
```

### python3
```python3
class Solution:
    def prefixesDivBy5(self, nums: List[int]) -> List[bool]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
bool* prefixesDivBy5(int* nums, int numsSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<bool> PrefixesDivBy5(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    
};
```

### typescript
```typescript
function prefixesDivBy5(nums: number[]): boolean[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean[]
     */
    function prefixesDivBy5($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func prefixesDivBy5(_ nums: [Int]) -> [Bool] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun prefixesDivBy5(nums: IntArray): List<Boolean> {
        
    }
}
```

### dart
```dart
class Solution {
  List<bool> prefixesDivBy5(List<int> nums) {
    
  }
}
```

### golang
```golang
func prefixesDivBy5(nums []int) []bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Boolean[]}
def prefixes_div_by5(nums)
    
end
```

### scala
```scala
object Solution {
    def prefixesDivBy5(nums: Array[Int]): List[Boolean] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn prefixes_div_by5(nums: Vec<i32>) -> Vec<bool> {
        
    }
}
```

### racket
```racket
(define/contract (prefixes-div-by5 nums)
  (-> (listof exact-integer?) (listof boolean?))
  )
```

### erlang
```erlang
-spec prefixes_div_by5(Nums :: [integer()]) -> [boolean()].
prefixes_div_by5(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec prefixes_div_by5(nums :: [integer]) :: [boolean]
  def prefixes_div_by5(nums) do
    
  end
end
```
