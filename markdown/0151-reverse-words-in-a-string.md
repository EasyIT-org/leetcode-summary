# 151. Reverse Words in a String

- Difficulty: Medium
- Topics: Two Pointers, String
- Slug: reverse-words-in-a-string
- Problem ID: 151

## Description
Given an input string s, reverse the order of the words.
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.
Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
Example 1:
Example 2:
Example 3:
Constraints:
Follow-up: If the string data type is mutable in your language, can you solve it in-place with O(1) extra space?

## Examples
### Example 1
```text
Input: s = "the sky is blue"
Output: "blue is sky the"
```

### Example 2
```text
Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
```

### Example 3
```text
Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
```


## Constraints
- 1 <= s.length <= 104
- s contains English letters (upper-case and lower-case), digits, and spaces ' '.
- There is at least one word in s.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string reverseWords(string s) {
        
    }
};
```

### java
```java
class Solution {
    public String reverseWords(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def reverseWords(self, s):
        """
        :type s: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def reverseWords(self, s: str) -> str:
```

### c
```c
char* reverseWords(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public string ReverseWords(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
};
```

### typescript
```typescript
function reverseWords(s: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function reverseWords($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func reverseWords(_ s: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun reverseWords(s: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String reverseWords(String s) {
    
  }
}
```

### golang
```golang
func reverseWords(s string) string {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {String}
def reverse_words(s)
    
end
```

### scala
```scala
object Solution {
    def reverseWords(s: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn reverse_words(s: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (reverse-words s)
  (-> string? string?)
  )
```

### erlang
```erlang
-spec reverse_words(S :: unicode:unicode_binary()) -> unicode:unicode_binary().
reverse_words(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec reverse_words(s :: String.t) :: String.t
  def reverse_words(s) do
    
  end
end
```
