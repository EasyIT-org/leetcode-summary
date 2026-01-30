# 1221. Split a String in Balanced Strings

- Difficulty: Easy
- Topics: String, Greedy, Counting
- Slug: split-a-string-in-balanced-strings
- Problem ID: 1341

## Description
Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
Given a balanced string s, split it into some number of substrings such that:
Return the maximum number of balanced strings you can obtain.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
```

### Example 2
```text
Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.
```

### Example 3
```text
Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".
```


## Constraints
- 2 <= s.length <= 1000
- s[i] is either 'L' or 'R'.
- s is a balanced string.

## Hints
- Loop from left to right maintaining a balance variable when it gets an L increase it by one otherwise decrease it by one.
- Whenever the balance variable reaches zero then we increase the answer by one.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int balancedStringSplit(string s) {
        
    }
};
```

### java
```java
class Solution {
    public int balancedStringSplit(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def balancedStringSplit(self, s):
        """
        :type s: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def balancedStringSplit(self, s: str) -> int:
```

### c
```c
int balancedStringSplit(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public int BalancedStringSplit(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    
};
```

### typescript
```typescript
function balancedStringSplit(s: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function balancedStringSplit($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func balancedStringSplit(_ s: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun balancedStringSplit(s: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int balancedStringSplit(String s) {
    
  }
}
```

### golang
```golang
func balancedStringSplit(s string) int {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {Integer}
def balanced_string_split(s)
    
end
```

### scala
```scala
object Solution {
    def balancedStringSplit(s: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn balanced_string_split(s: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (balanced-string-split s)
  (-> string? exact-integer?)
  )
```

### erlang
```erlang
-spec balanced_string_split(S :: unicode:unicode_binary()) -> integer().
balanced_string_split(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec balanced_string_split(s :: String.t) :: integer
  def balanced_string_split(s) do
    
  end
end
```
