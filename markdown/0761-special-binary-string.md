# 761. Special Binary String

- Difficulty: Hard
- Topics: String, Recursion
- Slug: special-binary-string
- Problem ID: 763

## Description
Special binary strings are binary strings with the following two properties:
You are given a special binary string s.
A move consists of choosing two consecutive, non-empty, special substrings of s, and swapping them. Two strings are consecutive if the last character of the first string is exactly one index before the first character of the second string.
Return the lexicographically largest resulting string possible after applying the mentioned operations on the string.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "11011000"
Output: "11100100"
Explanation: The strings "10" [occuring at s[1]] and "1100" [at s[3]] are swapped.
This is the lexicographically largest string possible after some number of swaps.
```

### Example 2
```text
Input: s = "10"
Output: "10"
```


## Constraints
- 1 <= s.length <= 50
- s[i] is either '0' or '1'.
- s is a special binary string.

## Hints
- Draw a line from (x, y) to (x+1, y+1) if we see a "1", else to (x+1, y-1).
A special substring is just a line that starts and ends at the same y-coordinate, and that is the lowest y-coordinate reached.
Call a mountain a special substring with no special prefixes - ie. only at the beginning and end is the lowest y-coordinate reached.
If F is the answer function, and S has mountain decomposition M1,M2,M3,...,Mk,  then the answer is:
reverse_sorted(F(M1), F(M2), ..., F(Mk)).
However, you'll also need to deal with the case that S is a mountain, such as 11011000 -> 11100100.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string makeLargestSpecial(string s) {
        
    }
};
```

### java
```java
class Solution {
    public String makeLargestSpecial(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def makeLargestSpecial(self, s):
        """
        :type s: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def makeLargestSpecial(self, s: str) -> str:
```

### c
```c
char* makeLargestSpecial(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public string MakeLargestSpecial(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {string}
 */
var makeLargestSpecial = function(s) {
    
};
```

### typescript
```typescript
function makeLargestSpecial(s: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function makeLargestSpecial($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func makeLargestSpecial(_ s: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun makeLargestSpecial(s: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String makeLargestSpecial(String s) {
    
  }
}
```

### golang
```golang
func makeLargestSpecial(s string) string {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {String}
def make_largest_special(s)
    
end
```

### scala
```scala
object Solution {
    def makeLargestSpecial(s: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn make_largest_special(s: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (make-largest-special s)
  (-> string? string?)
  )
```

### erlang
```erlang
-spec make_largest_special(S :: unicode:unicode_binary()) -> unicode:unicode_binary().
make_largest_special(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec make_largest_special(s :: String.t) :: String.t
  def make_largest_special(s) do
    
  end
end
```
