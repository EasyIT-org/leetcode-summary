# 130. Surrounded Regions

- Difficulty: Medium
- Topics: Array, Depth-First Search, Breadth-First Search, Union Find, Matrix
- Slug: surrounded-regions
- Problem ID: 130

## Description
You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:
To capture a surrounded region, replace all 'O's with 'X's in-place within the original board. You do not need to return anything.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
Explanation:
In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.
```
Images:
- https://assets.leetcode.com/uploads/2021/02/19/xogrid.jpg

### Example 2
```text
Input: board = [["X"]]
Output: [["X"]]
```


## Constraints
- m == board.length
- n == board[i].length
- 1 <= m, n <= 200
- board[i][j] is 'X' or 'O'.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    void solve(vector<vector<char>>& board) {
        
    }
};
```

### java
```java
class Solution {
    public void solve(char[][] board) {
        
    }
}
```

### python
```python
class Solution(object):
    def solve(self, board):
        """
        :type board: List[List[str]]
        :rtype: None Do not return anything, modify board in-place instead.
        """
```

### python3
```python3
class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
```

### c
```c
void solve(char** board, int boardSize, int* boardColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public void Solve(char[][] board) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    
};
```

### typescript
```typescript
/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[][] $board
     * @return NULL
     */
    function solve(&$board) {
        
    }
}
```

### swift
```swift
class Solution {
    func solve(_ board: inout [[Character]]) {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun solve(board: Array<CharArray>): Unit {
        
    }
}
```

### dart
```dart
class Solution {
  void solve(List<List<String>> board) {
    
  }
}
```

### golang
```golang
func solve(board [][]byte)  {
    
}
```

### ruby
```ruby
# @param {Character[][]} board
# @return {Void} Do not return anything, modify board in-place instead.
def solve(board)
    
end
```

### scala
```scala
object Solution {
    def solve(board: Array[Array[Char]]): Unit = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn solve(board: &mut Vec<Vec<char>>) {
        
    }
}
```
