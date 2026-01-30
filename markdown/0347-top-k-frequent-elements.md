# 347. Top K Frequent Elements

- Difficulty: Medium
- Topics: Array, Hash Table, Divide and Conquer, Sorting, Heap (Priority Queue), Bucket Sort, Counting, Quickselect
- Slug: top-k-frequent-elements
- Problem ID: 347

## Description
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
Example 1:
Example 2:
Constraints:
Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

## Examples
### Example 1
```text
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```

### Example 2
```text
Input: nums = [1], k = 1
Output: [1]
```


## Constraints
- 1 <= nums.length <= 105
- -104 <= nums[i] <= 104
- k is in the range [1, the number of unique elements in the array].
- It is guaranteed that the answer is unique.

## Hints
(none)

## Follow Ups
- Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* topKFrequent(int* nums, int numsSize, int k, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
};
```

### typescript
```typescript
function topKFrequent(nums: number[], k: number): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer[]
     */
    function topKFrequent($nums, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func topKFrequent(_ nums: [Int], _ k: Int) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun topKFrequent(nums: IntArray, k: Int): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> topKFrequent(List<int> nums, int k) {
    
  }
}
```

### golang
```golang
func topKFrequent(nums []int, k int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer[]}
def top_k_frequent(nums, k)
    
end
```

### scala
```scala
object Solution {
    def topKFrequent(nums: Array[Int], k: Int): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn top_k_frequent(nums: Vec<i32>, k: i32) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (top-k-frequent nums k)
  (-> (listof exact-integer?) exact-integer? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec top_k_frequent(Nums :: [integer()], K :: integer()) -> [integer()].
top_k_frequent(Nums, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec top_k_frequent(nums :: [integer], k :: integer) :: [integer]
  def top_k_frequent(nums, k) do
    
  end
end
```
