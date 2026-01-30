# 312. Burst Balloons

- Difficulty: Hard
- Topics: Array, Dynamic Programming
- Slug: burst-balloons
- Problem ID: 312

## Description
You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons.
If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. If i - 1 or i + 1 goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it.
Return the maximum coins you can collect by bursting the balloons wisely.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [3,1,5,8]
Output: 167
Explanation:
nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167
```

### Example 2
```text
Input: nums = [1,5]
Output: 10
```


## Constraints
- n == nums.length
- 1 <= n <= 300
- 0 <= nums[i] <= 100

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxCoins(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int maxCoins(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxCoins(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxCoins(self, nums: List[int]) -> int:
```

### c
```c
int maxCoins(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxCoins(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    
};
```

### typescript
```typescript
function maxCoins(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxCoins($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxCoins(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxCoins(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxCoins(List<int> nums) {
    
  }
}
```

### golang
```golang
func maxCoins(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def max_coins(nums)
    
end
```

### scala
```scala
object Solution {
    def maxCoins(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_coins(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-coins nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec max_coins(Nums :: [integer()]) -> integer().
max_coins(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_coins(nums :: [integer]) :: integer
  def max_coins(nums) do
    
  end
end
```
