# 1129. Shortest Path with Alternating Colors

- Difficulty: Medium
- Topics: Breadth-First Search, Graph
- Slug: shortest-path-with-alternating-colors
- Problem ID: 1229

## Description
You are given an integer n, the number of nodes in a directed graph where the nodes are labeled from 0 to n - 1. Each edge is red or blue in this graph, and there could be self-edges and parallel edges.
You are given two arrays redEdges and blueEdges where:
Return an array answer of length n, where each answer[x] is the length of the shortest path from node 0 to node x such that the edge colors alternate along the path, or -1 if such a path does not exist.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 3, redEdges = [[0,1],[1,2]], blueEdges = []
Output: [0,1,-1]
```

### Example 2
```text
Input: n = 3, redEdges = [[0,1]], blueEdges = [[2,1]]
Output: [0,1,-1]
```


## Constraints
- 1 <= n <= 100
- 0 <= redEdges.length, blueEdges.length <= 400
- redEdges[i].length == blueEdges[j].length == 2
- 0 <= ai, bi, uj, vj < n

## Hints
- Do a breadth-first search, where the "nodes" are actually (Node, color of last edge taken).

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> shortestAlternatingPaths(int n, vector<vector<int>>& redEdges, vector<vector<int>>& blueEdges) {
        
    }
};
```

### java
```java
class Solution {
    public int[] shortestAlternatingPaths(int n, int[][] redEdges, int[][] blueEdges) {
        
    }
}
```

### python
```python
class Solution(object):
    def shortestAlternatingPaths(self, n, redEdges, blueEdges):
        """
        :type n: int
        :type redEdges: List[List[int]]
        :type blueEdges: List[List[int]]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def shortestAlternatingPaths(self, n: int, redEdges: List[List[int]], blueEdges: List[List[int]]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* shortestAlternatingPaths(int n, int** redEdges, int redEdgesSize, int* redEdgesColSize, int** blueEdges, int blueEdgesSize, int* blueEdgesColSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] ShortestAlternatingPaths(int n, int[][] redEdges, int[][] blueEdges) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
    
};
```

### typescript
```typescript
function shortestAlternatingPaths(n: number, redEdges: number[][], blueEdges: number[][]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $redEdges
     * @param Integer[][] $blueEdges
     * @return Integer[]
     */
    function shortestAlternatingPaths($n, $redEdges, $blueEdges) {
        
    }
}
```

### swift
```swift
class Solution {
    func shortestAlternatingPaths(_ n: Int, _ redEdges: [[Int]], _ blueEdges: [[Int]]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun shortestAlternatingPaths(n: Int, redEdges: Array<IntArray>, blueEdges: Array<IntArray>): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> shortestAlternatingPaths(int n, List<List<int>> redEdges, List<List<int>> blueEdges) {
    
  }
}
```

### golang
```golang
func shortestAlternatingPaths(n int, redEdges [][]int, blueEdges [][]int) []int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer[][]} red_edges
# @param {Integer[][]} blue_edges
# @return {Integer[]}
def shortest_alternating_paths(n, red_edges, blue_edges)
    
end
```

### scala
```scala
object Solution {
    def shortestAlternatingPaths(n: Int, redEdges: Array[Array[Int]], blueEdges: Array[Array[Int]]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn shortest_alternating_paths(n: i32, red_edges: Vec<Vec<i32>>, blue_edges: Vec<Vec<i32>>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (shortest-alternating-paths n redEdges blueEdges)
  (-> exact-integer? (listof (listof exact-integer?)) (listof (listof exact-integer?)) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec shortest_alternating_paths(N :: integer(), RedEdges :: [[integer()]], BlueEdges :: [[integer()]]) -> [integer()].
shortest_alternating_paths(N, RedEdges, BlueEdges) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec shortest_alternating_paths(n :: integer, red_edges :: [[integer]], blue_edges :: [[integer]]) :: [integer]
  def shortest_alternating_paths(n, red_edges, blue_edges) do
    
  end
end
```
