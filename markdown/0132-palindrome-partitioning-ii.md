# 132. Palindrome Partitioning II

- Difficulty: Hard
- Topics: String, Dynamic Programming
- Slug: palindrome-partitioning-ii
- Problem ID: 132

## Description
Given a string s, partition s such that every substring of the partition is a palindrome.
Return the minimum cuts needed for a palindrome partitioning of s.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "aab"
Output: 1
Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
```

### Example 2
```text
Input: s = "a"
Output: 0
```

### Example 3
```text
Input: s = "ab"
Output: 1
```


## Constraints
- 1 <= s.length <= 2000
- s consists of lowercase English letters only.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int minCut(string s) {
        
    }
};
```

### java
```java
class Solution {
    public int minCut(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def minCut(self, s):
        """
        :type s: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minCut(self, s: str) -> int:
```

### c
```c
int minCut(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinCut(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    
};
```

### typescript
```typescript
function minCut(s: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function minCut($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func minCut(_ s: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minCut(s: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minCut(String s) {
    
  }
}
```

### golang
```golang
func minCut(s string) int {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {Integer}
def min_cut(s)
    
end
```

### scala
```scala
object Solution {
    def minCut(s: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn min_cut(s: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (min-cut s)
  (-> string? exact-integer?)
  )
```

### erlang
```erlang
-spec min_cut(S :: unicode:unicode_binary()) -> integer().
min_cut(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec min_cut(s :: String.t) :: integer
  def min_cut(s) do
    
  end
end
```
