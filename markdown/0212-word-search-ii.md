# 212. Word Search II

- Difficulty: Hard
- Topics: Array, String, Backtracking, Trie, Matrix
- Slug: word-search-ii
- Problem ID: 212

## Description
Given an m x n board of characters and a list of strings words, return all words on the board.
Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]
```
Images:
- https://assets.leetcode.com/uploads/2020/11/07/search1.jpg

### Example 2
```text
Input: board = [["a","b"],["c","d"]], words = ["abcb"]
Output: []
```
Images:
- https://assets.leetcode.com/uploads/2020/11/07/search2.jpg


## Constraints
- m == board.length
- n == board[i].length
- 1 <= m, n <= 12
- board[i][j] is a lowercase English letter.
- 1 <= words.length <= 3 * 104
- 1 <= words[i].length <= 10
- words[i] consists of lowercase English letters.
- All the strings of words are unique.

## Hints
- You would need to optimize your backtracking to pass the larger test. Could you stop backtracking earlier?
- If the current candidate does not exist in all words&#39; prefix, you could stop backtracking immediately. What kind of data structure could answer such query efficiently? Does a hash table work? Why or why not? How about a Trie? If you would like to learn how to implement a basic trie, please work on this problem: <a href="https://leetcode.com/problems/implement-trie-prefix-tree/">Implement Trie (Prefix Tree)</a> first.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
        
    }
};
```

### java
```java
class Solution {
    public List<String> findWords(char[][] board, String[] words) {
        
    }
}
```

### python
```python
class Solution(object):
    def findWords(self, board, words):
        """
        :type board: List[List[str]]
        :type words: List[str]
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** findWords(char** board, int boardSize, int* boardColSize, char** words, int wordsSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<string> FindWords(char[][] board, string[] words) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    
};
```

### typescript
```typescript
function findWords(board: string[][], words: string[]): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[][] $board
     * @param String[] $words
     * @return String[]
     */
    function findWords($board, $words) {
        
    }
}
```

### swift
```swift
class Solution {
    func findWords(_ board: [[Character]], _ words: [String]) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findWords(board: Array<CharArray>, words: Array<String>): List<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> findWords(List<List<String>> board, List<String> words) {
    
  }
}
```

### golang
```golang
func findWords(board [][]byte, words []string) []string {
    
}
```

### ruby
```ruby
# @param {Character[][]} board
# @param {String[]} words
# @return {String[]}
def find_words(board, words)
    
end
```

### scala
```scala
object Solution {
    def findWords(board: Array[Array[Char]], words: Array[String]): List[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_words(board: Vec<Vec<char>>, words: Vec<String>) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (find-words board words)
  (-> (listof (listof char?)) (listof string?) (listof string?))
  )
```

### erlang
```erlang
-spec find_words(Board :: [[char()]], Words :: [unicode:unicode_binary()]) -> [unicode:unicode_binary()].
find_words(Board, Words) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_words(board :: [[char]], words :: [String.t]) :: [String.t]
  def find_words(board, words) do
    
  end
end
```
