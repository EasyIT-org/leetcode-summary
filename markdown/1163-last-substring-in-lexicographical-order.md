# 1163. Last Substring in Lexicographical Order

- Difficulty: Hard
- Topics: Two Pointers, String
- Slug: last-substring-in-lexicographical-order
- Problem ID: 1133

## Description
Given a string s, return the last substring of s in lexicographical order.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "abab"
Output: "bab"
Explanation: The substrings are ["a", "ab", "aba", "abab", "b", "ba", "bab"]. The lexicographically maximum substring is "bab".
```

### Example 2
```text
Input: s = "leetcode"
Output: "tcode"
```


## Constraints
- 1 <= s.length <= 4 * 105
- s contains only lowercase English letters.

## Hints
- Assume that the answer is a sub-string from index i to j. If you add the character at index j+1 you get a better answer.
- The answer is always a suffix of the given string.
- Since the limits are high, we need an efficient data structure.
- Use suffix array.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string lastSubstring(string s) {
        
    }
};
```

### java
```java
class Solution {
    public String lastSubstring(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def lastSubstring(self, s):
        """
        :type s: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def lastSubstring(self, s: str) -> str:
```

### c
```c
char* lastSubstring(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public string LastSubstring(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {string}
 */
var lastSubstring = function(s) {
    
};
```

### typescript
```typescript
function lastSubstring(s: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function lastSubstring($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func lastSubstring(_ s: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun lastSubstring(s: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String lastSubstring(String s) {
    
  }
}
```

### golang
```golang
func lastSubstring(s string) string {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {String}
def last_substring(s)
    
end
```

### scala
```scala
object Solution {
    def lastSubstring(s: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn last_substring(s: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (last-substring s)
  (-> string? string?)
  )
```

### erlang
```erlang
-spec last_substring(S :: unicode:unicode_binary()) -> unicode:unicode_binary().
last_substring(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec last_substring(s :: String.t) :: String.t
  def last_substring(s) do
    
  end
end
```
