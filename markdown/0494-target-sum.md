# 494. Target Sum

- Difficulty: Medium
- Topics: Array, Dynamic Programming, Backtracking
- Slug: target-sum
- Problem ID: 494

## Description
You are given an integer array nums and an integer target.
You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.
Return the number of different expressions that you can build, which evaluates to target.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,1,1,1,1], target = 3
Output: 5
Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3
```

### Example 2
```text
Input: nums = [1], target = 1
Output: 1
```


## Constraints
- 1 <= nums.length <= 20
- 0 <= nums[i] <= 1000
- 0 <= sum(nums[i]) <= 1000
- -1000 <= target <= 1000

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findTargetSumWays(vector<int>& nums, int target) {
        
    }
};
```

### java
```java
class Solution {
    public int findTargetSumWays(int[] nums, int target) {
        
    }
}
```

### python
```python
class Solution(object):
    def findTargetSumWays(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
```

### c
```c
int findTargetSumWays(int* nums, int numsSize, int target) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindTargetSumWays(int[] nums, int target) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    
};
```

### typescript
```typescript
function findTargetSumWays(nums: number[], target: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer
     */
    function findTargetSumWays($nums, $target) {
        
    }
}
```

### swift
```swift
class Solution {
    func findTargetSumWays(_ nums: [Int], _ target: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findTargetSumWays(nums: IntArray, target: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findTargetSumWays(List<int> nums, int target) {
    
  }
}
```

### golang
```golang
func findTargetSumWays(nums []int, target int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def find_target_sum_ways(nums, target)
    
end
```

### scala
```scala
object Solution {
    def findTargetSumWays(nums: Array[Int], target: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_target_sum_ways(nums: Vec<i32>, target: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-target-sum-ways nums target)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec find_target_sum_ways(Nums :: [integer()], Target :: integer()) -> integer().
find_target_sum_ways(Nums, Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_target_sum_ways(nums :: [integer], target :: integer) :: integer
  def find_target_sum_ways(nums, target) do
    
  end
end
```
