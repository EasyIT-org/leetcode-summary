# 673. Number of Longest Increasing Subsequence

- Difficulty: Medium
- Topics: Array, Dynamic Programming, Binary Indexed Tree, Segment Tree
- Slug: number-of-longest-increasing-subsequence
- Problem ID: 673

## Description
Given an integer array nums, return the number of longest increasing subsequences.
Notice that the sequence has to be strictly increasing.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,3,5,4,7]
Output: 2
Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].
```

### Example 2
```text
Input: nums = [2,2,2,2,2]
Output: 5
Explanation: The length of the longest increasing subsequence is 1, and there are 5 increasing subsequences of length 1, so output 5.
```


## Constraints
- 1 <= nums.length <= 2000
- -106 <= nums[i] <= 106
- The answer is guaranteed to fit inside a 32-bit integer.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findNumberOfLIS(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int findNumberOfLIS(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def findNumberOfLIS(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findNumberOfLIS(self, nums: List[int]) -> int:
```

### c
```c
int findNumberOfLIS(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindNumberOfLIS(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    
};
```

### typescript
```typescript
function findNumberOfLIS(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findNumberOfLIS($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func findNumberOfLIS(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findNumberOfLIS(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findNumberOfLIS(List<int> nums) {
    
  }
}
```

### golang
```golang
func findNumberOfLIS(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def find_number_of_lis(nums)
    
end
```

### scala
```scala
object Solution {
    def findNumberOfLIS(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_number_of_lis(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-number-of-lis nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec find_number_of_lis(Nums :: [integer()]) -> integer().
find_number_of_lis(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_number_of_lis(nums :: [integer]) :: integer
  def find_number_of_lis(nums) do
    
  end
end
```
