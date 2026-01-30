# 33. Search in Rotated Sorted Array

- Difficulty: Medium
- Topics: Array, Binary Search
- Slug: search-in-rotated-sorted-array
- Problem ID: 33

## Description
There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
You must write an algorithm with O(log n) runtime complexity.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```

### Example 2
```text
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
```

### Example 3
```text
Input: nums = [1], target = 0
Output: -1
```


## Constraints
- 1 <= nums.length <= 5000
- -104 <= nums[i] <= 104
- All values of nums are unique.
- nums is an ascending array that is possibly rotated.
- -104 <= target <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int search(vector<int>& nums, int target) {
        
    }
};
```

### java
```java
class Solution {
    public int search(int[] nums, int target) {
        
    }
}
```

### python
```python
class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def search(self, nums: List[int], target: int) -> int:
```

### c
```c
int search(int* nums, int numsSize, int target) {
    
}
```

### csharp
```csharp
public class Solution {
    public int Search(int[] nums, int target) {
        
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
var search = function(nums, target) {
    
};
```

### typescript
```typescript
function search(nums: number[], target: number): number {
    
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
    function search($nums, $target) {
        
    }
}
```

### swift
```swift
class Solution {
    func search(_ nums: [Int], _ target: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun search(nums: IntArray, target: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int search(List<int> nums, int target) {
    
  }
}
```

### golang
```golang
func search(nums []int, target int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search(nums, target)
    
end
```

### scala
```scala
object Solution {
    def search(nums: Array[Int], target: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn search(nums: Vec<i32>, target: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (search nums target)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec search(Nums :: [integer()], Target :: integer()) -> integer().
search(Nums, Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec search(nums :: [integer], target :: integer) :: integer
  def search(nums, target) do
    
  end
end
```
