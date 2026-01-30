# 35. Search Insert Position

- Difficulty: Easy
- Topics: Array, Binary Search
- Slug: search-insert-position
- Problem ID: 35

## Description
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,3,5,6], target = 5
Output: 2
```

### Example 2
```text
Input: nums = [1,3,5,6], target = 2
Output: 1
```

### Example 3
```text
Input: nums = [1,3,5,6], target = 7
Output: 4
```


## Constraints
- 1 <= nums.length <= 104
- -104 <= nums[i] <= 104
- nums contains distinct values sorted in ascending order.
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
    int searchInsert(vector<int>& nums, int target) {
        
    }
};
```

### java
```java
class Solution {
    public int searchInsert(int[] nums, int target) {
        
    }
}
```

### python
```python
class Solution(object):
    def searchInsert(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
```

### c
```c
int searchInsert(int* nums, int numsSize, int target) {
    
}
```

### csharp
```csharp
public class Solution {
    public int SearchInsert(int[] nums, int target) {
        
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
var searchInsert = function(nums, target) {
    
};
```

### typescript
```typescript
function searchInsert(nums: number[], target: number): number {
    
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
    function searchInsert($nums, $target) {
        
    }
}
```

### swift
```swift
class Solution {
    func searchInsert(_ nums: [Int], _ target: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun searchInsert(nums: IntArray, target: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int searchInsert(List<int> nums, int target) {
    
  }
}
```

### golang
```golang
func searchInsert(nums []int, target int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search_insert(nums, target)
    
end
```

### scala
```scala
object Solution {
    def searchInsert(nums: Array[Int], target: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (search-insert nums target)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec search_insert(Nums :: [integer()], Target :: integer()) -> integer().
search_insert(Nums, Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec search_insert(nums :: [integer], target :: integer) :: integer
  def search_insert(nums, target) do
    
  end
end
```
