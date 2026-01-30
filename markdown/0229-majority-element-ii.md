# 229. Majority Element II

- Difficulty: Medium
- Topics: Array, Hash Table, Sorting, Counting
- Slug: majority-element-ii
- Problem ID: 229

## Description
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
Example 1:
Example 2:
Example 3:
Constraints:
Follow up: Could you solve the problem in linear time and in O(1) space?

## Examples
### Example 1
```text
Input: nums = [3,2,3]
Output: [3]
```

### Example 2
```text
Input: nums = [1]
Output: [1]
```

### Example 3
```text
Input: nums = [1,2]
Output: [1,2]
```


## Constraints
- 1 <= nums.length <= 5 * 104
- -109 <= nums[i] <= 109

## Hints
- Think about the possible number of elements that can appear more than ⌊ n/3 ⌋ times in the array.
- It can be at most two. Why?
- Consider using Boyer-Moore Voting Algorithm, which is efficient for finding elements that appear more than a certain threshold.

## Follow Ups
- Could you solve the problem in linear time and in O(1) space?

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> majorityElement(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public List<Integer> majorityElement(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* majorityElement(int* nums, int numsSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<int> MajorityElement(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    
};
```

### typescript
```typescript
function majorityElement(nums: number[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function majorityElement($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func majorityElement(_ nums: [Int]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun majorityElement(nums: IntArray): List<Int> {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> majorityElement(List<int> nums) {
    
  }
}
```

### golang
```golang
func majorityElement(nums []int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer[]}
def majority_element(nums)
    
end
```

### scala
```scala
object Solution {
    def majorityElement(nums: Array[Int]): List[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn majority_element(nums: Vec<i32>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (majority-element nums)
  (-> (listof exact-integer?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec majority_element(Nums :: [integer()]) -> [integer()].
majority_element(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec majority_element(nums :: [integer]) :: [integer]
  def majority_element(nums) do
    
  end
end
```
