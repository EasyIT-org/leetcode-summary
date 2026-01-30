# 20. Valid Parentheses

- Difficulty: Easy
- Topics: String, Stack
- Slug: valid-parentheses
- Problem ID: 20

## Description
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Example 1:
Example 2:
Example 3:
Example 4:
Example 5:
Constraints:

## Examples
### Example 1
```text
Input: s = "()"
Output: true
```

### Example 2
```text
Input: s = "()[]{}"
Output: true
```

### Example 3
```text
Input: s = "(]"
Output: false
```

### Example 4
```text
Input: s = "([])"
Output: true
```

### Example 5
```text
Input: s = "([)]"
Output: false
```


## Constraints
- 1 <= s.length <= 104
- s consists of parentheses only '()[]{}'.

## Hints
- Use a stack of characters.
- When you encounter an opening bracket, push it to the top of the stack.
- When you encounter a closing bracket, check if the top of the stack was the opening for it. If yes, pop it from the stack. Otherwise, return false.

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
