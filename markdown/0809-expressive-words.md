# 809. Expressive Words

- Difficulty: Medium
- Topics: Array, Two Pointers, String
- Slug: expressive-words
- Problem ID: 827

## Description
Sometimes people repeat letters to represent extra feeling. For example:
In these strings like "heeellooo", we have groups of adjacent letters that are all the same: "h", "eee", "ll", "ooo".
You are given a string s and an array of query strings words. A query word is stretchy if it can be made to be equal to s by any number of applications of the following extension operation: choose a group consisting of characters c, and add some number of characters c to the group so that the size of the group is three or more.
Return the number of query strings that are stretchy.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "heeellooo", words = ["hello", "hi", "helo"]
Output: 1
Explanation: 
We can extend "e" and "o" in the word "hello" to get "heeellooo".
We can't extend "helo" to get "heeellooo" because the group "ll" is not size 3 or more.
```

### Example 2
```text
Input: s = "zzzzzyyyyy", words = ["zzyy","zy","zyy"]
Output: 3
```


## Constraints
- 1 <= s.length, words.length <= 100
- 1 <= words[i].length <= 100
- s and words[i] consist of lowercase letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int expressiveWords(string s, vector<string>& words) {
        
    }
};
```

### java
```java
class Solution {
    public int expressiveWords(String s, String[] words) {
        
    }
}
```

### python
```python
class Solution(object):
    def expressiveWords(self, s, words):
        """
        :type s: str
        :type words: List[str]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def expressiveWords(self, s: str, words: List[str]) -> int:
```

### c
```c
int expressiveWords(char* s, char** words, int wordsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int ExpressiveWords(string s, string[] words) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(s, words) {
    
};
```

### typescript
```typescript
function expressiveWords(s: string, words: string[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @param String[] $words
     * @return Integer
     */
    function expressiveWords($s, $words) {
        
    }
}
```

### swift
```swift
class Solution {
    func expressiveWords(_ s: String, _ words: [String]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun expressiveWords(s: String, words: Array<String>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int expressiveWords(String s, List<String> words) {
    
  }
}
```

### golang
```golang
func expressiveWords(s string, words []string) int {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {String[]} words
# @return {Integer}
def expressive_words(s, words)
    
end
```

### scala
```scala
object Solution {
    def expressiveWords(s: String, words: Array[String]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn expressive_words(s: String, words: Vec<String>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (expressive-words s words)
  (-> string? (listof string?) exact-integer?)
  )
```

### erlang
```erlang
-spec expressive_words(S :: unicode:unicode_binary(), Words :: [unicode:unicode_binary()]) -> integer().
expressive_words(S, Words) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec expressive_words(s :: String.t, words :: [String.t]) :: integer
  def expressive_words(s, words) do
    
  end
end
```
