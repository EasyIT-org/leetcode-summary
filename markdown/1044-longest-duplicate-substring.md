# 1044. Longest Duplicate Substring

- Difficulty: Hard
- Topics: String, Binary Search, Sliding Window, Rolling Hash, Suffix Array, Hash Function
- Slug: longest-duplicate-substring
- Problem ID: 1122

## Description
Given a string s, consider all duplicated substrings: (contiguous) substrings of s that occur 2 or more times. The occurrences may overlap.
Return any duplicated substring that has the longest possible length. If s does not have a duplicated substring, the answer is "".
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "banana"
Output: "ana"
```

### Example 2
```text
Input: s = "abcd"
Output: ""
```


## Constraints
- 2 <= s.length <= 3 * 104
- s consists of lowercase English letters.

## Hints
- Binary search for the length of the answer.  (If there's an answer of length 10, then there are answers of length 9, 8, 7, ...)
- To check whether an answer of length K exists, we can use Rabin-Karp 's algorithm.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string longestDupSubstring(string s) {
        
    }
};
```

### java
```java
class Solution {
    public String longestDupSubstring(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def longestDupSubstring(self, s):
        """
        :type s: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def longestDupSubstring(self, s: str) -> str:
```

### c
```c
char* longestDupSubstring(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public string LongestDupSubstring(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function(s) {
    
};
```

### typescript
```typescript
function longestDupSubstring(s: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function longestDupSubstring($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func longestDupSubstring(_ s: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun longestDupSubstring(s: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String longestDupSubstring(String s) {
    
  }
}
```

### golang
```golang
func longestDupSubstring(s string) string {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {String}
def longest_dup_substring(s)
    
end
```

### scala
```scala
object Solution {
    def longestDupSubstring(s: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn longest_dup_substring(s: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (longest-dup-substring s)
  (-> string? string?)
  )
```

### erlang
```erlang
-spec longest_dup_substring(S :: unicode:unicode_binary()) -> unicode:unicode_binary().
longest_dup_substring(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec longest_dup_substring(s :: String.t) :: String.t
  def longest_dup_substring(s) do
    
  end
end
```
