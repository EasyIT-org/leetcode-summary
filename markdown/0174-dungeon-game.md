# 174. Dungeon Game

- Difficulty: Hard
- Topics: Array, Dynamic Programming, Matrix
- Slug: dungeon-game
- Problem ID: 174

## Description
The demons had captured the princess and imprisoned her in the bottom-right corner of a dungeon. The dungeon consists of m x n rooms laid out in a 2D grid. Our valiant knight was initially positioned in the top-left room and must fight his way through dungeon to rescue the princess.
The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 or below, he dies immediately.
Some of the rooms are guarded by demons (represented by negative integers), so the knight loses health upon entering these rooms; other rooms are either empty (represented as 0) or contain magic orbs that increase the knight's health (represented by positive integers).
To reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step.
Return the knight's minimum initial health so that he can rescue the princess.
Note that any room can contain threats or power-ups, even the first room the knight enters and the bottom-right room where the princess is imprisoned.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: dungeon = [[-2,-3,3],[-5,-10,1],[10,30,-5]]
Output: 7
Explanation: The initial health of the knight must be at least 7 if he follows the optimal path: RIGHT-> RIGHT -> DOWN -> DOWN.
```
Images:
- https://assets.leetcode.com/uploads/2021/03/13/dungeon-grid-1.jpg

### Example 2
```text
Input: dungeon = [[0]]
Output: 1
```
Images:
- https://assets.leetcode.com/uploads/2021/03/13/dungeon-grid-1.jpg


## Constraints
- m == dungeon.length
- n == dungeon[i].length
- 1 <= m, n <= 200
- -1000 <= dungeon[i][j] <= 1000

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int calculateMinimumHP(vector<vector<int>>& dungeon) {
        
    }
};
```

### java
```java
class Solution {
    public int calculateMinimumHP(int[][] dungeon) {
        
    }
}
```

### python
```python
class Solution(object):
    def calculateMinimumHP(self, dungeon):
        """
        :type dungeon: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def calculateMinimumHP(self, dungeon: List[List[int]]) -> int:
```

### c
```c
int calculateMinimumHP(int** dungeon, int dungeonSize, int* dungeonColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int CalculateMinimumHP(int[][] dungeon) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    
};
```

### typescript
```typescript
function calculateMinimumHP(dungeon: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $dungeon
     * @return Integer
     */
    function calculateMinimumHP($dungeon) {
        
    }
}
```

### swift
```swift
class Solution {
    func calculateMinimumHP(_ dungeon: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun calculateMinimumHP(dungeon: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int calculateMinimumHP(List<List<int>> dungeon) {
    
  }
}
```

### golang
```golang
func calculateMinimumHP(dungeon [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} dungeon
# @return {Integer}
def calculate_minimum_hp(dungeon)
    
end
```

### scala
```scala
object Solution {
    def calculateMinimumHP(dungeon: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn calculate_minimum_hp(dungeon: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (calculate-minimum-hp dungeon)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec calculate_minimum_hp(Dungeon :: [[integer()]]) -> integer().
calculate_minimum_hp(Dungeon) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec calculate_minimum_hp(dungeon :: [[integer]]) :: integer
  def calculate_minimum_hp(dungeon) do
    
  end
end
```
