# 377. Combination Sum IV

- Difficulty: Medium
- Topics: Array, Dynamic Programming
- Slug: combination-sum-iv
- Problem ID: 377

## Description
Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.
The test cases are generated so that the answer can fit in a 32-bit integer.
Example 1:
Example 2:
Constraints:
Follow up: What if negative numbers are allowed in the given array? How does it change the problem? What limitation we need to add to the question to allow negative numbers?

## Examples
### Example 1
```text
Input: nums = [1,2,3], target = 4
Output: 7
Explanation:
The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
Note that different sequences are counted as different combinations.
```

### Example 2
```text
Input: nums = [9], target = 3
Output: 0
```


## Constraints
- 1 <= nums.length <= 200
- 1 <= nums[i] <= 1000
- All the elements of nums are unique.
- 1 <= target <= 1000

## Hints
(none)

## Follow Ups
- What if negative numbers are allowed in the given array? How does it change the problem? What limitation we need to add to the question to allow negative numbers?

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int combinationSum4(vector<int>& nums, int target) {
        
    }
};
```

### java
```java
class Solution {
    public int combinationSum4(int[] nums, int target) {
        
    }
}
```

### python
```python
class Solution(object):
    def combinationSum4(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def combinationSum4(self, nums: List[int], target: int) -> int:
```

### c
```c
int combinationSum4(int* nums, int numsSize, int target) {
    
}
```

### csharp
```csharp
public class Solution {
    public int CombinationSum4(int[] nums, int target) {
        
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
var combinationSum4 = function(nums, target) {
    
};
```

### typescript
```typescript
function combinationSum4(nums: number[], target: number): number {
    
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
    function combinationSum4($nums, $target) {
        
    }
}
```

### swift
```swift
class Solution {
    func combinationSum4(_ nums: [Int], _ target: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun combinationSum4(nums: IntArray, target: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int combinationSum4(List<int> nums, int target) {
    
  }
}
```

### golang
```golang
func combinationSum4(nums []int, target int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def combination_sum4(nums, target)
    
end
```

### scala
```scala
object Solution {
    def combinationSum4(nums: Array[Int], target: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn combination_sum4(nums: Vec<i32>, target: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (combination-sum4 nums target)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec combination_sum4(Nums :: [integer()], Target :: integer()) -> integer().
combination_sum4(Nums, Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec combination_sum4(nums :: [integer], target :: integer) :: integer
  def combination_sum4(nums, target) do
    
  end
end
```
