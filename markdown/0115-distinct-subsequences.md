# 115. Distinct Subsequences

- Difficulty: Hard
- Topics: String, Dynamic Programming
- Slug: distinct-subsequences
- Problem ID: 115

## Description
Given two strings s and t, return the number of distinct subsequences of s which equals t.
The test cases are generated so that the answer fits on a 32-bit signed integer.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "rabbbit", t = "rabbit"
Output: 3
Explanation:
As shown below, there are 3 ways you can generate "rabbit" from s.
rabbbit
rabbbit
rabbbit
```

### Example 2
```text
Input: s = "babgbag", t = "bag"
Output: 5
Explanation:
As shown below, there are 5 ways you can generate "bag" from s.
babgbag
babgbag
babgbag
babgbag
babgbag
```


## Constraints
- 1 <= s.length, t.length <= 1000
- s and t consist of English letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numDistinct(string s, string t) {
        
    }
};
```

### java
```java
class Solution {
    public int numDistinct(String s, String t) {
        
    }
}
```

### python
```python
class Solution(object):
    def numDistinct(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numDistinct(self, s: str, t: str) -> int:
```

### c
```c
int numDistinct(char* s, char* t) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumDistinct(string s, string t) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    
};
```

### typescript
```typescript
function numDistinct(s: string, t: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @param String $t
     * @return Integer
     */
    function numDistinct($s, $t) {
        
    }
}
```

### swift
```swift
class Solution {
    func numDistinct(_ s: String, _ t: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numDistinct(s: String, t: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numDistinct(String s, String t) {
    
  }
}
```

### golang
```golang
func numDistinct(s string, t string) int {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {String} t
# @return {Integer}
def num_distinct(s, t)
    
end
```

### scala
```scala
object Solution {
    def numDistinct(s: String, t: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_distinct(s: String, t: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-distinct s t)
  (-> string? string? exact-integer?)
  )
```

### erlang
```erlang
-spec num_distinct(S :: unicode:unicode_binary(), T :: unicode:unicode_binary()) -> integer().
num_distinct(S, T) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_distinct(s :: String.t, t :: String.t) :: integer
  def num_distinct(s, t) do
    
  end
end
```
