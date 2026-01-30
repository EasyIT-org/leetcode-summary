# 373. Find K Pairs with Smallest Sums

- Difficulty: Medium
- Topics: Array, Heap (Priority Queue)
- Slug: find-k-pairs-with-smallest-sums
- Problem ID: 373

## Description
You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k.
Define a pair (u, v) which consists of one element from the first array and one element from the second array.
Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
Output: [[1,2],[1,4],[1,6]]
Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
```

### Example 2
```text
Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
Output: [[1,1],[1,1]]
Explanation: The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
```


## Constraints
- 1 <= nums1.length, nums2.length <= 105
- -109 <= nums1[i], nums2[i] <= 109
- nums1 and nums2 both are sorted in non-decreasing order.
- 1 <= k <= 104
- k <= nums1.length * nums2.length

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> kSmallestPairs(vector<int>& nums1, vector<int>& nums2, int k) {
        
    }
};
```

### java
```java
class Solution {
    public List<List<Integer>> kSmallestPairs(int[] nums1, int[] nums2, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def kSmallestPairs(self, nums1, nums2, k):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :type k: int
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** kSmallestPairs(int* nums1, int nums1Size, int* nums2, int nums2Size, int k, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<IList<int>> KSmallestPairs(int[] nums1, int[] nums2, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    
};
```

### typescript
```typescript
function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @param Integer $k
     * @return Integer[][]
     */
    function kSmallestPairs($nums1, $nums2, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func kSmallestPairs(_ nums1: [Int], _ nums2: [Int], _ k: Int) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun kSmallestPairs(nums1: IntArray, nums2: IntArray, k: Int): List<List<Int>> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> kSmallestPairs(List<int> nums1, List<int> nums2, int k) {
    
  }
}
```

### golang
```golang
func kSmallestPairs(nums1 []int, nums2 []int, k int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @param {Integer} k
# @return {Integer[][]}
def k_smallest_pairs(nums1, nums2, k)
    
end
```

### scala
```scala
object Solution {
    def kSmallestPairs(nums1: Array[Int], nums2: Array[Int], k: Int): List[List[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn k_smallest_pairs(nums1: Vec<i32>, nums2: Vec<i32>, k: i32) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (k-smallest-pairs nums1 nums2 k)
  (-> (listof exact-integer?) (listof exact-integer?) exact-integer? (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec k_smallest_pairs(Nums1 :: [integer()], Nums2 :: [integer()], K :: integer()) -> [[integer()]].
k_smallest_pairs(Nums1, Nums2, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec k_smallest_pairs(nums1 :: [integer], nums2 :: [integer], k :: integer) :: [[integer]]
  def k_smallest_pairs(nums1, nums2, k) do
    
  end
end
```
