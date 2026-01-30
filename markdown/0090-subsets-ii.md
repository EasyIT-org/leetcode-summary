# 90. Subsets II

- Difficulty: Medium
- Topics: Array, Backtracking, Bit Manipulation
- Slug: subsets-ii
- Problem ID: 90

## Description
Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
```

### Example 2
```text
Input: nums = [0]
Output: [[],[0]]
```


## Constraints
- 1 <= nums.length <= 10
- -10 <= nums[i] <= 10

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> subsetsWithDup(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def subsetsWithDup(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** subsetsWithDup(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<IList<int>> SubsetsWithDup(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    
};
```

### typescript
```typescript
function subsetsWithDup(nums: number[]): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[][]
     */
    function subsetsWithDup($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func subsetsWithDup(_ nums: [Int]) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun subsetsWithDup(nums: IntArray): List<List<Int>> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> subsetsWithDup(List<int> nums) {
    
  }
}
```

### golang
```golang
func subsetsWithDup(nums []int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer[][]}
def subsets_with_dup(nums)
    
end
```

### scala
```scala
object Solution {
    def subsetsWithDup(nums: Array[Int]): List[List[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn subsets_with_dup(nums: Vec<i32>) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (subsets-with-dup nums)
  (-> (listof exact-integer?) (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec subsets_with_dup(Nums :: [integer()]) -> [[integer()]].
subsets_with_dup(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec subsets_with_dup(nums :: [integer]) :: [[integer]]
  def subsets_with_dup(nums) do
    
  end
end
```
