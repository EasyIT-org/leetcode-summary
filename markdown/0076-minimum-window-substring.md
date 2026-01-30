# 76. Minimum Window Substring

- Difficulty: Hard
- Topics: Hash Table, String, Sliding Window
- Slug: minimum-window-substring
- Problem ID: 76

## Description
Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
The testcases will be generated such that the answer is unique.
Example 1:
Example 2:
Example 3:
Constraints:
Follow up: Could you find an algorithm that runs in O(m + n) time?

## Examples
### Example 1
```text
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
```

### Example 2
```text
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
```

### Example 3
```text
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
```


## Constraints
- m == s.length
- n == t.length
- 1 <= m, n <= 105
- s and t consist of uppercase and lowercase English letters.

## Hints
- Use two pointers to create a window of letters in s, which would have all the characters from t.
- Expand the right pointer until all the characters of t are covered.
- Once all the characters are covered, move the left pointer and ensure that all the characters are still covered to minimize the subarray size.
- Continue expanding the right and left pointers until you reach the end of s.

## Follow Ups
- Could you find an algorithm that runs in O(m + n) time?

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string minWindow(string s, string t) {
        
    }
};
```

### java
```java
class Solution {
    public String minWindow(String s, String t) {
        
    }
}
```

### python
```python
class Solution(object):
    def minWindow(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def minWindow(self, s: str, t: str) -> str:
```

### c
```c
char* minWindow(char* s, char* t) {
    
}
```

### csharp
```csharp
public class Solution {
    public string MinWindow(string s, string t) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    
};
```

### typescript
```typescript
function minWindow(s: string, t: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @param String $t
     * @return String
     */
    function minWindow($s, $t) {
        
    }
}
```

### swift
```swift
class Solution {
    func minWindow(_ s: String, _ t: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minWindow(s: String, t: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String minWindow(String s, String t) {
    
  }
}
```

### golang
```golang
func minWindow(s string, t string) string {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {String} t
# @return {String}
def min_window(s, t)
    
end
```

### scala
```scala
object Solution {
    def minWindow(s: String, t: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn min_window(s: String, t: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (min-window s t)
  (-> string? string? string?)
  )
```

### erlang
```erlang
-spec min_window(S :: unicode:unicode_binary(), T :: unicode:unicode_binary()) -> unicode:unicode_binary().
min_window(S, T) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec min_window(s :: String.t, t :: String.t) :: String.t
  def min_window(s, t) do
    
  end
end
```
