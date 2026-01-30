# 1016. Binary String With Substrings Representing 1 To N

- Difficulty: Medium
- Topics: Hash Table, String, Bit Manipulation, Sliding Window
- Slug: binary-string-with-substrings-representing-1-to-n
- Problem ID: 1065

## Description
Given a binary string s and a positive integer n, return true if the binary representation of all the integers in the range [1, n] are substrings of s, or false otherwise.
A substring is a contiguous sequence of characters within a string.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "0110", n = 3
Output: true
```

### Example 2
```text
Input: s = "0110", n = 4
Output: false
```


## Constraints
- 1 <= s.length <= 1000
- s[i] is either '0' or '1'.
- 1 <= n <= 109

## Hints
- We only need to check substrings of length at most 30, because 10^9 has 30 bits.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool queryString(string s, int n) {
        
    }
};
```

### java
```java
class Solution {
    public boolean queryString(String s, int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def queryString(self, s, n):
        """
        :type s: str
        :type n: int
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def queryString(self, s: str, n: int) -> bool:
```

### c
```c
bool queryString(char* s, int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool QueryString(string s, int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function(s, n) {
    
};
```

### typescript
```typescript
function queryString(s: string, n: number): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @param Integer $n
     * @return Boolean
     */
    function queryString($s, $n) {
        
    }
}
```

### swift
```swift
class Solution {
    func queryString(_ s: String, _ n: Int) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun queryString(s: String, n: Int): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool queryString(String s, int n) {
    
  }
}
```

### golang
```golang
func queryString(s string, n int) bool {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {Integer} n
# @return {Boolean}
def query_string(s, n)
    
end
```

### scala
```scala
object Solution {
    def queryString(s: String, n: Int): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn query_string(s: String, n: i32) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (query-string s n)
  (-> string? exact-integer? boolean?)
  )
```

### erlang
```erlang
-spec query_string(S :: unicode:unicode_binary(), N :: integer()) -> boolean().
query_string(S, N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec query_string(s :: String.t, n :: integer) :: boolean
  def query_string(s, n) do
    
  end
end
```
