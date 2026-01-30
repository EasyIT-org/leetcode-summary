# 213. House Robber II

- Difficulty: Medium
- Topics: Array, Dynamic Programming
- Slug: house-robber-ii
- Problem ID: 213

## Description
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.
Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
```

### Example 2
```text
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
```

### Example 3
```text
Input: nums = [1,2,3]
Output: 3
```


## Constraints
- 1 <= nums.length <= 100
- 0 <= nums[i] <= 1000

## Hints
- Since House[1] and House[n] are adjacent, they cannot be robbed together. Therefore, the problem becomes to rob either House[1]-House[n-1] or House[2]-House[n], depending on which choice offers more money. Now the problem has degenerated to the <a href ="https://leetcode.com/problems/house-robber/description/">House Robber</a>, which is already been solved.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int rob(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int rob(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def rob(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def rob(self, nums: List[int]) -> int:
```

### c
```c
int rob(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int Rob(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
};
```

### typescript
```typescript
function rob(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function rob($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func rob(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun rob(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int rob(List<int> nums) {
    
  }
}
```

### golang
```golang
func rob(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def rob(nums)
    
end
```

### scala
```scala
object Solution {
    def rob(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn rob(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (rob nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec rob(Nums :: [integer()]) -> integer().
rob(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec rob(nums :: [integer]) :: integer
  def rob(nums) do
    
  end
end
```
