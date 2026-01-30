# 709. To Lower Case

- Difficulty: Easy
- Topics: String
- Slug: to-lower-case
- Problem ID: 742

## Description
Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "Hello"
Output: "hello"
```

### Example 2
```text
Input: s = "here"
Output: "here"
```

### Example 3
```text
Input: s = "LOVELY"
Output: "lovely"
```


## Constraints
- 1 <= s.length <= 100
- s consists of printable ASCII characters.

## Hints
- Most languages support lowercase conversion for a string data type. However, that is certainly not the purpose of the problem. Think about how the implementation of the lowercase function call can be done easily.
- <b>Think ASCII!</b>
- Think about the different capital letters and their ASCII codes and how that relates to their lowercase counterparts. Does there seem to be any pattern there? Any mathematical relationship that we can use?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string toLowerCase(string s) {
        
    }
};
```

### java
```java
class Solution {
    public String toLowerCase(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def toLowerCase(self, s):
        """
        :type s: str
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def toLowerCase(self, s: str) -> str:
```

### c
```c
char* toLowerCase(char* s) {
    
}
```

### csharp
```csharp
public class Solution {
    public string ToLowerCase(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    
};
```

### typescript
```typescript
function toLowerCase(s: string): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function toLowerCase($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func toLowerCase(_ s: String) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun toLowerCase(s: String): String {
        
    }
}
```

### dart
```dart
class Solution {
  String toLowerCase(String s) {
    
  }
}
```

### golang
```golang
func toLowerCase(s string) string {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {String}
def to_lower_case(s)
    
end
```

### scala
```scala
object Solution {
    def toLowerCase(s: String): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn to_lower_case(s: String) -> String {
        
    }
}
```

### racket
```racket
(define/contract (to-lower-case s)
  (-> string? string?)
  )
```

### erlang
```erlang
-spec to_lower_case(S :: unicode:unicode_binary()) -> unicode:unicode_binary().
to_lower_case(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec to_lower_case(s :: String.t) :: String.t
  def to_lower_case(s) do
    
  end
end
```
