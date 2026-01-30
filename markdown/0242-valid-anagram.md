# 242. Valid Anagram

- Difficulty: Easy
- Topics: Hash Table, String, Sorting
- Slug: valid-anagram
- Problem ID: 242

## Description
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
Example 1:
Example 2:
Constraints:
Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

## Examples
### Example 1
```text
Input: s = "anagram", t = "nagaram"
Output: true
```

### Example 2
```text
Input: s = "rat", t = "car"
Output: false
```


## Constraints
- 1 <= s.length, t.length <= 5 * 104
- s and t consist of lowercase English letters.

## Hints
(none)

## Follow Ups
- What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isAnagram(string s, string t) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isAnagram(String s, String t) {
        
    }
}
```

### python
```python
class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
```

### c
```c
bool isAnagram(char* s, char* t) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsAnagram(string s, string t) {
        
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
var isAnagram = function(s, t) {
    
};
```

### typescript
```typescript
function isAnagram(s: string, t: string): boolean {
    
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
    function isAnagram($s, $t) {
        
    }
}
```

### swift
```swift
class Solution {
    func isAnagram(_ s: String, _ t: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isAnagram(s: String, t: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isAnagram(String s, String t) {
    
  }
}
```

### golang
```golang
func isAnagram(s string, t string) bool {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {String} t
# @return {Boolean}
def is_anagram(s, t)
    
end
```

### scala
```scala
object Solution {
    def isAnagram(s: String, t: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-anagram s t)
  (-> string? string? boolean?)
  )
```

### erlang
```erlang
-spec is_anagram(S :: unicode:unicode_binary(), T :: unicode:unicode_binary()) -> boolean().
is_anagram(S, T) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_anagram(s :: String.t, t :: String.t) :: boolean
  def is_anagram(s, t) do
    
  end
end
```
