# 316. Remove Duplicate Letters

- Difficulty: Medium
- Topics: String, Stack, Greedy, Monotonic Stack
- Slug: remove-duplicate-letters
- Problem ID: 316

## Description
Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.
Example 1:
Example 2:
Constraints:
Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

## Examples
### Example 1
```text
Input: s = "bcabc"
Output: "abc"
```

### Example 2
```text
Input: s = "cbacdcbc"
Output: "acdb"
```


## Constraints
- 1 <= s.length <= 104
- s consists of lowercase English letters.

## Hints
- Greedily try to add one missing character. How to check if adding some character will not cause problems ? Use bit-masks to check whether you will be able to complete the sub-sequence if you add the character at some index i.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string removeDuplicateLetters(string s) {
        
    }
};
```

### java
```java
class Solution {
    public String removeDuplicateLetters(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def removeDuplicateLetters(self, s):
        """
        :type s: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
```

### c
```c
char* removeDuplicateLetters(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public string RemoveDuplicateLetters(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    
};
```

### typescript
```typescript
function removeDuplicateLetters(s: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function removeDuplicateLetters($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func removeDuplicateLetters(_ s: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun removeDuplicateLetters(s: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String removeDuplicateLetters(String s) {
    
  }
}
```

### golang
```golang
func removeDuplicateLetters(s string) string {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {String}
def remove_duplicate_letters(s)
    
end
```

### scala
```scala
object Solution {
    def removeDuplicateLetters(s: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn remove_duplicate_letters(s: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (remove-duplicate-letters s)
  (-> string? string?)
  )
```

### erlang
```erlang
-spec remove_duplicate_letters(S :: unicode:unicode_binary()) -> unicode:unicode_binary().
remove_duplicate_letters(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec remove_duplicate_letters(s :: String.t) :: String.t
  def remove_duplicate_letters(s) do
    
  end
end
```
