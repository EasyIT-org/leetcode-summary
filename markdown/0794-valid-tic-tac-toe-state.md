# 794. Valid Tic-Tac-Toe State

- Difficulty: Medium
- Topics: Array, Matrix
- Slug: valid-tic-tac-toe-state
- Problem ID: 810

## Description
Given a Tic-Tac-Toe board as a string array board, return true if and only if it is possible to reach this board position during the course of a valid tic-tac-toe game.
The board is a 3 x 3 array that consists of characters ' ', 'X', and 'O'. The ' ' character represents an empty square.
Here are the rules of Tic-Tac-Toe:
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: board = ["O  ","   ","   "]
Output: false
Explanation: The first player always plays "X".
```
Images:
- https://assets.leetcode.com/uploads/2021/05/15/tictactoe1-grid.jpg

### Example 2
```text
Input: board = ["XOX"," X ","   "]
Output: false
Explanation: Players take turns making moves.
```
Images:
- https://assets.leetcode.com/uploads/2021/05/15/tictactoe2-grid.jpg

### Example 3
```text
Input: board = ["XOX","O O","XOX"]
Output: true
```
Images:
- https://assets.leetcode.com/uploads/2021/05/15/tictactoe4-grid.jpg


## Constraints
- board.length == 3
- board[i].length == 3
- board[i][j] is either 'X', 'O', or ' '.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool validTicTacToe(vector<string>& board) {
        
    }
};
```

### java
```java
class Solution {
    public boolean validTicTacToe(String[] board) {
        
    }
}
```

### python
```python
class Solution(object):
    def validTicTacToe(self, board):
        """
        :type board: List[str]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def validTicTacToe(self, board: List[str]) -> bool:
```

### c
```c
bool validTicTacToe(char** board, int boardSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool ValidTicTacToe(string[] board) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function(board) {
    
};
```

### typescript
```typescript
function validTicTacToe(board: string[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $board
     * @return Boolean
     */
    function validTicTacToe($board) {
        
    }
}
```

### swift
```swift
class Solution {
    func validTicTacToe(_ board: [String]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun validTicTacToe(board: Array<String>): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool validTicTacToe(List<String> board) {
    
  }
}
```

### golang
```golang
func validTicTacToe(board []string) bool {
    
}
```

### ruby
```ruby
# @param {String[]} board
# @return {Boolean}
def valid_tic_tac_toe(board)
    
end
```

### scala
```scala
object Solution {
    def validTicTacToe(board: Array[String]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn valid_tic_tac_toe(board: Vec<String>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (valid-tic-tac-toe board)
  (-> (listof string?) boolean?)
  )
```

### erlang
```erlang
-spec valid_tic_tac_toe(Board :: [unicode:unicode_binary()]) -> boolean().
valid_tic_tac_toe(Board) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec valid_tic_tac_toe(board :: [String.t]) :: boolean
  def valid_tic_tac_toe(board) do
    
  end
end
```
