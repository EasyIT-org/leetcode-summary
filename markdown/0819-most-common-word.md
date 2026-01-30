# 819. Most Common Word

- Difficulty: Easy
- Topics: Array, Hash Table, String, Counting
- Slug: most-common-word
- Problem ID: 837

## Description
Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.
The words in paragraph are case-insensitive and the answer should be returned in lowercase.
Note that words can not contain punctuation symbols.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
Output: "ball"
Explanation: 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.
```

### Example 2
```text
Input: paragraph = "a.", banned = []
Output: "a"
```


## Constraints
- 1 <= paragraph.length <= 1000
- paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
- 0 <= banned.length <= 100
- 1 <= banned[i].length <= 10
- banned[i] consists of only lowercase English letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string mostCommonWord(string paragraph, vector<string>& banned) {
        
    }
};
```

### java
```java
class Solution {
    public String mostCommonWord(String paragraph, String[] banned) {
        
    }
}
```

### python
```python
class Solution(object):
    def mostCommonWord(self, paragraph, banned):
        """
        :type paragraph: str
        :type banned: List[str]
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
```

### c
```c
char* mostCommonWord(char* paragraph, char** banned, int bannedSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public string MostCommonWord(string paragraph, string[] banned) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    
};
```

### typescript
```typescript
function mostCommonWord(paragraph: string, banned: string[]): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $paragraph
     * @param String[] $banned
     * @return String
     */
    function mostCommonWord($paragraph, $banned) {
        
    }
}
```

### swift
```swift
class Solution {
    func mostCommonWord(_ paragraph: String, _ banned: [String]) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun mostCommonWord(paragraph: String, banned: Array<String>): String {
        
    }
}
```

### dart
```dart
class Solution {
  String mostCommonWord(String paragraph, List<String> banned) {
    
  }
}
```

### golang
```golang
func mostCommonWord(paragraph string, banned []string) string {
    
}
```

### ruby
```ruby
# @param {String} paragraph
# @param {String[]} banned
# @return {String}
def most_common_word(paragraph, banned)
    
end
```

### scala
```scala
object Solution {
    def mostCommonWord(paragraph: String, banned: Array[String]): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn most_common_word(paragraph: String, banned: Vec<String>) -> String {
        
    }
}
```

### racket
```racket
(define/contract (most-common-word paragraph banned)
  (-> string? (listof string?) string?)
  )
```

### erlang
```erlang
-spec most_common_word(Paragraph :: unicode:unicode_binary(), Banned :: [unicode:unicode_binary()]) -> unicode:unicode_binary().
most_common_word(Paragraph, Banned) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec most_common_word(paragraph :: String.t, banned :: [String.t]) :: String.t
  def most_common_word(paragraph, banned) do
    
  end
end
```
