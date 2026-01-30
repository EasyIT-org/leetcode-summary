# 394. Decode String

- Difficulty: Medium
- Topics: String, Stack, Recursion
- Slug: decode-string
- Problem ID: 394

## Description
Given an encoded string, return its decoded string.
The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].
The test cases are generated so that the length of the output will never exceed 105.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "3[a]2[bc]"
Output: "aaabcbc"
```

### Example 2
```text
Input: s = "3[a2[c]]"
Output: "accaccacc"
```

### Example 3
```text
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
```


## Constraints
- 1 <= s.length <= 30
- s consists of lowercase English letters, digits, and square brackets '[]'.
- s is guaranteed to be a valid input.
- All the integers in s are in the range [1, 300].

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string decodeString(string s) {
        
    }
};
```

### java
```java
class Solution {
    public String decodeString(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def decodeString(self, s):
        """
        :type s: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def decodeString(self, s: str) -> str:
```

### c
```c
char* decodeString(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public string DecodeString(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    
};
```

### typescript
```typescript
function decodeString(s: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function decodeString($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func decodeString(_ s: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun decodeString(s: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String decodeString(String s) {
    
  }
}
```

### golang
```golang
func decodeString(s string) string {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {String}
def decode_string(s)
    
end
```

### scala
```scala
object Solution {
    def decodeString(s: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn decode_string(s: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (decode-string s)
  (-> string? string?)
  )
```

### erlang
```erlang
-spec decode_string(S :: unicode:unicode_binary()) -> unicode:unicode_binary().
decode_string(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec decode_string(s :: String.t) :: String.t
  def decode_string(s) do
    
  end
end
```
