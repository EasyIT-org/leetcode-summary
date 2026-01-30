# 417. Pacific Atlantic Water Flow

- Difficulty: Medium
- Topics: Array, Depth-First Search, Breadth-First Search, Matrix
- Slug: pacific-atlantic-water-flow
- Problem ID: 417

## Description
There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.
The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).
The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.
Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
Explanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:
[0,4]: [0,4] -> Pacific Ocean 
       [0,4] -> Atlantic Ocean
[1,3]: [1,3] -> [0,3] -> Pacific Ocean 
       [1,3] -> [1,4] -> Atlantic Ocean
[1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean 
       [1,4] -> Atlantic Ocean
[2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean 
       [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean
[3,0]: [3,0] -> Pacific Ocean 
       [3,0] -> [4,0] -> Atlantic Ocean
[3,1]: [3,1] -> [3,0] -> Pacific Ocean 
       [3,1] -> [4,1] -> Atlantic Ocean
[4,0]: [4,0] -> Pacific Ocean 
       [4,0] -> Atlantic Ocean
Note that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.
```
Images:
- https://assets.leetcode.com/uploads/2021/06/08/waterflow-grid.jpg

### Example 2
```text
Input: heights = [[1]]
Output: [[0,0]]
Explanation: The water can flow from the only cell to the Pacific and Atlantic oceans.
```
Images:
- https://assets.leetcode.com/uploads/2021/06/08/waterflow-grid.jpg


## Constraints
- m == heights.length
- n == heights[r].length
- 1 <= m, n <= 200
- 0 <= heights[r][c] <= 105

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> pacificAtlantic(vector<vector<int>>& heights) {
        
    }
};
```

### java
```java
class Solution {
    public List<List<Integer>> pacificAtlantic(int[][] heights) {
        
    }
}
```

### python
```python
class Solution(object):
    def pacificAtlantic(self, heights):
        """
        :type heights: List[List[int]]
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** pacificAtlantic(int** heights, int heightsSize, int* heightsColSize, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<IList<int>> PacificAtlantic(int[][] heights) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    
};
```

### typescript
```typescript
function pacificAtlantic(heights: number[][]): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $heights
     * @return Integer[][]
     */
    function pacificAtlantic($heights) {
        
    }
}
```

### swift
```swift
class Solution {
    func pacificAtlantic(_ heights: [[Int]]) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun pacificAtlantic(heights: Array<IntArray>): List<List<Int>> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> pacificAtlantic(List<List<int>> heights) {
    
  }
}
```

### golang
```golang
func pacificAtlantic(heights [][]int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} heights
# @return {Integer[][]}
def pacific_atlantic(heights)
    
end
```

### scala
```scala
object Solution {
    def pacificAtlantic(heights: Array[Array[Int]]): List[List[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn pacific_atlantic(heights: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (pacific-atlantic heights)
  (-> (listof (listof exact-integer?)) (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec pacific_atlantic(Heights :: [[integer()]]) -> [[integer()]].
pacific_atlantic(Heights) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec pacific_atlantic(heights :: [[integer]]) :: [[integer]]
  def pacific_atlantic(heights) do
    
  end
end
```
