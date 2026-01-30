# 368. Largest Divisible Subset

- Difficulty: Medium
- Topics: Array, Math, Dynamic Programming, Sorting
- Slug: largest-divisible-subset
- Problem ID: 368

## Description
Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:
If there are multiple solutions, return any of them.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,2,3]
Output: [1,2]
Explanation: [1,3] is also accepted.
```

### Example 2
```text
Input: nums = [1,2,4,8]
Output: [1,2,4,8]
```


## Constraints
- 1 <= nums.length <= 1000
- 1 <= nums[i] <= 2 * 109
- All the integers in nums are unique.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> largestDivisibleSubset(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public List<Integer> largestDivisibleSubset(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def largestDivisibleSubset(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def largestDivisibleSubset(self, nums: List[int]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* largestDivisibleSubset(int* nums, int numsSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<int> LargestDivisibleSubset(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    
};
```

### typescript
```typescript
function largestDivisibleSubset(nums: number[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function largestDivisibleSubset($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func largestDivisibleSubset(_ nums: [Int]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun largestDivisibleSubset(nums: IntArray): List<Int> {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> largestDivisibleSubset(List<int> nums) {
    
  }
}
```

### golang
```golang
func largestDivisibleSubset(nums []int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer[]}
def largest_divisible_subset(nums)
    
end
```

### scala
```scala
object Solution {
    def largestDivisibleSubset(nums: Array[Int]): List[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn largest_divisible_subset(nums: Vec<i32>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (largest-divisible-subset nums)
  (-> (listof exact-integer?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec largest_divisible_subset(Nums :: [integer()]) -> [integer()].
largest_divisible_subset(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec largest_divisible_subset(nums :: [integer]) :: [integer]
  def largest_divisible_subset(nums) do
    
  end
end
```
