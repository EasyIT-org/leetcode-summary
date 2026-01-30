# 532. K-diff Pairs in an Array

- Difficulty: Medium
- Topics: Array, Hash Table, Two Pointers, Binary Search, Sorting
- Slug: k-diff-pairs-in-an-array
- Problem ID: 532

## Description
Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.
A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:
Notice that |val| denotes the absolute value of val.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [3,1,4,1,5], k = 2
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.
```

### Example 2
```text
Input: nums = [1,2,3,4,5], k = 1
Output: 4
Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
```

### Example 3
```text
Input: nums = [1,3,1,5,4], k = 0
Output: 1
Explanation: There is one 0-diff pair in the array, (1, 1).
```


## Constraints
- 1 <= nums.length <= 104
- -107 <= nums[i] <= 107
- 0 <= k <= 107

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findPairs(vector<int>& nums, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int findPairs(int[] nums, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def findPairs(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findPairs(self, nums: List[int], k: int) -> int:
```

### c
```c
int findPairs(int* nums, int numsSize, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindPairs(int[] nums, int k) {
        
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
var findPairs = function(nums, k) {
    
};
```

### typescript
```typescript
function findPairs(nums: number[], k: number): number {
    
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
    function findPairs($nums, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func findPairs(_ nums: [Int], _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findPairs(nums: IntArray, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findPairs(List<int> nums, int k) {
    
  }
}
```

### golang
```golang
func findPairs(nums []int, k int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def find_pairs(nums, k)
    
end
```

### scala
```scala
object Solution {
    def findPairs(nums: Array[Int], k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_pairs(nums: Vec<i32>, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-pairs nums k)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec find_pairs(Nums :: [integer()], K :: integer()) -> integer().
find_pairs(Nums, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_pairs(nums :: [integer], k :: integer) :: integer
  def find_pairs(nums, k) do
    
  end
end
```
