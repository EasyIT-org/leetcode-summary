# 321. Create Maximum Number

- Difficulty: Hard
- Topics: Array, Two Pointers, Stack, Greedy, Monotonic Stack
- Slug: create-maximum-number
- Problem ID: 321

## Description
You are given two integer arrays nums1 and nums2 of lengths m and n respectively. nums1 and nums2 represent the digits of two numbers. You are also given an integer k.
Create the maximum number of length k <= m + n from digits of the two numbers. The relative order of the digits from the same array must be preserved.
Return an array of the k digits representing the answer.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums1 = [3,4,6,5], nums2 = [9,1,2,5,8,3], k = 5
Output: [9,8,6,5,3]
```

### Example 2
```text
Input: nums1 = [6,7], nums2 = [6,0,4], k = 5
Output: [6,7,6,0,4]
```

### Example 3
```text
Input: nums1 = [3,9], nums2 = [8,9], k = 3
Output: [9,8,9]
```


## Constraints
- m == nums1.length
- n == nums2.length
- 1 <= m, n <= 500
- 0 <= nums1[i], nums2[i] <= 9
- 1 <= k <= m + n
- nums1 and nums2 do not have leading zeros.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> maxNumber(vector<int>& nums1, vector<int>& nums2, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int[] maxNumber(int[] nums1, int[] nums2, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxNumber(self, nums1, nums2, k):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :type k: int
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def maxNumber(self, nums1: List[int], nums2: List[int], k: int) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* maxNumber(int* nums1, int nums1Size, int* nums2, int nums2Size, int k, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] MaxNumber(int[] nums1, int[] nums2, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
    
};
```

### typescript
```typescript
function maxNumber(nums1: number[], nums2: number[], k: number): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @param Integer $k
     * @return Integer[]
     */
    function maxNumber($nums1, $nums2, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxNumber(_ nums1: [Int], _ nums2: [Int], _ k: Int) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxNumber(nums1: IntArray, nums2: IntArray, k: Int): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> maxNumber(List<int> nums1, List<int> nums2, int k) {
    
  }
}
```

### golang
```golang
func maxNumber(nums1 []int, nums2 []int, k int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @param {Integer} k
# @return {Integer[]}
def max_number(nums1, nums2, k)
    
end
```

### scala
```scala
object Solution {
    def maxNumber(nums1: Array[Int], nums2: Array[Int], k: Int): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_number(nums1: Vec<i32>, nums2: Vec<i32>, k: i32) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (max-number nums1 nums2 k)
  (-> (listof exact-integer?) (listof exact-integer?) exact-integer? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec max_number(Nums1 :: [integer()], Nums2 :: [integer()], K :: integer()) -> [integer()].
max_number(Nums1, Nums2, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_number(nums1 :: [integer], nums2 :: [integer], k :: integer) :: [integer]
  def max_number(nums1, nums2, k) do
    
  end
end
```
