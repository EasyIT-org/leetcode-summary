# 10. Regular Expression Matching

- Difficulty: Hard
- Topics: String, Dynamic Programming, Recursion
- Slug: regular-expression-matching
- Problem ID: 10

## Description
Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
The matching should cover the entire input string (not partial).
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```

### Example 2
```text
Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
```

### Example 3
```text
Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
```


## Constraints
- 1 <= s.length <= 20
- 1 <= p.length <= 20
- s contains only lowercase English letters.
- p contains only lowercase English letters, '.', and '*'.
- It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isMatch(string s, string p) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isMatch(String s, String p) {
        
    }
}
```

### python
```python
class Solution(object):
    def isMatch(self, s, p):
        """
        :type s: str
        :type p: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
```

### c
```c
bool isMatch(char* s, char* p) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsMatch(string s, string p) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    
};
```

### typescript
```typescript
function isMatch(s: string, p: string): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @param String $p
     * @return Boolean
     */
    function isMatch($s, $p) {
        
    }
}
```

### swift
```swift
class Solution {
    func isMatch(_ s: String, _ p: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isMatch(s: String, p: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isMatch(String s, String p) {
    
  }
}
```

### golang
```golang
func isMatch(s string, p string) bool {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {String} p
# @return {Boolean}
def is_match(s, p)
    
end
```

### scala
```scala
object Solution {
    def isMatch(s: String, p: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_match(s: String, p: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-match s p)
  (-> string? string? boolean?)
  )
```

### erlang
```erlang
-spec is_match(S :: unicode:unicode_binary(), P :: unicode:unicode_binary()) -> boolean().
is_match(S, P) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_match(s :: String.t, p :: String.t) :: boolean
  def is_match(s, p) do
    
  end
end
```
