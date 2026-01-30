# 796. Rotate String

- Difficulty: Easy
- Topics: String, String Matching
- Slug: rotate-string
- Problem ID: 812

## Description
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
A shift on s consists of moving the leftmost character of s to the rightmost position.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "abcde", goal = "cdeab"
Output: true
```

### Example 2
```text
Input: s = "abcde", goal = "abced"
Output: false
```


## Constraints
- 1 <= s.length, goal.length <= 100
- s and goal consist of lowercase English letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool rotateString(string s, string goal) {
        
    }
};
```

### java
```java
class Solution {
    public boolean rotateString(String s, String goal) {
        
    }
}
```

### python
```python
class Solution(object):
    def rotateString(self, s, goal):
        """
        :type s: str
        :type goal: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def rotateString(self, s: str, goal: str) -> bool:
```

### c
```c
bool rotateString(char* s, char* goal) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool RotateString(string s, string goal) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    
};
```

### typescript
```typescript
function rotateString(s: string, goal: string): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @param String $goal
     * @return Boolean
     */
    function rotateString($s, $goal) {
        
    }
}
```

### swift
```swift
class Solution {
    func rotateString(_ s: String, _ goal: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun rotateString(s: String, goal: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool rotateString(String s, String goal) {
    
  }
}
```

### golang
```golang
func rotateString(s string, goal string) bool {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {String} goal
# @return {Boolean}
def rotate_string(s, goal)
    
end
```

### scala
```scala
object Solution {
    def rotateString(s: String, goal: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn rotate_string(s: String, goal: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (rotate-string s goal)
  (-> string? string? boolean?)
  )
```

### erlang
```erlang
-spec rotate_string(S :: unicode:unicode_binary(), Goal :: unicode:unicode_binary()) -> boolean().
rotate_string(S, Goal) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec rotate_string(s :: String.t, goal :: String.t) :: boolean
  def rotate_string(s, goal) do
    
  end
end
```
