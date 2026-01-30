# 503. Next Greater Element II

- Difficulty: Medium
- Topics: Array, Stack, Monotonic Stack
- Slug: next-greater-element-ii
- Problem ID: 503

## Description
Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.
The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2; 
The number 2 can't find next greater number. 
The second 1's next greater number needs to search circularly, which is also 2.
```

### Example 2
```text
Input: nums = [1,2,3,4,3]
Output: [2,3,4,-1,4]
```


## Constraints
- 1 <= nums.length <= 104
- -109 <= nums[i] <= 109

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> nextGreaterElements(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int[] nextGreaterElements(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def nextGreaterElements(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def nextGreaterElements(self, nums: List[int]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* nextGreaterElements(int* nums, int numsSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] NextGreaterElements(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    
};
```

### typescript
```typescript
function nextGreaterElements(nums: number[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function nextGreaterElements($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func nextGreaterElements(_ nums: [Int]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun nextGreaterElements(nums: IntArray): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> nextGreaterElements(List<int> nums) {
    
  }
}
```

### golang
```golang
func nextGreaterElements(nums []int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer[]}
def next_greater_elements(nums)
    
end
```

### scala
```scala
object Solution {
    def nextGreaterElements(nums: Array[Int]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn next_greater_elements(nums: Vec<i32>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (next-greater-elements nums)
  (-> (listof exact-integer?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec next_greater_elements(Nums :: [integer()]) -> [integer()].
next_greater_elements(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec next_greater_elements(nums :: [integer]) :: [integer]
  def next_greater_elements(nums) do
    
  end
end
```
