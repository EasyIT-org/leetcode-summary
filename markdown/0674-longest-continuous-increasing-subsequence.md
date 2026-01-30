# 674. Longest Continuous Increasing Subsequence

- Difficulty: Easy
- Topics: Array
- Slug: longest-continuous-increasing-subsequence
- Problem ID: 674

## Description
Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.
A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,3,5,4,7]
Output: 3
Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element
4.
```

### Example 2
```text
Input: nums = [2,2,2,2,2]
Output: 1
Explanation: The longest continuous increasing subsequence is [2] with length 1. Note that it must be strictly
increasing.
```


## Constraints
- 1 <= nums.length <= 104
- -109 <= nums[i] <= 109

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findLengthOfLCIS(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int findLengthOfLCIS(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def findLengthOfLCIS(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findLengthOfLCIS(self, nums: List[int]) -> int:
```

### c
```c
int findLengthOfLCIS(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindLengthOfLCIS(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    
};
```

### typescript
```typescript
function findLengthOfLCIS(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findLengthOfLCIS($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func findLengthOfLCIS(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findLengthOfLCIS(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findLengthOfLCIS(List<int> nums) {
    
  }
}
```

### golang
```golang
func findLengthOfLCIS(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def find_length_of_lcis(nums)
    
end
```

### scala
```scala
object Solution {
    def findLengthOfLCIS(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_length_of_lcis(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-length-of-lcis nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec find_length_of_lcis(Nums :: [integer()]) -> integer().
find_length_of_lcis(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_length_of_lcis(nums :: [integer]) :: integer
  def find_length_of_lcis(nums) do
    
  end
end
```
