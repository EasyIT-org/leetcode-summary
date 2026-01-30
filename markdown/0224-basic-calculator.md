# 224. Basic Calculator

- Difficulty: Hard
- Topics: Math, String, Stack, Recursion
- Slug: basic-calculator
- Problem ID: 224

## Description
Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.
Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "1 + 1"
Output: 2
```

### Example 2
```text
Input: s = " 2-1 + 2 "
Output: 3
```

### Example 3
```text
Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23
```


## Constraints
- 1 <= s.length <= 3 * 105
- s consists of digits, '+', '-', '(', ')', and ' '.
- s represents a valid expression.
- '+' is not used as a unary operation (i.e., "+1" and "+(2 + 3)" is invalid).
- '-' could be used as a unary operation (i.e., "-1" and "-(2 + 3)" is valid).
- There will be no two consecutive operators in the input.
- Every number and running calculation will fit in a signed 32-bit integer.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int calculate(string s) {
        
    }
};
```

### java
```java
class Solution {
    public int calculate(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def calculate(self, s):
        """
        :type s: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def calculate(self, s: str) -> int:
```

### c
```c
int calculate(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public int Calculate(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    
};
```

### typescript
```typescript
function calculate(s: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function calculate($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func calculate(_ s: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun calculate(s: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int calculate(String s) {
    
  }
}
```

### golang
```golang
func calculate(s string) int {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {Integer}
def calculate(s)
    
end
```

### scala
```scala
object Solution {
    def calculate(s: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn calculate(s: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (calculate s)
  (-> string? exact-integer?)
  )
```

### erlang
```erlang
-spec calculate(S :: unicode:unicode_binary()) -> integer().
calculate(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec calculate(s :: String.t) :: integer
  def calculate(s) do
    
  end
end
```
