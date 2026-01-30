# 126. Word Ladder II

- Difficulty: Hard
- Topics: Hash Table, String, Backtracking, Breadth-First Search
- Slug: word-ladder-ii
- Problem ID: 126

## Description
A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:
Given two words, beginWord and endWord, and a dictionary wordList, return all the shortest transformation sequences from beginWord to endWord, or an empty list if no such sequence exists. Each sequence should be returned as a list of the words [beginWord, s1, s2, ..., sk].
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: [["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
Explanation: There are 2 shortest transformation sequences:
"hit" -> "hot" -> "dot" -> "dog" -> "cog"
"hit" -> "hot" -> "lot" -> "log" -> "cog"
```

### Example 2
```text
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: []
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
```


## Constraints
- 1 <= beginWord.length <= 5
- endWord.length == beginWord.length
- 1 <= wordList.length <= 500
- wordList[i].length == beginWord.length
- beginWord, endWord, and wordList[i] consist of lowercase English letters.
- beginWord != endWord
- All the words in wordList are unique.
- The sum of all shortest transformation sequences does not exceed 105.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<string>> findLadders(string beginWord, string endWord, vector<string>& wordList) {
        
    }
};
```

### java
```java
class Solution {
    public List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {
        
    }
}
```

### python
```python
class Solution(object):
    def findLadders(self, beginWord, endWord, wordList):
        """
        :type beginWord: str
        :type endWord: str
        :type wordList: List[str]
        :rtype: List[List[str]]
        """
```

### python3
```python3
class Solution:
    def findLadders(self, beginWord: str, endWord: str, wordList: List[str]) -> List[List[str]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
char*** findLadders(char* beginWord, char* endWord, char** wordList, int wordListSize, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<IList<string>> FindLadders(string beginWord, string endWord, IList<string> wordList) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    
};
```

### typescript
```typescript
function findLadders(beginWord: string, endWord: string, wordList: string[]): string[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $beginWord
     * @param String $endWord
     * @param String[] $wordList
     * @return String[][]
     */
    function findLadders($beginWord, $endWord, $wordList) {
        
    }
}
```

### swift
```swift
class Solution {
    func findLadders(_ beginWord: String, _ endWord: String, _ wordList: [String]) -> [[String]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findLadders(beginWord: String, endWord: String, wordList: List<String>): List<List<String>> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {
    
  }
}
```

### golang
```golang
func findLadders(beginWord string, endWord string, wordList []string) [][]string {
    
}
```

### ruby
```ruby
# @param {String} begin_word
# @param {String} end_word
# @param {String[]} word_list
# @return {String[][]}
def find_ladders(begin_word, end_word, word_list)
    
end
```

### scala
```scala
object Solution {
    def findLadders(beginWord: String, endWord: String, wordList: List[String]): List[List[String]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_ladders(begin_word: String, end_word: String, word_list: Vec<String>) -> Vec<Vec<String>> {
        
    }
}
```

### racket
```racket
(define/contract (find-ladders beginWord endWord wordList)
  (-> string? string? (listof string?) (listof (listof string?)))
  )
```

### erlang
```erlang
-spec find_ladders(BeginWord :: unicode:unicode_binary(), EndWord :: unicode:unicode_binary(), WordList :: [unicode:unicode_binary()]) -> [[unicode:unicode_binary()]].
find_ladders(BeginWord, EndWord, WordList) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_ladders(begin_word :: String.t, end_word :: String.t, word_list :: [String.t]) :: [[String.t]]
  def find_ladders(begin_word, end_word, word_list) do
    
  end
end
```
