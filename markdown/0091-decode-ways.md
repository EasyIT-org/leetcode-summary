# 91. Decode Ways

- Difficulty: Medium
- Topics: String, Dynamic Programming
- Slug: decode-ways
- Problem ID: 91

## Description
You have intercepted a secret message encoded as a string of numbers. The message is decoded via the following mapping:
"1" -> 'A'
"2" -> 'B'
...
"25" -> 'Y'
"26" -> 'Z'
However, while decoding the message, you realize that there are many different ways you can decode the message because some codes are contained in other codes ("2" and "5" vs "25").
For example, "11106" can be decoded into:
Note: there may be strings that are impossible to decode.

Given a string s containing only digits, return the number of ways to decode it. If the entire string cannot be decoded in any valid way, return 0.
The test cases are generated so that the answer fits in a 32-bit integer.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "12"
Output: 2
Explanation:
"12" could be decoded as "AB" (1 2) or "L" (12).
```

### Example 2
```text
Input: s = "226"
Output: 3
Explanation:
"226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
```

### Example 3
```text
Input: s = "06"
Output: 0
Explanation:
"06" cannot be mapped to "F" because of the leading zero ("6" is different from "06"). In this case, the string is not a valid encoding, so return 0.
```


## Constraints
- 1 <= s.length <= 100
- s contains only digits and may contain leading zero(s).

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
