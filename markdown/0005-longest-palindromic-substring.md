# 5. Longest Palindromic Substring

- Difficulty: Medium
- Topics: Two Pointers, String, Dynamic Programming
- Slug: longest-palindromic-substring
- Problem ID: 5

## Description
Given a string s, return the longest palindromic substring in s.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
```

### Example 2
```text
Input: s = "cbbd"
Output: "bb"
```


## Constraints
- 1 <= s.length <= 1000
- s consist of only digits and English letters.

## Hints
- How can we reuse a previously computed palindrome to compute a larger palindrome?
- If “aba” is a palindrome, is “xabax” a palindrome? Similarly is “xabay” a palindrome?
- Complexity based hint:</br>
If we use brute-force and check whether for every start and end position a substring is a palindrome we have O(n^2) start - end pairs and O(n) palindromic checks. Can we reduce the time for palindromic checks to O(1) by reusing some previous computation.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string longestPalindrome(string s) {
        
    }
};
```

### java
```java
class Solution {
    public String longestPalindrome(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def longestPalindrome(self, s: str) -> str:
```

### c
```c
char* longestPalindrome(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public string LongestPalindrome(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
};
```

### typescript
```typescript
function longestPalindrome(s: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function longestPalindrome($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func longestPalindrome(_ s: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun longestPalindrome(s: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String longestPalindrome(String s) {
    
  }
}
```

### golang
```golang
func longestPalindrome(s string) string {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {String}
def longest_palindrome(s)
    
end
```

### scala
```scala
object Solution {
    def longestPalindrome(s: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn longest_palindrome(s: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (longest-palindrome s)
  (-> string? string?)
  )
```

### erlang
```erlang
-spec longest_palindrome(S :: unicode:unicode_binary()) -> unicode:unicode_binary().
longest_palindrome(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec longest_palindrome(s :: String.t) :: String.t
  def longest_palindrome(s) do
    
  end
end
```
