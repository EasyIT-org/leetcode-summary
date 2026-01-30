# 953. Verifying an Alien Dictionary

- Difficulty: Easy
- Topics: Array, Hash Table, String
- Slug: verifying-an-alien-dictionary
- Problem ID: 990

## Description
In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.
Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
```

### Example 2
```text
Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
```

### Example 3
```text
Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
```


## Constraints
- 1 <= words.length <= 100
- 1 <= words[i].length <= 20
- order.length == 26
- All characters in words[i] and order are English lowercase letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isAlienSorted(vector<string>& words, string order) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isAlienSorted(String[] words, String order) {
        
    }
}
```

### python
```python
class Solution(object):
    def isAlienSorted(self, words, order):
        """
        :type words: List[str]
        :type order: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isAlienSorted(self, words: List[str], order: str) -> bool:
```

### c
```c
bool isAlienSorted(char** words, int wordsSize, char* order) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsAlienSorted(string[] words, string order) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    
};
```

### typescript
```typescript
function isAlienSorted(words: string[], order: string): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $words
     * @param String $order
     * @return Boolean
     */
    function isAlienSorted($words, $order) {
        
    }
}
```

### swift
```swift
class Solution {
    func isAlienSorted(_ words: [String], _ order: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isAlienSorted(words: Array<String>, order: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isAlienSorted(List<String> words, String order) {
    
  }
}
```

### golang
```golang
func isAlienSorted(words []string, order string) bool {
    
}
```

### ruby
```ruby
# @param {String[]} words
# @param {String} order
# @return {Boolean}
def is_alien_sorted(words, order)
    
end
```

### scala
```scala
object Solution {
    def isAlienSorted(words: Array[String], order: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_alien_sorted(words: Vec<String>, order: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-alien-sorted words order)
  (-> (listof string?) string? boolean?)
  )
```

### erlang
```erlang
-spec is_alien_sorted(Words :: [unicode:unicode_binary()], Order :: unicode:unicode_binary()) -> boolean().
is_alien_sorted(Words, Order) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_alien_sorted(words :: [String.t], order :: String.t) :: boolean
  def is_alien_sorted(words, order) do
    
  end
end
```
