# 3. Longest Substring Without Repeating Characters

- Difficulty: Medium
- Topics: Hash Table, String, Sliding Window
- Slug: longest-substring-without-repeating-characters
- Problem ID: 3

## Description
Given a string s, find the length of the longest substring without duplicate characters.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

### Example 2
```text
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

### Example 3
```text
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```


## Constraints
- 0 <= s.length <= 5 * 104
- s consists of English letters, digits, symbols and spaces.

## Hints
- Generate all possible substrings & check for each substring if it's valid and keep updating maxLen accordingly.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        
    }
};
```

### java
```java
class Solution {
    public int lengthOfLongestSubstring(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
```

### c
```c
int lengthOfLongestSubstring(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public int LengthOfLongestSubstring(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
};
```

### typescript
```typescript
function lengthOfLongestSubstring(s: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function lengthOfLongestSubstring($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func lengthOfLongestSubstring(_ s: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun lengthOfLongestSubstring(s: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int lengthOfLongestSubstring(String s) {
    
  }
}
```

### golang
```golang
func lengthOfLongestSubstring(s string) int {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {Integer}
def length_of_longest_substring(s)
    
end
```

### scala
```scala
object Solution {
    def lengthOfLongestSubstring(s: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (length-of-longest-substring s)
  (-> string? exact-integer?)
  )
```

### erlang
```erlang
-spec length_of_longest_substring(S :: unicode:unicode_binary()) -> integer().
length_of_longest_substring(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec length_of_longest_substring(s :: String.t) :: integer
  def length_of_longest_substring(s) do
    
  end
end
```
