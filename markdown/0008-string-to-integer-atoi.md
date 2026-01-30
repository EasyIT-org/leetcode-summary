# 8. String to Integer (atoi)

- Difficulty: Medium
- Topics: String
- Slug: string-to-integer-atoi
- Problem ID: 8

## Description
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.
The algorithm for myAtoi(string s) is as follows:
Return the integer as the final result.
Example 1:
Example 2:
Example 3:
Example 4:
Example 5:
Constraints:

## Examples
### Example 1
```text
The underlined characters are what is read in and the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "42" ("42" is read in)
           ^
```

### Example 2
```text
Step 1: "   -042" (leading whitespace is read and ignored)
            ^
Step 2: "   -042" ('-' is read, so the result should be negative)
             ^
Step 3: "   -042" ("042" is read in, leading zeros ignored in the result)
               ^
```

### Example 3
```text
Step 1: "1337c0d3" (no characters read because there is no leading whitespace)
         ^
Step 2: "1337c0d3" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "1337c0d3" ("1337" is read in; reading stops because the next character is a non-digit)
             ^
```

### Example 4
```text
Step 1: "0-1" (no characters read because there is no leading whitespace)
         ^
Step 2: "0-1" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "0-1" ("0" is read in; reading stops because the next character is a non-digit)
          ^
```


## Constraints
- 0 <= s.length <= 200
- s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int myAtoi(string s) {
        
    }
};
```

### java
```java
class Solution {
    public int myAtoi(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def myAtoi(self, s):
        """
        :type s: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def myAtoi(self, s: str) -> int:
```

### c
```c
int myAtoi(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MyAtoi(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    
};
```

### typescript
```typescript
function myAtoi(s: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function myAtoi($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func myAtoi(_ s: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun myAtoi(s: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int myAtoi(String s) {
    
  }
}
```

### golang
```golang
func myAtoi(s string) int {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {Integer}
def my_atoi(s)
    
end
```

### scala
```scala
object Solution {
    def myAtoi(s: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn my_atoi(s: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (my-atoi s)
  (-> string? exact-integer?)
  )
```

### erlang
```erlang
-spec my_atoi(S :: unicode:unicode_binary()) -> integer().
my_atoi(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec my_atoi(s :: String.t) :: integer
  def my_atoi(s) do
    
  end
end
```
