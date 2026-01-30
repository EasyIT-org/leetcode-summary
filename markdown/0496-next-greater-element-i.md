# 496. Next Greater Element I

- Difficulty: Easy
- Topics: Array, Hash Table, Stack, Monotonic Stack
- Slug: next-greater-element-i
- Problem ID: 496

## Description
The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.
Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
```

### Example 2
```text
Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.
```


## Constraints
- 1 <= nums1.length <= nums2.length <= 1000
- 0 <= nums1[i], nums2[i] <= 104
- All integers in nums1 and nums2 are unique.
- All the integers of nums1 also appear in nums2.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {
        
    }
};
```

### java
```java
class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        
    }
}
```

### python
```python
class Solution(object):
    def nextGreaterElement(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* nextGreaterElement(int* nums1, int nums1Size, int* nums2, int nums2Size, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] NextGreaterElement(int[] nums1, int[] nums2) {
        
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
var nextGreaterElement = function(nums1, nums2) {
    
};
```

### typescript
```typescript
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    
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
    function nextGreaterElement($nums1, $nums2) {
        
    }
}
```

### swift
```swift
class Solution {
    func nextGreaterElement(_ nums1: [Int], _ nums2: [Int]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun nextGreaterElement(nums1: IntArray, nums2: IntArray): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> nextGreaterElement(List<int> nums1, List<int> nums2) {
    
  }
}
```

### golang
```golang
func nextGreaterElement(nums1 []int, nums2 []int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Integer[]}
def next_greater_element(nums1, nums2)
    
end
```

### scala
```scala
object Solution {
    def nextGreaterElement(nums1: Array[Int], nums2: Array[Int]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn next_greater_element(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (next-greater-element nums1 nums2)
  (-> (listof exact-integer?) (listof exact-integer?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec next_greater_element(Nums1 :: [integer()], Nums2 :: [integer()]) -> [integer()].
next_greater_element(Nums1, Nums2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec next_greater_element(nums1 :: [integer], nums2 :: [integer]) :: [integer]
  def next_greater_element(nums1, nums2) do
    
  end
end
```
