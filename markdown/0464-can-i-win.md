# 464. Can I Win

- Difficulty: Medium
- Topics: Math, Dynamic Programming, Bit Manipulation, Memoization, Game Theory, Bitmask
- Slug: can-i-win
- Problem ID: 464

## Description
In the "100 game" two players take turns adding, to a running total, any integer from 1 to 10. The player who first causes the running total to reach or exceed 100 wins.
What if we change the game so that players cannot re-use integers?
For example, two players might take turns drawing from a common pool of numbers from 1 to 15 without replacement until they reach a total >= 100.
Given two integers maxChoosableInteger and desiredTotal, return true if the first player to move can force a win, otherwise, return false. Assume both players play optimally.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: maxChoosableInteger = 10, desiredTotal = 11
Output: false
Explanation:
No matter which integer the first player choose, the first player will lose.
The first player can choose an integer from 1 up to 10.
If the first player choose 1, the second player can only choose integers from 2 up to 10.
The second player will win by choosing 10 and get a total = 11, which is >= desiredTotal.
Same with other integers chosen by the first player, the second player will always win.
```

### Example 2
```text
Input: maxChoosableInteger = 10, desiredTotal = 0
Output: true
```

### Example 3
```text
Input: maxChoosableInteger = 10, desiredTotal = 1
Output: true
```


## Constraints
- 1 <= maxChoosableInteger <= 20
- 0 <= desiredTotal <= 300

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool canIWin(int maxChoosableInteger, int desiredTotal) {
        
    }
};
```

### java
```java
class Solution {
    public boolean canIWin(int maxChoosableInteger, int desiredTotal) {
        
    }
}
```

### python
```python
class Solution(object):
    def canIWin(self, maxChoosableInteger, desiredTotal):
        """
        :type maxChoosableInteger: int
        :type desiredTotal: int
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def canIWin(self, maxChoosableInteger: int, desiredTotal: int) -> bool:
```

### c
```c
bool canIWin(int maxChoosableInteger, int desiredTotal) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool CanIWin(int maxChoosableInteger, int desiredTotal) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
    
};
```

### typescript
```typescript
function canIWin(maxChoosableInteger: number, desiredTotal: number): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $maxChoosableInteger
     * @param Integer $desiredTotal
     * @return Boolean
     */
    function canIWin($maxChoosableInteger, $desiredTotal) {
        
    }
}
```

### swift
```swift
class Solution {
    func canIWin(_ maxChoosableInteger: Int, _ desiredTotal: Int) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun canIWin(maxChoosableInteger: Int, desiredTotal: Int): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool canIWin(int maxChoosableInteger, int desiredTotal) {
    
  }
}
```

### golang
```golang
func canIWin(maxChoosableInteger int, desiredTotal int) bool {
    
}
```

### ruby
```ruby
# @param {Integer} max_choosable_integer
# @param {Integer} desired_total
# @return {Boolean}
def can_i_win(max_choosable_integer, desired_total)
    
end
```

### scala
```scala
object Solution {
    def canIWin(maxChoosableInteger: Int, desiredTotal: Int): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn can_i_win(max_choosable_integer: i32, desired_total: i32) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (can-i-win maxChoosableInteger desiredTotal)
  (-> exact-integer? exact-integer? boolean?)
  )
```

### erlang
```erlang
-spec can_i_win(MaxChoosableInteger :: integer(), DesiredTotal :: integer()) -> boolean().
can_i_win(MaxChoosableInteger, DesiredTotal) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec can_i_win(max_choosable_integer :: integer, desired_total :: integer) :: boolean
  def can_i_win(max_choosable_integer, desired_total) do
    
  end
end
```
