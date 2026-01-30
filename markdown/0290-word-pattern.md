# 290. Word Pattern

- Difficulty: Easy
- Topics: Hash Table, String
- Slug: word-pattern
- Problem ID: 290

## Description
Given a pattern and a string s, find if s follows the same pattern.
Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Explanation:
The bijection can be established as:
```

### Example 2
```text
Input: pattern = "abba", s = "dog cat cat fish"
Output: false
```

### Example 3
```text
Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
```


## Constraints
- 1 <= pattern.length <= 300
- pattern contains only lower-case English letters.
- 1 <= s.length <= 3000
- s contains only lowercase English letters and spaces ' '.
- s does not contain any leading or trailing spaces.
- All the words in s are separated by a single space.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool wordPattern(string pattern, string s) {
        
    }
};
```

### java
```java
class Solution {
    public boolean wordPattern(String pattern, String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def wordPattern(self, pattern, s):
        """
        :type pattern: str
        :type s: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
```

### c
```c
bool wordPattern(char* pattern, char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool WordPattern(string pattern, string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    
};
```

### typescript
```typescript
function wordPattern(pattern: string, s: string): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $pattern
     * @param String $s
     * @return Boolean
     */
    function wordPattern($pattern, $s) {
        
    }
}
```

### swift
```swift
class Solution {
    func wordPattern(_ pattern: String, _ s: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun wordPattern(pattern: String, s: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool wordPattern(String pattern, String s) {
    
  }
}
```

### golang
```golang
func wordPattern(pattern string, s string) bool {
    
}
```

### ruby
```ruby
# @param {String} pattern
# @param {String} s
# @return {Boolean}
def word_pattern(pattern, s)
    
end
```

### scala
```scala
object Solution {
    def wordPattern(pattern: String, s: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn word_pattern(pattern: String, s: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (word-pattern pattern s)
  (-> string? string? boolean?)
  )
```

### erlang
```erlang
-spec word_pattern(Pattern :: unicode:unicode_binary(), S :: unicode:unicode_binary()) -> boolean().
word_pattern(Pattern, S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec word_pattern(pattern :: String.t, s :: String.t) :: boolean
  def word_pattern(pattern, s) do
    
  end
end
```
