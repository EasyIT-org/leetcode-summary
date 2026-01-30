# 686. Repeated String Match

- Difficulty: Medium
- Topics: String, String Matching
- Slug: repeated-string-match
- Problem ID: 686

## Description
Given two strings a and b, return the minimum number of times you should repeat string a so that string b is a substring of it. If it is impossible for b​​​​​​ to be a substring of a after repeating it, return -1.
Notice: string "abc" repeated 0 times is "", repeated 1 time is "abc" and repeated 2 times is "abcabc".
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: a = "abcd", b = "cdabcdab"
Output: 3
Explanation: We return 3 because by repeating a three times "abcdabcdabcd", b is a substring of it.
```

### Example 2
```text
Input: a = "a", b = "aa"
Output: 2
```


## Constraints
- 1 <= a.length, b.length <= 104
- a and b consist of lowercase English letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int repeatedStringMatch(string a, string b) {
        
    }
};
```

### java
```java
class Solution {
    public int repeatedStringMatch(String a, String b) {
        
    }
}
```

### python
```python
class Solution(object):
    def repeatedStringMatch(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def repeatedStringMatch(self, a: str, b: str) -> int:
```

### c
```c
int repeatedStringMatch(char* a, char* b) {
    
}
```

### csharp
```csharp
public class Solution {
    public int RepeatedStringMatch(string a, string b) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
    
};
```

### typescript
```typescript
function repeatedStringMatch(a: string, b: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $a
     * @param String $b
     * @return Integer
     */
    function repeatedStringMatch($a, $b) {
        
    }
}
```

### swift
```swift
class Solution {
    func repeatedStringMatch(_ a: String, _ b: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun repeatedStringMatch(a: String, b: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int repeatedStringMatch(String a, String b) {
    
  }
}
```

### golang
```golang
func repeatedStringMatch(a string, b string) int {
    
}
```

### ruby
```ruby
# @param {String} a
# @param {String} b
# @return {Integer}
def repeated_string_match(a, b)
    
end
```

### scala
```scala
object Solution {
    def repeatedStringMatch(a: String, b: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn repeated_string_match(a: String, b: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (repeated-string-match a b)
  (-> string? string? exact-integer?)
  )
```

### erlang
```erlang
-spec repeated_string_match(A :: unicode:unicode_binary(), B :: unicode:unicode_binary()) -> integer().
repeated_string_match(A, B) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec repeated_string_match(a :: String.t, b :: String.t) :: integer
  def repeated_string_match(a, b) do
    
  end
end
```
