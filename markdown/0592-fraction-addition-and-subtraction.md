# 592. Fraction Addition and Subtraction

- Difficulty: Medium
- Topics: Math, String, Simulation
- Slug: fraction-addition-and-subtraction
- Problem ID: 592

## Description
Given a string expression representing an expression of fraction addition and subtraction, return the calculation result in string format.
The final result should be an irreducible fraction. If your final result is an integer, change it to the format of a fraction that has a denominator 1. So in this case, 2 should be converted to 2/1.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: expression = "-1/2+1/2"
Output: "0/1"
```

### Example 2
```text
Input: expression = "-1/2+1/2+1/3"
Output: "1/3"
```

### Example 3
```text
Input: expression = "1/3-1/2"
Output: "-1/6"
```


## Constraints
- The input string only contains '0' to '9', '/', '+' and '-'. So does the output.
- Each fraction (input and output) has the format ±numerator/denominator. If the first input fraction or the output is positive, then '+' will be omitted.
- The input only contains valid irreducible fractions, where the numerator and denominator of each fraction will always be in the range [1, 10]. If the denominator is 1, it means this fraction is actually an integer in a fraction format defined above.
- The number of given fractions will be in the range [1, 10].
- The numerator and denominator of the final result are guaranteed to be valid and in the range of 32-bit int.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string fractionAddition(string expression) {
        
    }
};
```

### java
```java
class Solution {
    public String fractionAddition(String expression) {
        
    }
}
```

### python
```python
class Solution(object):
    def fractionAddition(self, expression):
        """
        :type expression: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def fractionAddition(self, expression: str) -> str:
```

### c
```c
char* fractionAddition(char* expression) {
    
}
```

### csharp
```csharp
public class Solution {
    public string FractionAddition(string expression) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
    
};
```

### typescript
```typescript
function fractionAddition(expression: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $expression
     * @return String
     */
    function fractionAddition($expression) {
        
    }
}
```

### swift
```swift
class Solution {
    func fractionAddition(_ expression: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun fractionAddition(expression: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String fractionAddition(String expression) {
    
  }
}
```

### golang
```golang
func fractionAddition(expression string) string {
    
}
```

### ruby
```ruby
# @param {String} expression
# @return {String}
def fraction_addition(expression)
    
end
```

### scala
```scala
object Solution {
    def fractionAddition(expression: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn fraction_addition(expression: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (fraction-addition expression)
  (-> string? string?)
  )
```

### erlang
```erlang
-spec fraction_addition(Expression :: unicode:unicode_binary()) -> unicode:unicode_binary().
fraction_addition(Expression) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec fraction_addition(expression :: String.t) :: String.t
  def fraction_addition(expression) do
    
  end
end
```
