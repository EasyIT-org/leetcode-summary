# 847. Shortest Path Visiting All Nodes

- Difficulty: Hard
- Topics: Dynamic Programming, Bit Manipulation, Breadth-First Search, Graph, Bitmask
- Slug: shortest-path-visiting-all-nodes
- Problem ID: 877

## Description
You have an undirected, connected graph of n nodes labeled from 0 to n - 1. You are given an array graph where graph[i] is a list of all the nodes connected with node i by an edge.
Return the length of the shortest path that visits every node. You may start and stop at any node, you may revisit nodes multiple times, and you may reuse edges.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: graph = [[1,2,3],[0],[0],[0]]
Output: 4
Explanation: One possible path is [1,0,2,0,3]
```
Images:
- https://assets.leetcode.com/uploads/2021/05/12/shortest1-graph.jpg

### Example 2
```text
Input: graph = [[1],[0,2,4],[1,3,4],[2],[1,2]]
Output: 4
Explanation: One possible path is [0,1,4,2,3]
```
Images:
- https://assets.leetcode.com/uploads/2021/05/12/shortest2-graph.jpg


## Constraints
- n == graph.length
- 1 <= n <= 12
- 0 <= graph[i].length < n
- graph[i] does not contain i.
- If graph[a] contains b, then graph[b] contains a.
- The input graph is always connected.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int shortestPathLength(vector<vector<int>>& graph) {
        
    }
};
```

### java
```java
class Solution {
    public int shortestPathLength(int[][] graph) {
        
    }
}
```

### python
```python
class Solution(object):
    def shortestPathLength(self, graph):
        """
        :type graph: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def shortestPathLength(self, graph: List[List[int]]) -> int:
```

### c
```c
int shortestPathLength(int** graph, int graphSize, int* graphColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int ShortestPathLength(int[][] graph) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function(graph) {
    
};
```

### typescript
```typescript
function shortestPathLength(graph: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $graph
     * @return Integer
     */
    function shortestPathLength($graph) {
        
    }
}
```

### swift
```swift
class Solution {
    func shortestPathLength(_ graph: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun shortestPathLength(graph: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int shortestPathLength(List<List<int>> graph) {
    
  }
}
```

### golang
```golang
func shortestPathLength(graph [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} graph
# @return {Integer}
def shortest_path_length(graph)
    
end
```

### scala
```scala
object Solution {
    def shortestPathLength(graph: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn shortest_path_length(graph: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (shortest-path-length graph)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec shortest_path_length(Graph :: [[integer()]]) -> integer().
shortest_path_length(Graph) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec shortest_path_length(graph :: [[integer]]) :: integer
  def shortest_path_length(graph) do
    
  end
end
```
