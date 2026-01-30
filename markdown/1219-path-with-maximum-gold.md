# 1219. Path with Maximum Gold

- Difficulty: Medium
- Topics: Array, Backtracking, Matrix
- Slug: path-with-maximum-gold
- Problem ID: 1331

## Description
In a gold mine grid of size m x n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.
Return the maximum amount of gold you can collect under the conditions:
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
Output: 24
Explanation:
[[0,6,0],
 [5,8,7],
 [0,9,0]]
Path to get the maximum gold, 9 -> 8 -> 7.
```

### Example 2
```text
Input: grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
Output: 28
Explanation:
[[1,0,7],
 [2,0,6],
 [3,4,5],
 [0,3,0],
 [9,0,20]]
Path to get the maximum gold, 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7.
```


## Constraints
- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 15
- 0 <= grid[i][j] <= 100
- There are at most 25 cells containing gold.

## Hints
- Use recursion to try all such paths and find the one with the maximum value.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int getMaximumGold(vector<vector<int>>& grid) {
        
    }
};
```

### java
```java
class Solution {
    public int getMaximumGold(int[][] grid) {
        
    }
}
```

### python
```python
class Solution(object):
    def getMaximumGold(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def getMaximumGold(self, grid: List[List[int]]) -> int:
```

### c
```c
int getMaximumGold(int** grid, int gridSize, int* gridColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int GetMaximumGold(int[][] grid) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    
};
```

### typescript
```typescript
function getMaximumGold(grid: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function getMaximumGold($grid) {
        
    }
}
```

### swift
```swift
class Solution {
    func getMaximumGold(_ grid: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun getMaximumGold(grid: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int getMaximumGold(List<List<int>> grid) {
    
  }
}
```

### golang
```golang
func getMaximumGold(grid [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} grid
# @return {Integer}
def get_maximum_gold(grid)
    
end
```

### scala
```scala
object Solution {
    def getMaximumGold(grid: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn get_maximum_gold(grid: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (get-maximum-gold grid)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec get_maximum_gold(Grid :: [[integer()]]) -> integer().
get_maximum_gold(Grid) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec get_maximum_gold(grid :: [[integer]]) :: integer
  def get_maximum_gold(grid) do
    
  end
end
```
