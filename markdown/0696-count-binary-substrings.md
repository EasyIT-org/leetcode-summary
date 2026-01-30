# 696. Count Binary Substrings

- Difficulty: Easy
- Topics: Two Pointers, String
- Slug: count-binary-substrings
- Problem ID: 696

## Description
Given a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.
Substrings that occur multiple times are counted the number of times they occur.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "00110011"
Output: 6
Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
Notice that some of these substrings repeat and are counted the number of times they occur.
Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.
```

### Example 2
```text
Input: s = "10101"
Output: 4
Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.
```


## Constraints
- 1 <= s.length <= 105
- s[i] is either '0' or '1'.

## Hints
- How many valid binary substrings exist in "000111", and how many in "11100"?  What about "00011100"?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int countBinarySubstrings(string s) {
        
    }
};
```

### java
```java
class Solution {
    public int countBinarySubstrings(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def countBinarySubstrings(self, s):
        """
        :type s: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def countBinarySubstrings(self, s: str) -> int:
```

### c
```c
int countBinarySubstrings(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public int CountBinarySubstrings(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    
};
```

### typescript
```typescript
function countBinarySubstrings(s: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function countBinarySubstrings($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func countBinarySubstrings(_ s: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun countBinarySubstrings(s: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int countBinarySubstrings(String s) {
    
  }
}
```

### golang
```golang
func countBinarySubstrings(s string) int {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {Integer}
def count_binary_substrings(s)
    
end
```

### scala
```scala
object Solution {
    def countBinarySubstrings(s: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn count_binary_substrings(s: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (count-binary-substrings s)
  (-> string? exact-integer?)
  )
```

### erlang
```erlang
-spec count_binary_substrings(S :: unicode:unicode_binary()) -> integer().
count_binary_substrings(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec count_binary_substrings(s :: String.t) :: integer
  def count_binary_substrings(s) do
    
  end
end
```
