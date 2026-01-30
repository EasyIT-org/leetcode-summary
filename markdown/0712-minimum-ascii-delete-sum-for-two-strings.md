# 712. Minimum ASCII Delete Sum for Two Strings

- Difficulty: Medium
- Topics: String, Dynamic Programming
- Slug: minimum-ascii-delete-sum-for-two-strings
- Problem ID: 712

## Description
Given two strings s1 and s2, return the lowest ASCII sum of deleted characters to make two strings equal.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s1 = "sea", s2 = "eat"
Output: 231
Explanation: Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
Deleting "t" from "eat" adds 116 to the sum.
At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.
```

### Example 2
```text
Input: s1 = "delete", s2 = "leet"
Output: 403
Explanation: Deleting "dee" from "delete" to turn the string into "let",
adds 100[d] + 101[e] + 101[e] to the sum.
Deleting "e" from "leet" adds 101[e] to the sum.
At the end, both strings are equal to "let", and the answer is 100+101+101+101 = 403.
If instead we turned both strings into "lee" or "eet", we would get answers of 433 or 417, which are higher.
```


## Constraints
- 1 <= s1.length, s2.length <= 1000
- s1 and s2 consist of lowercase English letters.

## Hints
- Let dp(i, j) be the answer for inputs s1[i:] and s2[j:].

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int minimumDeleteSum(string s1, string s2) {
        
    }
};
```

### java
```java
class Solution {
    public int minimumDeleteSum(String s1, String s2) {
        
    }
}
```

### python
```python
class Solution(object):
    def minimumDeleteSum(self, s1, s2):
        """
        :type s1: str
        :type s2: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minimumDeleteSum(self, s1: str, s2: str) -> int:
```

### c
```c
int minimumDeleteSum(char* s1, char* s2) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinimumDeleteSum(string s1, string s2) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    
};
```

### typescript
```typescript
function minimumDeleteSum(s1: string, s2: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s1
     * @param String $s2
     * @return Integer
     */
    function minimumDeleteSum($s1, $s2) {
        
    }
}
```

### swift
```swift
class Solution {
    func minimumDeleteSum(_ s1: String, _ s2: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minimumDeleteSum(s1: String, s2: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minimumDeleteSum(String s1, String s2) {
    
  }
}
```

### golang
```golang
func minimumDeleteSum(s1 string, s2 string) int {
    
}
```

### ruby
```ruby
# @param {String} s1
# @param {String} s2
# @return {Integer}
def minimum_delete_sum(s1, s2)
    
end
```

### scala
```scala
object Solution {
    def minimumDeleteSum(s1: String, s2: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn minimum_delete_sum(s1: String, s2: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (minimum-delete-sum s1 s2)
  (-> string? string? exact-integer?)
  )
```

### erlang
```erlang
-spec minimum_delete_sum(S1 :: unicode:unicode_binary(), S2 :: unicode:unicode_binary()) -> integer().
minimum_delete_sum(S1, S2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec minimum_delete_sum(s1 :: String.t, s2 :: String.t) :: integer
  def minimum_delete_sum(s1, s2) do
    
  end
end
```
