# 925. Long Pressed Name

- Difficulty: Easy
- Topics: Two Pointers, String
- Slug: long-pressed-name
- Problem ID: 961

## Description
Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.
You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: name = "alex", typed = "aaleex"
Output: true
Explanation: 'a' and 'e' in 'alex' were long pressed.
```

### Example 2
```text
Input: name = "saeed", typed = "ssaaedd"
Output: false
Explanation: 'e' must have been pressed twice, but it was not in the typed output.
```


## Constraints
- 1 <= name.length, typed.length <= 1000
- name and typed consist of only lowercase English letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isLongPressedName(string name, string typed) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isLongPressedName(String name, String typed) {
        
    }
}
```

### python
```python
class Solution(object):
    def isLongPressedName(self, name, typed):
        """
        :type name: str
        :type typed: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isLongPressedName(self, name: str, typed: str) -> bool:
```

### c
```c
bool isLongPressedName(char* name, char* typed) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsLongPressedName(string name, string typed) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    
};
```

### typescript
```typescript
function isLongPressedName(name: string, typed: string): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $name
     * @param String $typed
     * @return Boolean
     */
    function isLongPressedName($name, $typed) {
        
    }
}
```

### swift
```swift
class Solution {
    func isLongPressedName(_ name: String, _ typed: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isLongPressedName(name: String, typed: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isLongPressedName(String name, String typed) {
    
  }
}
```

### golang
```golang
func isLongPressedName(name string, typed string) bool {
    
}
```

### ruby
```ruby
# @param {String} name
# @param {String} typed
# @return {Boolean}
def is_long_pressed_name(name, typed)
    
end
```

### scala
```scala
object Solution {
    def isLongPressedName(name: String, typed: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_long_pressed_name(name: String, typed: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-long-pressed-name name typed)
  (-> string? string? boolean?)
  )
```

### erlang
```erlang
-spec is_long_pressed_name(Name :: unicode:unicode_binary(), Typed :: unicode:unicode_binary()) -> boolean().
is_long_pressed_name(Name, Typed) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_long_pressed_name(name :: String.t, typed :: String.t) :: boolean
  def is_long_pressed_name(name, typed) do
    
  end
end
```
