# 227. Basic Calculator II

- Difficulty: Medium
- Topics: Math, String, Stack
- Slug: basic-calculator-ii
- Problem ID: 227

## Description
Given a string s which represents an expression, evaluate this expression and return its value.
The integer division should truncate toward zero.
You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].
Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "3+2*2"
Output: 7
```

### Example 2
```text
Input: s = " 3/2 "
Output: 1
```

### Example 3
```text
Input: s = " 3+5 / 2 "
Output: 5
```


## Constraints
- 1 <= s.length <= 3 * 105
- s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
- s represents a valid expression.
- All the integers in the expression are non-negative integers in the range [0, 231 - 1].
- The answer is guaranteed to fit in a 32-bit integer.

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
