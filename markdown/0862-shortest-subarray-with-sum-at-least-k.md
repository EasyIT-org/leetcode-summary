# 862. Shortest Subarray with Sum at Least K

- Difficulty: Hard
- Topics: Array, Binary Search, Queue, Sliding Window, Heap (Priority Queue), Prefix Sum, Monotonic Queue
- Slug: shortest-subarray-with-sum-at-least-k
- Problem ID: 892

## Description
Given an integer array nums and an integer k, return the length of the shortest non-empty subarray of nums with a sum of at least k. If there is no such subarray, return -1.
A subarray is a contiguous part of an array.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1], k = 1
Output: 1
```

### Example 2
```text
Input: nums = [1,2], k = 4
Output: -1
```

### Example 3
```text
Input: nums = [2,-1,2], k = 3
Output: 3
```


## Constraints
- 1 <= nums.length <= 105
- -105 <= nums[i] <= 105
- 1 <= k <= 109

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int shortestSubarray(vector<int>& nums, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int shortestSubarray(int[] nums, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def shortestSubarray(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def shortestSubarray(self, nums: List[int], k: int) -> int:
```

### c
```c
int shortestSubarray(int* nums, int numsSize, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int ShortestSubarray(int[] nums, int k) {
        
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
var shortestSubarray = function(nums, k) {
    
};
```

### typescript
```typescript
function shortestSubarray(nums: number[], k: number): number {
    
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
    function shortestSubarray($nums, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func shortestSubarray(_ nums: [Int], _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun shortestSubarray(nums: IntArray, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int shortestSubarray(List<int> nums, int k) {
    
  }
}
```

### golang
```golang
func shortestSubarray(nums []int, k int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def shortest_subarray(nums, k)
    
end
```

### scala
```scala
object Solution {
    def shortestSubarray(nums: Array[Int], k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn shortest_subarray(nums: Vec<i32>, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (shortest-subarray nums k)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec shortest_subarray(Nums :: [integer()], K :: integer()) -> integer().
shortest_subarray(Nums, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec shortest_subarray(nums :: [integer], k :: integer) :: integer
  def shortest_subarray(nums, k) do
    
  end
end
```
