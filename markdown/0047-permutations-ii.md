# 47. Permutations II

- Difficulty: Medium
- Topics: Array, Backtracking, Sorting
- Slug: permutations-ii
- Problem ID: 47

## Description
Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
```

### Example 2
```text
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```


## Constraints
- 1 <= nums.length <= 8
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
    vector<vector<int>> permuteUnique(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public List<List<Integer>> permuteUnique(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def permuteUnique(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** permuteUnique(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<IList<int>> PermuteUnique(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    
};
```

### typescript
```typescript
function permuteUnique(nums: number[]): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[][]
     */
    function permuteUnique($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func permuteUnique(_ nums: [Int]) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun permuteUnique(nums: IntArray): List<List<Int>> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> permuteUnique(List<int> nums) {
    
  }
}
```

### golang
```golang
func permuteUnique(nums []int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer[][]}
def permute_unique(nums)
    
end
```

### scala
```scala
object Solution {
    def permuteUnique(nums: Array[Int]): List[List[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn permute_unique(nums: Vec<i32>) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (permute-unique nums)
  (-> (listof exact-integer?) (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec permute_unique(Nums :: [integer()]) -> [[integer()]].
permute_unique(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec permute_unique(nums :: [integer]) :: [[integer]]
  def permute_unique(nums) do
    
  end
end
```
