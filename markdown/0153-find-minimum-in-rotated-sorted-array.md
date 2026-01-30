# 153. Find Minimum in Rotated Sorted Array

- Difficulty: Medium
- Topics: Array, Binary Search
- Slug: find-minimum-in-rotated-sorted-array
- Problem ID: 153

## Description
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
Given the sorted rotated array nums of unique elements, return the minimum element of this array.
You must write an algorithm that runs in O(log n) time.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
```

### Example 2
```text
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
```

### Example 3
```text
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times.
```


## Constraints
- n == nums.length
- 1 <= n <= 5000
- -5000 <= nums[i] <= 5000
- All the integers of nums are unique.
- nums is sorted and rotated between 1 and n times.

## Hints
- Array was originally in ascending order. Now that the array is rotated, there would be a point in the array where there is a small deflection from the increasing sequence. eg. The array would be something like [4, 5, 6, 7, 0, 1, 2].
- You can divide the search space into two and see which direction to go.
Can you think of an algorithm which has O(logN) search complexity?
- <ol>
<li>All the elements to the left of inflection point > first element of the array.</li>
<li>All the elements to the right of inflection point < first element of the array.</li>
<ol>

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findMin(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public int findMin(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def findMin(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findMin(self, nums: List[int]) -> int:
```

### c
```c
int findMin(int* nums, int numsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindMin(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
};
```

### typescript
```typescript
function findMin(nums: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findMin($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func findMin(_ nums: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findMin(nums: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findMin(List<int> nums) {
    
  }
}
```

### golang
```golang
func findMin(nums []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer}
def find_min(nums)
    
end
```

### scala
```scala
object Solution {
    def findMin(nums: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_min(nums: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-min nums)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec find_min(Nums :: [integer()]) -> integer().
find_min(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_min(nums :: [integer]) :: integer
  def find_min(nums) do
    
  end
end
```
