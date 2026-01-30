# 55. Jump Game

- Difficulty: Medium
- Topics: Array, Dynamic Programming, Greedy
- Slug: jump-game
- Problem ID: 55

## Description
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
Return true if you can reach the last index, or false otherwise.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

### Example 2
```text
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
```


## Constraints
- 1 <= nums.length <= 104
- 0 <= nums[i] <= 105

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool canJump(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public boolean canJump(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def canJump(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def canJump(self, nums: List[int]) -> bool:
```

### c
```c
bool canJump(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool CanJump(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    
};
```

### typescript
```typescript
function canJump(nums: number[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function canJump($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func canJump(_ nums: [Int]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun canJump(nums: IntArray): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool canJump(List<int> nums) {
    
  }
}
```

### golang
```golang
func canJump(nums []int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Boolean}
def can_jump(nums)
    
end
```

### scala
```scala
object Solution {
    def canJump(nums: Array[Int]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn can_jump(nums: Vec<i32>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (can-jump nums)
  (-> (listof exact-integer?) boolean?)
  )
```

### erlang
```erlang
-spec can_jump(Nums :: [integer()]) -> boolean().
can_jump(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec can_jump(nums :: [integer]) :: boolean
  def can_jump(nums) do
    
  end
end
```
