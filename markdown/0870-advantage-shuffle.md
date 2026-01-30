# 870. Advantage Shuffle

- Difficulty: Medium
- Topics: Array, Two Pointers, Greedy, Sorting
- Slug: advantage-shuffle
- Problem ID: 901

## Description
You are given two integer arrays nums1 and nums2 both of the same length. The advantage of nums1 with respect to nums2 is the number of indices i for which nums1[i] > nums2[i].
Return any permutation of nums1 that maximizes its advantage with respect to nums2.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums1 = [2,7,11,15], nums2 = [1,10,4,11]
Output: [2,11,7,15]
```

### Example 2
```text
Input: nums1 = [12,24,8,32], nums2 = [13,25,32,11]
Output: [24,32,8,12]
```


## Constraints
- 1 <= nums1.length <= 105
- nums2.length == nums1.length
- 0 <= nums1[i], nums2[i] <= 109

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> advantageCount(vector<int>& nums1, vector<int>& nums2) {
        
    }
};
```

### java
```java
class Solution {
    public int[] advantageCount(int[] nums1, int[] nums2) {
        
    }
}
```

### python
```python
class Solution(object):
    def advantageCount(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def advantageCount(self, nums1: List[int], nums2: List[int]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* advantageCount(int* nums1, int nums1Size, int* nums2, int nums2Size, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] AdvantageCount(int[] nums1, int[] nums2) {
        
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
var advantageCount = function(nums1, nums2) {
    
};
```

### typescript
```typescript
function advantageCount(nums1: number[], nums2: number[]): number[] {
    
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
    function advantageCount($nums1, $nums2) {
        
    }
}
```

### swift
```swift
class Solution {
    func advantageCount(_ nums1: [Int], _ nums2: [Int]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun advantageCount(nums1: IntArray, nums2: IntArray): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> advantageCount(List<int> nums1, List<int> nums2) {
    
  }
}
```

### golang
```golang
func advantageCount(nums1 []int, nums2 []int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Integer[]}
def advantage_count(nums1, nums2)
    
end
```

### scala
```scala
object Solution {
    def advantageCount(nums1: Array[Int], nums2: Array[Int]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn advantage_count(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (advantage-count nums1 nums2)
  (-> (listof exact-integer?) (listof exact-integer?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec advantage_count(Nums1 :: [integer()], Nums2 :: [integer()]) -> [integer()].
advantage_count(Nums1, Nums2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec advantage_count(nums1 :: [integer], nums2 :: [integer]) :: [integer]
  def advantage_count(nums1, nums2) do
    
  end
end
```
