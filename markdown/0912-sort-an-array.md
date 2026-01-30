# 912. Sort an Array

- Difficulty: Medium
- Topics: Array, Divide and Conquer, Sorting, Heap (Priority Queue), Merge Sort, Bucket Sort, Radix Sort, Counting Sort
- Slug: sort-an-array
- Problem ID: 948

## Description
Given an array of integers nums, sort the array in ascending order and return it.
You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
```

### Example 2
```text
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessarily unique.
```


## Constraints
- 1 <= nums.length <= 5 * 104
- -5 * 104 <= nums[i] <= 5 * 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> sortArray(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int[] sortArray(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def sortArray(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* sortArray(int* nums, int numsSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] SortArray(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    
};
```

### typescript
```typescript
function sortArray(nums: number[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function sortArray($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func sortArray(_ nums: [Int]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun sortArray(nums: IntArray): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> sortArray(List<int> nums) {
    
  }
}
```

### golang
```golang
func sortArray(nums []int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer[]}
def sort_array(nums)
    
end
```

### scala
```scala
object Solution {
    def sortArray(nums: Array[Int]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn sort_array(nums: Vec<i32>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (sort-array nums)
  (-> (listof exact-integer?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec sort_array(Nums :: [integer()]) -> [integer()].
sort_array(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec sort_array(nums :: [integer]) :: [integer]
  def sort_array(nums) do
    
  end
end
```
