# 453. Minimum Moves to Equal Array Elements

- Difficulty: Medium
- Topics: Array, Math
- Slug: minimum-moves-to-equal-array-elements
- Problem ID: 453

## Description
Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.
In one move, you can increment n - 1 elements of the array by 1.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,2,3]
Output: 3
Explanation: Only three moves are needed (remember each move increments two elements):
[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
```

### Example 2
```text
Input: nums = [1,1,1]
Output: 0
```


## Constraints
- n == nums.length
- 1 <= nums.length <= 105
- -109 <= nums[i] <= 109
- The answer is guaranteed to fit in a 32-bit integer.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int minMoves(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int minMoves(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def minMoves(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minMoves(self, nums: List[int]) -> int:
```

### c
```c
int minMoves(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinMoves(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    
};
```

### typescript
```typescript
function minMoves(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minMoves($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func minMoves(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minMoves(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minMoves(List<int> nums) {
    
  }
}
```

### golang
```golang
func minMoves(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def min_moves(nums)
    
end
```

### scala
```scala
object Solution {
    def minMoves(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn min_moves(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (min-moves nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec min_moves(Nums :: [integer()]) -> integer().
min_moves(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec min_moves(nums :: [integer]) :: integer
  def min_moves(nums) do
    
  end
end
```
