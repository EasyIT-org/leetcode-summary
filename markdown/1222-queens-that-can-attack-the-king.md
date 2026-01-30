# 1222. Queens That Can Attack the King

- Difficulty: Medium
- Topics: Array, Matrix, Simulation
- Slug: queens-that-can-attack-the-king
- Problem ID: 1342

## Description
On a 0-indexed 8 x 8 chessboard, there can be multiple black queens and one white king.
You are given a 2D integer array queens where queens[i] = [xQueeni, yQueeni] represents the position of the ith black queen on the chessboard. You are also given an integer array king of length 2 where king = [xKing, yKing] represents the position of the white king.
Return the coordinates of the black queens that can directly attack the king. You may return the answer in any order.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: queens = [[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]], king = [0,0]
Output: [[0,1],[1,0],[3,3]]
Explanation: The diagram above shows the three queens that can directly attack the king and the three queens that cannot attack the king (i.e., marked with red dashes).
```
Images:
- https://assets.leetcode.com/uploads/2022/12/21/chess1.jpg

### Example 2
```text
Input: queens = [[0,0],[1,1],[2,2],[3,4],[3,5],[4,4],[4,5]], king = [3,3]
Output: [[2,2],[3,4],[4,4]]
Explanation: The diagram above shows the three queens that can directly attack the king and the three queens that cannot attack the king (i.e., marked with red dashes).
```
Images:
- https://assets.leetcode.com/uploads/2022/12/21/chess2.jpg


## Constraints
- 1 <= queens.length < 64
- queens[i].length == king.length == 2
- 0 <= xQueeni, yQueeni, xKing, yKing < 8
- All the given positions are unique.

## Hints
- Check 8 directions around the King.
- Find the nearest queen in each direction.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> queensAttacktheKing(vector<vector<int>>& queens, vector<int>& king) {
        
    }
};
```

### java
```java
class Solution {
    public List<List<Integer>> queensAttacktheKing(int[][] queens, int[] king) {
        
    }
}
```

### python
```python
class Solution(object):
    def queensAttacktheKing(self, queens, king):
        """
        :type queens: List[List[int]]
        :type king: List[int]
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def queensAttacktheKing(self, queens: List[List[int]], king: List[int]) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** queensAttacktheKing(int** queens, int queensSize, int* queensColSize, int* king, int kingSize, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<IList<int>> QueensAttacktheKing(int[][] queens, int[] king) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
    
};
```

### typescript
```typescript
function queensAttacktheKing(queens: number[][], king: number[]): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $queens
     * @param Integer[] $king
     * @return Integer[][]
     */
    function queensAttacktheKing($queens, $king) {
        
    }
}
```

### swift
```swift
class Solution {
    func queensAttacktheKing(_ queens: [[Int]], _ king: [Int]) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun queensAttacktheKing(queens: Array<IntArray>, king: IntArray): List<List<Int>> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> queensAttacktheKing(List<List<int>> queens, List<int> king) {
    
  }
}
```

### golang
```golang
func queensAttacktheKing(queens [][]int, king []int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} queens
# @param {Integer[]} king
# @return {Integer[][]}
def queens_attackthe_king(queens, king)
    
end
```

### scala
```scala
object Solution {
    def queensAttacktheKing(queens: Array[Array[Int]], king: Array[Int]): List[List[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn queens_attackthe_king(queens: Vec<Vec<i32>>, king: Vec<i32>) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (queens-attackthe-king queens king)
  (-> (listof (listof exact-integer?)) (listof exact-integer?) (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec queens_attackthe_king(Queens :: [[integer()]], King :: [integer()]) -> [[integer()]].
queens_attackthe_king(Queens, King) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec queens_attackthe_king(queens :: [[integer]], king :: [integer]) :: [[integer]]
  def queens_attackthe_king(queens, king) do
    
  end
end
```
