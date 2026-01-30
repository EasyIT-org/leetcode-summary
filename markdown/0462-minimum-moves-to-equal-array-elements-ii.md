# 462. Minimum Moves to Equal Array Elements II

- Difficulty: Medium
- Topics: Array, Math, Sorting
- Slug: minimum-moves-to-equal-array-elements-ii
- Problem ID: 462

## Description
Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.
In one move, you can increment or decrement an element of the array by 1.
Test cases are designed so that the answer will fit in a 32-bit integer.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,2,3]
Output: 2
Explanation:
Only two moves are needed (remember each move increments or decrements one element):
[1,2,3]  =>  [2,2,3]  =>  [2,2,2]
```

### Example 2
```text
Input: nums = [1,10,2,9]
Output: 16
```


## Constraints
- n == nums.length
- 1 <= nums.length <= 105
- -109 <= nums[i] <= 109

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int minMoves2(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int minMoves2(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def minMoves2(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minMoves2(self, nums: List[int]) -> int:
```

### c
```c
int minMoves2(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinMoves2(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    
};
```

### typescript
```typescript
function minMoves2(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minMoves2($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func minMoves2(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minMoves2(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minMoves2(List<int> nums) {
    
  }
}
```

### golang
```golang
func minMoves2(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def min_moves2(nums)
    
end
```

### scala
```scala
object Solution {
    def minMoves2(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn min_moves2(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (min-moves2 nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec min_moves2(Nums :: [integer()]) -> integer().
min_moves2(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec min_moves2(nums :: [integer]) :: integer
  def min_moves2(nums) do
    
  end
end
```
