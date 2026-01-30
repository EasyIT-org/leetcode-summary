# 162. Find Peak Element

- Difficulty: Medium
- Topics: Array, Binary Search
- Slug: find-peak-element
- Problem ID: 162

## Description
A peak element is an element that is strictly greater than its neighbors.
Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
You must write an algorithm that runs in O(log n) time.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
```

### Example 2
```text
Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
```


## Constraints
- 1 <= nums.length <= 1000
- -231 <= nums[i] <= 231 - 1
- nums[i] != nums[i + 1] for all valid i.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findPeakElement(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int findPeakElement(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def findPeakElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
```

### c
```c
int findPeakElement(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindPeakElement(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    
};
```

### typescript
```typescript
function findPeakElement(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findPeakElement($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func findPeakElement(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findPeakElement(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findPeakElement(List<int> nums) {
    
  }
}
```

### golang
```golang
func findPeakElement(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def find_peak_element(nums)
    
end
```

### scala
```scala
object Solution {
    def findPeakElement(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_peak_element(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-peak-element nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec find_peak_element(Nums :: [integer()]) -> integer().
find_peak_element(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_peak_element(nums :: [integer]) :: integer
  def find_peak_element(nums) do
    
  end
end
```
