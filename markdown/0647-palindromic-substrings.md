# 647. Palindromic Substrings

- Difficulty: Medium
- Topics: Two Pointers, String, Dynamic Programming
- Slug: palindromic-substrings
- Problem ID: 647

## Description
Given a string s, return the number of palindromic substrings in it.
A string is a palindrome when it reads the same backward as forward.
A substring is a contiguous sequence of characters within the string.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
```

### Example 2
```text
Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
```


## Constraints
- 1 <= s.length <= 1000
- s consists of lowercase English letters.

## Hints
- How can we reuse a previously computed palindrome to compute a larger palindrome?
- If “aba” is a palindrome, is “xabax” a palindrome? Similarly is “xabay” a palindrome?
- Complexity based hint:</br>
If we use brute force and check whether for every start and end position a substring is a palindrome we have O(n^2) start - end pairs and O(n) palindromic checks. Can we reduce the time for palindromic checks to O(1) by reusing some previous computation?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int countSubstrings(string s) {
        
    }
};
```

### java
```java
class Solution {
    public int countSubstrings(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def countSubstrings(self, s):
        """
        :type s: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def countSubstrings(self, s: str) -> int:
```

### c
```c
int countSubstrings(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public int CountSubstrings(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    
};
```

### typescript
```typescript
function countSubstrings(s: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function countSubstrings($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func countSubstrings(_ s: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun countSubstrings(s: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int countSubstrings(String s) {
    
  }
}
```

### golang
```golang
func countSubstrings(s string) int {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {Integer}
def count_substrings(s)
    
end
```

### scala
```scala
object Solution {
    def countSubstrings(s: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn count_substrings(s: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (count-substrings s)
  (-> string? exact-integer?)
  )
```

### erlang
```erlang
-spec count_substrings(S :: unicode:unicode_binary()) -> integer().
count_substrings(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec count_substrings(s :: String.t) :: integer
  def count_substrings(s) do
    
  end
end
```
