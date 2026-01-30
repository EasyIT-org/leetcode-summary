# 1106. Parsing A Boolean Expression

- Difficulty: Hard
- Topics: String, Stack, Recursion
- Slug: parsing-a-boolean-expression
- Problem ID: 1197

## Description
A boolean expression is an expression that evaluates to either true or false. It can be in one of the following shapes:
Given a string expression that represents a boolean expression, return the evaluation of that expression.
It is guaranteed that the given expression is valid and follows the given rules.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: expression = "&(|(f))"
Output: false
Explanation: 
First, evaluate |(f) --> f. The expression is now "&(f)".
Then, evaluate &(f) --> f. The expression is now "f".
Finally, return false.
```

### Example 2
```text
Input: expression = "|(f,f,f,t)"
Output: true
Explanation: The evaluation of (false OR false OR false OR true) is true.
```

### Example 3
```text
Input: expression = "!(&(f,t))"
Output: true
Explanation: 
First, evaluate &(f,t) --> (false AND true) --> false --> f. The expression is now "!(f)".
Then, evaluate !(f) --> NOT false --> true. We return true.
```


## Constraints
- 1 <= expression.length <= 2 * 104
- expression[i] is one following characters: '(', ')', '&', '|', '!', 't', 'f', and ','.

## Hints
- Write a function "parse" which calls helper functions "parse_or", "parse_and", "parse_not".

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool parseBoolExpr(string expression) {
        
    }
};
```

### java
```java
class Solution {
    public boolean parseBoolExpr(String expression) {
        
    }
}
```

### python
```python
class Solution(object):
    def parseBoolExpr(self, expression):
        """
        :type expression: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def parseBoolExpr(self, expression: str) -> bool:
```

### c
```c
bool parseBoolExpr(char* expression) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool ParseBoolExpr(string expression) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function(expression) {
    
};
```

### typescript
```typescript
function parseBoolExpr(expression: string): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $expression
     * @return Boolean
     */
    function parseBoolExpr($expression) {
        
    }
}
```

### swift
```swift
class Solution {
    func parseBoolExpr(_ expression: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun parseBoolExpr(expression: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool parseBoolExpr(String expression) {
    
  }
}
```

### golang
```golang
func parseBoolExpr(expression string) bool {
    
}
```

### ruby
```ruby
# @param {String} expression
# @return {Boolean}
def parse_bool_expr(expression)
    
end
```

### scala
```scala
object Solution {
    def parseBoolExpr(expression: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn parse_bool_expr(expression: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (parse-bool-expr expression)
  (-> string? boolean?)
  )
```

### erlang
```erlang
-spec parse_bool_expr(Expression :: unicode:unicode_binary()) -> boolean().
parse_bool_expr(Expression) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec parse_bool_expr(expression :: String.t) :: boolean
  def parse_bool_expr(expression) do
    
  end
end
```
