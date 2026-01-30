# 306. Additive Number

- Difficulty: Medium
- Topics: String, Backtracking
- Slug: additive-number
- Problem ID: 306

## Description
An additive number is a string whose digits can form an additive sequence.
A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.
Given a string containing only digits, return true if it is an additive number or false otherwise.
Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.
Example 1:
Example 2:
Constraints:
Follow up: How would you handle overflow for very large input integers?

## Examples
### Example 1
```text
Input: "112358"
Output: true
Explanation: 
The digits can form an additive sequence: 1, 1, 2, 3, 5, 8. 
1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
```

### Example 2
```text
Input: "199100199"
Output: true
Explanation: 
The additive sequence is: 1, 99, 100, 199. 
1 + 99 = 100, 99 + 100 = 199
```


## Constraints
- 1 <= num.length <= 35
- num consists only of digits.

## Hints
(none)

## Follow Ups
- How would you handle overflow for very large input integers?

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isAdditiveNumber(string num) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isAdditiveNumber(String num) {
        
    }
}
```

### python
```python
class Solution(object):
    def isAdditiveNumber(self, num):
        """
        :type num: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isAdditiveNumber(self, num: str) -> bool:
```

### c
```c
bool isAdditiveNumber(char* num) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsAdditiveNumber(string num) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    
};
```

### typescript
```typescript
function isAdditiveNumber(num: string): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $num
     * @return Boolean
     */
    function isAdditiveNumber($num) {
        
    }
}
```

### swift
```swift
class Solution {
    func isAdditiveNumber(_ num: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isAdditiveNumber(num: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isAdditiveNumber(String num) {
    
  }
}
```

### golang
```golang
func isAdditiveNumber(num string) bool {
    
}
```

### ruby
```ruby
# @param {String} num
# @return {Boolean}
def is_additive_number(num)
    
end
```

### scala
```scala
object Solution {
    def isAdditiveNumber(num: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_additive_number(num: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-additive-number num)
  (-> string? boolean?)
  )
```

### erlang
```erlang
-spec is_additive_number(Num :: unicode:unicode_binary()) -> boolean().
is_additive_number(Num) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_additive_number(num :: String.t) :: boolean
  def is_additive_number(num) do
    
  end
end
```
