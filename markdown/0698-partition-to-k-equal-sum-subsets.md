# 698. Partition to K Equal Sum Subsets

- Difficulty: Medium
- Topics: Array, Dynamic Programming, Backtracking, Bit Manipulation, Memoization, Bitmask
- Slug: partition-to-k-equal-sum-subsets
- Problem ID: 698

## Description
Given an integer array nums and an integer k, return true if it is possible to divide this array into k non-empty subsets whose sums are all equal.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [4,3,2,3,5,2,1], k = 4
Output: true
Explanation: It is possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.
```

### Example 2
```text
Input: nums = [1,2,3,4], k = 3
Output: false
```


## Constraints
- 1 <= k <= nums.length <= 16
- 1 <= nums[i] <= 104
- The frequency of each element is in the range [1, 4].

## Hints
- We can figure out what target each subset must sum to.  Then, let's recursively search, where at each call to our function, we choose which of k subsets the next value will join.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool canPartitionKSubsets(vector<int>& nums, int k) {
        
    }
};
```

### java
```java
class Solution {
    public boolean canPartitionKSubsets(int[] nums, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def canPartitionKSubsets(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def canPartitionKSubsets(self, nums: List[int], k: int) -> bool:
```

### c
```c
bool canPartitionKSubsets(int* nums, int numsSize, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool CanPartitionKSubsets(int[] nums, int k) {
        
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
var canPartitionKSubsets = function(nums, k) {
    
};
```

### typescript
```typescript
function canPartitionKSubsets(nums: number[], k: number): boolean {
    
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
    function canPartitionKSubsets($nums, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func canPartitionKSubsets(_ nums: [Int], _ k: Int) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun canPartitionKSubsets(nums: IntArray, k: Int): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool canPartitionKSubsets(List<int> nums, int k) {
    
  }
}
```

### golang
```golang
func canPartitionKSubsets(nums []int, k int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} k
# @return {Boolean}
def can_partition_k_subsets(nums, k)
    
end
```

### scala
```scala
object Solution {
    def canPartitionKSubsets(nums: Array[Int], k: Int): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn can_partition_k_subsets(nums: Vec<i32>, k: i32) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (can-partition-k-subsets nums k)
  (-> (listof exact-integer?) exact-integer? boolean?)
  )
```

### erlang
```erlang
-spec can_partition_k_subsets(Nums :: [integer()], K :: integer()) -> boolean().
can_partition_k_subsets(Nums, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec can_partition_k_subsets(nums :: [integer], k :: integer) :: boolean
  def can_partition_k_subsets(nums, k) do
    
  end
end
```
