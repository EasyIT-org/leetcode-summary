# 1160. Find Words That Can Be Formed by Characters

- Difficulty: Easy
- Topics: Array, Hash Table, String, Counting
- Slug: find-words-that-can-be-formed-by-characters
- Problem ID: 1112

## Description
You are given an array of strings words and a string chars.
A string is good if it can be formed by characters from chars (each character can only be used once for each word in words).
Return the sum of lengths of all good strings in words.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
```

### Example 2
```text
Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
```


## Constraints
- 1 <= words.length <= 1000
- 1 <= words[i].length, chars.length <= 100
- words[i] and chars consist of lowercase English letters.

## Hints
- Solve the problem for each string in <code>words</code> independently.
- Now try to think in frequency of letters.
- Count how many times each character occurs in string <code>chars</code>.
- To form a string using characters from <code>chars</code>, the frequency of each character in <code>chars</code> must be greater than or equal the frequency of that character in the string to be formed.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int countCharacters(vector<string>& words, string chars) {
        
    }
};
```

### java
```java
class Solution {
    public int countCharacters(String[] words, String chars) {
        
    }
}
```

### python
```python
class Solution(object):
    def countCharacters(self, words, chars):
        """
        :type words: List[str]
        :type chars: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def countCharacters(self, words: List[str], chars: str) -> int:
```

### c
```c
int countCharacters(char** words, int wordsSize, char* chars) {
    
}
```

### csharp
```csharp
public class Solution {
    public int CountCharacters(string[] words, string chars) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    
};
```

### typescript
```typescript
function countCharacters(words: string[], chars: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $words
     * @param String $chars
     * @return Integer
     */
    function countCharacters($words, $chars) {
        
    }
}
```

### swift
```swift
class Solution {
    func countCharacters(_ words: [String], _ chars: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun countCharacters(words: Array<String>, chars: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int countCharacters(List<String> words, String chars) {
    
  }
}
```

### golang
```golang
func countCharacters(words []string, chars string) int {
    
}
```

### ruby
```ruby
# @param {String[]} words
# @param {String} chars
# @return {Integer}
def count_characters(words, chars)
    
end
```

### scala
```scala
object Solution {
    def countCharacters(words: Array[String], chars: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn count_characters(words: Vec<String>, chars: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (count-characters words chars)
  (-> (listof string?) string? exact-integer?)
  )
```

### erlang
```erlang
-spec count_characters(Words :: [unicode:unicode_binary()], Chars :: unicode:unicode_binary()) -> integer().
count_characters(Words, Chars) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec count_characters(words :: [String.t], chars :: String.t) :: integer
  def count_characters(words, chars) do
    
  end
end
```
