# 719. Find K-th Smallest Pair Distance

- Difficulty: Hard
- Topics: Array, Two Pointers, Binary Search, Sorting
- Slug: find-k-th-smallest-pair-distance
- Problem ID: 719

## Description
The distance of a pair of integers a and b is defined as the absolute difference between a and b.
Given an integer array nums and an integer k, return the kth smallest distance among all the pairs nums[i] and nums[j] where 0 <= i < j < nums.length.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,3,1], k = 1
Output: 0
Explanation: Here are all the pairs:
(1,3) -> 2
(1,1) -> 0
(3,1) -> 2
Then the 1st smallest distance pair is (1,1), and its distance is 0.
```

### Example 2
```text
Input: nums = [1,1,1], k = 2
Output: 0
```

### Example 3
```text
Input: nums = [1,6,1], k = 3
Output: 5
```


## Constraints
- n == nums.length
- 2 <= n <= 104
- 0 <= nums[i] <= 106
- 1 <= k <= n * (n - 1) / 2

## Hints
- Binary search for the answer.  How can you check how many pairs have distance <= X?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int smallestDistancePair(vector<int>& nums, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int smallestDistancePair(int[] nums, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def smallestDistancePair(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def smallestDistancePair(self, nums: List[int], k: int) -> int:
```

### c
```c
int smallestDistancePair(int* nums, int numsSize, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int SmallestDistancePair(int[] nums, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
    
};
```

### typescript
```typescript
function smallestDistancePair(nums: number[], k: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function smallestDistancePair($nums, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func smallestDistancePair(_ nums: [Int], _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun smallestDistancePair(nums: IntArray, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int smallestDistancePair(List<int> nums, int k) {
    
  }
}
```

### golang
```golang
func smallestDistancePair(nums []int, k int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def smallest_distance_pair(nums, k)
    
end
```

### scala
```scala
object Solution {
    def smallestDistancePair(nums: Array[Int], k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn smallest_distance_pair(nums: Vec<i32>, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (smallest-distance-pair nums k)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec smallest_distance_pair(Nums :: [integer()], K :: integer()) -> integer().
smallest_distance_pair(Nums, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec smallest_distance_pair(nums :: [integer], k :: integer) :: integer
  def smallest_distance_pair(nums, k) do
    
  end
end
```
