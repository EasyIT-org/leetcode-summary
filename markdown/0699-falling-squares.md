# 699. Falling Squares

- Difficulty: Hard
- Topics: Array, Segment Tree, Ordered Set
- Slug: falling-squares
- Problem ID: 699

## Description
There are several squares being dropped onto the X-axis of a 2D plane.
You are given a 2D integer array positions where positions[i] = [lefti, sideLengthi] represents the ith square with a side length of sideLengthi that is dropped with its left edge aligned with X-coordinate lefti.
Each square is dropped one at a time from a height above any landed squares. It then falls downward (negative Y direction) until it either lands on the top side of another square or on the X-axis. A square brushing the left/right side of another square does not count as landing on it. Once it lands, it freezes in place and cannot be moved.
After each square is dropped, you must record the height of the current tallest stack of squares.
Return an integer array ans where ans[i] represents the height described above after dropping the ith square.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: positions = [[1,2],[2,3],[6,1]]
Output: [2,5,5]
Explanation:
After the first drop, the tallest stack is square 1 with a height of 2.
After the second drop, the tallest stack is squares 1 and 2 with a height of 5.
After the third drop, the tallest stack is still squares 1 and 2 with a height of 5.
Thus, we return an answer of [2, 5, 5].
```
Images:
- https://assets.leetcode.com/uploads/2021/04/28/fallingsq1-plane.jpg

### Example 2
```text
Input: positions = [[100,100],[200,100]]
Output: [100,100]
Explanation:
After the first drop, the tallest stack is square 1 with a height of 100.
After the second drop, the tallest stack is either square 1 or square 2, both with heights of 100.
Thus, we return an answer of [100, 100].
Note that square 2 only brushes the right side of square 1, which does not count as landing on it.
```
Images:
- https://assets.leetcode.com/uploads/2021/04/28/fallingsq1-plane.jpg


## Constraints
- 1 <= positions.length <= 1000
- 1 <= lefti <= 108
- 1 <= sideLengthi <= 106

## Hints
- If positions = [[10, 20], [20, 30]], this is the same as [[1, 2], [2, 3]].  Currently, the values of positions are very large.  Can you generalize this approach so as to make the values in positions manageable?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> fallingSquares(vector<vector<int>>& positions) {
        
    }
};
```

### java
```java
class Solution {
    public List<Integer> fallingSquares(int[][] positions) {
        
    }
}
```

### python
```python
class Solution(object):
    def fallingSquares(self, positions):
        """
        :type positions: List[List[int]]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def fallingSquares(self, positions: List[List[int]]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* fallingSquares(int** positions, int positionsSize, int* positionsColSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<int> FallingSquares(int[][] positions) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} positions
 * @return {number[]}
 */
var fallingSquares = function(positions) {
    
};
```

### typescript
```typescript
function fallingSquares(positions: number[][]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $positions
     * @return Integer[]
     */
    function fallingSquares($positions) {
        
    }
}
```

### swift
```swift
class Solution {
    func fallingSquares(_ positions: [[Int]]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun fallingSquares(positions: Array<IntArray>): List<Int> {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> fallingSquares(List<List<int>> positions) {
    
  }
}
```

### golang
```golang
func fallingSquares(positions [][]int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} positions
# @return {Integer[]}
def falling_squares(positions)
    
end
```

### scala
```scala
object Solution {
    def fallingSquares(positions: Array[Array[Int]]): List[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn falling_squares(positions: Vec<Vec<i32>>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (falling-squares positions)
  (-> (listof (listof exact-integer?)) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec falling_squares(Positions :: [[integer()]]) -> [integer()].
falling_squares(Positions) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec falling_squares(positions :: [[integer]]) :: [integer]
  def falling_squares(positions) do
    
  end
end
```
