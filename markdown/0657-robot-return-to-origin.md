# 657. Robot Return to Origin

- Difficulty: Easy
- Topics: String, Simulation
- Slug: robot-return-to-origin
- Problem ID: 657

## Description
There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.
You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).
Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.
Note: The way that the robot is "facing" is irrelevant. 'R' will always make the robot move to the right once, 'L' will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: moves = "UD"
Output: true
Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.
```

### Example 2
```text
Input: moves = "LL"
Output: false
Explanation: The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.
```


## Constraints
- 1 <= moves.length <= 2 * 104
- moves only contains the characters 'U', 'D', 'L' and 'R'.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool judgeCircle(string moves) {
        
    }
};
```

### java
```java
class Solution {
    public boolean judgeCircle(String moves) {
        
    }
}
```

### python
```python
class Solution(object):
    def judgeCircle(self, moves):
        """
        :type moves: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def judgeCircle(self, moves: str) -> bool:
```

### c
```c
bool judgeCircle(char* moves) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool JudgeCircle(string moves) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    
};
```

### typescript
```typescript
function judgeCircle(moves: string): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $moves
     * @return Boolean
     */
    function judgeCircle($moves) {
        
    }
}
```

### swift
```swift
class Solution {
    func judgeCircle(_ moves: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun judgeCircle(moves: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool judgeCircle(String moves) {
    
  }
}
```

### golang
```golang
func judgeCircle(moves string) bool {
    
}
```

### ruby
```ruby
# @param {String} moves
# @return {Boolean}
def judge_circle(moves)
    
end
```

### scala
```scala
object Solution {
    def judgeCircle(moves: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn judge_circle(moves: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (judge-circle moves)
  (-> string? boolean?)
  )
```

### erlang
```erlang
-spec judge_circle(Moves :: unicode:unicode_binary()) -> boolean().
judge_circle(Moves) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec judge_circle(moves :: String.t) :: boolean
  def judge_circle(moves) do
    
  end
end
```
