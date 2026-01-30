# 561. Array Partition

- Difficulty: Easy
- Topics: Array, Greedy, Sorting, Counting Sort
- Slug: array-partition
- Problem ID: 561

## Description
Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,4,3,2]
Output: 4
Explanation: All possible pairings (ignoring the ordering of elements) are:
1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
So the maximum possible sum is 4.
```

### Example 2
```text
Input: nums = [6,2,6,5,1,2]
Output: 9
Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.
```


## Constraints
- 1 <= n <= 104
- nums.length == 2 * n
- -104 <= nums[i] <= 104

## Hints
- Obviously, brute force won't help here. Think of something else, take some example like 1,2,3,4.
- How will you make pairs to get the result? There must be some pattern.
- Did you observe that- Minimum element gets add into the result in sacrifice of maximum element.
- Still won't able to find pairs? Sort the array and try to find the pattern.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int arrayPairSum(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int arrayPairSum(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def arrayPairSum(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
```

### c
```c
int arrayPairSum(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int ArrayPairSum(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    
};
```

### typescript
```typescript
function arrayPairSum(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function arrayPairSum($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func arrayPairSum(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun arrayPairSum(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int arrayPairSum(List<int> nums) {
    
  }
}
```

### golang
```golang
func arrayPairSum(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def array_pair_sum(nums)
    
end
```

### scala
```scala
object Solution {
    def arrayPairSum(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn array_pair_sum(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (array-pair-sum nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec array_pair_sum(Nums :: [integer()]) -> integer().
array_pair_sum(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec array_pair_sum(nums :: [integer]) :: integer
  def array_pair_sum(nums) do
    
  end
end
```
