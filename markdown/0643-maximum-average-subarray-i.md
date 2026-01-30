# 643. Maximum Average Subarray I

- Difficulty: Easy
- Topics: Array, Sliding Window
- Slug: maximum-average-subarray-i
- Problem ID: 643

## Description
You are given an integer array nums consisting of n elements, and an integer k.
Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
```

### Example 2
```text
Input: nums = [5], k = 1
Output: 5.00000
```


## Constraints
- n == nums.length
- 1 <= k <= n <= 105
- -104 <= nums[i] <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    double findMaxAverage(vector<int>& nums, int k) {
        
    }
};
```

### java
```java
class Solution {
    public double findMaxAverage(int[] nums, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def findMaxAverage(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: float
        """
```

### python3
```python3
class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
```

### c
```c
double findMaxAverage(int* nums, int numsSize, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public double FindMaxAverage(int[] nums, int k) {
        
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
var findMaxAverage = function(nums, k) {
    
};
```

### typescript
```typescript
function findMaxAverage(nums: number[], k: number): number {
    
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
    function findMaxAverage($nums, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func findMaxAverage(_ nums: [Int], _ k: Int) -> Double {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findMaxAverage(nums: IntArray, k: Int): Double {
        
    }
}
```

### dart
```dart
class Solution {
  double findMaxAverage(List<int> nums, int k) {
    
  }
}
```

### golang
```golang
func findMaxAverage(nums []int, k int) float64 {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} k
# @return {Float}
def find_max_average(nums, k)
    
end
```

### scala
```scala
object Solution {
    def findMaxAverage(nums: Array[Int], k: Int): Double = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_max_average(nums: Vec<i32>, k: i32) -> f64 {
        
    }
}
```

### racket
```racket
(define/contract (find-max-average nums k)
  (-> (listof exact-integer?) exact-integer? flonum?)
  )
```

### erlang
```erlang
-spec find_max_average(Nums :: [integer()], K :: integer()) -> float().
find_max_average(Nums, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_max_average(nums :: [integer], k :: integer) :: float
  def find_max_average(nums, k) do
    
  end
end
```
