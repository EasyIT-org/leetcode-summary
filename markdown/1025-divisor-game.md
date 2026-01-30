# 1025. Divisor Game

- Difficulty: Easy
- Topics: Math, Dynamic Programming, Brainteaser, Game Theory
- Slug: divisor-game
- Problem ID: 1086

## Description
Alice and Bob take turns playing a game, with Alice starting first.
Initially, there is a number n on the chalkboard. On each player's turn, that player makes a move consisting of:
Also, if a player cannot make a move, they lose the game.
Return true if and only if Alice wins the game, assuming both players play optimally.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 2
Output: true
Explanation: Alice chooses 1, and Bob has no more moves.
```

### Example 2
```text
Input: n = 3
Output: false
Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.
```


## Constraints
- 1 <= n <= 1000

## Hints
- If the current number is even, we can always subtract a 1 to make it odd.  If the current number is odd, we must subtract an odd number to make it even.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool divisorGame(int n) {
        
    }
};
```

### java
```java
class Solution {
    public boolean divisorGame(int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def divisorGame(self, n):
        """
        :type n: int
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def divisorGame(self, n: int) -> bool:
```

### c
```c
bool divisorGame(int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool DivisorGame(int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
    
};
```

### typescript
```typescript
function divisorGame(n: number): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @return Boolean
     */
    function divisorGame($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func divisorGame(_ n: Int) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun divisorGame(n: Int): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool divisorGame(int n) {
    
  }
}
```

### golang
```golang
func divisorGame(n int) bool {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @return {Boolean}
def divisor_game(n)
    
end
```

### scala
```scala
object Solution {
    def divisorGame(n: Int): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn divisor_game(n: i32) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (divisor-game n)
  (-> exact-integer? boolean?)
  )
```

### erlang
```erlang
-spec divisor_game(N :: integer()) -> boolean().
divisor_game(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec divisor_game(n :: integer) :: boolean
  def divisor_game(n) do
    
  end
end
```
