# 480. Sliding Window Median

- Difficulty: Hard
- Topics: Array, Hash Table, Sliding Window, Heap (Priority Queue)
- Slug: sliding-window-median
- Problem ID: 480

## Description
The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle values.
You are given an integer array nums and an integer k. There is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
Return the median array for each window in the original array. Answers within 10-5 of the actual value will be accepted.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]
Explanation: 
Window position                Median
---------------                -----
[1  3  -1] -3  5  3  6  7        1
 1 [3  -1  -3] 5  3  6  7       -1
 1  3 [-1  -3  5] 3  6  7       -1
 1  3  -1 [-3  5  3] 6  7        3
 1  3  -1  -3 [5  3  6] 7        5
 1  3  -1  -3  5 [3  6  7]       6
```

### Example 2
```text
Input: nums = [1,2,3,4,2,3,1,4,2], k = 3
Output: [2.00000,3.00000,3.00000,3.00000,2.00000,3.00000,2.00000]
```


## Constraints
- 1 <= k <= nums.length <= 105
- -231 <= nums[i] <= 231 - 1

## Hints
- The simplest of solutions comes from the basic idea of finding the median given a set of numbers. We know that by definition, a median is the center element (or an average of the two center elements). Given an unsorted list of numbers, how do we find the median element? If you know the answer to this question, can we extend this idea to every sliding window that we come across in the array?
- Is there a better way to do what we are doing in the above hint? Don't you think there is duplication of calculation being done there? Is there some sort of optimization that we can do to achieve the same result? This approach is merely a modification of the basic approach except that it simply reduces duplication of calculations once done.
- The third line of thought is also based on this same idea but achieving the result in a different way. We obviously need the window to be sorted for us to be able to find the median. Is there a data-structure out there that we can use (in one or more quantities) to obtain the median element extremely fast, say O(1) time while having the ability to perform the other operations fairly efficiently as well?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<double> medianSlidingWindow(vector<int>& nums, int k) {
        
    }
};
```

### java
```java
class Solution {
    public double[] medianSlidingWindow(int[] nums, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def medianSlidingWindow(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[float]
        """
```

### python3
```python3
class Solution:
    def medianSlidingWindow(self, nums: List[int], k: int) -> List[float]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
double* medianSlidingWindow(int* nums, int numsSize, int k, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public double[] MedianSlidingWindow(int[] nums, int k) {
        
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
var medianSlidingWindow = function(nums, k) {
    
};
```

### typescript
```typescript
function medianSlidingWindow(nums: number[], k: number): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Float[]
     */
    function medianSlidingWindow($nums, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func medianSlidingWindow(_ nums: [Int], _ k: Int) -> [Double] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun medianSlidingWindow(nums: IntArray, k: Int): DoubleArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<double> medianSlidingWindow(List<int> nums, int k) {
    
  }
}
```

### golang
```golang
func medianSlidingWindow(nums []int, k int) []float64 {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} k
# @return {Float[]}
def median_sliding_window(nums, k)
    
end
```

### scala
```scala
object Solution {
    def medianSlidingWindow(nums: Array[Int], k: Int): Array[Double] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn median_sliding_window(nums: Vec<i32>, k: i32) -> Vec<f64> {
        
    }
}
```

### racket
```racket
(define/contract (median-sliding-window nums k)
  (-> (listof exact-integer?) exact-integer? (listof flonum?))
  )
```

### erlang
```erlang
-spec median_sliding_window(Nums :: [integer()], K :: integer()) -> [float()].
median_sliding_window(Nums, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec median_sliding_window(nums :: [integer], k :: integer) :: [float]
  def median_sliding_window(nums, k) do
    
  end
end
```
