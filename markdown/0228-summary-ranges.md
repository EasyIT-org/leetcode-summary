# 228. Summary Ranges

- Difficulty: Easy
- Topics: Array
- Slug: summary-ranges
- Problem ID: 228

## Description
You are given a sorted unique integer array nums.
A range [a,b] is the set of all integers from a to b (inclusive).
Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
Each range [a,b] in the list should be output as:
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
```

### Example 2
```text
Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
```


## Constraints
- 0 <= nums.length <= 20
- -231 <= nums[i] <= 231 - 1
- All the values of nums are unique.
- nums is sorted in ascending order.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> summaryRanges(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public List<String> summaryRanges(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def summaryRanges(self, nums):
        """
        :type nums: List[int]
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** summaryRanges(int* nums, int numsSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<string> SummaryRanges(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    
};
```

### typescript
```typescript
function summaryRanges(nums: number[]): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return String[]
     */
    function summaryRanges($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func summaryRanges(_ nums: [Int]) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun summaryRanges(nums: IntArray): List<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> summaryRanges(List<int> nums) {
    
  }
}
```

### golang
```golang
func summaryRanges(nums []int) []string {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {String[]}
def summary_ranges(nums)
    
end
```

### scala
```scala
object Solution {
    def summaryRanges(nums: Array[Int]): List[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn summary_ranges(nums: Vec<i32>) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (summary-ranges nums)
  (-> (listof exact-integer?) (listof string?))
  )
```

### erlang
```erlang
-spec summary_ranges(Nums :: [integer()]) -> [unicode:unicode_binary()].
summary_ranges(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec summary_ranges(nums :: [integer]) :: [String.t]
  def summary_ranges(nums) do
    
  end
end
```
