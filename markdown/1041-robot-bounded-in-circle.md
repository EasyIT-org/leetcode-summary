# 1041. Robot Bounded In Circle

- Difficulty: Medium
- Topics: Math, String, Simulation
- Slug: robot-bounded-in-circle
- Problem ID: 1119

## Description
On an infinite plane, a robot initially stands at (0, 0) and faces north. Note that:
The robot can receive one of three instructions:
The robot performs the instructions given in order, and repeats them forever.
Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: instructions = "GGLLGG"
Output: true
Explanation: The robot is initially at (0, 0) facing the north direction.
"G": move one step. Position: (0, 1). Direction: North.
"G": move one step. Position: (0, 2). Direction: North.
"L": turn 90 degrees anti-clockwise. Position: (0, 2). Direction: West.
"L": turn 90 degrees anti-clockwise. Position: (0, 2). Direction: South.
"G": move one step. Position: (0, 1). Direction: South.
"G": move one step. Position: (0, 0). Direction: South.
Repeating the instructions, the robot goes into the cycle: (0, 0) --> (0, 1) --> (0, 2) --> (0, 1) --> (0, 0).
Based on that, we return true.
```

### Example 2
```text
Input: instructions = "GG"
Output: false
Explanation: The robot is initially at (0, 0) facing the north direction.
"G": move one step. Position: (0, 1). Direction: North.
"G": move one step. Position: (0, 2). Direction: North.
Repeating the instructions, keeps advancing in the north direction and does not go into cycles.
Based on that, we return false.
```

### Example 3
```text
Input: instructions = "GL"
Output: true
Explanation: The robot is initially at (0, 0) facing the north direction.
"G": move one step. Position: (0, 1). Direction: North.
"L": turn 90 degrees anti-clockwise. Position: (0, 1). Direction: West.
"G": move one step. Position: (-1, 1). Direction: West.
"L": turn 90 degrees anti-clockwise. Position: (-1, 1). Direction: South.
"G": move one step. Position: (-1, 0). Direction: South.
"L": turn 90 degrees anti-clockwise. Position: (-1, 0). Direction: East.
"G": move one step. Position: (0, 0). Direction: East.
"L": turn 90 degrees anti-clockwise. Position: (0, 0). Direction: North.
Repeating the instructions, the robot goes into the cycle: (0, 0) --> (0, 1) --> (-1, 1) --> (-1, 0) --> (0, 0).
Based on that, we return true.
```


## Constraints
- 1 <= instructions.length <= 100
- instructions[i] is 'G', 'L' or, 'R'.

## Hints
- Calculate the final vector of how the robot travels after executing all instructions once - it consists of a change in position plus a change in direction.
- The robot stays in the circle if and only if (looking at the final vector) it changes direction (ie. doesn't stay pointing north), or it moves 0.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isRobotBounded(string instructions) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isRobotBounded(String instructions) {
        
    }
}
```

### python
```python
class Solution(object):
    def isRobotBounded(self, instructions):
        """
        :type instructions: str
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isRobotBounded(self, instructions: str) -> bool:
```

### c
```c
bool isRobotBounded(char* instructions) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsRobotBounded(string instructions) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    
};
```

### typescript
```typescript
function isRobotBounded(instructions: string): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $instructions
     * @return Boolean
     */
    function isRobotBounded($instructions) {
        
    }
}
```

### swift
```swift
class Solution {
    func isRobotBounded(_ instructions: String) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isRobotBounded(instructions: String): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isRobotBounded(String instructions) {
    
  }
}
```

### golang
```golang
func isRobotBounded(instructions string) bool {
    
}
```

### ruby
```ruby
# @param {String} instructions
# @return {Boolean}
def is_robot_bounded(instructions)
    
end
```

### scala
```scala
object Solution {
    def isRobotBounded(instructions: String): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_robot_bounded(instructions: String) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-robot-bounded instructions)
  (-> string? boolean?)
  )
```

### erlang
```erlang
-spec is_robot_bounded(Instructions :: unicode:unicode_binary()) -> boolean().
is_robot_bounded(Instructions) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_robot_bounded(instructions :: String.t) :: boolean
  def is_robot_bounded(instructions) do
    
  end
end
```
