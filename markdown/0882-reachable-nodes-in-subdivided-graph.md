# 882. Reachable Nodes In Subdivided Graph

- Difficulty: Hard
- Topics: Graph, Heap (Priority Queue), Shortest Path
- Slug: reachable-nodes-in-subdivided-graph
- Problem ID: 918

## Description
You are given an undirected graph (the "original graph") with n nodes labeled from 0 to n - 1. You decide to subdivide each edge in the graph into a chain of nodes, with the number of new nodes varying between each edge.
The graph is given as a 2D array of edges where edges[i] = [ui, vi, cnti] indicates that there is an edge between nodes ui and vi in the original graph, and cnti is the total number of new nodes that you will subdivide the edge into. Note that cnti == 0 means you will not subdivide the edge.
To subdivide the edge [ui, vi], replace it with (cnti + 1) new edges and cnti new nodes. The new nodes are x1, x2, ..., xcnti, and the new edges are [ui, x1], [x1, x2], [x2, x3], ..., [xcnti-1, xcnti], [xcnti, vi].
In this new graph, you want to know how many nodes are reachable from the node 0, where a node is reachable if the distance is maxMoves or less.
Given the original graph and maxMoves, return the number of nodes that are reachable from node 0 in the new graph.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: edges = [[0,1,10],[0,2,1],[1,2,2]], maxMoves = 6, n = 3
Output: 13
Explanation: The edge subdivisions are shown in the image above.
The nodes that are reachable are highlighted in yellow.
```
Images:
- https://s3-lc-upload.s3.amazonaws.com/uploads/2018/08/01/origfinal.png

### Example 2
```text
Input: edges = [[0,1,4],[1,2,6],[0,2,8],[1,3,1]], maxMoves = 10, n = 4
Output: 23
```
Images:
- https://s3-lc-upload.s3.amazonaws.com/uploads/2018/08/01/origfinal.png

### Example 3
```text
Input: edges = [[1,2,4],[1,4,5],[1,3,1],[2,3,4],[3,4,5]], maxMoves = 17, n = 5
Output: 1
Explanation: Node 0 is disconnected from the rest of the graph, so only node 0 is reachable.
```
Images:
- https://s3-lc-upload.s3.amazonaws.com/uploads/2018/08/01/origfinal.png


## Constraints
- 0 <= edges.length <= min(n * (n - 1) / 2, 104)
- edges[i].length == 3
- 0 <= ui < vi < n
- There are no multiple edges in the graph.
- 0 <= cnti <= 104
- 0 <= maxMoves <= 109
- 1 <= n <= 3000

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int reachableNodes(vector<vector<int>>& edges, int maxMoves, int n) {
        
    }
};
```

### java
```java
class Solution {
    public int reachableNodes(int[][] edges, int maxMoves, int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def reachableNodes(self, edges, maxMoves, n):
        """
        :type edges: List[List[int]]
        :type maxMoves: int
        :type n: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def reachableNodes(self, edges: List[List[int]], maxMoves: int, n: int) -> int:
```

### c
```c
int reachableNodes(int** edges, int edgesSize, int* edgesColSize, int maxMoves, int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public int ReachableNodes(int[][] edges, int maxMoves, int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} edges
 * @param {number} maxMoves
 * @param {number} n
 * @return {number}
 */
var reachableNodes = function(edges, maxMoves, n) {
    
};
```

### typescript
```typescript
function reachableNodes(edges: number[][], maxMoves: number, n: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $edges
     * @param Integer $maxMoves
     * @param Integer $n
     * @return Integer
     */
    function reachableNodes($edges, $maxMoves, $n) {
        
    }
}
```

### swift
```swift
class Solution {
    func reachableNodes(_ edges: [[Int]], _ maxMoves: Int, _ n: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun reachableNodes(edges: Array<IntArray>, maxMoves: Int, n: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int reachableNodes(List<List<int>> edges, int maxMoves, int n) {
    
  }
}
```

### golang
```golang
func reachableNodes(edges [][]int, maxMoves int, n int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} edges
# @param {Integer} max_moves
# @param {Integer} n
# @return {Integer}
def reachable_nodes(edges, max_moves, n)
    
end
```

### scala
```scala
object Solution {
    def reachableNodes(edges: Array[Array[Int]], maxMoves: Int, n: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn reachable_nodes(edges: Vec<Vec<i32>>, max_moves: i32, n: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (reachable-nodes edges maxMoves n)
  (-> (listof (listof exact-integer?)) exact-integer? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec reachable_nodes(Edges :: [[integer()]], MaxMoves :: integer(), N :: integer()) -> integer().
reachable_nodes(Edges, MaxMoves, N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec reachable_nodes(edges :: [[integer]], max_moves :: integer, n :: integer) :: integer
  def reachable_nodes(edges, max_moves, n) do
    
  end
end
```
