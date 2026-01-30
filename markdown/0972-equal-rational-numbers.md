# 972. Equal Rational Numbers

- Difficulty: Hard
- Topics: Math, String
- Slug: equal-rational-numbers
- Problem ID: 1012

## Description
Given two strings s and t, each of which represents a non-negative rational number, return true if and only if they represent the same number. The strings may use parentheses to denote the repeating part of the rational number.
A rational number can be represented using up to three parts: <IntegerPart>, <NonRepeatingPart>, and a <RepeatingPart>. The number will be represented in one of the following three ways:
The repeating portion of a decimal expansion is conventionally denoted within a pair of round brackets. For example:
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "0.(52)", t = "0.5(25)"
Output: true
Explanation: Because "0.(52)" represents 0.52525252..., and "0.5(25)" represents 0.52525252525..... , the strings represent the same number.
```

### Example 2
```text
Input: s = "0.1666(6)", t = "0.166(66)"
Output: true
```

### Example 3
```text
Input: s = "0.9(9)", t = "1."
Output: true
Explanation: "0.9(9)" represents 0.999999999... repeated forever, which equals 1.  [See this link for an explanation.]
"1." represents the number 1, which is formed correctly: (IntegerPart) = "1" and (NonRepeatingPart) = "".
```


## Constraints
- Each part consists only of digits.
- The <IntegerPart> does not have leading zeros (except for the zero itself).
- 1 <= <IntegerPart>.length <= 4
- 0 <= <NonRepeatingPart>.length <= 4
- 1 <= <RepeatingPart>.length <= 4

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isRationalEqual(string s, string t) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isRationalEqual(String s, String t) {
        
    }
}
```

### python
```python
class Solution(object):
    def isRationalEqual(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isRationalEqual(self, s: str, t: str) -> bool:
```

### c
```c
bool isRationalEqual(char* s, char* t) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsRationalEqual(string s, string t) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isRationalEqual = function(s, t) {
    
};
```

### typescript
```typescript
function isRationalEqual(s: string, t: string): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @param String $t
     * @return Boolean
     */
    function isRationalEqual($s, $t) {
        
    }
}
```

### swift
```swift
class Solution {
    func isRationalEqual(_ s: String, _ t: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isRationalEqual(s: String, t: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isRationalEqual(String s, String t) {
    
  }
}
```

### golang
```golang
func isRationalEqual(s string, t string) bool {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {String} t
# @return {Boolean}
def is_rational_equal(s, t)
    
end
```

### scala
```scala
object Solution {
    def isRationalEqual(s: String, t: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_rational_equal(s: String, t: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-rational-equal s t)
  (-> string? string? boolean?)
  )
```

### erlang
```erlang
-spec is_rational_equal(S :: unicode:unicode_binary(), T :: unicode:unicode_binary()) -> boolean().
is_rational_equal(S, T) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_rational_equal(s :: String.t, t :: String.t) :: boolean
  def is_rational_equal(s, t) do
    
  end
end
```
