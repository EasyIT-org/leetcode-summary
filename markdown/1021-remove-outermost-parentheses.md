# 1021. Remove Outermost Parentheses

- Difficulty: Easy
- Topics: String, Stack
- Slug: remove-outermost-parentheses
- Problem ID: 1078

## Description
A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.
A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.
Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.
Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
```

### Example 2
```text
Input: s = "(()())(())(()(()))"
Output: "()()()()(())"
Explanation: 
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
```

### Example 3
```text
Input: s = "()()"
Output: ""
Explanation: 
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".
```


## Constraints
- 1 <= s.length <= 105
- s[i] is either '(' or ')'.
- s is a valid parentheses string.

## Hints
- Can you find the primitive decomposition?  The number of ( and ) characters must be equal.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string removeOuterParentheses(string s) {
        
    }
};
```

### java
```java
class Solution {
    public String removeOuterParentheses(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def removeOuterParentheses(self, s):
        """
        :type s: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def removeOuterParentheses(self, s: str) -> str:
```

### c
```c
char* removeOuterParentheses(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public string RemoveOuterParentheses(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    
};
```

### typescript
```typescript
function removeOuterParentheses(s: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function removeOuterParentheses($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func removeOuterParentheses(_ s: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun removeOuterParentheses(s: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String removeOuterParentheses(String s) {
    
  }
}
```

### golang
```golang
func removeOuterParentheses(s string) string {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {String}
def remove_outer_parentheses(s)
    
end
```

### scala
```scala
object Solution {
    def removeOuterParentheses(s: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn remove_outer_parentheses(s: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (remove-outer-parentheses s)
  (-> string? string?)
  )
```

### erlang
```erlang
-spec remove_outer_parentheses(S :: unicode:unicode_binary()) -> unicode:unicode_binary().
remove_outer_parentheses(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec remove_outer_parentheses(s :: String.t) :: String.t
  def remove_outer_parentheses(s) do
    
  end
end
```
