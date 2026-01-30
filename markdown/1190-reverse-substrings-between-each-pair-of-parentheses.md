# 1190. Reverse Substrings Between Each Pair of Parentheses

- Difficulty: Medium
- Topics: String, Stack
- Slug: reverse-substrings-between-each-pair-of-parentheses
- Problem ID: 1298

## Description
You are given a string s that consists of lower case English letters and brackets.
Reverse the strings in each pair of matching parentheses, starting from the innermost one.
Your result should not contain any brackets.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "(abcd)"
Output: "dcba"
```

### Example 2
```text
Input: s = "(u(love)i)"
Output: "iloveu"
Explanation: The substring "love" is reversed first, then the whole string is reversed.
```

### Example 3
```text
Input: s = "(ed(et(oc))el)"
Output: "leetcode"
Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.
```


## Constraints
- 1 <= s.length <= 2000
- s only contains lower case English characters and parentheses.
- It is guaranteed that all parentheses are balanced.

## Hints
- Find all brackets in the string.
- Does the order of the reverse matter ?
- The order does not matter.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string reverseParentheses(string s) {
        
    }
};
```

### java
```java
class Solution {
    public String reverseParentheses(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def reverseParentheses(self, s):
        """
        :type s: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def reverseParentheses(self, s: str) -> str:
```

### c
```c
char* reverseParentheses(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public string ReverseParentheses(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    
};
```

### typescript
```typescript
function reverseParentheses(s: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function reverseParentheses($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func reverseParentheses(_ s: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun reverseParentheses(s: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String reverseParentheses(String s) {
    
  }
}
```

### golang
```golang
func reverseParentheses(s string) string {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {String}
def reverse_parentheses(s)
    
end
```

### scala
```scala
object Solution {
    def reverseParentheses(s: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn reverse_parentheses(s: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (reverse-parentheses s)
  (-> string? string?)
  )
```

### erlang
```erlang
-spec reverse_parentheses(S :: unicode:unicode_binary()) -> unicode:unicode_binary().
reverse_parentheses(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec reverse_parentheses(s :: String.t) :: String.t
  def reverse_parentheses(s) do
    
  end
end
```
