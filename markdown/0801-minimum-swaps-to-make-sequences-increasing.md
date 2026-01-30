# 801. Minimum Swaps To Make Sequences Increasing

- Difficulty: Hard
- Topics: Array, Dynamic Programming
- Slug: minimum-swaps-to-make-sequences-increasing
- Problem ID: 819

## Description
You are given two integer arrays of the same length nums1 and nums2. In one operation, you are allowed to swap nums1[i] with nums2[i].
Return the minimum number of needed operations to make nums1 and nums2 strictly increasing. The test cases are generated so that the given input always makes it possible.
An array arr is strictly increasing if and only if arr[0] < arr[1] < arr[2] < ... < arr[arr.length - 1].
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums1 = [1,3,5,4], nums2 = [1,2,3,7]
Output: 1
Explanation: 
Swap nums1[3] and nums2[3]. Then the sequences are:
nums1 = [1, 3, 5, 7] and nums2 = [1, 2, 3, 4]
which are both strictly increasing.
```

### Example 2
```text
Input: nums1 = [0,3,5,8,9], nums2 = [2,1,4,6,9]
Output: 1
```


## Constraints
- 2 <= nums1.length <= 105
- nums2.length == nums1.length
- 0 <= nums1[i], nums2[i] <= 2 * 105

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int minSwap(vector<int>& nums1, vector<int>& nums2) {
        
    }
};
```

### java
```java
class Solution {
    public int minSwap(int[] nums1, int[] nums2) {
        
    }
}
```

### python
```python
class Solution(object):
    def minSwap(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minSwap(self, nums1: List[int], nums2: List[int]) -> int:
```

### c
```c
int minSwap(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinSwap(int[] nums1, int[] nums2) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSwap = function(nums1, nums2) {
    
};
```

### typescript
```typescript
function minSwap(nums1: number[], nums2: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @return Integer
     */
    function minSwap($nums1, $nums2) {
        
    }
}
```

### swift
```swift
class Solution {
    func minSwap(_ nums1: [Int], _ nums2: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minSwap(nums1: IntArray, nums2: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minSwap(List<int> nums1, List<int> nums2) {
    
  }
}
```

### golang
```golang
func minSwap(nums1 []int, nums2 []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Integer}
def min_swap(nums1, nums2)
    
end
```

### scala
```scala
object Solution {
    def minSwap(nums1: Array[Int], nums2: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn min_swap(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (min-swap nums1 nums2)
  (-> (listof exact-integer?) (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec min_swap(Nums1 :: [integer()], Nums2 :: [integer()]) -> integer().
min_swap(Nums1, Nums2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec min_swap(nums1 :: [integer], nums2 :: [integer]) :: integer
  def min_swap(nums1, nums2) do
    
  end
end
```
