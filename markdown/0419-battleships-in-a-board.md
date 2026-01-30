# 419. Battleships in a Board

- Difficulty: Medium
- Topics: Array, Depth-First Search, Matrix
- Slug: battleships-in-a-board
- Problem ID: 419

## Description
Given an m x n matrix board where each cell is a battleship 'X' or empty '.', return the number of the battleships on board.
Battleships can only be placed horizontally or vertically on board. In other words, they can only be made of the shape 1 x k (1 row, k columns) or k x 1 (k rows, 1 column), where k can be of any size. At least one horizontal or vertical cell separates between two battleships (i.e., there are no adjacent battleships).
Example 1:
Example 2:
Constraints:
Follow up: Could you do it in one-pass, using only O(1) extra memory and without modifying the values board?

## Examples
### Example 1
```text
Input: board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]
Output: 2
```
Images:
- https://assets.leetcode.com/uploads/2024/06/21/image.png

### Example 2
```text
Input: board = [["."]]
Output: 0
```
Images:
- https://assets.leetcode.com/uploads/2024/06/21/image.png


## Constraints
- m == board.length
- n == board[i].length
- 1 <= m, n <= 200
- board[i][j] is either '.' or 'X'.

## Hints
(none)

## Follow Ups
- Could you do it in one-pass, using only O(1) extra memory and without modifying the values board?

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int countBattleships(vector<vector<char>>& board) {
        
    }
};
```

### java
```java
class Solution {
    public int countBattleships(char[][] board) {
        
    }
}
```

### python
```python
class Solution(object):
    def countBattleships(self, board):
        """
        :type board: List[List[str]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def countBattleships(self, board: List[List[str]]) -> int:
```

### c
```c
int countBattleships(char** board, int boardSize, int* boardColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int CountBattleships(char[][] board) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    
};
```

### typescript
```typescript
function countBattleships(board: string[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[][] $board
     * @return Integer
     */
    function countBattleships($board) {
        
    }
}
```

### swift
```swift
class Solution {
    func countBattleships(_ board: [[Character]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun countBattleships(board: Array<CharArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int countBattleships(List<List<String>> board) {
    
  }
}
```

### golang
```golang
func countBattleships(board [][]byte) int {
    
}
```

### ruby
```ruby
# @param {Character[][]} board
# @return {Integer}
def count_battleships(board)
    
end
```

### scala
```scala
object Solution {
    def countBattleships(board: Array[Array[Char]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn count_battleships(board: Vec<Vec<char>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (count-battleships board)
  (-> (listof (listof char?)) exact-integer?)
  )
```

### erlang
```erlang
-spec count_battleships(Board :: [[char()]]) -> integer().
count_battleships(Board) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec count_battleships(board :: [[char]]) :: integer
  def count_battleships(board) do
    
  end
end
```
