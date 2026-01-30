# 1047. Remove All Adjacent Duplicates In String

- Difficulty: Easy
- Topics: String, Stack
- Slug: remove-all-adjacent-duplicates-in-string
- Problem ID: 1128

## Description
You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.
We repeatedly make duplicate removals on s until we no longer can.
Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
```

### Example 2
```text
Input: s = "azxxzy"
Output: "ay"
```


## Constraints
- 1 <= s.length <= 105
- s consists of lowercase English letters.

## Hints
- Use a stack to process everything greedily.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string removeDuplicates(string s) {
        
    }
};
```

### java
```java
class Solution {
    public String removeDuplicates(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def removeDuplicates(self, s):
        """
        :type s: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def removeDuplicates(self, s: str) -> str:
```

### c
```c
char* removeDuplicates(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public string RemoveDuplicates(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    
};
```

### typescript
```typescript
function removeDuplicates(s: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function removeDuplicates($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func removeDuplicates(_ s: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun removeDuplicates(s: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String removeDuplicates(String s) {
    
  }
}
```

### golang
```golang
func removeDuplicates(s string) string {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {String}
def remove_duplicates(s)
    
end
```

### scala
```scala
object Solution {
    def removeDuplicates(s: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn remove_duplicates(s: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (remove-duplicates s)
  (-> string? string?)
  )
```

### erlang
```erlang
-spec remove_duplicates(S :: unicode:unicode_binary()) -> unicode:unicode_binary().
remove_duplicates(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec remove_duplicates(s :: String.t) :: String.t
  def remove_duplicates(s) do
    
  end
end
```
