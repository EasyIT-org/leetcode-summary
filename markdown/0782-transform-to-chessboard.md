# 782. Transform to Chessboard

- Difficulty: Hard
- Topics: Array, Math, Bit Manipulation, Matrix
- Slug: transform-to-chessboard
- Problem ID: 798

## Description
You are given an n x n binary grid board. In each move, you can swap any two rows with each other, or any two columns with each other.
Return the minimum number of moves to transform the board into a chessboard board. If the task is impossible, return -1.
A chessboard board is a board where no 0's and no 1's are 4-directionally adjacent.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: board = [[0,1,1,0],[0,1,1,0],[1,0,0,1],[1,0,0,1]]
Output: 2
Explanation: One potential sequence of moves is shown.
The first move swaps the first and second column.
The second move swaps the second and third row.
```
Images:
- https://assets.leetcode.com/uploads/2021/06/29/chessboard1-grid.jpg

### Example 2
```text
Input: board = [[0,1],[1,0]]
Output: 0
Explanation: Also note that the board with 0 in the top left corner, is also a valid chessboard.
```
Images:
- https://assets.leetcode.com/uploads/2021/06/29/chessboard2-grid.jpg

### Example 3
```text
Input: board = [[1,0],[1,0]]
Output: -1
Explanation: No matter what sequence of moves you make, you cannot end with a valid chessboard.
```
Images:
- https://assets.leetcode.com/uploads/2021/06/29/chessboard3-grid.jpg


## Constraints
- n == board.length
- n == board[i].length
- 2 <= n <= 30
- board[i][j] is either 0 or 1.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int movesToChessboard(vector<vector<int>>& board) {
        
    }
};
```

### java
```java
class Solution {
    public int movesToChessboard(int[][] board) {
        
    }
}
```

### python
```python
class Solution(object):
    def movesToChessboard(self, board):
        """
        :type board: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def movesToChessboard(self, board: List[List[int]]) -> int:
```

### c
```c
int movesToChessboard(int** board, int boardSize, int* boardColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MovesToChessboard(int[][] board) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} board
 * @return {number}
 */
var movesToChessboard = function(board) {
    
};
```

### typescript
```typescript
function movesToChessboard(board: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $board
     * @return Integer
     */
    function movesToChessboard($board) {
        
    }
}
```

### swift
```swift
class Solution {
    func movesToChessboard(_ board: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun movesToChessboard(board: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int movesToChessboard(List<List<int>> board) {
    
  }
}
```

### golang
```golang
func movesToChessboard(board [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} board
# @return {Integer}
def moves_to_chessboard(board)
    
end
```

### scala
```scala
object Solution {
    def movesToChessboard(board: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn moves_to_chessboard(board: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (moves-to-chessboard board)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec moves_to_chessboard(Board :: [[integer()]]) -> integer().
moves_to_chessboard(Board) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec moves_to_chessboard(board :: [[integer]]) :: integer
  def moves_to_chessboard(board) do
    
  end
end
```
