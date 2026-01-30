# 1036. Escape a Large Maze

- Difficulty: Hard
- Topics: Array, Hash Table, Depth-First Search, Breadth-First Search
- Slug: escape-a-large-maze
- Problem ID: 1106

## Description
There is a 1 million by 1 million grid on an XY-plane, and the coordinates of each grid square are (x, y).
We start at the source = [sx, sy] square and want to reach the target = [tx, ty] square. There is also an array of blocked squares, where each blocked[i] = [xi, yi] represents a blocked square with coordinates (xi, yi).
Each move, we can walk one square north, east, south, or west if the square is not in the array of blocked squares. We are also not allowed to walk outside of the grid.
Return true if and only if it is possible to reach the target square from the source square through a sequence of valid moves.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: blocked = [[0,1],[1,0]], source = [0,0], target = [0,2]
Output: false
Explanation: The target square is inaccessible starting from the source square because we cannot move.
We cannot move north or east because those squares are blocked.
We cannot move south or west because we cannot go outside of the grid.
```

### Example 2
```text
Input: blocked = [], source = [0,0], target = [999999,999999]
Output: true
Explanation: Because there are no blocked cells, it is possible to reach the target square.
```


## Constraints
- 0 <= blocked.length <= 200
- blocked[i].length == 2
- 0 <= xi, yi < 106
- source.length == target.length == 2
- 0 <= sx, sy, tx, ty < 106
- source != target
- It is guaranteed that source and target are not blocked.

## Hints
- If we become stuck, there's either a loop around the source or around the target.
- If there is a loop around say, the source, what is the maximum number of squares it can have?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isEscapePossible(vector<vector<int>>& blocked, vector<int>& source, vector<int>& target) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isEscapePossible(int[][] blocked, int[] source, int[] target) {
        
    }
}
```

### python
```python
class Solution(object):
    def isEscapePossible(self, blocked, source, target):
        """
        :type blocked: List[List[int]]
        :type source: List[int]
        :type target: List[int]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isEscapePossible(self, blocked: List[List[int]], source: List[int], target: List[int]) -> bool:
```

### c
```c
bool isEscapePossible(int** blocked, int blockedSize, int* blockedColSize, int* source, int sourceSize, int* target, int targetSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsEscapePossible(int[][] blocked, int[] source, int[] target) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
var isEscapePossible = function(blocked, source, target) {
    
};
```

### typescript
```typescript
function isEscapePossible(blocked: number[][], source: number[], target: number[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $blocked
     * @param Integer[] $source
     * @param Integer[] $target
     * @return Boolean
     */
    function isEscapePossible($blocked, $source, $target) {
        
    }
}
```

### swift
```swift
class Solution {
    func isEscapePossible(_ blocked: [[Int]], _ source: [Int], _ target: [Int]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isEscapePossible(blocked: Array<IntArray>, source: IntArray, target: IntArray): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isEscapePossible(List<List<int>> blocked, List<int> source, List<int> target) {
    
  }
}
```

### golang
```golang
func isEscapePossible(blocked [][]int, source []int, target []int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[][]} blocked
# @param {Integer[]} source
# @param {Integer[]} target
# @return {Boolean}
def is_escape_possible(blocked, source, target)
    
end
```

### scala
```scala
object Solution {
    def isEscapePossible(blocked: Array[Array[Int]], source: Array[Int], target: Array[Int]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_escape_possible(blocked: Vec<Vec<i32>>, source: Vec<i32>, target: Vec<i32>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-escape-possible blocked source target)
  (-> (listof (listof exact-integer?)) (listof exact-integer?) (listof exact-integer?) boolean?)
  )
```

### erlang
```erlang
-spec is_escape_possible(Blocked :: [[integer()]], Source :: [integer()], Target :: [integer()]) -> boolean().
is_escape_possible(Blocked, Source, Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_escape_possible(blocked :: [[integer]], source :: [integer], target :: [integer]) :: boolean
  def is_escape_possible(blocked, source, target) do
    
  end
end
```
