# 376. Wiggle Subsequence

- Difficulty: Medium
- Topics: Array, Dynamic Programming, Greedy
- Slug: wiggle-subsequence
- Problem ID: 376

## Description
A wiggle sequence is a sequence where the differences between successive numbers strictly alternate between positive and negative. The first difference (if one exists) may be either positive or negative. A sequence with one element and a sequence with two non-equal elements are trivially wiggle sequences.
A subsequence is obtained by deleting some elements (possibly zero) from the original sequence, leaving the remaining elements in their original order.
Given an integer array nums, return the length of the longest wiggle subsequence of nums.
Example 1:
Example 2:
Example 3:
Constraints:
Follow up: Could you solve this in O(n) time?

## Examples
### Example 1
```text
Input: nums = [1,7,4,9,2,5]
Output: 6
Explanation: The entire sequence is a wiggle sequence with differences (6, -3, 5, -7, 3).
```

### Example 2
```text
Input: nums = [1,17,5,10,13,15,10,5,16,8]
Output: 7
Explanation: There are several subsequences that achieve this length.
One is [1, 17, 10, 13, 10, 16, 8] with differences (16, -7, 3, -3, 6, -8).
```

### Example 3
```text
Input: nums = [1,2,3,4,5,6,7,8,9]
Output: 2
```


## Constraints
- 1 <= nums.length <= 1000
- 0 <= nums[i] <= 1000

## Hints
(none)

## Follow Ups
- Could you solve this in O(n) time?

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int wiggleMaxLength(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int wiggleMaxLength(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def wiggleMaxLength(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def wiggleMaxLength(self, nums: List[int]) -> int:
```

### c
```c
int wiggleMaxLength(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int WiggleMaxLength(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    
};
```

### typescript
```typescript
function wiggleMaxLength(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function wiggleMaxLength($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func wiggleMaxLength(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun wiggleMaxLength(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int wiggleMaxLength(List<int> nums) {
    
  }
}
```

### golang
```golang
func wiggleMaxLength(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def wiggle_max_length(nums)
    
end
```

### scala
```scala
object Solution {
    def wiggleMaxLength(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn wiggle_max_length(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (wiggle-max-length nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec wiggle_max_length(Nums :: [integer()]) -> integer().
wiggle_max_length(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec wiggle_max_length(nums :: [integer]) :: integer
  def wiggle_max_length(nums) do
    
  end
end
```
