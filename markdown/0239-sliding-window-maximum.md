# 239. Sliding Window Maximum

- Difficulty: Hard
- Topics: Array, Queue, Sliding Window, Heap (Priority Queue), Monotonic Queue
- Slug: sliding-window-maximum
- Problem ID: 239

## Description
You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
Return the max sliding window.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

### Example 2
```text
Input: nums = [1], k = 1
Output: [1]
```


## Constraints
- 1 <= nums.length <= 105
- -104 <= nums[i] <= 104
- 1 <= k <= nums.length

## Hints
- How about using a data structure such as deque (double-ended queue)?
- The queue size need not be the same as the window’s size.
- Remove redundant elements and the queue should store only elements that need to be considered.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxSlidingWindow(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* maxSlidingWindow(int* nums, int numsSize, int k, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] MaxSlidingWindow(int[] nums, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    
};
```

### typescript
```typescript
function maxSlidingWindow(nums: number[], k: number): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer[]
     */
    function maxSlidingWindow($nums, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxSlidingWindow(_ nums: [Int], _ k: Int) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxSlidingWindow(nums: IntArray, k: Int): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> maxSlidingWindow(List<int> nums, int k) {
    
  }
}
```

### golang
```golang
func maxSlidingWindow(nums []int, k int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer[]}
def max_sliding_window(nums, k)
    
end
```

### scala
```scala
object Solution {
    def maxSlidingWindow(nums: Array[Int], k: Int): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_sliding_window(nums: Vec<i32>, k: i32) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (max-sliding-window nums k)
  (-> (listof exact-integer?) exact-integer? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec max_sliding_window(Nums :: [integer()], K :: integer()) -> [integer()].
max_sliding_window(Nums, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_sliding_window(nums :: [integer], k :: integer) :: [integer]
  def max_sliding_window(nums, k) do
    
  end
end
```
