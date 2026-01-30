# 922. Sort Array By Parity II

- Difficulty: Easy
- Topics: Array, Two Pointers, Sorting
- Slug: sort-array-by-parity-ii
- Problem ID: 958

## Description
Given an array of integers nums, half of the integers in nums are odd, and the other half are even.
Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.
Return any answer array that satisfies this condition.
Example 1:
Example 2:
Constraints:
Follow Up: Could you solve it in-place?

## Examples
### Example 1
```text
Input: nums = [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
```

### Example 2
```text
Input: nums = [2,3]
Output: [2,3]
```


## Constraints
- 2 <= nums.length <= 2 * 104
- nums.length is even.
- Half of the integers in nums are even.
- 0 <= nums[i] <= 1000

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> sortArrayByParityII(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int[] sortArrayByParityII(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def sortArrayByParityII(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def sortArrayByParityII(self, nums: List[int]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* sortArrayByParityII(int* nums, int numsSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] SortArrayByParityII(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    
};
```

### typescript
```typescript
function sortArrayByParityII(nums: number[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function sortArrayByParityII($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func sortArrayByParityII(_ nums: [Int]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun sortArrayByParityII(nums: IntArray): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> sortArrayByParityII(List<int> nums) {
    
  }
}
```

### golang
```golang
func sortArrayByParityII(nums []int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer[]}
def sort_array_by_parity_ii(nums)
    
end
```

### scala
```scala
object Solution {
    def sortArrayByParityII(nums: Array[Int]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn sort_array_by_parity_ii(nums: Vec<i32>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (sort-array-by-parity-ii nums)
  (-> (listof exact-integer?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec sort_array_by_parity_ii(Nums :: [integer()]) -> [integer()].
sort_array_by_parity_ii(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec sort_array_by_parity_ii(nums :: [integer]) :: [integer]
  def sort_array_by_parity_ii(nums) do
    
  end
end
```
