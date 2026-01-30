# 150. Evaluate Reverse Polish Notation

- Difficulty: Medium
- Topics: Array, Math, Stack
- Slug: evaluate-reverse-polish-notation
- Problem ID: 150

## Description
You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
Evaluate the expression. Return an integer that represents the value of the expression.
Note that:
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
```

### Example 2
```text
Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
```

### Example 3
```text
Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
```


## Constraints
- 1 <= tokens.length <= 104
- tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        
    }
};
```

### java
```java
class Solution {
    public int evalRPN(String[] tokens) {
        
    }
}
```

### python
```python
class Solution(object):
    def evalRPN(self, tokens):
        """
        :type tokens: List[str]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
```

### c
```c
int evalRPN(char** tokens, int tokensSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int EvalRPN(string[] tokens) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    
};
```

### typescript
```typescript
function evalRPN(tokens: string[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $tokens
     * @return Integer
     */
    function evalRPN($tokens) {
        
    }
}
```

### swift
```swift
class Solution {
    func evalRPN(_ tokens: [String]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun evalRPN(tokens: Array<String>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int evalRPN(List<String> tokens) {
    
  }
}
```

### golang
```golang
func evalRPN(tokens []string) int {
    
}
```

### ruby
```ruby
# @param {String[]} tokens
# @return {Integer}
def eval_rpn(tokens)
    
end
```

### scala
```scala
object Solution {
    def evalRPN(tokens: Array[String]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn eval_rpn(tokens: Vec<String>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (eval-rpn tokens)
  (-> (listof string?) exact-integer?)
  )
```

### erlang
```erlang
-spec eval_rpn(Tokens :: [unicode:unicode_binary()]) -> integer().
eval_rpn(Tokens) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec eval_rpn(tokens :: [String.t]) :: integer
  def eval_rpn(tokens) do
    
  end
end
```
