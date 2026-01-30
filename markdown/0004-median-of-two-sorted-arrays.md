# 4. Median of Two Sorted Arrays

- Difficulty: Hard
- Topics: Array, Binary Search, Divide and Conquer
- Slug: median-of-two-sorted-arrays
- Problem ID: 4

## Description
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
```

### Example 2
```text
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
```


## Constraints
- nums1.length == m
- nums2.length == n
- 0 <= m <= 1000
- 0 <= n <= 1000
- 1 <= m + n <= 2000
- -106 <= nums1[i], nums2[i] <= 106

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        
    }
};
```

### java
```java
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        
    }
}
```

### python
```python
class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
```

### python3
```python3
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
```

### c
```c
double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    
}
```

### csharp
```csharp
public class Solution {
    public double FindMedianSortedArrays(int[] nums1, int[] nums2) {
        
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
var findMedianSortedArrays = function(nums1, nums2) {
    
};
```

### typescript
```typescript
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @return Float
     */
    function findMedianSortedArrays($nums1, $nums2) {
        
    }
}
```

### swift
```swift
class Solution {
    func findMedianSortedArrays(_ nums1: [Int], _ nums2: [Int]) -> Double {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findMedianSortedArrays(nums1: IntArray, nums2: IntArray): Double {
        
    }
}
```

### dart
```dart
class Solution {
  double findMedianSortedArrays(List<int> nums1, List<int> nums2) {
    
  }
}
```

### golang
```golang
func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Float}
def find_median_sorted_arrays(nums1, nums2)
    
end
```

### scala
```scala
object Solution {
    def findMedianSortedArrays(nums1: Array[Int], nums2: Array[Int]): Double = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_median_sorted_arrays(nums1: Vec<i32>, nums2: Vec<i32>) -> f64 {
        
    }
}
```

### racket
```racket
(define/contract (find-median-sorted-arrays nums1 nums2)
  (-> (listof exact-integer?) (listof exact-integer?) flonum?)
  )
```

### erlang
```erlang
-spec find_median_sorted_arrays(Nums1 :: [integer()], Nums2 :: [integer()]) -> float().
find_median_sorted_arrays(Nums1, Nums2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_median_sorted_arrays(nums1 :: [integer], nums2 :: [integer]) :: float
  def find_median_sorted_arrays(nums1, nums2) do
    
  end
end
```
