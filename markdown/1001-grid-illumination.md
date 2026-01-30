# 1001. Grid Illumination

- Difficulty: Hard
- Topics: Array, Hash Table
- Slug: grid-illumination
- Problem ID: 1043

## Description
There is a 2D grid of size n x n where each cell of this grid has a lamp that is initially turned off.
You are given a 2D array of lamp positions lamps, where lamps[i] = [rowi, coli] indicates that the lamp at grid[rowi][coli] is turned on. Even if the same lamp is listed more than once, it is turned on.
When a lamp is turned on, it illuminates its cell and all other cells in the same row, column, or diagonal.
You are also given another 2D array queries, where queries[j] = [rowj, colj]. For the jth query, determine whether grid[rowj][colj] is illuminated or not. After answering the jth query, turn off the lamp at grid[rowj][colj] and its 8 adjacent lamps if they exist. A lamp is adjacent if its cell shares either a side or corner with grid[rowj][colj].
Return an array of integers ans, where ans[j] should be 1 if the cell in the jth query was illuminated, or 0 if the lamp was not.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: n = 5, lamps = [[0,0],[4,4]], queries = [[1,1],[1,0]]
Output: [1,0]
Explanation: We have the initial grid with all lamps turned off. In the above picture we see the grid after turning on the lamp at grid[0][0] then turning on the lamp at grid[4][4].
The 0th query asks if the lamp at grid[1][1] is illuminated or not (the blue square). It is illuminated, so set ans[0] = 1. Then, we turn off all lamps in the red square.

The 1st query asks if the lamp at grid[1][0] is illuminated or not (the blue square). It is not illuminated, so set ans[1] = 0. Then, we turn off all lamps in the red rectangle.
```
Images:
- https://assets.leetcode.com/uploads/2020/08/19/illu_1.jpg

### Example 2
```text
Input: n = 5, lamps = [[0,0],[4,4]], queries = [[1,1],[1,1]]
Output: [1,1]
```
Images:
- https://assets.leetcode.com/uploads/2020/08/19/illu_step2.jpg

### Example 3
```text
Input: n = 5, lamps = [[0,0],[0,4]], queries = [[0,4],[0,1],[1,4]]
Output: [1,1,0]
```
Images:
- https://assets.leetcode.com/uploads/2020/08/19/illu_step2.jpg


## Constraints
- 1 <= n <= 109
- 0 <= lamps.length <= 20000
- 0 <= queries.length <= 20000
- lamps[i].length == 2
- 0 <= rowi, coli < n
- queries[j].length == 2
- 0 <= rowj, colj < n

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> gridIllumination(int n, vector<vector<int>>& lamps, vector<vector<int>>& queries) {
        
    }
};
```

### java
```java
class Solution {
    public int[] gridIllumination(int n, int[][] lamps, int[][] queries) {
        
    }
}
```

### python
```python
class Solution(object):
    def gridIllumination(self, n, lamps, queries):
        """
        :type n: int
        :type lamps: List[List[int]]
        :type queries: List[List[int]]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def gridIllumination(self, n: int, lamps: List[List[int]], queries: List[List[int]]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* gridIllumination(int n, int** lamps, int lampsSize, int* lampsColSize, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] GridIllumination(int n, int[][] lamps, int[][] queries) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination = function(n, lamps, queries) {
    
};
```

### typescript
```typescript
function gridIllumination(n: number, lamps: number[][], queries: number[][]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $lamps
     * @param Integer[][] $queries
     * @return Integer[]
     */
    function gridIllumination($n, $lamps, $queries) {
        
    }
}
```

### swift
```swift
class Solution {
    func gridIllumination(_ n: Int, _ lamps: [[Int]], _ queries: [[Int]]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun gridIllumination(n: Int, lamps: Array<IntArray>, queries: Array<IntArray>): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> gridIllumination(int n, List<List<int>> lamps, List<List<int>> queries) {
    
  }
}
```

### golang
```golang
func gridIllumination(n int, lamps [][]int, queries [][]int) []int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer[][]} lamps
# @param {Integer[][]} queries
# @return {Integer[]}
def grid_illumination(n, lamps, queries)
    
end
```

### scala
```scala
object Solution {
    def gridIllumination(n: Int, lamps: Array[Array[Int]], queries: Array[Array[Int]]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn grid_illumination(n: i32, lamps: Vec<Vec<i32>>, queries: Vec<Vec<i32>>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (grid-illumination n lamps queries)
  (-> exact-integer? (listof (listof exact-integer?)) (listof (listof exact-integer?)) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec grid_illumination(N :: integer(), Lamps :: [[integer()]], Queries :: [[integer()]]) -> [integer()].
grid_illumination(N, Lamps, Queries) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec grid_illumination(n :: integer, lamps :: [[integer]], queries :: [[integer]]) :: [integer]
  def grid_illumination(n, lamps, queries) do
    
  end
end
```
