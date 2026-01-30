# 205. Isomorphic Strings

- Difficulty: Easy
- Topics: Hash Table, String
- Slug: isomorphic-strings
- Problem ID: 205

## Description
Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "egg", t = "add"
Output: true
Explanation:
The strings s and t can be made identical by:
```

### Example 2
```text
Input: s = "foo", t = "bar"
Output: false
Explanation:
The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r' .
```

### Example 3
```text
Input: s = "paper", t = "title"
Output: true
```


## Constraints
- 1 <= s.length <= 5 * 104
- t.length == s.length
- s and t consist of any valid ascii character.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isIsomorphic(string s, string t) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isIsomorphic(String s, String t) {
        
    }
}
```

### python
```python
class Solution(object):
    def isIsomorphic(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
```

### c
```c
bool isIsomorphic(char* s, char* t) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsIsomorphic(string s, string t) {
        
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
var isIsomorphic = function(s, t) {
    
};
```

### typescript
```typescript
function isIsomorphic(s: string, t: string): boolean {
    
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
    function isIsomorphic($s, $t) {
        
    }
}
```

### swift
```swift
class Solution {
    func isIsomorphic(_ s: String, _ t: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isIsomorphic(s: String, t: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isIsomorphic(String s, String t) {
    
  }
}
```

### golang
```golang
func isIsomorphic(s string, t string) bool {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {String} t
# @return {Boolean}
def is_isomorphic(s, t)
    
end
```

### scala
```scala
object Solution {
    def isIsomorphic(s: String, t: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_isomorphic(s: String, t: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-isomorphic s t)
  (-> string? string? boolean?)
  )
```

### erlang
```erlang
-spec is_isomorphic(S :: unicode:unicode_binary(), T :: unicode:unicode_binary()) -> boolean().
is_isomorphic(S, T) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_isomorphic(s :: String.t, t :: String.t) :: boolean
  def is_isomorphic(s, t) do
    
  end
end
```
