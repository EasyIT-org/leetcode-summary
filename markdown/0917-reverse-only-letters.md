# 917. Reverse Only Letters

- Difficulty: Easy
- Topics: Two Pointers, String
- Slug: reverse-only-letters
- Problem ID: 953

## Description
Given a string s, reverse the string according to the following rules:
Return s after reversing it.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "ab-cd"
Output: "dc-ba"
```

### Example 2
```text
Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
```

### Example 3
```text
Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
```


## Constraints
- 1 <= s.length <= 100
- s consists of characters with ASCII values in the range [33, 122].
- s does not contain '\"' or '\\'.

## Hints
- This problem is exactly like reversing a normal string except that there are certain characters that we have to simply skip. That should be easy enough to do if you know how to reverse a string using the two-pointer approach.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string reverseOnlyLetters(string s) {
        
    }
};
```

### java
```java
class Solution {
    public String reverseOnlyLetters(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def reverseOnlyLetters(self, s):
        """
        :type s: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def reverseOnlyLetters(self, s: str) -> str:
```

### c
```c
char* reverseOnlyLetters(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public string ReverseOnlyLetters(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    
};
```

### typescript
```typescript
function reverseOnlyLetters(s: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function reverseOnlyLetters($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func reverseOnlyLetters(_ s: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun reverseOnlyLetters(s: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String reverseOnlyLetters(String s) {
    
  }
}
```

### golang
```golang
func reverseOnlyLetters(s string) string {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {String}
def reverse_only_letters(s)
    
end
```

### scala
```scala
object Solution {
    def reverseOnlyLetters(s: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn reverse_only_letters(s: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (reverse-only-letters s)
  (-> string? string?)
  )
```

### erlang
```erlang
-spec reverse_only_letters(S :: unicode:unicode_binary()) -> unicode:unicode_binary().
reverse_only_letters(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec reverse_only_letters(s :: String.t) :: String.t
  def reverse_only_letters(s) do
    
  end
end
```
