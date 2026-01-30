# 216. Combination Sum III

- Difficulty: Medium
- Topics: Array, Backtracking
- Slug: combination-sum-iii
- Problem ID: 216

## Description
Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: k = 3, n = 7
Output: [[1,2,4]]
Explanation:
1 + 2 + 4 = 7
There are no other valid combinations.
```

### Example 2
```text
Input: k = 3, n = 9
Output: [[1,2,6],[1,3,5],[2,3,4]]
Explanation:
1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9
There are no other valid combinations.
```

### Example 3
```text
Input: k = 4, n = 1
Output: []
Explanation: There are no valid combinations.
Using 4 different numbers in the range [1,9], the smallest sum we can get is 1+2+3+4 = 10 and since 10 > 1, there are no valid combination.
```


## Constraints
- 2 <= k <= 9
- 1 <= n <= 60

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> combinationSum3(int k, int n) {
        
    }
};
```

### java
```java
class Solution {
    public List<List<Integer>> combinationSum3(int k, int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def combinationSum3(self, k, n):
        """
        :type k: int
        :type n: int
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** combinationSum3(int k, int n, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<IList<int>> CombinationSum3(int k, int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    
};
```

### typescript
```typescript
function combinationSum3(k: number, n: number): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $k
     * @param Integer $n
     * @return Integer[][]
     */
    function combinationSum3($k, $n) {
        
    }
}
```

### swift
```swift
class Solution {
    func combinationSum3(_ k: Int, _ n: Int) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun combinationSum3(k: Int, n: Int): List<List<Int>> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> combinationSum3(int k, int n) {
    
  }
}
```

### golang
```golang
func combinationSum3(k int, n int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer} k
# @param {Integer} n
# @return {Integer[][]}
def combination_sum3(k, n)
    
end
```

### scala
```scala
object Solution {
    def combinationSum3(k: Int, n: Int): List[List[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn combination_sum3(k: i32, n: i32) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (combination-sum3 k n)
  (-> exact-integer? exact-integer? (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec combination_sum3(K :: integer(), N :: integer()) -> [[integer()]].
combination_sum3(K, N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec combination_sum3(k :: integer, n :: integer) :: [[integer]]
  def combination_sum3(k, n) do
    
  end
end
```
