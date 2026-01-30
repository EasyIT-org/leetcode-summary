# 1071. Greatest Common Divisor of Strings

- Difficulty: Easy
- Topics: Math, String
- Slug: greatest-common-divisor-of-strings
- Problem ID: 1146

## Description
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
```

### Example 2
```text
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
```

### Example 3
```text
Input: str1 = "LEET", str2 = "CODE"
Output: ""
```


## Constraints
- 1 <= str1.length, str2.length <= 1000
- str1 and str2 consist of English uppercase letters.

## Hints
- The greatest common divisor must be a prefix of each string, so we can try all prefixes.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string gcdOfStrings(string str1, string str2) {
        
    }
};
```

### java
```java
class Solution {
    public String gcdOfStrings(String str1, String str2) {
        
    }
}
```

### python
```python
class Solution(object):
    def gcdOfStrings(self, str1, str2):
        """
        :type str1: str
        :type str2: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
```

### c
```c
char* gcdOfStrings(char* str1, char* str2) {
    
}
```

### csharp
```csharp
public class Solution {
    public string GcdOfStrings(string str1, string str2) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    
};
```

### typescript
```typescript
function gcdOfStrings(str1: string, str2: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $str1
     * @param String $str2
     * @return String
     */
    function gcdOfStrings($str1, $str2) {
        
    }
}
```

### swift
```swift
class Solution {
    func gcdOfStrings(_ str1: String, _ str2: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun gcdOfStrings(str1: String, str2: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String gcdOfStrings(String str1, String str2) {
    
  }
}
```

### golang
```golang
func gcdOfStrings(str1 string, str2 string) string {
    
}
```

### ruby
```ruby
# @param {String} str1
# @param {String} str2
# @return {String}
def gcd_of_strings(str1, str2)
    
end
```

### scala
```scala
object Solution {
    def gcdOfStrings(str1: String, str2: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn gcd_of_strings(str1: String, str2: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (gcd-of-strings str1 str2)
  (-> string? string? string?)
  )
```

### erlang
```erlang
-spec gcd_of_strings(Str1 :: unicode:unicode_binary(), Str2 :: unicode:unicode_binary()) -> unicode:unicode_binary().
gcd_of_strings(Str1, Str2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec gcd_of_strings(str1 :: String.t, str2 :: String.t) :: String.t
  def gcd_of_strings(str1, str2) do
    
  end
end
```
