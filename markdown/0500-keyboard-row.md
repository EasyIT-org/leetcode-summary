# 500. Keyboard Row

- Difficulty: Easy
- Topics: Array, Hash Table, String
- Slug: keyboard-row
- Problem ID: 500

## Description
Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.
Note that the strings are case-insensitive, both lowercased and uppercased of the same letter are treated as if they are at the same row.
In the American keyboard:
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]
Explanation:
Both "a" and "A" are in the 2nd row of the American keyboard due to case insensitivity.
```

### Example 2
```text
Input: words = ["omk"]
Output: []
```

### Example 3
```text
Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]
```


## Constraints
- 1 <= words.length <= 20
- 1 <= words[i].length <= 100
- words[i] consists of English letters (both lowercase and uppercase).

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> findWords(vector<string>& words) {
        
    }
};
```

### java
```java
class Solution {
    public String[] findWords(String[] words) {
        
    }
}
```

### python
```python
class Solution(object):
    def findWords(self, words):
        """
        :type words: List[str]
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def findWords(self, words: List[str]) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** findWords(char** words, int wordsSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public string[] FindWords(string[] words) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    
};
```

### typescript
```typescript
function findWords(words: string[]): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $words
     * @return String[]
     */
    function findWords($words) {
        
    }
}
```

### swift
```swift
class Solution {
    func findWords(_ words: [String]) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findWords(words: Array<String>): Array<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> findWords(List<String> words) {
    
  }
}
```

### golang
```golang
func findWords(words []string) []string {
    
}
```

### ruby
```ruby
# @param {String[]} words
# @return {String[]}
def find_words(words)
    
end
```

### scala
```scala
object Solution {
    def findWords(words: Array[String]): Array[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_words(words: Vec<String>) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (find-words words)
  (-> (listof string?) (listof string?))
  )
```

### erlang
```erlang
-spec find_words(Words :: [unicode:unicode_binary()]) -> [unicode:unicode_binary()].
find_words(Words) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_words(words :: [String.t]) :: [String.t]
  def find_words(words) do
    
  end
end
```
