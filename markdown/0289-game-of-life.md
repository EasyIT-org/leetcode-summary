# 289. Game of Life

- Difficulty: Medium
- Topics: Array, Matrix, Simulation
- Slug: game-of-life
- Problem ID: 289

## Description
According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):
The next state of the board is determined by applying the above rules simultaneously to every cell in the current state of the m x n grid board. In this process, births and deaths occur simultaneously.
Given the current state of the board, update the board to reflect its next state.
Note that you do not need to return anything.
Example 1:
Example 2:
Constraints:
Follow up:

## Examples
### Example 1
```text
Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
```
Images:
- https://assets.leetcode.com/uploads/2020/12/26/grid1.jpg

### Example 2
```text
Input: board = [[1,1],[1,0]]
Output: [[1,1],[1,1]]
```
Images:
- https://assets.leetcode.com/uploads/2020/12/26/grid2.jpg


## Constraints
- m == board.length
- n == board[i].length
- 1 <= m, n <= 25
- board[i][j] is 0 or 1.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    void gameOfLife(vector<vector<int>>& board) {
        
    }
};
```

### java
```java
class Solution {
    public void gameOfLife(int[][] board) {
        
    }
}
```

### python
```python
class Solution(object):
    def gameOfLife(self, board):
        """
        :type board: List[List[int]]
        :rtype: None Do not return anything, modify board in-place instead.
        """
```

### python3
```python3
class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
```

### c
```c
void gameOfLife(int** board, int boardSize, int* boardColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public void GameOfLife(int[][] board) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    
};
```

### typescript
```typescript
/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $board
     * @return NULL
     */
    function gameOfLife(&$board) {
        
    }
}
```

### swift
```swift
class Solution {
    func gameOfLife(_ board: inout [[Int]]) {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun gameOfLife(board: Array<IntArray>): Unit {
        
    }
}
```

### dart
```dart
class Solution {
  void gameOfLife(List<List<int>> board) {
    
  }
}
```

### golang
```golang
func gameOfLife(board [][]int)  {
    
}
```

### ruby
```ruby
# @param {Integer[][]} board
# @return {Void} Do not return anything, modify board in-place instead.
def game_of_life(board)
    
end
```

### scala
```scala
object Solution {
    def gameOfLife(board: Array[Array[Int]]): Unit = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn game_of_life(board: &mut Vec<Vec<i32>>) {
        
    }
}
```
