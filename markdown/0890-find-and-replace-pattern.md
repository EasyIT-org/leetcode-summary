# 890. Find and Replace Pattern

- Difficulty: Medium
- Topics: Array, Hash Table, String
- Slug: find-and-replace-pattern
- Problem ID: 926

## Description
Given a list of strings words and a string pattern, return a list of words[i] that match pattern. You may return the answer in any order.
A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.
Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
Output: ["mee","aqq"]
Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}. 
"ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation, since a and b map to the same letter.
```

### Example 2
```text
Input: words = ["a","b","c"], pattern = "a"
Output: ["a","b","c"]
```


## Constraints
- 1 <= pattern.length <= 20
- 1 <= words.length <= 50
- words[i].length == pattern.length
- pattern and words[i] are lowercase English letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> findAndReplacePattern(vector<string>& words, string pattern) {
        
    }
};
```

### java
```java
class Solution {
    public List<String> findAndReplacePattern(String[] words, String pattern) {
        
    }
}
```

### python
```python
class Solution(object):
    def findAndReplacePattern(self, words, pattern):
        """
        :type words: List[str]
        :type pattern: str
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def findAndReplacePattern(self, words: List[str], pattern: str) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** findAndReplacePattern(char** words, int wordsSize, char* pattern, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<string> FindAndReplacePattern(string[] words, string pattern) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    
};
```

### typescript
```typescript
function findAndReplacePattern(words: string[], pattern: string): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $words
     * @param String $pattern
     * @return String[]
     */
    function findAndReplacePattern($words, $pattern) {
        
    }
}
```

### swift
```swift
class Solution {
    func findAndReplacePattern(_ words: [String], _ pattern: String) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findAndReplacePattern(words: Array<String>, pattern: String): List<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> findAndReplacePattern(List<String> words, String pattern) {
    
  }
}
```

### golang
```golang
func findAndReplacePattern(words []string, pattern string) []string {
    
}
```

### ruby
```ruby
# @param {String[]} words
# @param {String} pattern
# @return {String[]}
def find_and_replace_pattern(words, pattern)
    
end
```

### scala
```scala
object Solution {
    def findAndReplacePattern(words: Array[String], pattern: String): List[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_and_replace_pattern(words: Vec<String>, pattern: String) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (find-and-replace-pattern words pattern)
  (-> (listof string?) string? (listof string?))
  )
```

### erlang
```erlang
-spec find_and_replace_pattern(Words :: [unicode:unicode_binary()], Pattern :: unicode:unicode_binary()) -> [unicode:unicode_binary()].
find_and_replace_pattern(Words, Pattern) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_and_replace_pattern(words :: [String.t], pattern :: String.t) :: [String.t]
  def find_and_replace_pattern(words, pattern) do
    
  end
end
```
