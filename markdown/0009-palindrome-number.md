# 9. Palindrome Number

- Difficulty: Easy
- Topics: Math
- Slug: palindrome-number
- Problem ID: 9

## Description
Given an integer x, return true if x is a palindrome, and false otherwise.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
```

### Example 2
```text
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

### Example 3
```text
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```


## Constraints
- -231 <= x <= 231 - 1

## Hints
- Beware of overflow when you reverse the integer.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isPalindrome(int x) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isPalindrome(int x) {
        
    }
}
```

### python
```python
class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isPalindrome(self, x: int) -> bool:
```

### c
```c
bool isPalindrome(int x) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsPalindrome(int x) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
};
```

### typescript
```typescript
function isPalindrome(x: number): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $x
     * @return Boolean
     */
    function isPalindrome($x) {
        
    }
}
```

### swift
```swift
class Solution {
    func isPalindrome(_ x: Int) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isPalindrome(x: Int): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isPalindrome(int x) {
    
  }
}
```

### golang
```golang
func isPalindrome(x int) bool {
    
}
```

### ruby
```ruby
# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
    
end
```

### scala
```scala
object Solution {
    def isPalindrome(x: Int): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_palindrome(x: i32) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-palindrome x)
  (-> exact-integer? boolean?)
  )
```

### erlang
```erlang
-spec is_palindrome(X :: integer()) -> boolean().
is_palindrome(X) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_palindrome(x :: integer) :: boolean
  def is_palindrome(x) do
    
  end
end
```
