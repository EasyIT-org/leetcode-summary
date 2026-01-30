# 874. Walking Robot Simulation

- Difficulty: Medium
- Topics: Array, Hash Table, Simulation
- Slug: walking-robot-simulation
- Problem ID: 906

## Description
A robot on an infinite XY-plane starts at point (0, 0) facing north. The robot receives an array of integers commands, which represents a sequence of moves that it needs to execute. There are only three possible types of instructions the robot can receive:
Some of the grid squares are obstacles. The ith obstacle is at grid point obstacles[i] = (xi, yi). If the robot runs into an obstacle, it will stay in its current location (on the block adjacent to the obstacle) and move onto the next command.
Return the maximum squared Euclidean distance that the robot reaches at any point in its path (i.e. if the distance is 5, return 25).
Note:
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: commands = [4,-1,3], obstacles = []
Output: 25
Explanation:
The robot starts at (0, 0) :
The furthest point the robot ever gets from the origin is (3, 4) , which squared is 3 2 + 4 2 = 25 units away.
```

### Example 2
```text
Input: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
Output: 65
Explanation:
The robot starts at (0, 0) :
The furthest point the robot ever gets from the origin is (1, 8) , which squared is 1 2 + 8 2 = 65 units away.
```

### Example 3
```text
Input: commands = [6,-1,-1,6], obstacles = [[0,0]]
Output: 36
Explanation:
The robot starts at (0, 0) :
The furthest point the robot ever gets from the origin is (0, 6) , which squared is 6 2 = 36 units away.
```


## Constraints
- 1 <= commands.length <= 104
- commands[i] is either -2, -1, or an integer in the range [1, 9].
- 0 <= obstacles.length <= 104
- -3 * 104 <= xi, yi <= 3 * 104
- The answer is guaranteed to be less than 231.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int robotSim(vector<int>& commands, vector<vector<int>>& obstacles) {
        
    }
};
```

### java
```java
class Solution {
    public int robotSim(int[] commands, int[][] obstacles) {
        
    }
}
```

### python
```python
class Solution(object):
    def robotSim(self, commands, obstacles):
        """
        :type commands: List[int]
        :type obstacles: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def robotSim(self, commands: List[int], obstacles: List[List[int]]) -> int:
```

### c
```c
int robotSim(int* commands, int commandsSize, int** obstacles, int obstaclesSize, int* obstaclesColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int RobotSim(int[] commands, int[][] obstacles) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    
};
```

### typescript
```typescript
function robotSim(commands: number[], obstacles: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $commands
     * @param Integer[][] $obstacles
     * @return Integer
     */
    function robotSim($commands, $obstacles) {
        
    }
}
```

### swift
```swift
class Solution {
    func robotSim(_ commands: [Int], _ obstacles: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun robotSim(commands: IntArray, obstacles: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int robotSim(List<int> commands, List<List<int>> obstacles) {
    
  }
}
```

### golang
```golang
func robotSim(commands []int, obstacles [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} commands
# @param {Integer[][]} obstacles
# @return {Integer}
def robot_sim(commands, obstacles)
    
end
```

### scala
```scala
object Solution {
    def robotSim(commands: Array[Int], obstacles: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn robot_sim(commands: Vec<i32>, obstacles: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (robot-sim commands obstacles)
  (-> (listof exact-integer?) (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec robot_sim(Commands :: [integer()], Obstacles :: [[integer()]]) -> integer().
robot_sim(Commands, Obstacles) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec robot_sim(commands :: [integer], obstacles :: [[integer]]) :: integer
  def robot_sim(commands, obstacles) do
    
  end
end
```
