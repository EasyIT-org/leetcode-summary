# 648. Replace Words

- Difficulty: Medium
- Topics: Array, Hash Table, String, Trie
- Slug: replace-words
- Problem ID: 648

## Description
In English, we have a concept called root, which can be followed by some other word to form another longer word - let's call this word derivative. For example, when the root "help" is followed by the word "ful", we can form a derivative "helpful".
Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, replace all the derivatives in the sentence with the root forming it. If a derivative can be replaced by more than one root, replace it with the root that has the shortest length.
Return the sentence after the replacement.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
Output: "the cat was rat by the bat"
```

### Example 2
```text
Input: dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
Output: "a a b c"
```


## Constraints
- 1 <= dictionary.length <= 1000
- 1 <= dictionary[i].length <= 100
- dictionary[i] consists of only lower-case letters.
- 1 <= sentence.length <= 106
- sentence consists of only lower-case letters and spaces.
- The number of words in sentence is in the range [1, 1000]
- The length of each word in sentence is in the range [1, 1000]
- Every two consecutive words in sentence will be separated by exactly one space.
- sentence does not have leading or trailing spaces.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string replaceWords(vector<string>& dictionary, string sentence) {
        
    }
};
```

### java
```java
class Solution {
    public String replaceWords(List<String> dictionary, String sentence) {
        
    }
}
```

### python
```python
class Solution(object):
    def replaceWords(self, dictionary, sentence):
        """
        :type dictionary: List[str]
        :type sentence: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def replaceWords(self, dictionary: List[str], sentence: str) -> str:
```

### c
```c
char* replaceWords(char** dictionary, int dictionarySize, char* sentence) {
    
}
```

### csharp
```csharp
public class Solution {
    public string ReplaceWords(IList<string> dictionary, string sentence) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    
};
```

### typescript
```typescript
function replaceWords(dictionary: string[], sentence: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $dictionary
     * @param String $sentence
     * @return String
     */
    function replaceWords($dictionary, $sentence) {
        
    }
}
```

### swift
```swift
class Solution {
    func replaceWords(_ dictionary: [String], _ sentence: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun replaceWords(dictionary: List<String>, sentence: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String replaceWords(List<String> dictionary, String sentence) {
    
  }
}
```

### golang
```golang
func replaceWords(dictionary []string, sentence string) string {
    
}
```

### ruby
```ruby
# @param {String[]} dictionary
# @param {String} sentence
# @return {String}
def replace_words(dictionary, sentence)
    
end
```

### scala
```scala
object Solution {
    def replaceWords(dictionary: List[String], sentence: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn replace_words(dictionary: Vec<String>, sentence: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (replace-words dictionary sentence)
  (-> (listof string?) string? string?)
  )
```

### erlang
```erlang
-spec replace_words(Dictionary :: [unicode:unicode_binary()], Sentence :: unicode:unicode_binary()) -> unicode:unicode_binary().
replace_words(Dictionary, Sentence) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec replace_words(dictionary :: [String.t], sentence :: String.t) :: String.t
  def replace_words(dictionary, sentence) do
    
  end
end
```
