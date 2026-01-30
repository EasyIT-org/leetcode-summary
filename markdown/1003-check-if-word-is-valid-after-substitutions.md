# 1003. Check If Word Is Valid After Substitutions

- Difficulty: Medium
- Topics: String, Stack
- Slug: check-if-word-is-valid-after-substitutions
- Problem ID: 1045

## Description
Given a string s, determine if it is valid.
A string s is valid if, starting with an empty string t = "", you can transform t into s after performing the following operation any number of times:
Return true if s is a valid string, otherwise, return false.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "aabcbc"
Output: true
Explanation:
"" -> "abc" -> "aabcbc"
Thus, "aabcbc" is valid.
```

### Example 2
```text
Input: s = "abcabcababcc"
Output: true
Explanation:
"" -> "abc" -> "abcabc" -> "abcabcabc" -> "abcabcababcc"
Thus, "abcabcababcc" is valid.
```

### Example 3
```text
Input: s = "abccba"
Output: false
Explanation: It is impossible to get "abccba" using the operation.
```


## Constraints
- 1 <= s.length <= 2 * 104
- s consists of letters 'a', 'b', and 'c'

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isValid(string s) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isValid(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isValid(self, s: str) -> bool:
```

### c
```c
bool isValid(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsValid(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
};
```

### typescript
```typescript
function isValid(s: string): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function isValid($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func isValid(_ s: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isValid(s: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isValid(String s) {
    
  }
}
```

### golang
```golang
func isValid(s string) bool {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {Boolean}
def is_valid(s)
    
end
```

### scala
```scala
object Solution {
    def isValid(s: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_valid(s: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-valid s)
  (-> string? boolean?)
  )
```

### erlang
```erlang
-spec is_valid(S :: unicode:unicode_binary()) -> boolean().
is_valid(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_valid(s :: String.t) :: boolean
  def is_valid(s) do
    
  end
end
```
