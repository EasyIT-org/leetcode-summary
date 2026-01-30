# 1208. Get Equal Substrings Within Budget

- Difficulty: Medium
- Topics: String, Binary Search, Sliding Window, Prefix Sum
- Slug: get-equal-substrings-within-budget
- Problem ID: 1321

## Description
You are given two strings s and t of the same length and an integer maxCost.
You want to change s to t. Changing the ith character of s to ith character of t costs |s[i] - t[i]| (i.e., the absolute difference between the ASCII values of the characters).
Return the maximum length of a substring of s that can be changed to be the same as the corresponding substring of t with a cost less than or equal to maxCost. If there is no substring from s that can be changed to its corresponding substring from t, return 0.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "abcd", t = "bcdf", maxCost = 3
Output: 3
Explanation: "abc" of s can change to "bcd".
That costs 3, so the maximum length is 3.
```

### Example 2
```text
Input: s = "abcd", t = "cdef", maxCost = 3
Output: 1
Explanation: Each character in s costs 2 to change to character in t,  so the maximum length is 1.
```

### Example 3
```text
Input: s = "abcd", t = "acde", maxCost = 0
Output: 1
Explanation: You cannot make any change, so the maximum length is 1.
```


## Constraints
- 1 <= s.length <= 105
- t.length == s.length
- 0 <= maxCost <= 106
- s and t consist of only lowercase English letters.

## Hints
- Calculate the differences between s[i] and t[i].
- Use a sliding window to track the longest valid substring.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int equalSubstring(string s, string t, int maxCost) {
        
    }
};
```

### java
```java
class Solution {
    public int equalSubstring(String s, String t, int maxCost) {
        
    }
}
```

### python
```python
class Solution(object):
    def equalSubstring(self, s, t, maxCost):
        """
        :type s: str
        :type t: str
        :type maxCost: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
```

### c
```c
int equalSubstring(char* s, char* t, int maxCost) {
    
}
```

### csharp
```csharp
public class Solution {
    public int EqualSubstring(string s, string t, int maxCost) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    
};
```

### typescript
```typescript
function equalSubstring(s: string, t: string, maxCost: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @param String $t
     * @param Integer $maxCost
     * @return Integer
     */
    function equalSubstring($s, $t, $maxCost) {
        
    }
}
```

### swift
```swift
class Solution {
    func equalSubstring(_ s: String, _ t: String, _ maxCost: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun equalSubstring(s: String, t: String, maxCost: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int equalSubstring(String s, String t, int maxCost) {
    
  }
}
```

### golang
```golang
func equalSubstring(s string, t string, maxCost int) int {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {String} t
# @param {Integer} max_cost
# @return {Integer}
def equal_substring(s, t, max_cost)
    
end
```

### scala
```scala
object Solution {
    def equalSubstring(s: String, t: String, maxCost: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn equal_substring(s: String, t: String, max_cost: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (equal-substring s t maxCost)
  (-> string? string? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec equal_substring(S :: unicode:unicode_binary(), T :: unicode:unicode_binary(), MaxCost :: integer()) -> integer().
equal_substring(S, T, MaxCost) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec equal_substring(s :: String.t, t :: String.t, max_cost :: integer) :: integer
  def equal_substring(s, t, max_cost) do
    
  end
end
```
