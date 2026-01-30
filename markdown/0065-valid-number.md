# 65. Valid Number

- Difficulty: Hard
- Topics: String
- Slug: valid-number
- Problem ID: 65

## Description
Given a string s, return whether s is a valid number.

For example, all the following are valid numbers: "2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789", while the following are not valid numbers: "abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53".
Formally, a valid number is defined using one of the following definitions:
An integer number is defined with an optional sign '-' or '+' followed by digits.
A decimal number is defined with an optional sign '-' or '+' followed by one of the following definitions:
An exponent is defined with an exponent notation 'e' or 'E' followed by an integer number.
The digits are defined as one or more digits.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "0"
Output: true
```

### Example 2
```text
Input: s = "e"
Output: false
```

### Example 3
```text
Input: s = "."
Output: false
```


## Constraints
- 1 <= s.length <= 20
- s consists of only English letters (both uppercase and lowercase), digits (0-9), plus '+', minus '-', or dot '.'.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isNumber(string s) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isNumber(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def isNumber(self, s):
        """
        :type s: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isNumber(self, s: str) -> bool:
```

### c
```c
bool isNumber(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsNumber(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    
};
```

### typescript
```typescript
function isNumber(s: string): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function isNumber($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func isNumber(_ s: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isNumber(s: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isNumber(String s) {
    
  }
}
```

### golang
```golang
func isNumber(s string) bool {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {Boolean}
def is_number(s)
    
end
```

### scala
```scala
object Solution {
    def isNumber(s: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_number(s: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-number s)
  (-> string? boolean?)
  )
```

### erlang
```erlang
-spec is_number(S :: unicode:unicode_binary()) -> boolean().
is_number(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_number(s :: String.t) :: boolean
  def is_number(s) do
    
  end
end
```
