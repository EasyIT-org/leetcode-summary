# 639. Decode Ways II

- Difficulty: Hard
- Topics: String, Dynamic Programming
- Slug: decode-ways-ii
- Problem ID: 639

## Description
A message containing letters from A-Z can be encoded into numbers using the following mapping:
To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".
In addition to the mapping above, an encoded message may contain the '*' character, which can represent any digit from '1' to '9' ('0' is excluded). For example, the encoded message "1*" may represent any of the encoded messages "11", "12", "13", "14", "15", "16", "17", "18", or "19". Decoding "1*" is equivalent to decoding any of the encoded messages it can represent.
Given a string s consisting of digits and '*' characters, return the number of ways to decode it.
Since the answer may be very large, return it modulo 109 + 7.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
```

### Example 2
```text
Input: s = "*"
Output: 9
Explanation: The encoded message can represent any of the encoded messages "1", "2", "3", "4", "5", "6", "7", "8", or "9".
Each of these can be decoded to the strings "A", "B", "C", "D", "E", "F", "G", "H", and "I" respectively.
Hence, there are a total of 9 ways to decode "*".
```

### Example 3
```text
Input: s = "1*"
Output: 18
Explanation: The encoded message can represent any of the encoded messages "11", "12", "13", "14", "15", "16", "17", "18", or "19".
Each of these encoded messages have 2 ways to be decoded (e.g. "11" can be decoded to "AA" or "K").
Hence, there are a total of 9 * 2 = 18 ways to decode "1*".
```

### Example 4
```text
Input: s = "2*"
Output: 15
Explanation: The encoded message can represent any of the encoded messages "21", "22", "23", "24", "25", "26", "27", "28", or "29".
"21", "22", "23", "24", "25", and "26" have 2 ways of being decoded, but "27", "28", and "29" only have 1 way.
Hence, there are a total of (6 * 2) + (3 * 1) = 12 + 3 = 15 ways to decode "2*".
```


## Constraints
- 1 <= s.length <= 105
- s[i] is a digit or '*'.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numDecodings(string s) {
        
    }
};
```

### java
```java
class Solution {
    public int numDecodings(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def numDecodings(self, s):
        """
        :type s: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numDecodings(self, s: str) -> int:
```

### c
```c
int numDecodings(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumDecodings(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    
};
```

### typescript
```typescript
function numDecodings(s: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function numDecodings($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func numDecodings(_ s: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numDecodings(s: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numDecodings(String s) {
    
  }
}
```

### golang
```golang
func numDecodings(s string) int {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {Integer}
def num_decodings(s)
    
end
```

### scala
```scala
object Solution {
    def numDecodings(s: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_decodings(s: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-decodings s)
  (-> string? exact-integer?)
  )
```

### erlang
```erlang
-spec num_decodings(S :: unicode:unicode_binary()) -> integer().
num_decodings(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_decodings(s :: String.t) :: integer
  def num_decodings(s) do
    
  end
end
```
