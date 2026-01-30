# 664. Strange Printer

- Difficulty: Hard
- Topics: String, Dynamic Programming
- Slug: strange-printer
- Problem ID: 664

## Description
There is a strange printer with the following two special properties:
Given a string s, return the minimum number of turns the printer needed to print it.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "aaabbb"
Output: 2
Explanation: Print "aaa" first and then print "bbb".
```

### Example 2
```text
Input: s = "aba"
Output: 2
Explanation: Print "aaa" first and then print "b" from the second place of the string, which will cover the existing character 'a'.
```


## Constraints
- 1 <= s.length <= 100
- s consists of lowercase English letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int strangePrinter(string s) {
        
    }
};
```

### java
```java
class Solution {
    public int strangePrinter(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def strangePrinter(self, s):
        """
        :type s: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def strangePrinter(self, s: str) -> int:
```

### c
```c
int strangePrinter(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public int StrangePrinter(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
    
};
```

### typescript
```typescript
function strangePrinter(s: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function strangePrinter($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func strangePrinter(_ s: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun strangePrinter(s: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int strangePrinter(String s) {
    
  }
}
```

### golang
```golang
func strangePrinter(s string) int {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {Integer}
def strange_printer(s)
    
end
```

### scala
```scala
object Solution {
    def strangePrinter(s: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn strange_printer(s: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (strange-printer s)
  (-> string? exact-integer?)
  )
```

### erlang
```erlang
-spec strange_printer(S :: unicode:unicode_binary()) -> integer().
strange_printer(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec strange_printer(s :: String.t) :: integer
  def strange_printer(s) do
    
  end
end
```
