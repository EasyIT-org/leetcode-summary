# 820. Short Encoding of Words

- Difficulty: Medium
- Topics: Array, Hash Table, String, Trie
- Slug: short-encoding-of-words
- Problem ID: 839

## Description
A valid encoding of an array of words is any reference string s and array of indices indices such that:
Given an array of words, return the length of the shortest reference string s possible of any valid encoding of words.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: words = ["time", "me", "bell"]
Output: 10
Explanation: A valid encoding would be s = "time#bell#" and indices = [0, 2, 5].
words[0] = "time", the substring of s starting from indices[0] = 0 to the next '#' is underlined in "time#bell#"
words[1] = "me", the substring of s starting from indices[1] = 2 to the next '#' is underlined in "time#bell#"
words[2] = "bell", the substring of s starting from indices[2] = 5 to the next '#' is underlined in "time#bell#"
```

### Example 2
```text
Input: words = ["t"]
Output: 2
Explanation: A valid encoding would be s = "t#" and indices = [0].
```


## Constraints
- 1 <= words.length <= 2000
- 1 <= words[i].length <= 7
- words[i] consists of only lowercase letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int minimumLengthEncoding(vector<string>& words) {
        
    }
};
```

### java
```java
class Solution {
    public int minimumLengthEncoding(String[] words) {
        
    }
}
```

### python
```python
class Solution(object):
    def minimumLengthEncoding(self, words):
        """
        :type words: List[str]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minimumLengthEncoding(self, words: List[str]) -> int:
```

### c
```c
int minimumLengthEncoding(char** words, int wordsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinimumLengthEncoding(string[] words) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    
};
```

### typescript
```typescript
function minimumLengthEncoding(words: string[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $words
     * @return Integer
     */
    function minimumLengthEncoding($words) {
        
    }
}
```

### swift
```swift
class Solution {
    func minimumLengthEncoding(_ words: [String]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minimumLengthEncoding(words: Array<String>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minimumLengthEncoding(List<String> words) {
    
  }
}
```

### golang
```golang
func minimumLengthEncoding(words []string) int {
    
}
```

### ruby
```ruby
# @param {String[]} words
# @return {Integer}
def minimum_length_encoding(words)
    
end
```

### scala
```scala
object Solution {
    def minimumLengthEncoding(words: Array[String]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn minimum_length_encoding(words: Vec<String>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (minimum-length-encoding words)
  (-> (listof string?) exact-integer?)
  )
```

### erlang
```erlang
-spec minimum_length_encoding(Words :: [unicode:unicode_binary()]) -> integer().
minimum_length_encoding(Words) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec minimum_length_encoding(words :: [String.t]) :: integer
  def minimum_length_encoding(words) do
    
  end
end
```
