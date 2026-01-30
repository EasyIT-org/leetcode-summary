# 844. Backspace String Compare

- Difficulty: Easy
- Topics: Two Pointers, String, Stack, Simulation
- Slug: backspace-string-compare
- Problem ID: 874

## Description
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
Note that after backspacing an empty text, the text will continue empty.
Example 1:
Example 2:
Example 3:
Constraints:
Follow up: Can you solve it in O(n) time and O(1) space?

## Examples
### Example 1
```text
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
```

### Example 2
```text
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
```

### Example 3
```text
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
```


## Constraints
- 1 <= s.length, t.length <= 200
- s and t only contain lowercase letters and '#' characters.

## Hints
(none)

## Follow Ups
- Can you solve it in O(n) time and O(1) space?

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool backspaceCompare(string s, string t) {
        
    }
};
```

### java
```java
class Solution {
    public boolean backspaceCompare(String s, String t) {
        
    }
}
```

### python
```python
class Solution(object):
    def backspaceCompare(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
```

### c
```c
bool backspaceCompare(char* s, char* t) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool BackspaceCompare(string s, string t) {
        
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
var backspaceCompare = function(s, t) {
    
};
```

### typescript
```typescript
function backspaceCompare(s: string, t: string): boolean {
    
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
    function backspaceCompare($s, $t) {
        
    }
}
```

### swift
```swift
class Solution {
    func backspaceCompare(_ s: String, _ t: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun backspaceCompare(s: String, t: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool backspaceCompare(String s, String t) {
    
  }
}
```

### golang
```golang
func backspaceCompare(s string, t string) bool {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {String} t
# @return {Boolean}
def backspace_compare(s, t)
    
end
```

### scala
```scala
object Solution {
    def backspaceCompare(s: String, t: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn backspace_compare(s: String, t: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (backspace-compare s t)
  (-> string? string? boolean?)
  )
```

### erlang
```erlang
-spec backspace_compare(S :: unicode:unicode_binary(), T :: unicode:unicode_binary()) -> boolean().
backspace_compare(S, T) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec backspace_compare(s :: String.t, t :: String.t) :: boolean
  def backspace_compare(s, t) do
    
  end
end
```
