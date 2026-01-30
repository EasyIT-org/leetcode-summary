# 46. Permutations

- Difficulty: Medium
- Topics: Array, Backtracking
- Slug: permutations
- Problem ID: 46

## Description
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

### Example 2
```text
Input: nums = [0,1]
Output: [[0,1],[1,0]]
```

### Example 3
```text
Input: nums = [1]
Output: [[1]]
```


## Constraints
- 1 <= nums.length <= 6
- -10 <= nums[i] <= 10
- All the integers of nums are unique.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> permute(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public List<List<Integer>> permute(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def permute(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** permute(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<IList<int>> Permute(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
};
```

### typescript
```typescript
function permute(nums: number[]): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[][]
     */
    function permute($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func permute(_ nums: [Int]) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun permute(nums: IntArray): List<List<Int>> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> permute(List<int> nums) {
    
  }
}
```

### golang
```golang
func permute(nums []int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer[][]}
def permute(nums)
    
end
```

### scala
```scala
object Solution {
    def permute(nums: Array[Int]): List[List[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn permute(nums: Vec<i32>) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (permute nums)
  (-> (listof exact-integer?) (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec permute(Nums :: [integer()]) -> [[integer()]].
permute(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec permute(nums :: [integer]) :: [[integer]]
  def permute(nums) do
    
  end
end
```
