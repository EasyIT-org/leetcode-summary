# 730. Count Different Palindromic Subsequences

- Difficulty: Hard
- Topics: String, Dynamic Programming
- Slug: count-different-palindromic-subsequences
- Problem ID: 730

## Description
Given a string s, return the number of different non-empty palindromic subsequences in s. Since the answer may be very large, return it modulo 109 + 7.
A subsequence of a string is obtained by deleting zero or more characters from the string.
A sequence is palindromic if it is equal to the sequence reversed.
Two sequences a1, a2, ... and b1, b2, ... are different if there is some i for which ai != bi.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "bccb"
Output: 6
Explanation: The 6 different non-empty palindromic subsequences are 'b', 'c', 'bb', 'cc', 'bcb', 'bccb'.
Note that 'bcb' is counted only once, even though it occurs twice.
```

### Example 2
```text
Input: s = "abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba"
Output: 104860361
Explanation: There are 3104860382 different non-empty palindromic subsequences, which is 104860361 modulo 109 + 7.
```


## Constraints
- 1 <= s.length <= 1000
- s[i] is either 'a', 'b', 'c', or 'd'.

## Hints
- Let dp(i, j) be the answer for the string T = S[i:j+1] including the empty sequence. The answer is the number of unique characters in T, plus palindromes of the form "a_a", "b_b", "c_c", and "d_d", where "_" represents zero or more characters.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int countPalindromicSubsequences(string s) {
        
    }
};
```

### java
```java
class Solution {
    public int countPalindromicSubsequences(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def countPalindromicSubsequences(self, s):
        """
        :type s: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def countPalindromicSubsequences(self, s: str) -> int:
```

### c
```c
int countPalindromicSubsequences(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public int CountPalindromicSubsequences(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequences = function(s) {
    
};
```

### typescript
```typescript
function countPalindromicSubsequences(s: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function countPalindromicSubsequences($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func countPalindromicSubsequences(_ s: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun countPalindromicSubsequences(s: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int countPalindromicSubsequences(String s) {
    
  }
}
```

### golang
```golang
func countPalindromicSubsequences(s string) int {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {Integer}
def count_palindromic_subsequences(s)
    
end
```

### scala
```scala
object Solution {
    def countPalindromicSubsequences(s: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn count_palindromic_subsequences(s: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (count-palindromic-subsequences s)
  (-> string? exact-integer?)
  )
```

### erlang
```erlang
-spec count_palindromic_subsequences(S :: unicode:unicode_binary()) -> integer().
count_palindromic_subsequences(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec count_palindromic_subsequences(s :: String.t) :: integer
  def count_palindromic_subsequences(s) do
    
  end
end
```
