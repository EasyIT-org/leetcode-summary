# 405. Convert a Number to Hexadecimal

- Difficulty: Easy
- Topics: Math, String, Bit Manipulation
- Slug: convert-a-number-to-hexadecimal
- Problem ID: 405

## Description
Given a 32-bit integer num, return a string representing its hexadecimal representation. For negative integers, two’s complement method is used.
All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.
Note: You are not allowed to use any built-in library method to directly solve this problem.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: num = 26
Output: "1a"
```

### Example 2
```text
Input: num = -1
Output: "ffffffff"
```


## Constraints
- -231 <= num <= 231 - 1

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string toHex(int num) {
        
    }
};
```

### java
```java
class Solution {
    public String toHex(int num) {
        
    }
}
```

### python
```python
class Solution(object):
    def toHex(self, num):
        """
        :type num: int
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def toHex(self, num: int) -> str:
```

### c
```c
char* toHex(int num) {
    
}
```

### csharp
```csharp
public class Solution {
    public string ToHex(int num) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    
};
```

### typescript
```typescript
function toHex(num: number): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $num
     * @return String
     */
    function toHex($num) {
        
    }
}
```

### swift
```swift
class Solution {
    func toHex(_ num: Int) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun toHex(num: Int): String {
        
    }
}
```

### dart
```dart
class Solution {
  String toHex(int num) {
    
  }
}
```

### golang
```golang
func toHex(num int) string {
    
}
```

### ruby
```ruby
# @param {Integer} num
# @return {String}
def to_hex(num)
    
end
```

### scala
```scala
object Solution {
    def toHex(num: Int): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn to_hex(num: i32) -> String {
        
    }
}
```

### racket
```racket
(define/contract (to-hex num)
  (-> exact-integer? string?)
  )
```

### erlang
```erlang
-spec to_hex(Num :: integer()) -> unicode:unicode_binary().
to_hex(Num) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec to_hex(num :: integer) :: String.t
  def to_hex(num) do
    
  end
end
```
