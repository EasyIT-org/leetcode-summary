# 51. N-Queens

- Difficulty: Hard
- Topics: Array, Backtracking
- Slug: n-queens
- Problem ID: 51

## Description
The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
```
Images:
- https://assets.leetcode.com/uploads/2020/11/13/queens.jpg

### Example 2
```text
Input: n = 1
Output: [["Q"]]
```
Images:
- https://assets.leetcode.com/uploads/2020/11/13/queens.jpg


## Constraints
- 1 <= n <= 9

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<string>> solveNQueens(int n) {
        
    }
};
```

### java
```java
class Solution {
    public List<List<String>> solveNQueens(int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def solveNQueens(self, n):
        """
        :type n: int
        :rtype: List[List[str]]
        """
```

### python3
```python3
class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
char*** solveNQueens(int n, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<IList<string>> SolveNQueens(int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    
};
```

### typescript
```typescript
function solveNQueens(n: number): string[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @return String[][]
     */
    function solveNQueens($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func solveNQueens(_ n: Int) -> [[String]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun solveNQueens(n: Int): List<List<String>> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<String>> solveNQueens(int n) {
    
  }
}
```

### golang
```golang
func solveNQueens(n int) [][]string {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @return {String[][]}
def solve_n_queens(n)
    
end
```

### scala
```scala
object Solution {
    def solveNQueens(n: Int): List[List[String]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn solve_n_queens(n: i32) -> Vec<Vec<String>> {
        
    }
}
```

### racket
```racket
(define/contract (solve-n-queens n)
  (-> exact-integer? (listof (listof string?)))
  )
```

### erlang
```erlang
-spec solve_n_queens(N :: integer()) -> [[unicode:unicode_binary()]].
solve_n_queens(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec solve_n_queens(n :: integer) :: [[String.t]]
  def solve_n_queens(n) do
    
  end
end
```
