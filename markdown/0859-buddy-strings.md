# 859. Buddy Strings

- Difficulty: Easy
- Topics: Hash Table, String
- Slug: buddy-strings
- Problem ID: 889

## Description
Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.
Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "ab", goal = "ba"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
```

### Example 2
```text
Input: s = "ab", goal = "ab"
Output: false
Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.
```

### Example 3
```text
Input: s = "aa", goal = "aa"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.
```


## Constraints
- 1 <= s.length, goal.length <= 2 * 104
- s and goal consist of lowercase letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool buddyStrings(string s, string goal) {
        
    }
};
```

### java
```java
class Solution {
    public boolean buddyStrings(String s, String goal) {
        
    }
}
```

### python
```python
class Solution(object):
    def buddyStrings(self, s, goal):
        """
        :type s: str
        :type goal: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def buddyStrings(self, s: str, goal: str) -> bool:
```

### c
```c
bool buddyStrings(char* s, char* goal) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool BuddyStrings(string s, string goal) {
        
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
var buddyStrings = function(s, goal) {
    
};
```

### typescript
```typescript
function buddyStrings(s: string, goal: string): boolean {
    
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
    function buddyStrings($s, $goal) {
        
    }
}
```

### swift
```swift
class Solution {
    func buddyStrings(_ s: String, _ goal: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun buddyStrings(s: String, goal: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool buddyStrings(String s, String goal) {
    
  }
}
```

### golang
```golang
func buddyStrings(s string, goal string) bool {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {String} goal
# @return {Boolean}
def buddy_strings(s, goal)
    
end
```

### scala
```scala
object Solution {
    def buddyStrings(s: String, goal: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn buddy_strings(s: String, goal: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (buddy-strings s goal)
  (-> string? string? boolean?)
  )
```

### erlang
```erlang
-spec buddy_strings(S :: unicode:unicode_binary(), Goal :: unicode:unicode_binary()) -> boolean().
buddy_strings(S, Goal) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec buddy_strings(s :: String.t, goal :: String.t) :: boolean
  def buddy_strings(s, goal) do
    
  end
end
```
