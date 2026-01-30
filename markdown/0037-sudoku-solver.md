# 37. Sudoku Solver

- Difficulty: Hard
- Topics: Array, Hash Table, Backtracking, Matrix
- Slug: sudoku-solver
- Problem ID: 37

## Description
Write a program to solve a Sudoku puzzle by filling the empty cells.
A sudoku solution must satisfy all of the following rules:
The '.' character indicates empty cells.
Example 1:
Constraints:

## Examples
### Example 1
```text
Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
Explanation: The input board is shown above and the only valid solution is shown below:
```
Images:
- https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png


## Constraints
- board.length == 9
- board[i].length == 9
- board[i][j] is a digit or '.'.
- It is guaranteed that the input board has only one solution.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    void solveSudoku(vector<vector<char>>& board) {
        
    }
};
```

### java
```java
class Solution {
    public void solveSudoku(char[][] board) {
        
    }
}
```

### python
```python
class Solution(object):
    def solveSudoku(self, board):
        """
        :type board: List[List[str]]
        :rtype: None Do not return anything, modify board in-place instead.
        """
```

### python3
```python3
class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
```

### c
```c
void solveSudoku(char** board, int boardSize, int* boardColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public void SolveSudoku(char[][] board) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    
};
```

### typescript
```typescript
/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[][] $board
     * @return NULL
     */
    function solveSudoku(&$board) {
        
    }
}
```

### swift
```swift
class Solution {
    func solveSudoku(_ board: inout [[Character]]) {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun solveSudoku(board: Array<CharArray>): Unit {
        
    }
}
```

### dart
```dart
class Solution {
  void solveSudoku(List<List<String>> board) {
    
  }
}
```

### golang
```golang
func solveSudoku(board [][]byte)  {
    
}
```

### ruby
```ruby
# @param {Character[][]} board
# @return {Void} Do not return anything, modify board in-place instead.
def solve_sudoku(board)
    
end
```

### scala
```scala
object Solution {
    def solveSudoku(board: Array[Array[Char]]): Unit = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn solve_sudoku(board: &mut Vec<Vec<char>>) {
        
    }
}
```
