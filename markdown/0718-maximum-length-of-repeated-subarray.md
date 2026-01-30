# 718. Maximum Length of Repeated Subarray

- Difficulty: Medium
- Topics: Array, Binary Search, Dynamic Programming, Sliding Window, Rolling Hash, Hash Function
- Slug: maximum-length-of-repeated-subarray
- Problem ID: 718

## Description
Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
Output: 3
Explanation: The repeated subarray with maximum length is [3,2,1].
```

### Example 2
```text
Input: nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
Output: 5
Explanation: The repeated subarray with maximum length is [0,0,0,0,0].
```


## Constraints
- 1 <= nums1.length, nums2.length <= 1000
- 0 <= nums1[i], nums2[i] <= 100

## Hints
- Use dynamic programming.  dp[i][j] will be the longest common prefix of A[i:] and B[j:].
- The answer is max(dp[i][j]) over all i, j.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findLength(vector<int>& nums1, vector<int>& nums2) {
        
    }
};
```

### java
```java
class Solution {
    public int findLength(int[] nums1, int[] nums2) {
        
    }
}
```

### python
```python
class Solution(object):
    def findLength(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findLength(self, nums1: List[int], nums2: List[int]) -> int:
```

### c
```c
int findLength(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindLength(int[] nums1, int[] nums2) {
        
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
var findLength = function(nums1, nums2) {
    
};
```

### typescript
```typescript
function findLength(nums1: number[], nums2: number[]): number {
    
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
    function findLength($nums1, $nums2) {
        
    }
}
```

### swift
```swift
class Solution {
    func findLength(_ nums1: [Int], _ nums2: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findLength(nums1: IntArray, nums2: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findLength(List<int> nums1, List<int> nums2) {
    
  }
}
```

### golang
```golang
func findLength(nums1 []int, nums2 []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Integer}
def find_length(nums1, nums2)
    
end
```

### scala
```scala
object Solution {
    def findLength(nums1: Array[Int], nums2: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_length(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-length nums1 nums2)
  (-> (listof exact-integer?) (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec find_length(Nums1 :: [integer()], Nums2 :: [integer()]) -> integer().
find_length(Nums1, Nums2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_length(nums1 :: [integer], nums2 :: [integer]) :: integer
  def find_length(nums1, nums2) do
    
  end
end
```
