# 491. Non-decreasing Subsequences

- Difficulty: Medium
- Topics: Array, Hash Table, Backtracking, Bit Manipulation
- Slug: non-decreasing-subsequences
- Problem ID: 491

## Description
Given an integer array nums, return all the different possible non-decreasing subsequences of the given array with at least two elements. You may return the answer in any order.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [4,6,7,7]
Output: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
```

### Example 2
```text
Input: nums = [4,4,3,2,1]
Output: [[4,4]]
```


## Constraints
- 1 <= nums.length <= 15
- -100 <= nums[i] <= 100

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> findSubsequences(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public List<List<Integer>> findSubsequences(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def findSubsequences(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def findSubsequences(self, nums: List[int]) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** findSubsequences(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<IList<int>> FindSubsequences(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    
};
```

### typescript
```typescript
function findSubsequences(nums: number[]): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[][]
     */
    function findSubsequences($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func findSubsequences(_ nums: [Int]) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findSubsequences(nums: IntArray): List<List<Int>> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> findSubsequences(List<int> nums) {
    
  }
}
```

### golang
```golang
func findSubsequences(nums []int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer[][]}
def find_subsequences(nums)
    
end
```

### scala
```scala
object Solution {
    def findSubsequences(nums: Array[Int]): List[List[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_subsequences(nums: Vec<i32>) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (find-subsequences nums)
  (-> (listof exact-integer?) (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec find_subsequences(Nums :: [integer()]) -> [[integer()]].
find_subsequences(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_subsequences(nums :: [integer]) :: [[integer]]
  def find_subsequences(nums) do
    
  end
end
```
