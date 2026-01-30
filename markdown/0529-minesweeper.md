# 529. Minesweeper

- Difficulty: Medium
- Topics: Array, Depth-First Search, Breadth-First Search, Matrix
- Slug: minesweeper
- Problem ID: 529

## Description
Let's play the minesweeper game (Wikipedia, online game)!
You are given an m x n char matrix board representing the game board where:
You are also given an integer array click where click = [clickr, clickc] represents the next click position among all the unrevealed squares ('M' or 'E').
Return the board after revealing this position according to the following rules:
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: board = [["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]], click = [3,0]
Output: [["B","1","E","1","B"],["B","1","M","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]]
```
Images:
- https://assets.leetcode.com/uploads/2023/08/09/untitled.jpeg

### Example 2
```text
Input: board = [["B","1","E","1","B"],["B","1","M","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]], click = [1,2]
Output: [["B","1","E","1","B"],["B","1","X","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]]
```
Images:
- https://assets.leetcode.com/uploads/2023/08/09/untitled-2.jpeg


## Constraints
- m == board.length
- n == board[i].length
- 1 <= m, n <= 50
- board[i][j] is either 'M', 'E', 'B', or a digit from '1' to '8'.
- click.length == 2
- 0 <= clickr < m
- 0 <= clickc < n
- board[clickr][clickc] is either 'M' or 'E'.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<char>> updateBoard(vector<vector<char>>& board, vector<int>& click) {
        
    }
};
```

### java
```java
class Solution {
    public char[][] updateBoard(char[][] board, int[] click) {
        
    }
}
```

### python
```python
class Solution(object):
    def updateBoard(self, board, click):
        """
        :type board: List[List[str]]
        :type click: List[int]
        :rtype: List[List[str]]
        """
```

### python3
```python3
class Solution:
    def updateBoard(self, board: List[List[str]], click: List[int]) -> List[List[str]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
char** updateBoard(char** board, int boardSize, int* boardColSize, int* click, int clickSize, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public char[][] UpdateBoard(char[][] board, int[] click) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    
};
```

### typescript
```typescript
function updateBoard(board: string[][], click: number[]): string[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[][] $board
     * @param Integer[] $click
     * @return String[][]
     */
    function updateBoard($board, $click) {
        
    }
}
```

### swift
```swift
class Solution {
    func updateBoard(_ board: [[Character]], _ click: [Int]) -> [[Character]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun updateBoard(board: Array<CharArray>, click: IntArray): Array<CharArray> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<String>> updateBoard(List<List<String>> board, List<int> click) {
    
  }
}
```

### golang
```golang
func updateBoard(board [][]byte, click []int) [][]byte {
    
}
```

### ruby
```ruby
# @param {Character[][]} board
# @param {Integer[]} click
# @return {Character[][]}
def update_board(board, click)
    
end
```

### scala
```scala
object Solution {
    def updateBoard(board: Array[Array[Char]], click: Array[Int]): Array[Array[Char]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn update_board(board: Vec<Vec<char>>, click: Vec<i32>) -> Vec<Vec<char>> {
        
    }
}
```

### racket
```racket
(define/contract (update-board board click)
  (-> (listof (listof char?)) (listof exact-integer?) (listof (listof char?)))
  )
```

### erlang
```erlang
-spec update_board(Board :: [[char()]], Click :: [integer()]) -> [[char()]].
update_board(Board, Click) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec update_board(board :: [[char]], click :: [integer]) :: [[char]]
  def update_board(board, click) do
    
  end
end
```
