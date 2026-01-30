# 395. Longest Substring with At Least K Repeating Characters

- Difficulty: Medium
- Topics: Hash Table, String, Divide and Conquer, Sliding Window
- Slug: longest-substring-with-at-least-k-repeating-characters
- Problem ID: 395

## Description
Given a string s and an integer k, return the length of the longest substring of s such that the frequency of each character in this substring is greater than or equal to k.
if no such substring exists, return 0.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "aaabb", k = 3
Output: 3
Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.
```

### Example 2
```text
Input: s = "ababbc", k = 2
Output: 5
Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
```


## Constraints
- 1 <= s.length <= 104
- s consists of only lowercase English letters.
- 1 <= k <= 105

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int longestSubstring(string s, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int longestSubstring(String s, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def longestSubstring(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def longestSubstring(self, s: str, k: int) -> int:
```

### c
```c
int longestSubstring(char* s, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int LongestSubstring(string s, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    
};
```

### typescript
```typescript
function longestSubstring(s: string, k: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @param Integer $k
     * @return Integer
     */
    function longestSubstring($s, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func longestSubstring(_ s: String, _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun longestSubstring(s: String, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int longestSubstring(String s, int k) {
    
  }
}
```

### golang
```golang
func longestSubstring(s string, k int) int {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {Integer} k
# @return {Integer}
def longest_substring(s, k)
    
end
```

### scala
```scala
object Solution {
    def longestSubstring(s: String, k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn longest_substring(s: String, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (longest-substring s k)
  (-> string? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec longest_substring(S :: unicode:unicode_binary(), K :: integer()) -> integer().
longest_substring(S, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec longest_substring(s :: String.t, k :: integer) :: integer
  def longest_substring(s, k) do
    
  end
end
```
