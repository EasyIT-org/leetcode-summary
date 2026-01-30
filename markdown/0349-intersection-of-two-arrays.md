# 349. Intersection of Two Arrays

- Difficulty: Easy
- Topics: Array, Hash Table, Two Pointers, Binary Search, Sorting
- Slug: intersection-of-two-arrays
- Problem ID: 349

## Description
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
```

### Example 2
```text
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
```


## Constraints
- 1 <= nums1.length, nums2.length <= 1000
- 0 <= nums1[i], nums2[i] <= 1000

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        
    }
};
```

### java
```java
class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        
    }
}
```

### python
```python
class Solution(object):
    def intersection(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* intersection(int* nums1, int nums1Size, int* nums2, int nums2Size, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] Intersection(int[] nums1, int[] nums2) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
};
```

### typescript
```typescript
function intersection(nums1: number[], nums2: number[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @return Integer[]
     */
    function intersection($nums1, $nums2) {
        
    }
}
```

### swift
```swift
class Solution {
    func intersection(_ nums1: [Int], _ nums2: [Int]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun intersection(nums1: IntArray, nums2: IntArray): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> intersection(List<int> nums1, List<int> nums2) {
    
  }
}
```

### golang
```golang
func intersection(nums1 []int, nums2 []int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Integer[]}
def intersection(nums1, nums2)
    
end
```

### scala
```scala
object Solution {
    def intersection(nums1: Array[Int], nums2: Array[Int]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn intersection(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (intersection nums1 nums2)
  (-> (listof exact-integer?) (listof exact-integer?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec intersection(Nums1 :: [integer()], Nums2 :: [integer()]) -> [integer()].
intersection(Nums1, Nums2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec intersection(nums1 :: [integer], nums2 :: [integer]) :: [integer]
  def intersection(nums1, nums2) do
    
  end
end
```
