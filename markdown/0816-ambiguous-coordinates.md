# 816. Ambiguous Coordinates

- Difficulty: Medium
- Topics: String, Backtracking, Enumeration
- Slug: ambiguous-coordinates
- Problem ID: 834

## Description
We had some 2-dimensional coordinates, like "(1, 3)" or "(2, 0.5)". Then, we removed all commas, decimal points, and spaces and ended up with the string s.
Return a list of strings representing all possibilities for what our original coordinates could have been.
Our original representation never had extraneous zeroes, so we never started with numbers like "00", "0.0", "0.00", "1.0", "001", "00.01", or any other number that can be represented with fewer digits. Also, a decimal point within a number never occurs without at least one digit occurring before it, so we never started with numbers like ".1".
The final answer list can be returned in any order. All coordinates in the final answer have exactly one space between them (occurring after the comma.)
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "(123)"
Output: ["(1, 2.3)","(1, 23)","(1.2, 3)","(12, 3)"]
```

### Example 2
```text
Input: s = "(0123)"
Output: ["(0, 1.23)","(0, 12.3)","(0, 123)","(0.1, 2.3)","(0.1, 23)","(0.12, 3)"]
Explanation: 0.0, 00, 0001 or 00.01 are not allowed.
```

### Example 3
```text
Input: s = "(00011)"
Output: ["(0, 0.011)","(0.001, 1)"]
```


## Constraints
- 4 <= s.length <= 12
- s[0] == '(' and s[s.length - 1] == ')'.
- The rest of s are digits.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> ambiguousCoordinates(string s) {
        
    }
};
```

### java
```java
class Solution {
    public List<String> ambiguousCoordinates(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def ambiguousCoordinates(self, s):
        """
        :type s: str
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def ambiguousCoordinates(self, s: str) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** ambiguousCoordinates(char* s, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<string> AmbiguousCoordinates(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function(s) {
    
};
```

### typescript
```typescript
function ambiguousCoordinates(s: string): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return String[]
     */
    function ambiguousCoordinates($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func ambiguousCoordinates(_ s: String) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun ambiguousCoordinates(s: String): List<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> ambiguousCoordinates(String s) {
    
  }
}
```

### golang
```golang
func ambiguousCoordinates(s string) []string {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {String[]}
def ambiguous_coordinates(s)
    
end
```

### scala
```scala
object Solution {
    def ambiguousCoordinates(s: String): List[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn ambiguous_coordinates(s: String) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (ambiguous-coordinates s)
  (-> string? (listof string?))
  )
```

### erlang
```erlang
-spec ambiguous_coordinates(S :: unicode:unicode_binary()) -> [unicode:unicode_binary()].
ambiguous_coordinates(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec ambiguous_coordinates(s :: String.t) :: [String.t]
  def ambiguous_coordinates(s) do
    
  end
end
```
