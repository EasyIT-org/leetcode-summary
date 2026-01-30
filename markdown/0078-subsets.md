# 78. Subsets

- Difficulty: Medium
- Topics: Array, Backtracking, Bit Manipulation
- Slug: subsets
- Problem ID: 78

## Description
Given an integer array nums of unique elements, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

### Example 2
```text
Input: nums = [0]
Output: [[],[0]]
```


## Constraints
- 1 <= nums.length <= 10
- -10 <= nums[i] <= 10
- All the numbers of nums are unique.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        
    }
};
```

### java
```java
class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        
    }
}
```

### python
```python
class Solution(object):
    def subsets(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** subsets(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<IList<int>> Subsets(int[] nums) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
};
```

### typescript
```typescript
function subsets(nums: number[]): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[][]
     */
    function subsets($nums) {
        
    }
}
```

### swift
```swift
class Solution {
    func subsets(_ nums: [Int]) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun subsets(nums: IntArray): List<List<Int>> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> subsets(List<int> nums) {
    
  }
}
```

### golang
```golang
func subsets(nums []int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer[]} nums
# @return {Integer[][]}
def subsets(nums)
    
end
```

### scala
```scala
object Solution {
    def subsets(nums: Array[Int]): List[List[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn subsets(nums: Vec<i32>) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (subsets nums)
  (-> (listof exact-integer?) (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec subsets(Nums :: [integer()]) -> [[integer()]].
subsets(Nums) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec subsets(nums :: [integer]) :: [[integer]]
  def subsets(nums) do
    
  end
end
```
