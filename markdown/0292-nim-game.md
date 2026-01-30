# 292. Nim Game

- Difficulty: Easy
- Topics: Math, Brainteaser, Game Theory
- Slug: nim-game
- Problem ID: 292

## Description
You are playing the following Nim Game with your friend:
Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: n = 4
Output: false
Explanation: These are the possible outcomes:
1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
In all outcomes, your friend wins.
```

### Example 2
```text
Input: n = 1
Output: true
```

### Example 3
```text
Input: n = 2
Output: true
```


## Constraints
- 1 <= n <= 231 - 1

## Hints
- If there are 5 stones in the heap, could you figure out a way to remove the stones such that you will always be the winner?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool canWinNim(int n) {
        
    }
};
```

### java
```java
class Solution {
    public boolean canWinNim(int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def canWinNim(self, n):
        """
        :type n: int
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def canWinNim(self, n: int) -> bool:
```

### c
```c
bool canWinNim(int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool CanWinNim(int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    
};
```

### typescript
```typescript
function canWinNim(n: number): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @return Boolean
     */
    function canWinNim($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func canWinNim(_ n: Int) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun canWinNim(n: Int): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool canWinNim(int n) {
    
  }
}
```

### golang
```golang
func canWinNim(n int) bool {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @return {Boolean}
def can_win_nim(n)
    
end
```

### scala
```scala
object Solution {
    def canWinNim(n: Int): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn can_win_nim(n: i32) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (can-win-nim n)
  (-> exact-integer? boolean?)
  )
```

### erlang
```erlang
-spec can_win_nim(N :: integer()) -> boolean().
can_win_nim(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec can_win_nim(n :: integer) :: boolean
  def can_win_nim(n) do
    
  end
end
```
