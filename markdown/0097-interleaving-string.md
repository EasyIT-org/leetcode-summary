# 97. Interleaving String

- Difficulty: Medium
- Topics: String, Dynamic Programming
- Slug: interleaving-string
- Problem ID: 97

## Description
Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.
An interleaving of two strings s and t is a configuration where s and t are divided into n and m substrings respectively, such that:
Note: a + b is the concatenation of strings a and b.
Example 1:
Example 2:
Example 3:
Constraints:
Follow up: Could you solve it using only O(s2.length) additional memory space?

## Examples
### Example 1
```text
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true
Explanation: One way to obtain s3 is:
Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
Since s3 can be obtained by interleaving s1 and s2, we return true.
```
Images:
- https://assets.leetcode.com/uploads/2020/09/02/interleave.jpg

### Example 2
```text
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false
Explanation: Notice how it is impossible to interleave s2 with any other string to obtain s3.
```
Images:
- https://assets.leetcode.com/uploads/2020/09/02/interleave.jpg

### Example 3
```text
Input: s1 = "", s2 = "", s3 = ""
Output: true
```
Images:
- https://assets.leetcode.com/uploads/2020/09/02/interleave.jpg


## Constraints
- 0 <= s1.length, s2.length <= 100
- 0 <= s3.length <= 200
- s1, s2, and s3 consist of lowercase English letters.

## Hints
(none)

## Follow Ups
- Could you solve it using only O(s2.length) additional memory space?

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isInterleave(string s1, string s2, string s3) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isInterleave(String s1, String s2, String s3) {
        
    }
}
```

### python
```python
class Solution(object):
    def isInterleave(self, s1, s2, s3):
        """
        :type s1: str
        :type s2: str
        :type s3: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
```

### c
```c
bool isInterleave(char* s1, char* s2, char* s3) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsInterleave(string s1, string s2, string s3) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    
};
```

### typescript
```typescript
function isInterleave(s1: string, s2: string, s3: string): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s1
     * @param String $s2
     * @param String $s3
     * @return Boolean
     */
    function isInterleave($s1, $s2, $s3) {
        
    }
}
```

### swift
```swift
class Solution {
    func isInterleave(_ s1: String, _ s2: String, _ s3: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isInterleave(s1: String, s2: String, s3: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isInterleave(String s1, String s2, String s3) {
    
  }
}
```

### golang
```golang
func isInterleave(s1 string, s2 string, s3 string) bool {
    
}
```

### ruby
```ruby
# @param {String} s1
# @param {String} s2
# @param {String} s3
# @return {Boolean}
def is_interleave(s1, s2, s3)
    
end
```

### scala
```scala
object Solution {
    def isInterleave(s1: String, s2: String, s3: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_interleave(s1: String, s2: String, s3: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-interleave s1 s2 s3)
  (-> string? string? string? boolean?)
  )
```

### erlang
```erlang
-spec is_interleave(S1 :: unicode:unicode_binary(), S2 :: unicode:unicode_binary(), S3 :: unicode:unicode_binary()) -> boolean().
is_interleave(S1, S2, S3) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_interleave(s1 :: String.t, s2 :: String.t, s3 :: String.t) :: boolean
  def is_interleave(s1, s2, s3) do
    
  end
end
```
