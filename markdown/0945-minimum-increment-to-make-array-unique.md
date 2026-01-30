# 945. Minimum Increment to Make Array Unique

- Difficulty: Medium
- Topics: Array, Greedy, Sorting, Counting
- Slug: minimum-increment-to-make-array-unique
- Problem ID: 982

## Description
You are given an integer array nums. In one move, you can pick an index i where 0 <= i < nums.length and increment nums[i] by 1.
Return the minimum number of moves to make every value in nums unique.
The test cases are generated so that the answer fits in a 32-bit integer.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,2,2]
Output: 1
Explanation: After 1 move, the array could be [1, 2, 3].
```

### Example 2
```text
Input: nums = [3,2,1,2,1,7]
Output: 6
Explanation: After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
It can be shown that it is impossible for the array to have all unique values with 5 or less moves.
```


## Constraints
- 1 <= nums.length <= 105
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
    int minIncrementForUnique(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int minIncrementForUnique(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def minIncrementForUnique(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minIncrementForUnique(self, nums: List[int]) -> int:
```

### c
```c
int minIncrementForUnique(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinIncrementForUnique(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    
};
```

### typescript
```typescript
function minIncrementForUnique(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minIncrementForUnique($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func minIncrementForUnique(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minIncrementForUnique(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minIncrementForUnique(List<int> nums) {
    
  }
}
```

### golang
```golang
func minIncrementForUnique(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def min_increment_for_unique(nums)
    
end
```

### scala
```scala
object Solution {
    def minIncrementForUnique(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn min_increment_for_unique(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (min-increment-for-unique nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec min_increment_for_unique(Nums :: [integer()]) -> integer().
min_increment_for_unique(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec min_increment_for_unique(nums :: [integer]) :: integer
  def min_increment_for_unique(nums) do
    
  end
end
```
