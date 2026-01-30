# 915. Partition Array into Disjoint Intervals

- Difficulty: Medium
- Topics: Array
- Slug: partition-array-into-disjoint-intervals
- Problem ID: 951

## Description
Given an integer array nums, partition it into two (contiguous) subarrays left and right so that:
Return the length of left after such a partitioning.
Test cases are generated such that partitioning exists.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [5,0,3,8,6]
Output: 3
Explanation: left = [5,0,3], right = [8,6]
```

### Example 2
```text
Input: nums = [1,1,1,0,6,12]
Output: 4
Explanation: left = [1,1,1,0], right = [6,12]
```


## Constraints
- 2 <= nums.length <= 105
- 0 <= nums[i] <= 106
- There is at least one valid answer for the given input.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int partitionDisjoint(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int partitionDisjoint(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def partitionDisjoint(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def partitionDisjoint(self, nums: List[int]) -> int:
```

### c
```c
int partitionDisjoint(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int PartitionDisjoint(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) {
    
};
```

### typescript
```typescript
function partitionDisjoint(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function partitionDisjoint($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func partitionDisjoint(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun partitionDisjoint(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int partitionDisjoint(List<int> nums) {
    
  }
}
```

### golang
```golang
func partitionDisjoint(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def partition_disjoint(nums)
    
end
```

### scala
```scala
object Solution {
    def partitionDisjoint(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn partition_disjoint(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (partition-disjoint nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec partition_disjoint(Nums :: [integer()]) -> integer().
partition_disjoint(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec partition_disjoint(nums :: [integer]) :: integer
  def partition_disjoint(nums) do
    
  end
end
```
