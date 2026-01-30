# 688. Knight Probability in Chessboard

- Difficulty: Medium
- Topics: Dynamic Programming
- Slug: knight-probability-in-chessboard
- Problem ID: 688

## Description
On an n x n chessboard, a knight starts at the cell (row, column) and attempts to make exactly k moves. The rows and columns are 0-indexed, so the top-left cell is (0, 0), and the bottom-right cell is (n - 1, n - 1).
A chess knight has eight possible moves it can make, as illustrated below. Each move is two cells in a cardinal direction, then one cell in an orthogonal direction.
Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.
The knight continues moving until it has made exactly k moves or has moved off the chessboard.
Return the probability that the knight remains on the board after it has stopped moving.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 3, k = 2, row = 0, column = 0
Output: 0.06250
Explanation: There are two moves (to (1,2), (2,1)) that will keep the knight on the board.
From each of those positions, there are also two moves that will keep the knight on the board.
The total probability the knight stays on the board is 0.0625.
```
Images:
- https://assets.leetcode.com/uploads/2018/10/12/knight.png

### Example 2
```text
Input: n = 1, k = 0, row = 0, column = 0
Output: 1.00000
```
Images:
- https://assets.leetcode.com/uploads/2018/10/12/knight.png


## Constraints
- 1 <= n <= 25
- 0 <= k <= 100
- 0 <= row, column <= n - 1

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    double knightProbability(int n, int k, int row, int column) {
        
    }
};
```

### java
```java
class Solution {
    public double knightProbability(int n, int k, int row, int column) {
        
    }
}
```

### python
```python
class Solution(object):
    def knightProbability(self, n, k, row, column):
        """
        :type n: int
        :type k: int
        :type row: int
        :type column: int
        :rtype: float
        """
```

### python3
```python3
class Solution:
    def knightProbability(self, n: int, k: int, row: int, column: int) -> float:
```

### c
```c
double knightProbability(int n, int k, int row, int column) {
    
}
```

### csharp
```csharp
public class Solution {
    public double KnightProbability(int n, int k, int row, int column) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
    
};
```

### typescript
```typescript
function knightProbability(n: number, k: number, row: number, column: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @param Integer $k
     * @param Integer $row
     * @param Integer $column
     * @return Float
     */
    function knightProbability($n, $k, $row, $column) {
        
    }
}
```

### swift
```swift
class Solution {
    func knightProbability(_ n: Int, _ k: Int, _ row: Int, _ column: Int) -> Double {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun knightProbability(n: Int, k: Int, row: Int, column: Int): Double {
        
    }
}
```

### dart
```dart
class Solution {
  double knightProbability(int n, int k, int row, int column) {
    
  }
}
```

### golang
```golang
func knightProbability(n int, k int, row int, column int) float64 {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer} k
# @param {Integer} row
# @param {Integer} column
# @return {Float}
def knight_probability(n, k, row, column)
    
end
```

### scala
```scala
object Solution {
    def knightProbability(n: Int, k: Int, row: Int, column: Int): Double = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn knight_probability(n: i32, k: i32, row: i32, column: i32) -> f64 {
        
    }
}
```

### racket
```racket
(define/contract (knight-probability n k row column)
  (-> exact-integer? exact-integer? exact-integer? exact-integer? flonum?)
  )
```

### erlang
```erlang
-spec knight_probability(N :: integer(), K :: integer(), Row :: integer(), Column :: integer()) -> float().
knight_probability(N, K, Row, Column) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec knight_probability(n :: integer, k :: integer, row :: integer, column :: integer) :: float
  def knight_probability(n, k, row, column) do
    
  end
end
```
