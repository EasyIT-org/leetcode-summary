# 29. Divide Two Integers

- Difficulty: Medium
- Topics: Math, Bit Manipulation
- Slug: divide-two-integers
- Problem ID: 29

## Description
Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.
Return the quotient after dividing dividend by divisor.
Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = 3.33333.. which is truncated to 3.
```

### Example 2
```text
Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = -2.33333.. which is truncated to -2.
```


## Constraints
- -231 <= dividend, divisor <= 231 - 1
- divisor != 0

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int divide(int dividend, int divisor) {
        
    }
};
```

### java
```java
class Solution {
    public int divide(int dividend, int divisor) {
        
    }
}
```

### python
```python
class Solution(object):
    def divide(self, dividend, divisor):
        """
        :type dividend: int
        :type divisor: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
```

### c
```c
int divide(int dividend, int divisor) {
    
}
```

### csharp
```csharp
public class Solution {
    public int Divide(int dividend, int divisor) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    
};
```

### typescript
```typescript
function divide(dividend: number, divisor: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $dividend
     * @param Integer $divisor
     * @return Integer
     */
    function divide($dividend, $divisor) {
        
    }
}
```

### swift
```swift
class Solution {
    func divide(_ dividend: Int, _ divisor: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun divide(dividend: Int, divisor: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int divide(int dividend, int divisor) {
    
  }
}
```

### golang
```golang
func divide(dividend int, divisor int) int {
    
}
```

### ruby
```ruby
# @param {Integer} dividend
# @param {Integer} divisor
# @return {Integer}
def divide(dividend, divisor)
    
end
```

### scala
```scala
object Solution {
    def divide(dividend: Int, divisor: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn divide(dividend: i32, divisor: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (divide dividend divisor)
  (-> exact-integer? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec divide(Dividend :: integer(), Divisor :: integer()) -> integer().
divide(Dividend, Divisor) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec divide(dividend :: integer, divisor :: integer) :: integer
  def divide(dividend, divisor) do
    
  end
end
```
