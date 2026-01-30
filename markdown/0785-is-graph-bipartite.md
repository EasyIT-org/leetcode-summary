# 785. Is Graph Bipartite?

- Difficulty: Medium
- Topics: Depth-First Search, Breadth-First Search, Union Find, Graph
- Slug: is-graph-bipartite
- Problem ID: 801

## Description
There is an undirected graph with n nodes, where each node is numbered between 0 and n - 1. You are given a 2D array graph, where graph[u] is an array of nodes that node u is adjacent to. More formally, for each v in graph[u], there is an undirected edge between node u and node v. The graph has the following properties:
A graph is bipartite if the nodes can be partitioned into two independent sets A and B such that every edge in the graph connects a node in set A and a node in set B.
Return true if and only if it is bipartite.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: graph = [[1,2,3],[0,2],[0,1,3],[0,2]]
Output: false
Explanation: There is no way to partition the nodes into two independent sets such that every edge connects a node in one and a node in the other.
```
Images:
- https://assets.leetcode.com/uploads/2020/10/21/bi2.jpg

### Example 2
```text
Input: graph = [[1,3],[0,2],[1,3],[0,2]]
Output: true
Explanation: We can partition the nodes into two sets: {0, 2} and {1, 3}.
```
Images:
- https://assets.leetcode.com/uploads/2020/10/21/bi1.jpg


## Constraints
- graph.length == n
- 1 <= n <= 100
- 0 <= graph[u].length < n
- 0 <= graph[u][i] <= n - 1
- graph[u] does not contain u.
- All the values of graph[u] are unique.
- If graph[u] contains v, then graph[v] contains u.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isBipartite(vector<vector<int>>& graph) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isBipartite(int[][] graph) {
        
    }
}
```

### python
```python
class Solution(object):
    def isBipartite(self, graph):
        """
        :type graph: List[List[int]]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:
```

### c
```c
bool isBipartite(int** graph, int graphSize, int* graphColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsBipartite(int[][] graph) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    
};
```

### typescript
```typescript
function isBipartite(graph: number[][]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $graph
     * @return Boolean
     */
    function isBipartite($graph) {
        
    }
}
```

### swift
```swift
class Solution {
    func isBipartite(_ graph: [[Int]]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isBipartite(graph: Array<IntArray>): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isBipartite(List<List<int>> graph) {
    
  }
}
```

### golang
```golang
func isBipartite(graph [][]int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[][]} graph
# @return {Boolean}
def is_bipartite(graph)
    
end
```

### scala
```scala
object Solution {
    def isBipartite(graph: Array[Array[Int]]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_bipartite(graph: Vec<Vec<i32>>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-bipartite graph)
  (-> (listof (listof exact-integer?)) boolean?)
  )
```

### erlang
```erlang
-spec is_bipartite(Graph :: [[integer()]]) -> boolean().
is_bipartite(Graph) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_bipartite(graph :: [[integer]]) :: boolean
  def is_bipartite(graph) do
    
  end
end
```
