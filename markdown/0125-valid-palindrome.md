# 125. Valid Palindrome

- Difficulty: Easy
- Topics: Two Pointers, String
- Slug: valid-palindrome
- Problem ID: 125

## Description
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

### Example 2
```text
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

### Example 3
```text
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
```


## Constraints
- 1 <= s.length <= 2 * 105
- s consists only of printable ASCII characters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isPalindrome(string s) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isPalindrome(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isPalindrome(self, s: str) -> bool:
```

### c
```c
bool isPalindrome(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsPalindrome(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
};
```

### typescript
```typescript
function isPalindrome(s: string): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function isPalindrome($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func isPalindrome(_ s: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isPalindrome(s: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isPalindrome(String s) {
    
  }
}
```

### golang
```golang
func isPalindrome(s string) bool {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {Boolean}
def is_palindrome(s)
    
end
```

### scala
```scala
object Solution {
    def isPalindrome(s: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_palindrome(s: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-palindrome s)
  (-> string? boolean?)
  )
```

### erlang
```erlang
-spec is_palindrome(S :: unicode:unicode_binary()) -> boolean().
is_palindrome(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_palindrome(s :: String.t) :: boolean
  def is_palindrome(s) do
    
  end
end
```
