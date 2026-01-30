# 1. Two Sum

- Difficulty: Easy
- Topics: Array, Hash Table
- Slug: two-sum
- Problem ID: 1

## Description
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### Example 2
```text
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

### Example 3
```text
Input: nums = [3,3], target = 6
Output: [0,1]
```


## Constraints
- 2 <= nums.length <= 104
- -109 <= nums[i] <= 109
- -109 <= target <= 109
- Only one valid answer exists.

## Hints
- A really brute force way would be to search for all possible pairs of numbers but that would be too slow. Again, it's best to try out brute force solutions for just for completeness. It is from these brute force solutions that you can come up with optimizations.
- So, if we fix one of the numbers, say <code>x</code>, we have to scan the entire array to find the next number <code>y</code> which is <code>value - x</code> where value is the input parameter. Can we change our array somehow so that this search becomes faster?
- The second train of thought is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        
    }
};
```

### java
```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        
    }
}
```

### python
```python
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
};
```

### typescript
```typescript
function twoSum(nums: number[], target: number): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {
        
    }
}
```

### swift
```swift
class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> twoSum(List<int> nums, int target) {
    
  }
}
```

### golang
```golang
func twoSum(nums []int, target int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
    
end
```

### scala
```scala
object Solution {
    def twoSum(nums: Array[Int], target: Int): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (two-sum nums target)
  (-> (listof exact-integer?) exact-integer? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec two_sum(Nums :: [integer()], Target :: integer()) -> [integer()].
two_sum(Nums, Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec two_sum(nums :: [integer], target :: integer) :: [integer]
  def two_sum(nums, target) do
    
  end
end
```
