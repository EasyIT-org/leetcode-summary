# 773. Sliding Puzzle

- Difficulty: Hard
- Topics: Array, Dynamic Programming, Backtracking, Breadth-First Search, Memoization, Matrix
- Slug: sliding-puzzle
- Problem ID: 787

## Description
On an 2 x 3 board, there are five tiles labeled from 1 to 5, and an empty square represented by 0. A move consists of choosing 0 and a 4-directionally adjacent number and swapping it.
The state of the board is solved if and only if the board is [[1,2,3],[4,5,0]].
Given the puzzle board board, return the least number of moves required so that the state of the board is solved. If it is impossible for the state of the board to be solved, return -1.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: board = [[1,2,3],[4,0,5]]
Output: 1
Explanation: Swap the 0 and the 5 in one move.
```
Images:
- https://assets.leetcode.com/uploads/2021/06/29/slide1-grid.jpg

### Example 2
```text
Input: board = [[1,2,3],[5,4,0]]
Output: -1
Explanation: No number of moves will make the board solved.
```
Images:
- https://assets.leetcode.com/uploads/2021/06/29/slide2-grid.jpg

### Example 3
```text
Input: board = [[4,1,2],[5,0,3]]
Output: 5
Explanation: 5 is the smallest number of moves that solves the board.
An example path:
After move 0: [[4,1,2],[5,0,3]]
After move 1: [[4,1,2],[0,5,3]]
After move 2: [[0,1,2],[4,5,3]]
After move 3: [[1,0,2],[4,5,3]]
After move 4: [[1,2,0],[4,5,3]]
After move 5: [[1,2,3],[4,5,0]]
```
Images:
- https://assets.leetcode.com/uploads/2021/06/29/slide3-grid.jpg


## Constraints
- board.length == 2
- board[i].length == 3
- 0 <= board[i][j] <= 5
- Each value board[i][j] is unique.

## Hints
- Perform a breadth-first-search, where the nodes are the puzzle boards and edges are if two puzzle boards can be transformed into one another with one move.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int slidingPuzzle(vector<vector<int>>& board) {
        
    }
};
```

### java
```java
class Solution {
    public int slidingPuzzle(int[][] board) {
        
    }
}
```

### python
```python
class Solution(object):
    def slidingPuzzle(self, board):
        """
        :type board: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def slidingPuzzle(self, board: List[List[int]]) -> int:
```

### c
```c
int slidingPuzzle(int** board, int boardSize, int* boardColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int SlidingPuzzle(int[][] board) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
    
};
```

### typescript
```typescript
function slidingPuzzle(board: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $board
     * @return Integer
     */
    function slidingPuzzle($board) {
        
    }
}
```

### swift
```swift
class Solution {
    func slidingPuzzle(_ board: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun slidingPuzzle(board: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int slidingPuzzle(List<List<int>> board) {
    
  }
}
```

### golang
```golang
func slidingPuzzle(board [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} board
# @return {Integer}
def sliding_puzzle(board)
    
end
```

### scala
```scala
object Solution {
    def slidingPuzzle(board: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn sliding_puzzle(board: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (sliding-puzzle board)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec sliding_puzzle(Board :: [[integer()]]) -> integer().
sliding_puzzle(Board) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec sliding_puzzle(board :: [[integer]]) :: integer
  def sliding_puzzle(board) do
    
  end
end
```
