# 1017. Convert to Base -2

- Difficulty: Medium
- Topics: Math
- Slug: convert-to-base-2
- Problem ID: 1070

## Description
Given an integer n, return a binary string representing its representation in base -2.
Note that the returned string should not have leading zeros unless the string is "0".
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: n = 2
Output: "110"
Explantion: (-2)2 + (-2)1 = 2
```

### Example 2
```text
Input: n = 3
Output: "111"
Explantion: (-2)2 + (-2)1 + (-2)0 = 3
```

### Example 3
```text
Input: n = 4
Output: "100"
Explantion: (-2)2 = 4
```


## Constraints
- 0 <= n <= 109

## Hints
- Figure out whether you need the ones digit placed or not, then shift by two.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string baseNeg2(int n) {
        
    }
};
```

### java
```java
class Solution {
    public String baseNeg2(int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def baseNeg2(self, n):
        """
        :type n: int
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def baseNeg2(self, n: int) -> str:
```

### c
```c
char* baseNeg2(int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public string BaseNeg2(int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @return {string}
 */
var baseNeg2 = function(n) {
    
};
```

### typescript
```typescript
function baseNeg2(n: number): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @return String
     */
    function baseNeg2($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func baseNeg2(_ n: Int) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun baseNeg2(n: Int): String {
        
    }
}
```

### dart
```dart
class Solution {
  String baseNeg2(int n) {
    
  }
}
```

### golang
```golang
func baseNeg2(n int) string {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @return {String}
def base_neg2(n)
    
end
```

### scala
```scala
object Solution {
    def baseNeg2(n: Int): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn base_neg2(n: i32) -> String {
        
    }
}
```

### racket
```racket
(define/contract (base-neg2 n)
  (-> exact-integer? string?)
  )
```

### erlang
```erlang
-spec base_neg2(N :: integer()) -> unicode:unicode_binary().
base_neg2(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec base_neg2(n :: integer) :: String.t
  def base_neg2(n) do
    
  end
end
```
