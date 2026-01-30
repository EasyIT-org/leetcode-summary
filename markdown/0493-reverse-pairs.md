# 493. Reverse Pairs

- Difficulty: Hard
- Topics: Array, Binary Search, Divide and Conquer, Binary Indexed Tree, Segment Tree, Merge Sort, Ordered Set
- Slug: reverse-pairs
- Problem ID: 493

## Description
Given an integer array nums, return the number of reverse pairs in the array.
A reverse pair is a pair (i, j) where:
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,3,2,3,1]
Output: 2
Explanation: The reverse pairs are:
(1, 4) --> nums[1] = 3, nums[4] = 1, 3 > 2 * 1
(3, 4) --> nums[3] = 3, nums[4] = 1, 3 > 2 * 1
```

### Example 2
```text
Input: nums = [2,4,3,5,1]
Output: 3
Explanation: The reverse pairs are:
(1, 4) --> nums[1] = 4, nums[4] = 1, 4 > 2 * 1
(2, 4) --> nums[2] = 3, nums[4] = 1, 3 > 2 * 1
(3, 4) --> nums[3] = 5, nums[4] = 1, 5 > 2 * 1
```


## Constraints
- 1 <= nums.length <= 5 * 104
- -231 <= nums[i] <= 231 - 1

## Hints
- Use the merge-sort technique.
- Divide the array into two parts and sort them.
- For each integer in the first part, count the number of integers that satisfy the condition from the second part. Use the pointer to help you in the counting process.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int reversePairs(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int reversePairs(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def reversePairs(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def reversePairs(self, nums: List[int]) -> int:
```

### c
```c
int reversePairs(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int ReversePairs(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    
};
```

### typescript
```typescript
function reversePairs(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function reversePairs($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func reversePairs(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun reversePairs(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int reversePairs(List<int> nums) {
    
  }
}
```

### golang
```golang
func reversePairs(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def reverse_pairs(nums)
    
end
```

### scala
```scala
object Solution {
    def reversePairs(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn reverse_pairs(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (reverse-pairs nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec reverse_pairs(Nums :: [integer()]) -> integer().
reverse_pairs(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec reverse_pairs(nums :: [integer]) :: integer
  def reverse_pairs(nums) do
    
  end
end
```
