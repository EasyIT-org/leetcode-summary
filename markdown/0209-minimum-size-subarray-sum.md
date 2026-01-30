# 209. Minimum Size Subarray Sum

- Difficulty: Medium
- Topics: Array, Binary Search, Sliding Window, Prefix Sum
- Slug: minimum-size-subarray-sum
- Problem ID: 209

## Description
Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
```

### Example 2
```text
Input: target = 4, nums = [1,4,4]
Output: 1
```

### Example 3
```text
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
```


## Constraints
- 1 <= target <= 109
- 1 <= nums.length <= 105
- 1 <= nums[i] <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int minSubArrayLen(int target, vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def minSubArrayLen(self, target, nums):
        """
        :type target: int
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
```

### c
```c
int minSubArrayLen(int target, int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinSubArrayLen(int target, int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    
};
```

### typescript
```typescript
function minSubArrayLen(target: number, nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $target
     * @param Integer[] $nums
     * @return Integer
     */
    function minSubArrayLen($target, $nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func minSubArrayLen(_ target: Int, _ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minSubArrayLen(target: Int, nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minSubArrayLen(int target, List<int> nums) {
    
  }
}
```

### golang
```golang
func minSubArrayLen(target int, nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer} target
# @param {Integer[]} nums
# @return {Integer}
def min_sub_array_len(target, nums)
    
end
```

### scala
```scala
object Solution {
    def minSubArrayLen(target: Int, nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn min_sub_array_len(target: i32, nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (min-sub-array-len target nums)
  (-> exact-integer? (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec min_sub_array_len(Target :: integer(), Nums :: [integer()]) -> integer().
min_sub_array_len(Target, Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec min_sub_array_len(target :: integer, nums :: [integer]) :: integer
  def min_sub_array_len(target, nums) do
    
  end
end
```
