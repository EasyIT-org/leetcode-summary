# 154. Find Minimum in Rotated Sorted Array II

- Difficulty: Hard
- Topics: Array, Binary Search
- Slug: find-minimum-in-rotated-sorted-array-ii
- Problem ID: 154

## Description
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,4,4,5,6,7] might become:
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
Given the sorted rotated array nums that may contain duplicates, return the minimum element of this array.
You must decrease the overall operation steps as much as possible.
Example 1:
Example 2:
Constraints:
Follow up: This problem is similar to Find Minimum in Rotated Sorted Array, but nums may contain duplicates. Would this affect the runtime complexity? How and why?

## Examples
### Example 1
```text
Input: nums = [1,3,5]
Output: 1
```

### Example 2
```text
Input: nums = [2,2,2,0,1]
Output: 0
```


## Constraints
- n == nums.length
- 1 <= n <= 5000
- -5000 <= nums[i] <= 5000
- nums is sorted and rotated between 1 and n times.

## Hints
(none)

## Follow Ups
- This problem is similar to Find Minimum in Rotated Sorted Array, but nums may contain duplicates. Would this affect the runtime complexity? How and why?

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
