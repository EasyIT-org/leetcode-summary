# 1143. Longest Common Subsequence

- Difficulty: Medium
- Topics: String, Dynamic Programming
- Slug: longest-common-subsequence
- Problem ID: 1250

## Description
Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
A common subsequence of two strings is a subsequence that is common to both strings.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
```

### Example 2
```text
Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
```

### Example 3
```text
Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
```


## Constraints
- 1 <= text1.length, text2.length <= 1000
- text1 and text2 consist of only lowercase English characters.

## Hints
- Try dynamic programming. 
DP[i][j] represents the longest common subsequence of text1[0 ... i] & text2[0 ... j].
- DP[i][j] = DP[i - 1][j - 1] + 1 , if text1[i] == text2[j]
DP[i][j] = max(DP[i - 1][j], DP[i][j - 1]) , otherwise

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int longestCommonSubsequence(string text1, string text2) {
        
    }
};
```

### java
```java
class Solution {
    public int longestCommonSubsequence(String text1, String text2) {
        
    }
}
```

### python
```python
class Solution(object):
    def longestCommonSubsequence(self, text1, text2):
        """
        :type text1: str
        :type text2: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
```

### c
```c
int longestCommonSubsequence(char* text1, char* text2) {
    
}
```

### csharp
```csharp
public class Solution {
    public int LongestCommonSubsequence(string text1, string text2) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    
};
```

### typescript
```typescript
function longestCommonSubsequence(text1: string, text2: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $text1
     * @param String $text2
     * @return Integer
     */
    function longestCommonSubsequence($text1, $text2) {
        
    }
}
```

### swift
```swift
class Solution {
    func longestCommonSubsequence(_ text1: String, _ text2: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun longestCommonSubsequence(text1: String, text2: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int longestCommonSubsequence(String text1, String text2) {
    
  }
}
```

### golang
```golang
func longestCommonSubsequence(text1 string, text2 string) int {
    
}
```

### ruby
```ruby
# @param {String} text1
# @param {String} text2
# @return {Integer}
def longest_common_subsequence(text1, text2)
    
end
```

### scala
```scala
object Solution {
    def longestCommonSubsequence(text1: String, text2: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn longest_common_subsequence(text1: String, text2: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (longest-common-subsequence text1 text2)
  (-> string? string? exact-integer?)
  )
```

### erlang
```erlang
-spec longest_common_subsequence(Text1 :: unicode:unicode_binary(), Text2 :: unicode:unicode_binary()) -> integer().
longest_common_subsequence(Text1, Text2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec longest_common_subsequence(text1 :: String.t, text2 :: String.t) :: integer
  def longest_common_subsequence(text1, text2) do
    
  end
end
```
