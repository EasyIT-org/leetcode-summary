# 166. Fraction to Recurring Decimal

- Difficulty: Medium
- Topics: Hash Table, Math, String
- Slug: fraction-to-recurring-decimal
- Problem ID: 166

## Description
Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.
If the fractional part is repeating, enclose the repeating part in parentheses.
If multiple answers are possible, return any of them.
It is guaranteed that the length of the answer string is less than 104 for all the given inputs.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: numerator = 1, denominator = 2
Output: "0.5"
```

### Example 2
```text
Input: numerator = 2, denominator = 1
Output: "2"
```

### Example 3
```text
Input: numerator = 4, denominator = 333
Output: "0.(012)"
```


## Constraints
- -231 <= numerator, denominator <= 231 - 1
- denominator != 0

## Hints
- No scary math, just apply elementary math knowledge. Still remember how to perform a <i>long division</i>?
- Try a long division on 4/9, the repeating part is obvious. Now try 4/333. Do you see a pattern?
- Notice that once the remainder starts repeating, so does the divided result.
- Be wary of edge cases! List out as many test cases as you can think of and test your code thoroughly.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string fractionToDecimal(int numerator, int denominator) {
        
    }
};
```

### java
```java
class Solution {
    public String fractionToDecimal(int numerator, int denominator) {
        
    }
}
```

### python
```python
class Solution(object):
    def fractionToDecimal(self, numerator, denominator):
        """
        :type numerator: int
        :type denominator: int
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def fractionToDecimal(self, numerator: int, denominator: int) -> str:
```

### c
```c
char* fractionToDecimal(int numerator, int denominator) {
    
}
```

### csharp
```csharp
public class Solution {
    public string FractionToDecimal(int numerator, int denominator) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    
};
```

### typescript
```typescript
function fractionToDecimal(numerator: number, denominator: number): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $numerator
     * @param Integer $denominator
     * @return String
     */
    function fractionToDecimal($numerator, $denominator) {
        
    }
}
```

### swift
```swift
class Solution {
    func fractionToDecimal(_ numerator: Int, _ denominator: Int) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun fractionToDecimal(numerator: Int, denominator: Int): String {
        
    }
}
```

### dart
```dart
class Solution {
  String fractionToDecimal(int numerator, int denominator) {
    
  }
}
```

### golang
```golang
func fractionToDecimal(numerator int, denominator int) string {
    
}
```

### ruby
```ruby
# @param {Integer} numerator
# @param {Integer} denominator
# @return {String}
def fraction_to_decimal(numerator, denominator)
    
end
```

### scala
```scala
object Solution {
    def fractionToDecimal(numerator: Int, denominator: Int): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn fraction_to_decimal(numerator: i32, denominator: i32) -> String {
        
    }
}
```

### racket
```racket
(define/contract (fraction-to-decimal numerator denominator)
  (-> exact-integer? exact-integer? string?)
  )
```

### erlang
```erlang
-spec fraction_to_decimal(Numerator :: integer(), Denominator :: integer()) -> unicode:unicode_binary().
fraction_to_decimal(Numerator, Denominator) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec fraction_to_decimal(numerator :: integer, denominator :: integer) :: String.t
  def fraction_to_decimal(numerator, denominator) do
    
  end
end
```
