# 789. Escape The Ghosts

- Difficulty: Medium
- Topics: Array, Math
- Slug: escape-the-ghosts
- Problem ID: 805

## Description
You are playing a simplified PAC-MAN game on an infinite 2-D grid. You start at the point [0, 0], and you are given a destination point target = [xtarget, ytarget] that you are trying to get to. There are several ghosts on the map with their starting positions given as a 2D array ghosts, where ghosts[i] = [xi, yi] represents the starting position of the ith ghost. All inputs are integral coordinates.
Each turn, you and all the ghosts may independently choose to either move 1 unit in any of the four cardinal directions: north, east, south, or west, or stay still. All actions happen simultaneously.
You escape if and only if you can reach the target before any ghost reaches you. If you reach any square (including the target) at the same time as a ghost, it does not count as an escape.
Return true if it is possible to escape regardless of how the ghosts move, otherwise return false.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: ghosts = [[1,0],[0,3]], target = [0,1]
Output: true
Explanation: You can reach the destination (0, 1) after 1 turn, while the ghosts located at (1, 0) and (0, 3) cannot catch up with you.
```

### Example 2
```text
Input: ghosts = [[1,0]], target = [2,0]
Output: false
Explanation: You need to reach the destination (2, 0), but the ghost at (1, 0) lies between you and the destination.
```

### Example 3
```text
Input: ghosts = [[2,0]], target = [1,0]
Output: false
Explanation: The ghost can reach the target at the same time as you.
```


## Constraints
- 1 <= ghosts.length <= 100
- ghosts[i].length == 2
- -104 <= xi, yi <= 104
- There can be multiple ghosts in the same location.
- target.length == 2
- -104 <= xtarget, ytarget <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool escapeGhosts(vector<vector<int>>& ghosts, vector<int>& target) {
        
    }
};
```

### java
```java
class Solution {
    public boolean escapeGhosts(int[][] ghosts, int[] target) {
        
    }
}
```

### python
```python
class Solution(object):
    def escapeGhosts(self, ghosts, target):
        """
        :type ghosts: List[List[int]]
        :type target: List[int]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def escapeGhosts(self, ghosts: List[List[int]], target: List[int]) -> bool:
```

### c
```c
bool escapeGhosts(int** ghosts, int ghostsSize, int* ghostsColSize, int* target, int targetSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool EscapeGhosts(int[][] ghosts, int[] target) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
    
};
```

### typescript
```typescript
function escapeGhosts(ghosts: number[][], target: number[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $ghosts
     * @param Integer[] $target
     * @return Boolean
     */
    function escapeGhosts($ghosts, $target) {
        
    }
}
```

### swift
```swift
class Solution {
    func escapeGhosts(_ ghosts: [[Int]], _ target: [Int]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun escapeGhosts(ghosts: Array<IntArray>, target: IntArray): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool escapeGhosts(List<List<int>> ghosts, List<int> target) {
    
  }
}
```

### golang
```golang
func escapeGhosts(ghosts [][]int, target []int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[][]} ghosts
# @param {Integer[]} target
# @return {Boolean}
def escape_ghosts(ghosts, target)
    
end
```

### scala
```scala
object Solution {
    def escapeGhosts(ghosts: Array[Array[Int]], target: Array[Int]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn escape_ghosts(ghosts: Vec<Vec<i32>>, target: Vec<i32>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (escape-ghosts ghosts target)
  (-> (listof (listof exact-integer?)) (listof exact-integer?) boolean?)
  )
```

### erlang
```erlang
-spec escape_ghosts(Ghosts :: [[integer()]], Target :: [integer()]) -> boolean().
escape_ghosts(Ghosts, Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec escape_ghosts(ghosts :: [[integer]], target :: [integer]) :: boolean
  def escape_ghosts(ghosts, target) do
    
  end
end
```
