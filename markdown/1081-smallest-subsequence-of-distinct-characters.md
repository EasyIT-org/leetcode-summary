# 1081. Smallest Subsequence of Distinct Characters

- Difficulty: Medium
- Topics: String, Stack, Greedy, Monotonic Stack
- Slug: smallest-subsequence-of-distinct-characters
- Problem ID: 1159

## Description
Given a string s, return the lexicographically smallest subsequence of s that contains all the distinct characters of s exactly once.
Example 1:
Example 2:
Constraints:

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
- 1 <= s.length <= 1000
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
    string smallestSubsequence(string s) {
        
    }
};
```

### java
```java
class Solution {
    public String smallestSubsequence(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def smallestSubsequence(self, s):
        """
        :type s: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def smallestSubsequence(self, s: str) -> str:
```

### c
```c
char* smallestSubsequence(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public string SmallestSubsequence(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
    
};
```

### typescript
```typescript
function smallestSubsequence(s: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function smallestSubsequence($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func smallestSubsequence(_ s: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun smallestSubsequence(s: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String smallestSubsequence(String s) {
    
  }
}
```

### golang
```golang
func smallestSubsequence(s string) string {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {String}
def smallest_subsequence(s)
    
end
```

### scala
```scala
object Solution {
    def smallestSubsequence(s: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn smallest_subsequence(s: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (smallest-subsequence s)
  (-> string? string?)
  )
```

### erlang
```erlang
-spec smallest_subsequence(S :: unicode:unicode_binary()) -> unicode:unicode_binary().
smallest_subsequence(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec smallest_subsequence(s :: String.t) :: String.t
  def smallest_subsequence(s) do
    
  end
end
```
