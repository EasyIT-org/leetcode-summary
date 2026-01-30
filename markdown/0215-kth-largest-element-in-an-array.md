# 215. Kth Largest Element in an Array

- Difficulty: Medium
- Topics: Array, Divide and Conquer, Sorting, Heap (Priority Queue), Quickselect
- Slug: kth-largest-element-in-an-array
- Problem ID: 215

## Description
Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.
Can you solve it without sorting?
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
```

### Example 2
```text
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
```


## Constraints
- 1 <= k <= nums.length <= 105
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
    int findKthLargest(vector<int>& nums, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int findKthLargest(int[] nums, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def findKthLargest(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
```

### c
```c
int findKthLargest(int* nums, int numsSize, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindKthLargest(int[] nums, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    
};
```

### typescript
```typescript
function findKthLargest(nums: number[], k: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function findKthLargest($nums, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func findKthLargest(_ nums: [Int], _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findKthLargest(nums: IntArray, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findKthLargest(List<int> nums, int k) {
    
  }
}
```

### golang
```golang
func findKthLargest(nums []int, k int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def find_kth_largest(nums, k)
    
end
```

### scala
```scala
object Solution {
    def findKthLargest(nums: Array[Int], k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_kth_largest(nums: Vec<i32>, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-kth-largest nums k)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec find_kth_largest(Nums :: [integer()], K :: integer()) -> integer().
find_kth_largest(Nums, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_kth_largest(nums :: [integer], k :: integer) :: integer
  def find_kth_largest(nums, k) do
    
  end
end
```
