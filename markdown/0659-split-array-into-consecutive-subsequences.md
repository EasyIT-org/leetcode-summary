# 659. Split Array into Consecutive Subsequences

- Difficulty: Medium
- Topics: Array, Hash Table, Greedy, Heap (Priority Queue)
- Slug: split-array-into-consecutive-subsequences
- Problem ID: 659

## Description
You are given an integer array nums that is sorted in non-decreasing order.
Determine if it is possible to split nums into one or more subsequences such that both of the following conditions are true:
Return true if you can split nums according to the above conditions, or false otherwise.
A subsequence of an array is a new array that is formed from the original array by deleting some (can be none) of the elements without disturbing the relative positions of the remaining elements. (i.e., [1,3,5] is a subsequence of [1,2,3,4,5] while [1,3,2] is not).
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,2,3,3,4,5]
Output: true
Explanation: nums can be split into the following subsequences:
[1,2,3,3,4,5] --> 1, 2, 3
[1,2,3,3,4,5] --> 3, 4, 5
```

### Example 2
```text
Input: nums = [1,2,3,3,4,4,5,5]
Output: true
Explanation: nums can be split into the following subsequences:
[1,2,3,3,4,4,5,5] --> 1, 2, 3, 4, 5
[1,2,3,3,4,4,5,5] --> 3, 4, 5
```

### Example 3
```text
Input: nums = [1,2,3,4,4,5]
Output: false
Explanation: It is impossible to split nums into consecutive increasing subsequences of length 3 or more.
```


## Constraints
- 1 <= nums.length <= 104
- -1000 <= nums[i] <= 1000
- nums is sorted in non-decreasing order.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isPossible(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isPossible(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def isPossible(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isPossible(self, nums: List[int]) -> bool:
```

### c
```c
bool isPossible(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsPossible(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    
};
```

### typescript
```typescript
function isPossible(nums: number[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function isPossible($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func isPossible(_ nums: [Int]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isPossible(nums: IntArray): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isPossible(List<int> nums) {
    
  }
}
```

### golang
```golang
func isPossible(nums []int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Boolean}
def is_possible(nums)
    
end
```

### scala
```scala
object Solution {
    def isPossible(nums: Array[Int]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_possible(nums: Vec<i32>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-possible nums)
  (-> (listof exact-integer?) boolean?)
  )
```

### erlang
```erlang
-spec is_possible(Nums :: [integer()]) -> boolean().
is_possible(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_possible(nums :: [integer]) :: boolean
  def is_possible(nums) do
    
  end
end
```
