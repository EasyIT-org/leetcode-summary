# 909. Snakes and Ladders

- Difficulty: Medium
- Topics: Array, Breadth-First Search, Matrix
- Slug: snakes-and-ladders
- Problem ID: 945

## Description
You are given an n x n integer matrix board where the cells are labeled from 1 to n2 in a Boustrophedon style starting from the bottom left of the board (i.e. board[n - 1][0]) and alternating direction each row.
You start on square 1 of the board. In each move, starting from square curr, do the following:
A board square on row r and column c has a snake or ladder if board[r][c] != -1. The destination of that snake or ladder is board[r][c]. Squares 1 and n2 are not the starting points of any snake or ladder.
Note that you only take a snake or ladder at most once per dice roll. If the destination to a snake or ladder is the start of another snake or ladder, you do not follow the subsequent snake or ladder.
Return the least number of dice rolls required to reach the square n2. If it is not possible to reach the square, return -1.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]
Output: 4
Explanation: 
In the beginning, you start at square 1 (at row 5, column 0).
You decide to move to square 2 and must take the ladder to square 15.
You then decide to move to square 17 and must take the snake to square 13.
You then decide to move to square 14 and must take the ladder to square 35.
You then decide to move to square 36, ending the game.
This is the lowest possible number of moves to reach the last square, so return 4.
```
Images:
- https://assets.leetcode.com/uploads/2018/09/23/snakes.png

### Example 2
```text
Input: board = [[-1,-1],[-1,3]]
Output: 1
```
Images:
- https://assets.leetcode.com/uploads/2018/09/23/snakes.png


## Constraints
- n == board.length == board[i].length
- 2 <= n <= 20
- board[i][j] is either -1 or in the range [1, n2].
- The squares labeled 1 and n2 are not the starting points of any snake or ladder.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int snakesAndLadders(vector<vector<int>>& board) {
        
    }
};
```

### java
```java
class Solution {
    public int snakesAndLadders(int[][] board) {
        
    }
}
```

### python
```python
class Solution(object):
    def snakesAndLadders(self, board):
        """
        :type board: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def snakesAndLadders(self, board: List[List[int]]) -> int:
```

### c
```c
int snakesAndLadders(int** board, int boardSize, int* boardColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int SnakesAndLadders(int[][] board) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    
};
```

### typescript
```typescript
function snakesAndLadders(board: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $board
     * @return Integer
     */
    function snakesAndLadders($board) {
        
    }
}
```

### swift
```swift
class Solution {
    func snakesAndLadders(_ board: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun snakesAndLadders(board: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int snakesAndLadders(List<List<int>> board) {
    
  }
}
```

### golang
```golang
func snakesAndLadders(board [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} board
# @return {Integer}
def snakes_and_ladders(board)
    
end
```

### scala
```scala
object Solution {
    def snakesAndLadders(board: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn snakes_and_ladders(board: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (snakes-and-ladders board)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec snakes_and_ladders(Board :: [[integer()]]) -> integer().
snakes_and_ladders(Board) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec snakes_and_ladders(board :: [[integer]]) :: integer
  def snakes_and_ladders(board) do
    
  end
end
```
