# 926. Flip String to Monotone Increasing

- Difficulty: Medium
- Topics: String, Dynamic Programming
- Slug: flip-string-to-monotone-increasing
- Problem ID: 962

## Description
A binary string is monotone increasing if it consists of some number of 0's (possibly none), followed by some number of 1's (also possibly none).
You are given a binary string s. You can flip s[i] changing it from 0 to 1 or from 1 to 0.
Return the minimum number of flips to make s monotone increasing.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "00110"
Output: 1
Explanation: We flip the last digit to get 00111.
```

### Example 2
```text
Input: s = "010110"
Output: 2
Explanation: We flip to get 011111, or alternatively 000111.
```

### Example 3
```text
Input: s = "00011000"
Output: 2
Explanation: We flip to get 00000000.
```


## Constraints
- 1 <= s.length <= 105
- s[i] is either '0' or '1'.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int minFlipsMonoIncr(string s) {
        
    }
};
```

### java
```java
class Solution {
    public int minFlipsMonoIncr(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def minFlipsMonoIncr(self, s):
        """
        :type s: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minFlipsMonoIncr(self, s: str) -> int:
```

### c
```c
int minFlipsMonoIncr(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinFlipsMonoIncr(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    
};
```

### typescript
```typescript
function minFlipsMonoIncr(s: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function minFlipsMonoIncr($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func minFlipsMonoIncr(_ s: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minFlipsMonoIncr(s: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minFlipsMonoIncr(String s) {
    
  }
}
```

### golang
```golang
func minFlipsMonoIncr(s string) int {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {Integer}
def min_flips_mono_incr(s)
    
end
```

### scala
```scala
object Solution {
    def minFlipsMonoIncr(s: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn min_flips_mono_incr(s: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (min-flips-mono-incr s)
  (-> string? exact-integer?)
  )
```

### erlang
```erlang
-spec min_flips_mono_incr(S :: unicode:unicode_binary()) -> integer().
min_flips_mono_incr(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec min_flips_mono_incr(s :: String.t) :: integer
  def min_flips_mono_incr(s) do
    
  end
end
```
