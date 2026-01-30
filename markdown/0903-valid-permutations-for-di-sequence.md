# 903. Valid Permutations for DI Sequence

- Difficulty: Hard
- Topics: String, Dynamic Programming, Prefix Sum
- Slug: valid-permutations-for-di-sequence
- Problem ID: 939

## Description
You are given a string s of length n where s[i] is either:
A permutation perm of n + 1 integers of all the integers in the range [0, n] is called a valid permutation if for all valid i:
Return the number of valid permutations perm. Since the answer may be large, return it modulo 109 + 7.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "DID"
Output: 5
Explanation: The 5 valid permutations of (0, 1, 2, 3) are:
(1, 0, 3, 2)
(2, 0, 3, 1)
(2, 1, 3, 0)
(3, 0, 2, 1)
(3, 1, 2, 0)
```

### Example 2
```text
Input: s = "D"
Output: 1
```


## Constraints
- n == s.length
- 1 <= n <= 200
- s[i] is either 'I' or 'D'.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numPermsDISequence(string s) {
        
    }
};
```

### java
```java
class Solution {
    public int numPermsDISequence(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def numPermsDISequence(self, s):
        """
        :type s: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numPermsDISequence(self, s: str) -> int:
```

### c
```c
int numPermsDISequence(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumPermsDISequence(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var numPermsDISequence = function(s) {
    
};
```

### typescript
```typescript
function numPermsDISequence(s: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function numPermsDISequence($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func numPermsDISequence(_ s: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numPermsDISequence(s: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numPermsDISequence(String s) {
    
  }
}
```

### golang
```golang
func numPermsDISequence(s string) int {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {Integer}
def num_perms_di_sequence(s)
    
end
```

### scala
```scala
object Solution {
    def numPermsDISequence(s: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_perms_di_sequence(s: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-perms-di-sequence s)
  (-> string? exact-integer?)
  )
```

### erlang
```erlang
-spec num_perms_di_sequence(S :: unicode:unicode_binary()) -> integer().
num_perms_di_sequence(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_perms_di_sequence(s :: String.t) :: integer
  def num_perms_di_sequence(s) do
    
  end
end
```
