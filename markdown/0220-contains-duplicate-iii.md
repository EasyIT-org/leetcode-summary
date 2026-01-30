# 220. Contains Duplicate III

- Difficulty: Hard
- Topics: Array, Sliding Window, Sorting, Bucket Sort, Ordered Set
- Slug: contains-duplicate-iii
- Problem ID: 220

## Description
You are given an integer array nums and two integers indexDiff and valueDiff.
Find a pair of indices (i, j) such that:
Return true if such pair exists or false otherwise.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
Output: true
Explanation: We can choose (i, j) = (0, 3).
We satisfy the three conditions:
i != j --> 0 != 3
abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0
```

### Example 2
```text
Input: nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
Output: false
Explanation: After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false.
```


## Constraints
- 2 <= nums.length <= 105
- -109 <= nums[i] <= 109
- 1 <= indexDiff <= nums.length
- 0 <= valueDiff <= 109

## Hints
- Time complexity O(n logk)  - This will give an indication that sorting is involved for k elements.
- Use already existing state to evaluate next state  -  Like, a set of k sorted numbers are only needed to be tracked. When we are processing the next number in array, then we can utilize the existing sorted state and it is not necessary to sort next overlapping set of k numbers again.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool containsNearbyAlmostDuplicate(vector<int>& nums, int indexDiff, int valueDiff) {
        
    }
};
```

### java
```java
class Solution {
    public boolean containsNearbyAlmostDuplicate(int[] nums, int indexDiff, int valueDiff) {
        
    }
}
```

### python
```python
class Solution(object):
    def containsNearbyAlmostDuplicate(self, nums, indexDiff, valueDiff):
        """
        :type nums: List[int]
        :type indexDiff: int
        :type valueDiff: int
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def containsNearbyAlmostDuplicate(self, nums: List[int], indexDiff: int, valueDiff: int) -> bool:
```

### c
```c
bool containsNearbyAlmostDuplicate(int* nums, int numsSize, int indexDiff, int valueDiff) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool ContainsNearbyAlmostDuplicate(int[] nums, int indexDiff, int valueDiff) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    
};
```

### typescript
```typescript
function containsNearbyAlmostDuplicate(nums: number[], indexDiff: number, valueDiff: number): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $indexDiff
     * @param Integer $valueDiff
     * @return Boolean
     */
    function containsNearbyAlmostDuplicate($nums, $indexDiff, $valueDiff) {
        
    }
}
```

### swift
```swift
class Solution {
    func containsNearbyAlmostDuplicate(_ nums: [Int], _ indexDiff: Int, _ valueDiff: Int) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun containsNearbyAlmostDuplicate(nums: IntArray, indexDiff: Int, valueDiff: Int): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool containsNearbyAlmostDuplicate(List<int> nums, int indexDiff, int valueDiff) {
    
  }
}
```

### golang
```golang
func containsNearbyAlmostDuplicate(nums []int, indexDiff int, valueDiff int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} index_diff
# @param {Integer} value_diff
# @return {Boolean}
def contains_nearby_almost_duplicate(nums, index_diff, value_diff)
    
end
```

### scala
```scala
object Solution {
    def containsNearbyAlmostDuplicate(nums: Array[Int], indexDiff: Int, valueDiff: Int): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn contains_nearby_almost_duplicate(nums: Vec<i32>, index_diff: i32, value_diff: i32) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (contains-nearby-almost-duplicate nums indexDiff valueDiff)
  (-> (listof exact-integer?) exact-integer? exact-integer? boolean?)
  )
```

### erlang
```erlang
-spec contains_nearby_almost_duplicate(Nums :: [integer()], IndexDiff :: integer(), ValueDiff :: integer()) -> boolean().
contains_nearby_almost_duplicate(Nums, IndexDiff, ValueDiff) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec contains_nearby_almost_duplicate(nums :: [integer], index_diff :: integer, value_diff :: integer) :: boolean
  def contains_nearby_almost_duplicate(nums, index_diff, value_diff) do
    
  end
end
```
