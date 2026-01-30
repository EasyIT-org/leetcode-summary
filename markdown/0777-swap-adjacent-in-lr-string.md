# 777. Swap Adjacent in LR String

- Difficulty: Medium
- Topics: Two Pointers, String
- Slug: swap-adjacent-in-lr-string
- Problem ID: 793

## Description
In a string composed of 'L', 'R', and 'X' characters, like "RXXLRXRXL", a move consists of either replacing one occurrence of "XL" with "LX", or replacing one occurrence of "RX" with "XR". Given the starting string start and the ending string result, return True if and only if there exists a sequence of moves to transform start to result.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: start = "RXXLRXRXL", result = "XRLXXRRLX"
Output: true
Explanation: We can transform start to result following these steps:
RXXLRXRXL ->
XRXLRXRXL ->
XRLXRXRXL ->
XRLXXRRXL ->
XRLXXRRLX
```

### Example 2
```text
Input: start = "X", result = "L"
Output: false
```


## Constraints
- 1 <= start.length <= 104
- start.length == result.length
- Both start and result will only consist of characters in 'L', 'R', and 'X'.

## Hints
- Think of the L and R's as people on a horizontal line, where X is a space.  The people can't cross each other, and also you can't go from XRX to RXX.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool canTransform(string start, string result) {
        
    }
};
```

### java
```java
class Solution {
    public boolean canTransform(String start, String result) {
        
    }
}
```

### python
```python
class Solution(object):
    def canTransform(self, start, result):
        """
        :type start: str
        :type result: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def canTransform(self, start: str, result: str) -> bool:
```

### c
```c
bool canTransform(char* start, char* result) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool CanTransform(string start, string result) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} start
 * @param {string} result
 * @return {boolean}
 */
var canTransform = function(start, result) {
    
};
```

### typescript
```typescript
function canTransform(start: string, result: string): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $start
     * @param String $result
     * @return Boolean
     */
    function canTransform($start, $result) {
        
    }
}
```

### swift
```swift
class Solution {
    func canTransform(_ start: String, _ result: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun canTransform(start: String, result: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool canTransform(String start, String result) {
    
  }
}
```

### golang
```golang
func canTransform(start string, result string) bool {
    
}
```

### ruby
```ruby
# @param {String} start
# @param {String} result
# @return {Boolean}
def can_transform(start, result)
    
end
```

### scala
```scala
object Solution {
    def canTransform(start: String, result: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn can_transform(start: String, result: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (can-transform start result)
  (-> string? string? boolean?)
  )
```

### erlang
```erlang
-spec can_transform(Start :: unicode:unicode_binary(), Result :: unicode:unicode_binary()) -> boolean().
can_transform(Start, Result) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec can_transform(start :: String.t, result :: String.t) :: boolean
  def can_transform(start, result) do
    
  end
end
```
