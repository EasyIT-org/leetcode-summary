# 198. House Robber

- Difficulty: Medium
- Topics: Array, Dynamic Programming
- Slug: house-robber
- Problem ID: 198

## Description
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
```

### Example 2
```text
Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
```


## Constraints
- 1 <= nums.length <= 100
- 0 <= nums[i] <= 400

## Hints
(none)

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
