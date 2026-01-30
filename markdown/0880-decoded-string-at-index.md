# 880. Decoded String at Index

- Difficulty: Medium
- Topics: String, Stack
- Slug: decoded-string-at-index
- Problem ID: 916

## Description
You are given an encoded string s. To decode the string to a tape, the encoded string is read one character at a time and the following steps are taken:
Given an integer k, return the kth letter (1-indexed) in the decoded string.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "leet2code3", k = 10
Output: "o"
Explanation: The decoded string is "leetleetcodeleetleetcodeleetleetcode".
The 10th letter in the string is "o".
```

### Example 2
```text
Input: s = "ha22", k = 5
Output: "h"
Explanation: The decoded string is "hahahaha".
The 5th letter is "h".
```

### Example 3
```text
Input: s = "a2345678999999999999999", k = 1
Output: "a"
Explanation: The decoded string is "a" repeated 8301530446056247680 times.
The 1st letter is "a".
```


## Constraints
- 2 <= s.length <= 100
- s consists of lowercase English letters and digits 2 through 9.
- s starts with a letter.
- 1 <= k <= 109
- It is guaranteed that k is less than or equal to the length of the decoded string.
- The decoded string is guaranteed to have less than 263 letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string decodeAtIndex(string s, int k) {
        
    }
};
```

### java
```java
class Solution {
    public String decodeAtIndex(String s, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def decodeAtIndex(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def decodeAtIndex(self, s: str, k: int) -> str:
```

### c
```c
char* decodeAtIndex(char* s, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public string DecodeAtIndex(string s, int k) {
        
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
var decodeAtIndex = function(s, k) {
    
};
```

### typescript
```typescript
function decodeAtIndex(s: string, k: number): string {
    
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
    function decodeAtIndex($s, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func decodeAtIndex(_ s: String, _ k: Int) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun decodeAtIndex(s: String, k: Int): String {
        
    }
}
```

### dart
```dart
class Solution {
  String decodeAtIndex(String s, int k) {
    
  }
}
```

### golang
```golang
func decodeAtIndex(s string, k int) string {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {Integer} k
# @return {String}
def decode_at_index(s, k)
    
end
```

### scala
```scala
object Solution {
    def decodeAtIndex(s: String, k: Int): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn decode_at_index(s: String, k: i32) -> String {
        
    }
}
```

### racket
```racket
(define/contract (decode-at-index s k)
  (-> string? exact-integer? string?)
  )
```

### erlang
```erlang
-spec decode_at_index(S :: unicode:unicode_binary(), K :: integer()) -> unicode:unicode_binary().
decode_at_index(S, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec decode_at_index(s :: String.t, k :: integer) :: String.t
  def decode_at_index(s, k) do
    
  end
end
```
