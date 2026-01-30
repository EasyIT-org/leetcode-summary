# 999. Available Captures for Rook

- Difficulty: Easy
- Topics: Array, Matrix, Simulation
- Slug: available-captures-for-rook
- Problem ID: 1041

## Description
You are given an 8 x 8 matrix representing a chessboard. There is exactly one white rook represented by 'R', some number of white bishops 'B', and some number of black pawns 'p'. Empty squares are represented by '.'.
A rook can move any number of squares horizontally or vertically (up, down, left, right) until it reaches another piece or the edge of the board. A rook is attacking a pawn if it can move to the pawn's square in one move.
Note: A rook cannot move through other pieces, such as bishops or pawns. This means a rook cannot attack a pawn if there is another piece blocking the path.
Return the number of pawns the white rook is attacking.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 3
Explanation:
In this example, the rook is attacking all the pawns.
```

### Example 2
```text
Input: board = [[".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 0
Explanation:
The bishops are blocking the rook from attacking any of the pawns.
```

### Example 3
```text
Input: board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 3
Explanation:
The rook is attacking the pawns at positions b5, d6, and f5.
```


## Constraints
- board.length == 8
- board[i].length == 8
- board[i][j] is either 'R', '.', 'B', or 'p'
- There is exactly one cell with board[i][j] == 'R'

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numRookCaptures(vector<vector<char>>& board) {
        
    }
};
```

### java
```java
class Solution {
    public int numRookCaptures(char[][] board) {
        
    }
}
```

### python
```python
class Solution(object):
    def numRookCaptures(self, board):
        """
        :type board: List[List[str]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numRookCaptures(self, board: List[List[str]]) -> int:
```

### c
```c
int numRookCaptures(char** board, int boardSize, int* boardColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumRookCaptures(char[][] board) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    
};
```

### typescript
```typescript
function numRookCaptures(board: string[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[][] $board
     * @return Integer
     */
    function numRookCaptures($board) {
        
    }
}
```

### swift
```swift
class Solution {
    func numRookCaptures(_ board: [[Character]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numRookCaptures(board: Array<CharArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numRookCaptures(List<List<String>> board) {
    
  }
}
```

### golang
```golang
func numRookCaptures(board [][]byte) int {
    
}
```

### ruby
```ruby
# @param {Character[][]} board
# @return {Integer}
def num_rook_captures(board)
    
end
```

### scala
```scala
object Solution {
    def numRookCaptures(board: Array[Array[Char]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_rook_captures(board: Vec<Vec<char>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-rook-captures board)
  (-> (listof (listof char?)) exact-integer?)
  )
```

### erlang
```erlang
-spec num_rook_captures(Board :: [[char()]]) -> integer().
num_rook_captures(Board) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_rook_captures(board :: [[char]]) :: integer
  def num_rook_captures(board) do
    
  end
end
```
