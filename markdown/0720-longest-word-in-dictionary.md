# 720. Longest Word in Dictionary

- Difficulty: Medium
- Topics: Array, Hash Table, String, Trie, Sorting
- Slug: longest-word-in-dictionary
- Problem ID: 720

## Description
Given an array of strings words representing an English Dictionary, return the longest word in words that can be built one character at a time by other words in words.
If there is more than one possible answer, return the longest word with the smallest lexicographical order. If there is no answer, return the empty string.
Note that the word should be built from left to right with each additional character being added to the end of a previous word.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: words = ["w","wo","wor","worl","world"]
Output: "world"
Explanation: The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
```

### Example 2
```text
Input: words = ["a","banana","app","appl","ap","apply","apple"]
Output: "apple"
Explanation: Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".
```


## Constraints
- 1 <= words.length <= 1000
- 1 <= words[i].length <= 30
- words[i] consists of lowercase English letters.

## Hints
- For every word in the input list, we can check whether all prefixes of that word are in the input list by using a Set.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string longestWord(vector<string>& words) {
        
    }
};
```

### java
```java
class Solution {
    public String longestWord(String[] words) {
        
    }
}
```

### python
```python
class Solution(object):
    def longestWord(self, words):
        """
        :type words: List[str]
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def longestWord(self, words: List[str]) -> str:
```

### c
```c
char* longestWord(char** words, int wordsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public string LongestWord(string[] words) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    
};
```

### typescript
```typescript
function longestWord(words: string[]): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $words
     * @return String
     */
    function longestWord($words) {
        
    }
}
```

### swift
```swift
class Solution {
    func longestWord(_ words: [String]) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun longestWord(words: Array<String>): String {
        
    }
}
```

### dart
```dart
class Solution {
  String longestWord(List<String> words) {
    
  }
}
```

### golang
```golang
func longestWord(words []string) string {
    
}
```

### ruby
```ruby
# @param {String[]} words
# @return {String}
def longest_word(words)
    
end
```

### scala
```scala
object Solution {
    def longestWord(words: Array[String]): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn longest_word(words: Vec<String>) -> String {
        
    }
}
```

### racket
```racket
(define/contract (longest-word words)
  (-> (listof string?) string?)
  )
```

### erlang
```erlang
-spec longest_word(Words :: [unicode:unicode_binary()]) -> unicode:unicode_binary().
longest_word(Words) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec longest_word(words :: [String.t]) :: String.t
  def longest_word(words) do
    
  end
end
```
