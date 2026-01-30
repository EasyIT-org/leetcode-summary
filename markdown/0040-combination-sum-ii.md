# 40. Combination Sum II

- Difficulty: Medium
- Topics: Array, Backtracking
- Slug: combination-sum-ii
- Problem ID: 40

## Description
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
Each number in candidates may only be used once in the combination.
Note: The solution set must not contain duplicate combinations.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
```

### Example 2
```text
Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]
```


## Constraints
- 1 <= candidates.length <= 100
- 1 <= candidates[i] <= 50
- 1 <= target <= 30

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
        
    }
};
```

### java
```java
class Solution {
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        
    }
}
```

### python
```python
class Solution(object):
    def combinationSum2(self, candidates, target):
        """
        :type candidates: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** combinationSum2(int* candidates, int candidatesSize, int target, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<IList<int>> CombinationSum2(int[] candidates, int target) {
        
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
var combinationSum2 = function(candidates, target) {
    
};
```

### typescript
```typescript
function combinationSum2(candidates: number[], target: number): number[][] {
    
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
    function combinationSum2($candidates, $target) {
        
    }
}
```

### swift
```swift
class Solution {
    func combinationSum2(_ candidates: [Int], _ target: Int) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun combinationSum2(candidates: IntArray, target: Int): List<List<Int>> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> combinationSum2(List<int> candidates, int target) {
    
  }
}
```

### golang
```golang
func combinationSum2(candidates []int, target int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer[]} candidates
# @param {Integer} target
# @return {Integer[][]}
def combination_sum2(candidates, target)
    
end
```

### scala
```scala
object Solution {
    def combinationSum2(candidates: Array[Int], target: Int): List[List[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn combination_sum2(candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (combination-sum2 candidates target)
  (-> (listof exact-integer?) exact-integer? (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec combination_sum2(Candidates :: [integer()], Target :: integer()) -> [[integer()]].
combination_sum2(Candidates, Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec combination_sum2(candidates :: [integer], target :: integer) :: [[integer]]
  def combination_sum2(candidates, target) do
    
  end
end
```
