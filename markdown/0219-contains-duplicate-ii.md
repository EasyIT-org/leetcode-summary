# 219. Contains Duplicate II

- Difficulty: Easy
- Topics: Array, Hash Table, Sliding Window
- Slug: contains-duplicate-ii
- Problem ID: 219

## Description
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,2,3,1], k = 3
Output: true
```

### Example 2
```text
Input: nums = [1,0,1,1], k = 1
Output: true
```

### Example 3
```text
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
```


## Constraints
- 1 <= nums.length <= 105
- -109 <= nums[i] <= 109
- 0 <= k <= 105

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        
    }
};
```

### java
```java
class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def containsNearbyDuplicate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
```

### c
```c
bool containsNearbyDuplicate(int* nums, int numsSize, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool ContainsNearbyDuplicate(int[] nums, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    
};
```

### typescript
```typescript
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Boolean
     */
    function containsNearbyDuplicate($nums, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func containsNearbyDuplicate(_ nums: [Int], _ k: Int) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun containsNearbyDuplicate(nums: IntArray, k: Int): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool containsNearbyDuplicate(List<int> nums, int k) {
    
  }
}
```

### golang
```golang
func containsNearbyDuplicate(nums []int, k int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} k
# @return {Boolean}
def contains_nearby_duplicate(nums, k)
    
end
```

### scala
```scala
object Solution {
    def containsNearbyDuplicate(nums: Array[Int], k: Int): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn contains_nearby_duplicate(nums: Vec<i32>, k: i32) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (contains-nearby-duplicate nums k)
  (-> (listof exact-integer?) exact-integer? boolean?)
  )
```

### erlang
```erlang
-spec contains_nearby_duplicate(Nums :: [integer()], K :: integer()) -> boolean().
contains_nearby_duplicate(Nums, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec contains_nearby_duplicate(nums :: [integer], k :: integer) :: boolean
  def contains_nearby_duplicate(nums, k) do
    
  end
end
```
