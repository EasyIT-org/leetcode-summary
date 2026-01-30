# 813. Largest Sum of Averages

- Difficulty: Medium
- Topics: Array, Dynamic Programming, Prefix Sum
- Slug: largest-sum-of-averages
- Problem ID: 831

## Description
You are given an integer array nums and an integer k. You can partition the array into at most k non-empty adjacent subarrays. The score of a partition is the sum of the averages of each subarray.
Note that the partition must use every integer in nums, and that the score is not necessarily an integer.
Return the maximum score you can achieve of all the possible partitions. Answers within 10-6 of the actual answer will be accepted.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [9,1,2,3,9], k = 3
Output: 20.00000
Explanation: 
The best choice is to partition nums into [9], [1, 2, 3], [9]. The answer is 9 + (1 + 2 + 3) / 3 + 9 = 20.
We could have also partitioned nums into [9, 1], [2], [3, 9], for example.
That partition would lead to a score of 5 + 2 + 6 = 13, which is worse.
```

### Example 2
```text
Input: nums = [1,2,3,4,5,6,7], k = 4
Output: 20.50000
```


## Constraints
- 1 <= nums.length <= 100
- 1 <= nums[i] <= 104
- 1 <= k <= nums.length

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    double largestSumOfAverages(vector<int>& nums, int k) {
        
    }
};
```

### java
```java
class Solution {
    public double largestSumOfAverages(int[] nums, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def largestSumOfAverages(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: float
        """
```

### python3
```python3
class Solution:
    def largestSumOfAverages(self, nums: List[int], k: int) -> float:
```

### c
```c
double largestSumOfAverages(int* nums, int numsSize, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public double LargestSumOfAverages(int[] nums, int k) {
        
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
var largestSumOfAverages = function(nums, k) {
    
};
```

### typescript
```typescript
function largestSumOfAverages(nums: number[], k: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Float
     */
    function largestSumOfAverages($nums, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func largestSumOfAverages(_ nums: [Int], _ k: Int) -> Double {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun largestSumOfAverages(nums: IntArray, k: Int): Double {
        
    }
}
```

### dart
```dart
class Solution {
  double largestSumOfAverages(List<int> nums, int k) {
    
  }
}
```

### golang
```golang
func largestSumOfAverages(nums []int, k int) float64 {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} k
# @return {Float}
def largest_sum_of_averages(nums, k)
    
end
```

### scala
```scala
object Solution {
    def largestSumOfAverages(nums: Array[Int], k: Int): Double = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn largest_sum_of_averages(nums: Vec<i32>, k: i32) -> f64 {
        
    }
}
```

### racket
```racket
(define/contract (largest-sum-of-averages nums k)
  (-> (listof exact-integer?) exact-integer? flonum?)
  )
```

### erlang
```erlang
-spec largest_sum_of_averages(Nums :: [integer()], K :: integer()) -> float().
largest_sum_of_averages(Nums, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec largest_sum_of_averages(nums :: [integer], k :: integer) :: float
  def largest_sum_of_averages(nums, k) do
    
  end
end
```
