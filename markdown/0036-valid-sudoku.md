# 36. Valid Sudoku

- Difficulty: Medium
- Topics: Array, Hash Table, Matrix
- Slug: valid-sudoku
- Problem ID: 36

## Description
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
Note:
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
```
Images:
- https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png

### Example 2
```text
Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
```
Images:
- https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png


## Constraints
- board.length == 9
- board[i].length == 9
- board[i][j] is a digit 1-9 or '.'.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isValidSudoku(char[][] board) {
        
    }
}
```

### python
```python
class Solution(object):
    def isValidSudoku(self, board):
        """
        :type board: List[List[str]]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
```

### c
```c
bool isValidSudoku(char** board, int boardSize, int* boardColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsValidSudoku(char[][] board) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
};
```

### typescript
```typescript
function isValidSudoku(board: string[][]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[][] $board
     * @return Boolean
     */
    function isValidSudoku($board) {
        
    }
}
```

### swift
```swift
class Solution {
    func isValidSudoku(_ board: [[Character]]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isValidSudoku(board: Array<CharArray>): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isValidSudoku(List<List<String>> board) {
    
  }
}
```

### golang
```golang
func isValidSudoku(board [][]byte) bool {
    
}
```

### ruby
```ruby
# @param {Character[][]} board
# @return {Boolean}
def is_valid_sudoku(board)
    
end
```

### scala
```scala
object Solution {
    def isValidSudoku(board: Array[Array[Char]]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_valid_sudoku(board: Vec<Vec<char>>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-valid-sudoku board)
  (-> (listof (listof char?)) boolean?)
  )
```

### erlang
```erlang
-spec is_valid_sudoku(Board :: [[char()]]) -> boolean().
is_valid_sudoku(Board) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_valid_sudoku(board :: [[char]]) :: boolean
  def is_valid_sudoku(board) do
    
  end
end
```
