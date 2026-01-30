# 678. Valid Parenthesis String

- Difficulty: Medium
- Topics: String, Dynamic Programming, Stack, Greedy
- Slug: valid-parenthesis-string
- Problem ID: 678

## Description
Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.
The following rules define a valid string:
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "()"
Output: true
```

### Example 2
```text
Input: s = "(*)"
Output: true
```

### Example 3
```text
Input: s = "(*))"
Output: true
```


## Constraints
- 1 <= s.length <= 100
- s[i] is '(', ')' or '*'.

## Hints
- Use backtracking to explore all possible combinations of treating '*' as either '(', ')', or an empty string. If any combination leads to a valid string, return true.
- DP[i][j] represents whether the substring s[i:j] is valid.
- Keep track of the count of open parentheses encountered so far. If you encounter a close parenthesis, it should balance with an open parenthesis. Utilize a stack to handle this effectively.
- How about using 2 stacks instead of 1? Think about it.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool checkValidString(string s) {
        
    }
};
```

### java
```java
class Solution {
    public boolean checkValidString(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def checkValidString(self, s):
        """
        :type s: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def checkValidString(self, s: str) -> bool:
```

### c
```c
bool checkValidString(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool CheckValidString(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    
};
```

### typescript
```typescript
function checkValidString(s: string): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function checkValidString($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func checkValidString(_ s: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun checkValidString(s: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool checkValidString(String s) {
    
  }
}
```

### golang
```golang
func checkValidString(s string) bool {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {Boolean}
def check_valid_string(s)
    
end
```

### scala
```scala
object Solution {
    def checkValidString(s: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn check_valid_string(s: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (check-valid-string s)
  (-> string? boolean?)
  )
```

### erlang
```erlang
-spec check_valid_string(S :: unicode:unicode_binary()) -> boolean().
check_valid_string(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec check_valid_string(s :: String.t) :: boolean
  def check_valid_string(s) do
    
  end
end
```
