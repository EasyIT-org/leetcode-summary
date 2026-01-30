# 541. Reverse String II

- Difficulty: Easy
- Topics: Two Pointers, String
- Slug: reverse-string-ii
- Problem ID: 541

## Description
Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.
If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
```

### Example 2
```text
Input: s = "abcd", k = 2
Output: "bacd"
```


## Constraints
- 1 <= s.length <= 104
- s consists of only lowercase English letters.
- 1 <= k <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string reverseStr(string s, int k) {
        
    }
};
```

### java
```java
class Solution {
    public String reverseStr(String s, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def reverseStr(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def reverseStr(self, s: str, k: int) -> str:
```

### c
```c
char* reverseStr(char* s, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public string ReverseStr(string s, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    
};
```

### typescript
```typescript
function reverseStr(s: string, k: number): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @param Integer $k
     * @return String
     */
    function reverseStr($s, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func reverseStr(_ s: String, _ k: Int) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun reverseStr(s: String, k: Int): String {
        
    }
}
```

### dart
```dart
class Solution {
  String reverseStr(String s, int k) {
    
  }
}
```

### golang
```golang
func reverseStr(s string, k int) string {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {Integer} k
# @return {String}
def reverse_str(s, k)
    
end
```

### scala
```scala
object Solution {
    def reverseStr(s: String, k: Int): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn reverse_str(s: String, k: i32) -> String {
        
    }
}
```

### racket
```racket
(define/contract (reverse-str s k)
  (-> string? exact-integer? string?)
  )
```

### erlang
```erlang
-spec reverse_str(S :: unicode:unicode_binary(), K :: integer()) -> unicode:unicode_binary().
reverse_str(S, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec reverse_str(s :: String.t, k :: integer) :: String.t
  def reverse_str(s, k) do
    
  end
end
```
