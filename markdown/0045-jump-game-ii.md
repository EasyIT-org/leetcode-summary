# 45. Jump Game II

- Difficulty: Medium
- Topics: Array, Dynamic Programming, Greedy
- Slug: jump-game-ii
- Problem ID: 45

## Description
You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].
Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

### Example 2
```text
Input: nums = [2,3,0,1,4]
Output: 2
```


## Constraints
- 1 <= nums.length <= 104
- 0 <= nums[i] <= 1000
- It's guaranteed that you can reach nums[n - 1].

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int jump(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int jump(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def jump(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def jump(self, nums: List[int]) -> int:
```

### c
```c
int jump(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int Jump(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    
};
```

### typescript
```typescript
function jump(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function jump($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func jump(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun jump(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int jump(List<int> nums) {
    
  }
}
```

### golang
```golang
func jump(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def jump(nums)
    
end
```

### scala
```scala
object Solution {
    def jump(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn jump(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (jump nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec jump(Nums :: [integer()]) -> integer().
jump(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec jump(nums :: [integer]) :: integer
  def jump(nums) do
    
  end
end
```
