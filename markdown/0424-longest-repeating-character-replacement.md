# 424. Longest Repeating Character Replacement

- Difficulty: Medium
- Topics: Hash Table, String, Sliding Window
- Slug: longest-repeating-character-replacement
- Problem ID: 424

## Description
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
Return the length of the longest substring containing the same letter you can get after performing the above operations.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
```

### Example 2
```text
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
```


## Constraints
- 1 <= s.length <= 105
- s consists of only uppercase English letters.
- 0 <= k <= s.length

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int characterReplacement(string s, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int characterReplacement(String s, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def characterReplacement(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
```

### c
```c
int characterReplacement(char* s, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int CharacterReplacement(string s, int k) {
        
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
var characterReplacement = function(s, k) {
    
};
```

### typescript
```typescript
function characterReplacement(s: string, k: number): number {
    
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
    function characterReplacement($s, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func characterReplacement(_ s: String, _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun characterReplacement(s: String, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int characterReplacement(String s, int k) {
    
  }
}
```

### golang
```golang
func characterReplacement(s string, k int) int {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {Integer} k
# @return {Integer}
def character_replacement(s, k)
    
end
```

### scala
```scala
object Solution {
    def characterReplacement(s: String, k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn character_replacement(s: String, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (character-replacement s k)
  (-> string? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec character_replacement(S :: unicode:unicode_binary(), K :: integer()) -> integer().
character_replacement(S, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec character_replacement(s :: String.t, k :: integer) :: integer
  def character_replacement(s, k) do
    
  end
end
```
