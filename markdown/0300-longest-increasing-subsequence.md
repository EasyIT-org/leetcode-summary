# 300. Longest Increasing Subsequence

- Difficulty: Medium
- Topics: Array, Binary Search, Dynamic Programming
- Slug: longest-increasing-subsequence
- Problem ID: 300

## Description
Given an integer array nums, return the length of the longest strictly increasing subsequence.
Example 1:
Example 2:
Example 3:
Constraints:
Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?

## Examples
### Example 1
```text
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
```

### Example 2
```text
Input: nums = [0,1,0,3,2,3]
Output: 4
```

### Example 3
```text
Input: nums = [7,7,7,7,7,7,7]
Output: 1
```


## Constraints
- 1 <= nums.length <= 2500
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
    int lengthOfLIS(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int lengthOfLIS(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def lengthOfLIS(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
```

### c
```c
int lengthOfLIS(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int LengthOfLIS(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    
};
```

### typescript
```typescript
function lengthOfLIS(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function lengthOfLIS($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func lengthOfLIS(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun lengthOfLIS(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int lengthOfLIS(List<int> nums) {
    
  }
}
```

### golang
```golang
func lengthOfLIS(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def length_of_lis(nums)
    
end
```

### scala
```scala
object Solution {
    def lengthOfLIS(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn length_of_lis(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (length-of-lis nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec length_of_lis(Nums :: [integer()]) -> integer().
length_of_lis(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec length_of_lis(nums :: [integer]) :: integer
  def length_of_lis(nums) do
    
  end
end
```
