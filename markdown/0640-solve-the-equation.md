# 640. Solve the Equation

- Difficulty: Medium
- Topics: Math, String, Simulation
- Slug: solve-the-equation
- Problem ID: 640

## Description
Solve a given equation and return the value of 'x' in the form of a string "x=#value". The equation contains only '+', '-' operation, the variable 'x' and its coefficient. You should return "No solution" if there is no solution for the equation, or "Infinite solutions" if there are infinite solutions for the equation.
If there is exactly one solution for the equation, we ensure that the value of 'x' is an integer.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: equation = "x+5-3+x=6+x-2"
Output: "x=2"
```

### Example 2
```text
Input: equation = "x=x"
Output: "Infinite solutions"
```

### Example 3
```text
Input: equation = "2x=x"
Output: "x=0"
```


## Constraints
- 3 <= equation.length <= 1000
- equation has exactly one '='.
- equation consists of integers with an absolute value in the range [0, 100] without any leading zeros, and the variable 'x'.
- The input is generated that if there is a single solution, it will be an integer.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string solveEquation(string equation) {
        
    }
};
```

### java
```java
class Solution {
    public String solveEquation(String equation) {
        
    }
}
```

### python
```python
class Solution(object):
    def solveEquation(self, equation):
        """
        :type equation: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def solveEquation(self, equation: str) -> str:
```

### c
```c
char* solveEquation(char* equation) {
    
}
```

### csharp
```csharp
public class Solution {
    public string SolveEquation(string equation) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
    
};
```

### typescript
```typescript
function solveEquation(equation: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $equation
     * @return String
     */
    function solveEquation($equation) {
        
    }
}
```

### swift
```swift
class Solution {
    func solveEquation(_ equation: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun solveEquation(equation: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String solveEquation(String equation) {
    
  }
}
```

### golang
```golang
func solveEquation(equation string) string {
    
}
```

### ruby
```ruby
# @param {String} equation
# @return {String}
def solve_equation(equation)
    
end
```

### scala
```scala
object Solution {
    def solveEquation(equation: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn solve_equation(equation: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (solve-equation equation)
  (-> string? string?)
  )
```

### erlang
```erlang
-spec solve_equation(Equation :: unicode:unicode_binary()) -> unicode:unicode_binary().
solve_equation(Equation) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec solve_equation(equation :: String.t) :: String.t
  def solve_equation(equation) do
    
  end
end
```
