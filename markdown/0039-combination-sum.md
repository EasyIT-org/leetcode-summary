# 39. Combination Sum

- Difficulty: Medium
- Topics: Array, Backtracking
- Slug: combination-sum
- Problem ID: 39

## Description
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.
The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
```

### Example 2
```text
Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
```

### Example 3
```text
Input: candidates = [2], target = 1
Output: []
```


## Constraints
- 1 <= candidates.length <= 30
- 2 <= candidates[i] <= 40
- All elements of candidates are distinct.
- 1 <= target <= 40

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        
    }
};
```

### java
```java
class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        
    }
}
```

### python
```python
class Solution(object):
    def combinationSum(self, candidates, target):
        """
        :type candidates: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** combinationSum(int* candidates, int candidatesSize, int target, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<IList<int>> CombinationSum(int[] candidates, int target) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    
};
```

### typescript
```typescript
function combinationSum(candidates: number[], target: number): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $candidates
     * @param Integer $target
     * @return Integer[][]
     */
    function combinationSum($candidates, $target) {
        
    }
}
```

### swift
```swift
class Solution {
    func combinationSum(_ candidates: [Int], _ target: Int) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun combinationSum(candidates: IntArray, target: Int): List<List<Int>> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> combinationSum(List<int> candidates, int target) {
    
  }
}
```

### golang
```golang
func combinationSum(candidates []int, target int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer[]} candidates
# @param {Integer} target
# @return {Integer[][]}
def combination_sum(candidates, target)
    
end
```

### scala
```scala
object Solution {
    def combinationSum(candidates: Array[Int], target: Int): List[List[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn combination_sum(candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (combination-sum candidates target)
  (-> (listof exact-integer?) exact-integer? (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec combination_sum(Candidates :: [integer()], Target :: integer()) -> [[integer()]].
combination_sum(Candidates, Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec combination_sum(candidates :: [integer], target :: integer) :: [[integer]]
  def combination_sum(candidates, target) do
    
  end
end
```
