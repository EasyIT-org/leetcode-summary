# 581. Shortest Unsorted Continuous Subarray

- Difficulty: Medium
- Topics: Array, Two Pointers, Stack, Greedy, Sorting, Monotonic Stack
- Slug: shortest-unsorted-continuous-subarray
- Problem ID: 581

## Description
Given an integer array nums, you need to find one continuous subarray such that if you only sort this subarray in non-decreasing order, then the whole array will be sorted in non-decreasing order.
Return the shortest such subarray and output its length.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
```

### Example 2
```text
Input: nums = [1,2,3,4]
Output: 0
```

### Example 3
```text
Input: nums = [1]
Output: 0
```


## Constraints
- 1 <= nums.length <= 104
- -105 <= nums[i] <= 105

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findUnsortedSubarray(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int findUnsortedSubarray(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def findUnsortedSubarray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findUnsortedSubarray(self, nums: List[int]) -> int:
```

### c
```c
int findUnsortedSubarray(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindUnsortedSubarray(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    
};
```

### typescript
```typescript
function findUnsortedSubarray(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findUnsortedSubarray($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func findUnsortedSubarray(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findUnsortedSubarray(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findUnsortedSubarray(List<int> nums) {
    
  }
}
```

### golang
```golang
func findUnsortedSubarray(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def find_unsorted_subarray(nums)
    
end
```

### scala
```scala
object Solution {
    def findUnsortedSubarray(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_unsorted_subarray(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-unsorted-subarray nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec find_unsorted_subarray(Nums :: [integer()]) -> integer().
find_unsorted_subarray(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_unsorted_subarray(nums :: [integer]) :: integer
  def find_unsorted_subarray(nums) do
    
  end
end
```
