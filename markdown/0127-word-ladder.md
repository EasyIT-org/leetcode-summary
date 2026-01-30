# 127. Word Ladder

- Difficulty: Hard
- Topics: Hash Table, String, Breadth-First Search
- Slug: word-ladder
- Problem ID: 127

## Description
A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
```

### Example 2
```text
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
```


## Constraints
- 1 <= beginWord.length <= 10
- endWord.length == beginWord.length
- 1 <= wordList.length <= 5000
- wordList[i].length == beginWord.length
- beginWord, endWord, and wordList[i] consist of lowercase English letters.
- beginWord != endWord
- All the words in wordList are unique.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
        
    }
};
```

### java
```java
class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        
    }
}
```

### python
```python
class Solution(object):
    def ladderLength(self, beginWord, endWord, wordList):
        """
        :type beginWord: str
        :type endWord: str
        :type wordList: List[str]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
```

### c
```c
int ladderLength(char* beginWord, char* endWord, char** wordList, int wordListSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int LadderLength(string beginWord, string endWord, IList<string> wordList) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    
};
```

### typescript
```typescript
function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $beginWord
     * @param String $endWord
     * @param String[] $wordList
     * @return Integer
     */
    function ladderLength($beginWord, $endWord, $wordList) {
        
    }
}
```

### swift
```swift
class Solution {
    func ladderLength(_ beginWord: String, _ endWord: String, _ wordList: [String]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun ladderLength(beginWord: String, endWord: String, wordList: List<String>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int ladderLength(String beginWord, String endWord, List<String> wordList) {
    
  }
}
```

### golang
```golang
func ladderLength(beginWord string, endWord string, wordList []string) int {
    
}
```

### ruby
```ruby
# @param {String} begin_word
# @param {String} end_word
# @param {String[]} word_list
# @return {Integer}
def ladder_length(begin_word, end_word, word_list)
    
end
```

### scala
```scala
object Solution {
    def ladderLength(beginWord: String, endWord: String, wordList: List[String]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn ladder_length(begin_word: String, end_word: String, word_list: Vec<String>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (ladder-length beginWord endWord wordList)
  (-> string? string? (listof string?) exact-integer?)
  )
```

### erlang
```erlang
-spec ladder_length(BeginWord :: unicode:unicode_binary(), EndWord :: unicode:unicode_binary(), WordList :: [unicode:unicode_binary()]) -> integer().
ladder_length(BeginWord, EndWord, WordList) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec ladder_length(begin_word :: String.t, end_word :: String.t, word_list :: [String.t]) :: integer
  def ladder_length(begin_word, end_word, word_list) do
    
  end
end
```
