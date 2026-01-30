# 420. Strong Password Checker

- Difficulty: Hard
- Topics: String, Greedy, Heap (Priority Queue)
- Slug: strong-password-checker
- Problem ID: 420

## Description
A password is considered strong if the below conditions are all met:
Given a string password, return the minimum number of steps required to make password strong. if password is already strong, return 0.
In one step, you can:
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: password = "a"
Output: 5
```

### Example 2
```text
Input: password = "aA1"
Output: 3
```

### Example 3
```text
Input: password = "1337C0d3"
Output: 0
```


## Constraints
- 1 <= password.length <= 50
- password consists of letters, digits, dot '.' or exclamation mark '!'.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int strongPasswordChecker(string password) {
        
    }
};
```

### java
```java
class Solution {
    public int strongPasswordChecker(String password) {
        
    }
}
```

### python
```python
class Solution(object):
    def strongPasswordChecker(self, password):
        """
        :type password: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def strongPasswordChecker(self, password: str) -> int:
```

### c
```c
int strongPasswordChecker(char* password) {
    
}
```

### csharp
```csharp
public class Solution {
    public int StrongPasswordChecker(string password) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} password
 * @return {number}
 */
var strongPasswordChecker = function(password) {
    
};
```

### typescript
```typescript
function strongPasswordChecker(password: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $password
     * @return Integer
     */
    function strongPasswordChecker($password) {
        
    }
}
```

### swift
```swift
class Solution {
    func strongPasswordChecker(_ password: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun strongPasswordChecker(password: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int strongPasswordChecker(String password) {
    
  }
}
```

### golang
```golang
func strongPasswordChecker(password string) int {
    
}
```

### ruby
```ruby
# @param {String} password
# @return {Integer}
def strong_password_checker(password)
    
end
```

### scala
```scala
object Solution {
    def strongPasswordChecker(password: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn strong_password_checker(password: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (strong-password-checker password)
  (-> string? exact-integer?)
  )
```

### erlang
```erlang
-spec strong_password_checker(Password :: unicode:unicode_binary()) -> integer().
strong_password_checker(Password) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec strong_password_checker(password :: String.t) :: integer
  def strong_password_checker(password) do
    
  end
end
```
