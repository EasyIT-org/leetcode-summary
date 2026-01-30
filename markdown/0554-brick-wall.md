# 554. Brick Wall

- Difficulty: Medium
- Topics: Array, Hash Table
- Slug: brick-wall
- Problem ID: 554

## Description
There is a rectangular brick wall in front of you with n rows of bricks. The ith row has some number of bricks each of the same height (i.e., one unit) but they can be of different widths. The total width of each row is the same.
Draw a vertical line from the top to the bottom and cross the least bricks. If your line goes through the edge of a brick, then the brick is not considered as crossed. You cannot draw a line just along one of the two vertical edges of the wall, in which case the line will obviously cross no bricks.
Given the 2D array wall that contains the information about the wall, return the minimum number of crossed bricks after drawing such a vertical line.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: wall = [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]
Output: 2
```
Images:
- https://assets.leetcode.com/uploads/2025/01/17/a.png

### Example 2
```text
Input: wall = [[1],[1],[1]]
Output: 3
```
Images:
- https://assets.leetcode.com/uploads/2025/01/17/a.png


## Constraints
- n == wall.length
- 1 <= n <= 104
- 1 <= wall[i].length <= 104
- 1 <= sum(wall[i].length) <= 2 * 104
- sum(wall[i]) is the same for each row i.
- 1 <= wall[i][j] <= 231 - 1

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int leastBricks(vector<vector<int>>& wall) {
        
    }
};
```

### java
```java
class Solution {
    public int leastBricks(List<List<Integer>> wall) {
        
    }
}
```

### python
```python
class Solution(object):
    def leastBricks(self, wall):
        """
        :type wall: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def leastBricks(self, wall: List[List[int]]) -> int:
```

### c
```c
int leastBricks(int** wall, int wallSize, int* wallColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int LeastBricks(IList<IList<int>> wall) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    
};
```

### typescript
```typescript
function leastBricks(wall: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $wall
     * @return Integer
     */
    function leastBricks($wall) {
        
    }
}
```

### swift
```swift
class Solution {
    func leastBricks(_ wall: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun leastBricks(wall: List<List<Int>>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int leastBricks(List<List<int>> wall) {
    
  }
}
```

### golang
```golang
func leastBricks(wall [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} wall
# @return {Integer}
def least_bricks(wall)
    
end
```

### scala
```scala
object Solution {
    def leastBricks(wall: List[List[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn least_bricks(wall: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (least-bricks wall)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec least_bricks(Wall :: [[integer()]]) -> integer().
least_bricks(Wall) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec least_bricks(wall :: [[integer]]) :: integer
  def least_bricks(wall) do
    
  end
end
```
