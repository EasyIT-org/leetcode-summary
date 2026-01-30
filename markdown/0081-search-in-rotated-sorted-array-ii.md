# 81. Search in Rotated Sorted Array II

- Difficulty: Medium
- Topics: Array, Binary Search
- Slug: search-in-rotated-sorted-array-ii
- Problem ID: 81

## Description
There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).
Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].
Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.
You must decrease the overall operation steps as much as possible.
Example 1:
Example 2:
Constraints:
Follow up: This problem is similar to Search in Rotated Sorted Array, but nums may contain duplicates. Would this affect the runtime complexity? How and why?

## Examples
### Example 1
```text
Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
```

### Example 2
```text
Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
```


## Constraints
- 1 <= nums.length <= 5000
- -104 <= nums[i] <= 104
- nums is guaranteed to be rotated at some pivot.
- -104 <= target <= 104

## Hints
(none)

## Follow Ups
- This problem is similar to Search in Rotated Sorted Array, but nums may contain duplicates. Would this affect the runtime complexity? How and why?

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool search(vector<int>& nums, int target) {
        
    }
};
```

### java
```java
class Solution {
    public boolean search(int[] nums, int target) {
        
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
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def search(self, nums: List[int], target: int) -> bool:
```

### c
```c
bool search(int* nums, int numsSize, int target) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool Search(int[] nums, int target) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    
};
```

### typescript
```typescript
function search(nums: number[], target: number): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Boolean
     */
    function search($nums, $target) {
        
    }
}
```

### swift
```swift
class Solution {
    func search(_ nums: [Int], _ target: Int) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun search(nums: IntArray, target: Int): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool search(List<int> nums, int target) {
    
  }
}
```

### golang
```golang
func search(nums []int, target int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} target
# @return {Boolean}
def search(nums, target)
    
end
```

### scala
```scala
object Solution {
    def search(nums: Array[Int], target: Int): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn search(nums: Vec<i32>, target: i32) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (search nums target)
  (-> (listof exact-integer?) exact-integer? boolean?)
  )
```

### erlang
```erlang
-spec search(Nums :: [integer()], Target :: integer()) -> boolean().
search(Nums, Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec search(nums :: [integer], target :: integer) :: boolean
  def search(nums, target) do
    
  end
end
```
