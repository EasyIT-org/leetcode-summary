# 537. Complex Number Multiplication

- Difficulty: Medium
- Topics: Math, String, Simulation
- Slug: complex-number-multiplication
- Problem ID: 537

## Description
A complex number can be represented as a string on the form "real+imaginaryi" where:
Given two complex numbers num1 and num2 as strings, return a string of the complex number that represents their multiplications.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: num1 = "1+1i", num2 = "1+1i"
Output: "0+2i"
Explanation: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i, and you need convert it to the form of 0+2i.
```

### Example 2
```text
Input: num1 = "1+-1i", num2 = "1+-1i"
Output: "0+-2i"
Explanation: (1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i, and you need convert it to the form of 0+-2i.
```


## Constraints
- num1 and num2 are valid complex numbers.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string complexNumberMultiply(string num1, string num2) {
        
    }
};
```

### java
```java
class Solution {
    public String complexNumberMultiply(String num1, String num2) {
        
    }
}
```

### python
```python
class Solution(object):
    def complexNumberMultiply(self, num1, num2):
        """
        :type num1: str
        :type num2: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def complexNumberMultiply(self, num1: str, num2: str) -> str:
```

### c
```c
char* complexNumberMultiply(char* num1, char* num2) {
    
}
```

### csharp
```csharp
public class Solution {
    public string ComplexNumberMultiply(string num1, string num2) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function(num1, num2) {
    
};
```

### typescript
```typescript
function complexNumberMultiply(num1: string, num2: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $num1
     * @param String $num2
     * @return String
     */
    function complexNumberMultiply($num1, $num2) {
        
    }
}
```

### swift
```swift
class Solution {
    func complexNumberMultiply(_ num1: String, _ num2: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun complexNumberMultiply(num1: String, num2: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String complexNumberMultiply(String num1, String num2) {
    
  }
}
```

### golang
```golang
func complexNumberMultiply(num1 string, num2 string) string {
    
}
```

### ruby
```ruby
# @param {String} num1
# @param {String} num2
# @return {String}
def complex_number_multiply(num1, num2)
    
end
```

### scala
```scala
object Solution {
    def complexNumberMultiply(num1: String, num2: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn complex_number_multiply(num1: String, num2: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (complex-number-multiply num1 num2)
  (-> string? string? string?)
  )
```

### erlang
```erlang
-spec complex_number_multiply(Num1 :: unicode:unicode_binary(), Num2 :: unicode:unicode_binary()) -> unicode:unicode_binary().
complex_number_multiply(Num1, Num2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec complex_number_multiply(num1 :: String.t, num2 :: String.t) :: String.t
  def complex_number_multiply(num1, num2) do
    
  end
end
```
