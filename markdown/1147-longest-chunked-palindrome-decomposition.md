# 1147. Longest Chunked Palindrome Decomposition

- Difficulty: Hard
- Topics: Two Pointers, String, Dynamic Programming, Greedy, Rolling Hash, Hash Function
- Slug: longest-chunked-palindrome-decomposition
- Problem ID: 1251

## Description
You are given a string text. You should split it to k substrings (subtext1, subtext2, ..., subtextk) such that:
Return the largest possible value of k.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: text = "ghiabcdefhelloadamhelloabcdefghi"
Output: 7
Explanation: We can split the string on "(ghi)(abcdef)(hello)(adam)(hello)(abcdef)(ghi)".
```

### Example 2
```text
Input: text = "merchant"
Output: 1
Explanation: We can split the string on "(merchant)".
```

### Example 3
```text
Input: text = "antaprezatepzapreanta"
Output: 11
Explanation: We can split the string on "(a)(nt)(a)(pre)(za)(tep)(za)(pre)(a)(nt)(a)".
```


## Constraints
- 1 <= text.length <= 1000
- text consists only of lowercase English characters.

## Hints
- Using a rolling hash, we can quickly check whether two strings are equal.
- Use that as the basis of a dp.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int longestDecomposition(string text) {
        
    }
};
```

### java
```java
class Solution {
    public int longestDecomposition(String text) {
        
    }
}
```

### python
```python
class Solution(object):
    def longestDecomposition(self, text):
        """
        :type text: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def longestDecomposition(self, text: str) -> int:
```

### c
```c
int longestDecomposition(char* text) {
    
}
```

### csharp
```csharp
public class Solution {
    public int LongestDecomposition(string text) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function(text) {
    
};
```

### typescript
```typescript
function longestDecomposition(text: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $text
     * @return Integer
     */
    function longestDecomposition($text) {
        
    }
}
```

### swift
```swift
class Solution {
    func longestDecomposition(_ text: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun longestDecomposition(text: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int longestDecomposition(String text) {
    
  }
}
```

### golang
```golang
func longestDecomposition(text string) int {
    
}
```

### ruby
```ruby
# @param {String} text
# @return {Integer}
def longest_decomposition(text)
    
end
```

### scala
```scala
object Solution {
    def longestDecomposition(text: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn longest_decomposition(text: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (longest-decomposition text)
  (-> string? exact-integer?)
  )
```

### erlang
```erlang
-spec longest_decomposition(Text :: unicode:unicode_binary()) -> integer().
longest_decomposition(Text) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec longest_decomposition(text :: String.t) :: integer
  def longest_decomposition(text) do
    
  end
end
```
