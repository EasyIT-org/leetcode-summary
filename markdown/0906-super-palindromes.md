# 906. Super Palindromes

- Difficulty: Hard
- Topics: Math, String, Enumeration
- Slug: super-palindromes
- Problem ID: 942

## Description
Let's say a positive integer is a super-palindrome if it is a palindrome, and it is also the square of a palindrome.
Given two positive integers left and right represented as strings, return the number of super-palindromes integers in the inclusive range [left, right].
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: left = "4", right = "1000"
Output: 4
Explanation: 4, 9, 121, and 484 are superpalindromes.
Note that 676 is not a superpalindrome: 26 * 26 = 676, but 26 is not a palindrome.
```

### Example 2
```text
Input: left = "1", right = "2"
Output: 1
```


## Constraints
- 1 <= left.length, right.length <= 18
- left and right consist of only digits.
- left and right cannot have leading zeros.
- left and right represent integers in the range [1, 1018 - 1].
- left is less than or equal to right.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int superpalindromesInRange(string left, string right) {
        
    }
};
```

### java
```java
class Solution {
    public int superpalindromesInRange(String left, String right) {
        
    }
}
```

### python
```python
class Solution(object):
    def superpalindromesInRange(self, left, right):
        """
        :type left: str
        :type right: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def superpalindromesInRange(self, left: str, right: str) -> int:
```

### c
```c
int superpalindromesInRange(char* left, char* right) {
    
}
```

### csharp
```csharp
public class Solution {
    public int SuperpalindromesInRange(string left, string right) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} left
 * @param {string} right
 * @return {number}
 */
var superpalindromesInRange = function(left, right) {
    
};
```

### typescript
```typescript
function superpalindromesInRange(left: string, right: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $left
     * @param String $right
     * @return Integer
     */
    function superpalindromesInRange($left, $right) {
        
    }
}
```

### swift
```swift
class Solution {
    func superpalindromesInRange(_ left: String, _ right: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun superpalindromesInRange(left: String, right: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int superpalindromesInRange(String left, String right) {
    
  }
}
```

### golang
```golang
func superpalindromesInRange(left string, right string) int {
    
}
```

### ruby
```ruby
# @param {String} left
# @param {String} right
# @return {Integer}
def superpalindromes_in_range(left, right)
    
end
```

### scala
```scala
object Solution {
    def superpalindromesInRange(left: String, right: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn superpalindromes_in_range(left: String, right: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (superpalindromes-in-range left right)
  (-> string? string? exact-integer?)
  )
```

### erlang
```erlang
-spec superpalindromes_in_range(Left :: unicode:unicode_binary(), Right :: unicode:unicode_binary()) -> integer().
superpalindromes_in_range(Left, Right) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec superpalindromes_in_range(left :: String.t, right :: String.t) :: integer
  def superpalindromes_in_range(left, right) do
    
  end
end
```
