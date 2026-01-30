# 576. Out of Boundary Paths

- Difficulty: Medium
- Topics: Dynamic Programming
- Slug: out-of-boundary-paths
- Problem ID: 576

## Description
There is an m x n grid with a ball. The ball is initially at the position [startRow, startColumn]. You are allowed to move the ball to one of the four adjacent cells in the grid (possibly out of the grid crossing the grid boundary). You can apply at most maxMove moves to the ball.
Given the five integers m, n, maxMove, startRow, startColumn, return the number of paths to move the ball out of the grid boundary. Since the answer can be very large, return it modulo 109 + 7.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
Output: 6
```
Images:
- https://assets.leetcode.com/uploads/2021/04/28/out_of_boundary_paths_1.png

### Example 2
```text
Input: m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
Output: 12
```
Images:
- https://assets.leetcode.com/uploads/2021/04/28/out_of_boundary_paths_2.png


## Constraints
- 1 <= m, n <= 50
- 0 <= maxMove <= 50
- 0 <= startRow < m
- 0 <= startColumn < n

## Hints
- Is traversing every path feasible? There are many possible paths for a small matrix. Try to optimize it.
- Can we use some space to store the number of paths and update them after every move?
- One obvious thing: the ball will go out of the boundary only by crossing it. Also, there is only one possible way the ball can go out of the boundary from the boundary cell except for corner cells. From the corner cell, the ball can go out in two different ways.

Can you use this thing to solve the problem?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findPaths(int m, int n, int maxMove, int startRow, int startColumn) {
        
    }
};
```

### java
```java
class Solution {
    public int findPaths(int m, int n, int maxMove, int startRow, int startColumn) {
        
    }
}
```

### python
```python
class Solution(object):
    def findPaths(self, m, n, maxMove, startRow, startColumn):
        """
        :type m: int
        :type n: int
        :type maxMove: int
        :type startRow: int
        :type startColumn: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findPaths(self, m: int, n: int, maxMove: int, startRow: int, startColumn: int) -> int:
```

### c
```c
int findPaths(int m, int n, int maxMove, int startRow, int startColumn) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindPaths(int m, int n, int maxMove, int startRow, int startColumn) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    
};
```

### typescript
```typescript
function findPaths(m: number, n: number, maxMove: number, startRow: number, startColumn: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $m
     * @param Integer $n
     * @param Integer $maxMove
     * @param Integer $startRow
     * @param Integer $startColumn
     * @return Integer
     */
    function findPaths($m, $n, $maxMove, $startRow, $startColumn) {
        
    }
}
```

### swift
```swift
class Solution {
    func findPaths(_ m: Int, _ n: Int, _ maxMove: Int, _ startRow: Int, _ startColumn: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findPaths(m: Int, n: Int, maxMove: Int, startRow: Int, startColumn: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findPaths(int m, int n, int maxMove, int startRow, int startColumn) {
    
  }
}
```

### golang
```golang
func findPaths(m int, n int, maxMove int, startRow int, startColumn int) int {
    
}
```

### ruby
```ruby
# @param {Integer} m
# @param {Integer} n
# @param {Integer} max_move
# @param {Integer} start_row
# @param {Integer} start_column
# @return {Integer}
def find_paths(m, n, max_move, start_row, start_column)
    
end
```

### scala
```scala
object Solution {
    def findPaths(m: Int, n: Int, maxMove: Int, startRow: Int, startColumn: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_paths(m: i32, n: i32, max_move: i32, start_row: i32, start_column: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-paths m n maxMove startRow startColumn)
  (-> exact-integer? exact-integer? exact-integer? exact-integer? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec find_paths(M :: integer(), N :: integer(), MaxMove :: integer(), StartRow :: integer(), StartColumn :: integer()) -> integer().
find_paths(M, N, MaxMove, StartRow, StartColumn) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_paths(m :: integer, n :: integer, max_move :: integer, start_row :: integer, start_column :: integer) :: integer
  def find_paths(m, n, max_move, start_row, start_column) do
    
  end
end
```
