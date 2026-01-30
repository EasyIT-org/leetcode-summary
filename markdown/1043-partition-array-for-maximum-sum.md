# 1043. Partition Array for Maximum Sum

- Difficulty: Medium
- Topics: Array, Dynamic Programming
- Slug: partition-array-for-maximum-sum
- Problem ID: 1121

## Description
Given an integer array arr, partition the array into (contiguous) subarrays of length at most k. After partitioning, each subarray has their values changed to become the maximum value of that subarray.
Return the largest sum of the given array after partitioning. Test cases are generated so that the answer fits in a 32-bit integer.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: arr = [1,15,7,9,2,5,10], k = 3
Output: 84
Explanation: arr becomes [15,15,15,9,10,10,10]
```

### Example 2
```text
Input: arr = [1,4,1,5,7,3,6,1,9,9,3], k = 4
Output: 83
```

### Example 3
```text
Input: arr = [1], k = 1
Output: 1
```


## Constraints
- 1 <= arr.length <= 500
- 0 <= arr[i] <= 109
- 1 <= k <= arr.length

## Hints
- Think dynamic programming:  dp[i] will be the answer for array A[0], ..., A[i-1].
- For j = 1 .. k that keeps everything in bounds, dp[i] is the maximum of dp[i-j] + max(A[i-1], ..., A[i-j]) * j .

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxSumAfterPartitioning(vector<int>& arr, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int maxSumAfterPartitioning(int[] arr, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxSumAfterPartitioning(self, arr, k):
        """
        :type arr: List[int]
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxSumAfterPartitioning(self, arr: List[int], k: int) -> int:
```

### c
```c
int maxSumAfterPartitioning(int* arr, int arrSize, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxSumAfterPartitioning(int[] arr, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    
};
```

### typescript
```typescript
function maxSumAfterPartitioning(arr: number[], k: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $arr
     * @param Integer $k
     * @return Integer
     */
    function maxSumAfterPartitioning($arr, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxSumAfterPartitioning(_ arr: [Int], _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxSumAfterPartitioning(arr: IntArray, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxSumAfterPartitioning(List<int> arr, int k) {
    
  }
}
```

### golang
```golang
func maxSumAfterPartitioning(arr []int, k int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} arr
# @param {Integer} k
# @return {Integer}
def max_sum_after_partitioning(arr, k)
    
end
```

### scala
```scala
object Solution {
    def maxSumAfterPartitioning(arr: Array[Int], k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_sum_after_partitioning(arr: Vec<i32>, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-sum-after-partitioning arr k)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec max_sum_after_partitioning(Arr :: [integer()], K :: integer()) -> integer().
max_sum_after_partitioning(Arr, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_sum_after_partitioning(arr :: [integer], k :: integer) :: integer
  def max_sum_after_partitioning(arr, k) do
    
  end
end
```
