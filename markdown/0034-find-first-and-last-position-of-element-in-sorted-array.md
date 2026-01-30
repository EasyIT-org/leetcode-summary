# 34. Find First and Last Position of Element in Sorted Array

- Difficulty: Medium
- Topics: Array, Binary Search
- Slug: find-first-and-last-position-of-element-in-sorted-array
- Problem ID: 34

## Description
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
```

### Example 2
```text
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
```

### Example 3
```text
Input: nums = [], target = 0
Output: [-1,-1]
```


## Constraints
- 0 <= nums.length <= 105
- -109 <= nums[i] <= 109
- nums is a non-decreasing array.
- -109 <= target <= 109

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        
    }
};
```

### java
```java
class Solution {
    public int[] searchRange(int[] nums, int target) {
        
    }
}
```

### python
```python
class Solution(object):
    def searchRange(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* searchRange(int* nums, int numsSize, int target, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] SearchRange(int[] nums, int target) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
};
```

### typescript
```typescript
function searchRange(nums: number[], target: number): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function searchRange($nums, $target) {
        
    }
}
```

### swift
```swift
class Solution {
    func searchRange(_ nums: [Int], _ target: Int) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun searchRange(nums: IntArray, target: Int): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> searchRange(List<int> nums, int target) {
    
  }
}
```

### golang
```golang
func searchRange(nums []int, target int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def search_range(nums, target)
    
end
```

### scala
```scala
object Solution {
    def searchRange(nums: Array[Int], target: Int): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn search_range(nums: Vec<i32>, target: i32) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (search-range nums target)
  (-> (listof exact-integer?) exact-integer? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec search_range(Nums :: [integer()], Target :: integer()) -> [integer()].
search_range(Nums, Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec search_range(nums :: [integer], target :: integer) :: [integer]
  def search_range(nums, target) do
    
  end
end
```
