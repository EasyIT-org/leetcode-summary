# 1156. Swap For Longest Repeated Character Substring

- Difficulty: Medium
- Topics: Hash Table, String, Sliding Window
- Slug: swap-for-longest-repeated-character-substring
- Problem ID: 1261

## Description
You are given a string text. You can swap two of the characters in the text.
Return the length of the longest substring with repeated characters.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: text = "ababa"
Output: 3
Explanation: We can swap the first 'b' with the last 'a', or the last 'b' with the first 'a'. Then, the longest repeated character substring is "aaa" with length 3.
```

### Example 2
```text
Input: text = "aaabaaa"
Output: 6
Explanation: Swap 'b' with the last 'a' (or the first 'a'), and we get longest repeated character substring "aaaaaa" with length 6.
```

### Example 3
```text
Input: text = "aaaaa"
Output: 5
Explanation: No need to swap, longest repeated character substring is "aaaaa" with length is 5.
```


## Constraints
- 1 <= text.length <= 2 * 104
- text consist of lowercase English characters only.

## Hints
- There are two cases:  a block of characters, or two blocks of characters between one different character. 
 By keeping a run-length encoded version of the string, we can easily check these cases.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxRepOpt1(string text) {
        
    }
};
```

### java
```java
class Solution {
    public int maxRepOpt1(String text) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxRepOpt1(self, text):
        """
        :type text: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxRepOpt1(self, text: str) -> int:
```

### c
```c
int maxRepOpt1(char* text) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxRepOpt1(string text) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function(text) {
    
};
```

### typescript
```typescript
function maxRepOpt1(text: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $text
     * @return Integer
     */
    function maxRepOpt1($text) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxRepOpt1(_ text: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxRepOpt1(text: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxRepOpt1(String text) {
    
  }
}
```

### golang
```golang
func maxRepOpt1(text string) int {
    
}
```

### ruby
```ruby
# @param {String} text
# @return {Integer}
def max_rep_opt1(text)
    
end
```

### scala
```scala
object Solution {
    def maxRepOpt1(text: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_rep_opt1(text: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-rep-opt1 text)
  (-> string? exact-integer?)
  )
```

### erlang
```erlang
-spec max_rep_opt1(Text :: unicode:unicode_binary()) -> integer().
max_rep_opt1(Text) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_rep_opt1(text :: String.t) :: integer
  def max_rep_opt1(text) do
    
  end
end
```
