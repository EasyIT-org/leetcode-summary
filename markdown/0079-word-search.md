# 79. Word Search

- Difficulty: Medium
- Topics: Array, String, Backtracking, Depth-First Search, Matrix
- Slug: word-search
- Problem ID: 79

## Description
Given an m x n grid of characters board and a string word, return true if word exists in the grid.
The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
Example 1:
Example 2:
Example 3:
Constraints:
Follow up: Could you use search pruning to make your solution faster with a larger board?

## Examples
### Example 1
```text
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
```
Images:
- https://assets.leetcode.com/uploads/2020/11/04/word2.jpg

### Example 2
```text
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
```
Images:
- https://assets.leetcode.com/uploads/2020/11/04/word-1.jpg

### Example 3
```text
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
```
Images:
- https://assets.leetcode.com/uploads/2020/10/15/word3.jpg


## Constraints
- m == board.length
- n = board[i].length
- 1 <= m, n <= 6
- 1 <= word.length <= 15
- board and word consists of only lowercase and uppercase English letters.

## Hints
(none)

## Follow Ups
- Could you use search pruning to make your solution faster with a larger board?

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool exist(vector<vector<char>>& board, string word) {
        
    }
};
```

### java
```java
class Solution {
    public boolean exist(char[][] board, String word) {
        
    }
}
```

### python
```python
class Solution(object):
    def exist(self, board, word):
        """
        :type board: List[List[str]]
        :type word: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
```

### c
```c
bool exist(char** board, int boardSize, int* boardColSize, char* word) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool Exist(char[][] board, string word) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
};
```

### typescript
```typescript
function exist(board: string[][], word: string): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[][] $board
     * @param String $word
     * @return Boolean
     */
    function exist($board, $word) {
        
    }
}
```

### swift
```swift
class Solution {
    func exist(_ board: [[Character]], _ word: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun exist(board: Array<CharArray>, word: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool exist(List<List<String>> board, String word) {
    
  }
}
```

### golang
```golang
func exist(board [][]byte, word string) bool {
    
}
```

### ruby
```ruby
# @param {Character[][]} board
# @param {String} word
# @return {Boolean}
def exist(board, word)
    
end
```

### scala
```scala
object Solution {
    def exist(board: Array[Array[Char]], word: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn exist(board: Vec<Vec<char>>, word: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (exist board word)
  (-> (listof (listof char?)) string? boolean?)
  )
```

### erlang
```erlang
-spec exist(Board :: [[char()]], Word :: unicode:unicode_binary()) -> boolean().
exist(Board, Word) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec exist(board :: [[char]], word :: String.t) :: boolean
  def exist(board, word) do
    
  end
end
```
