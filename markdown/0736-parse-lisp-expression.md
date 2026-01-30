# 736. Parse Lisp Expression

- Difficulty: Hard
- Topics: Hash Table, String, Stack, Recursion
- Slug: parse-lisp-expression
- Problem ID: 736

## Description
You are given a string expression representing a Lisp-like expression to return the integer value of.
The syntax for these expressions is given as follows.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: expression = "(let x 2 (mult x (let x 3 y 4 (add x y))))"
Output: 14
Explanation: In the expression (add x y), when checking for the value of the variable x,
we check from the innermost scope to the outermost in the context of the variable we are trying to evaluate.
Since x = 3 is found first, the value of x is 3.
```

### Example 2
```text
Input: expression = "(let x 3 x 2 x)"
Output: 2
Explanation: Assignment in let statements is processed sequentially.
```

### Example 3
```text
Input: expression = "(let x 1 y 2 x (add x y) (add x y))"
Output: 5
Explanation: The first (add x y) evaluates as 3, and is assigned to x.
The second (add x y) evaluates as 3+2 = 5.
```


## Constraints
- 1 <= expression.length <= 2000
- There are no leading or trailing spaces in expression.
- All tokens are separated by a single space in expression.
- The answer and all intermediate calculations of that answer are guaranteed to fit in a 32-bit integer.
- The expression is guaranteed to be legal and evaluate to an integer.

## Hints
- * If the expression starts with a digit or '-', it's an integer: return it.

* If the expression starts with a letter, it's a variable.  Recall it by checking the current scope in reverse order.

* Otherwise, group the tokens (variables or expressions) within this expression by counting the "balance" `bal` of the occurrences of `'('` minus the number of occurrences of `')'`.  When the balance is zero, we have ended a token.  For example, `(add 1 (add 2 3))` should have tokens `'1'` and `'(add 2 3)'`.

* For add and mult expressions, evaluate each token and return the addition or multiplication of them.

* For let expressions, evaluate each expression sequentially and assign it to the variable in the current scope, then return the evaluation of the final expression.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int evaluate(string expression) {
        
    }
};
```

### java
```java
class Solution {
    public int evaluate(String expression) {
        
    }
}
```

### python
```python
class Solution(object):
    def evaluate(self, expression):
        """
        :type expression: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def evaluate(self, expression: str) -> int:
```

### c
```c
int evaluate(char* expression) {
    
}
```

### csharp
```csharp
public class Solution {
    public int Evaluate(string expression) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} expression
 * @return {number}
 */
var evaluate = function(expression) {
    
};
```

### typescript
```typescript
function evaluate(expression: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $expression
     * @return Integer
     */
    function evaluate($expression) {
        
    }
}
```

### swift
```swift
class Solution {
    func evaluate(_ expression: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun evaluate(expression: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int evaluate(String expression) {
    
  }
}
```

### golang
```golang
func evaluate(expression string) int {
    
}
```

### ruby
```ruby
# @param {String} expression
# @return {Integer}
def evaluate(expression)
    
end
```

### scala
```scala
object Solution {
    def evaluate(expression: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn evaluate(expression: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (evaluate expression)
  (-> string? exact-integer?)
  )
```

### erlang
```erlang
-spec evaluate(Expression :: unicode:unicode_binary()) -> integer().
evaluate(Expression) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec evaluate(expression :: String.t) :: integer
  def evaluate(expression) do
    
  end
end
```
