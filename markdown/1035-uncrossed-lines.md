# 1035. Uncrossed Lines

- Difficulty: Medium
- Topics: Array, Dynamic Programming
- Slug: uncrossed-lines
- Problem ID: 1105

## Description
You are given two integer arrays nums1 and nums2. We write the integers of nums1 and nums2 (in the order they are given) on two separate horizontal lines.
We may draw connecting lines: a straight line connecting two numbers nums1[i] and nums2[j] such that:
Note that a connecting line cannot intersect even at the endpoints (i.e., each number can only belong to one connecting line).
Return the maximum number of connecting lines we can draw in this way.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums1 = [1,4,2], nums2 = [1,2,4]
Output: 2
Explanation: We can draw 2 uncrossed lines as in the diagram.
We cannot draw 3 uncrossed lines, because the line from nums1[1] = 4 to nums2[2] = 4 will intersect the line from nums1[2]=2 to nums2[1]=2.
```
Images:
- https://assets.leetcode.com/uploads/2019/04/26/142.png

### Example 2
```text
Input: nums1 = [2,5,1,2,5], nums2 = [10,5,2,1,5,2]
Output: 3
```
Images:
- https://assets.leetcode.com/uploads/2019/04/26/142.png

### Example 3
```text
Input: nums1 = [1,3,7,1,7,5], nums2 = [1,9,2,5,1]
Output: 2
```
Images:
- https://assets.leetcode.com/uploads/2019/04/26/142.png


## Constraints
- 1 <= nums1.length, nums2.length <= 500
- 1 <= nums1[i], nums2[j] <= 2000

## Hints
- Think dynamic programming.  Given an oracle dp(i,j) that tells us how many lines A[i:], B[j:]  [the sequence A[i], A[i+1], ... and B[j], B[j+1], ...] are uncrossed, can we write this as a recursion?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxUncrossedLines(vector<int>& nums1, vector<int>& nums2) {
        
    }
};
```

### java
```java
class Solution {
    public int maxUncrossedLines(int[] nums1, int[] nums2) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxUncrossedLines(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxUncrossedLines(self, nums1: List[int], nums2: List[int]) -> int:
```

### c
```c
int maxUncrossedLines(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxUncrossedLines(int[] nums1, int[] nums2) {
        
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
var maxUncrossedLines = function(nums1, nums2) {
    
};
```

### typescript
```typescript
function maxUncrossedLines(nums1: number[], nums2: number[]): number {
    
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
    function maxUncrossedLines($nums1, $nums2) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxUncrossedLines(_ nums1: [Int], _ nums2: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxUncrossedLines(nums1: IntArray, nums2: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxUncrossedLines(List<int> nums1, List<int> nums2) {
    
  }
}
```

### golang
```golang
func maxUncrossedLines(nums1 []int, nums2 []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Integer}
def max_uncrossed_lines(nums1, nums2)
    
end
```

### scala
```scala
object Solution {
    def maxUncrossedLines(nums1: Array[Int], nums2: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_uncrossed_lines(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-uncrossed-lines nums1 nums2)
  (-> (listof exact-integer?) (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec max_uncrossed_lines(Nums1 :: [integer()], Nums2 :: [integer()]) -> integer().
max_uncrossed_lines(Nums1, Nums2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_uncrossed_lines(nums1 :: [integer], nums2 :: [integer]) :: integer
  def max_uncrossed_lines(nums1, nums2) do
    
  end
end
```
