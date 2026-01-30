# 392. Is Subsequence

- Difficulty: Easy
- Topics: Two Pointers, String, Dynamic Programming
- Slug: is-subsequence
- Problem ID: 392

## Description
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "abc", t = "ahbgdc"
Output: true
```

### Example 2
```text
Input: s = "axc", t = "ahbgdc"
Output: false
```


## Constraints
- 0 <= s.length <= 100
- 0 <= t.length <= 104
- s and t consist only of lowercase English letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isSubsequence(string s, string t) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isSubsequence(String s, String t) {
        
    }
}
```

### python
```python
class Solution(object):
    def isSubsequence(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
```

### c
```c
bool isSubsequence(char* s, char* t) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsSubsequence(string s, string t) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
};
```

### typescript
```typescript
function isSubsequence(s: string, t: string): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @param String $t
     * @return Boolean
     */
    function isSubsequence($s, $t) {
        
    }
}
```

### swift
```swift
class Solution {
    func isSubsequence(_ s: String, _ t: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isSubsequence(s: String, t: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isSubsequence(String s, String t) {
    
  }
}
```

### golang
```golang
func isSubsequence(s string, t string) bool {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {String} t
# @return {Boolean}
def is_subsequence(s, t)
    
end
```

### scala
```scala
object Solution {
    def isSubsequence(s: String, t: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_subsequence(s: String, t: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-subsequence s t)
  (-> string? string? boolean?)
  )
```

### erlang
```erlang
-spec is_subsequence(S :: unicode:unicode_binary(), T :: unicode:unicode_binary()) -> boolean().
is_subsequence(S, T) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_subsequence(s :: String.t, t :: String.t) :: boolean
  def is_subsequence(s, t) do
    
  end
end
```
