# 87. Scramble String

- Difficulty: Hard
- Topics: String, Dynamic Programming
- Slug: scramble-string
- Problem ID: 87

## Description
We can scramble a string s to get a string t using the following algorithm:
Given two strings s1 and s2 of the same length, return true if s2 is a scrambled string of s1, otherwise, return false.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s1 = "great", s2 = "rgeat"
Output: true
Explanation: One possible scenario applied on s1 is:
"great" --> "gr/eat" // divide at random index.
"gr/eat" --> "gr/eat" // random decision is not to swap the two substrings and keep them in order.
"gr/eat" --> "g/r / e/at" // apply the same algorithm recursively on both substrings. divide at random index each of them.
"g/r / e/at" --> "r/g / e/at" // random decision was to swap the first substring and to keep the second substring in the same order.
"r/g / e/at" --> "r/g / e/ a/t" // again apply the algorithm recursively, divide "at" to "a/t".
"r/g / e/ a/t" --> "r/g / e/ a/t" // random decision is to keep both substrings in the same order.
The algorithm stops now, and the result string is "rgeat" which is s2.
As one possible scenario led s1 to be scrambled to s2, we return true.
```

### Example 2
```text
Input: s1 = "abcde", s2 = "caebd"
Output: false
```

### Example 3
```text
Input: s1 = "a", s2 = "a"
Output: true
```


## Constraints
- s1.length == s2.length
- 1 <= s1.length <= 30
- s1 and s2 consist of lowercase English letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isScramble(string s1, string s2) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isScramble(String s1, String s2) {
        
    }
}
```

### python
```python
class Solution(object):
    def isScramble(self, s1, s2):
        """
        :type s1: str
        :type s2: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isScramble(self, s1: str, s2: str) -> bool:
```

### c
```c
bool isScramble(char* s1, char* s2) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsScramble(string s1, string s2) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    
};
```

### typescript
```typescript
function isScramble(s1: string, s2: string): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s1
     * @param String $s2
     * @return Boolean
     */
    function isScramble($s1, $s2) {
        
    }
}
```

### swift
```swift
class Solution {
    func isScramble(_ s1: String, _ s2: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isScramble(s1: String, s2: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isScramble(String s1, String s2) {
    
  }
}
```

### golang
```golang
func isScramble(s1 string, s2 string) bool {
    
}
```

### ruby
```ruby
# @param {String} s1
# @param {String} s2
# @return {Boolean}
def is_scramble(s1, s2)
    
end
```

### scala
```scala
object Solution {
    def isScramble(s1: String, s2: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_scramble(s1: String, s2: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-scramble s1 s2)
  (-> string? string? boolean?)
  )
```

### erlang
```erlang
-spec is_scramble(S1 :: unicode:unicode_binary(), S2 :: unicode:unicode_binary()) -> boolean().
is_scramble(S1, S2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_scramble(s1 :: String.t, s2 :: String.t) :: boolean
  def is_scramble(s1, s2) do
    
  end
end
```
