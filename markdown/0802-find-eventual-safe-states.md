# 802. Find Eventual Safe States

- Difficulty: Medium
- Topics: Depth-First Search, Breadth-First Search, Graph, Topological Sort
- Slug: find-eventual-safe-states
- Problem ID: 820

## Description
There is a directed graph of n nodes with each node labeled from 0 to n - 1. The graph is represented by a 0-indexed 2D integer array graph where graph[i] is an integer array of nodes adjacent to node i, meaning there is an edge from node i to each node in graph[i].
A node is a terminal node if there are no outgoing edges. A node is a safe node if every possible path starting from that node leads to a terminal node (or another safe node).
Return an array containing all the safe nodes of the graph. The answer should be sorted in ascending order.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: graph = [[1,2],[2,3],[5],[0],[5],[],[]]
Output: [2,4,5,6]
Explanation: The given graph is shown above.
Nodes 5 and 6 are terminal nodes as there are no outgoing edges from either of them.
Every path starting at nodes 2, 4, 5, and 6 all lead to either node 5 or 6.
```
Images:
- https://s3-lc-upload.s3.amazonaws.com/uploads/2018/03/17/picture1.png

### Example 2
```text
Input: graph = [[1,2,3,4],[1,2],[3,4],[0,4],[]]
Output: [4]
Explanation:
Only node 4 is a terminal node, and every path starting at node 4 leads to node 4.
```
Images:
- https://s3-lc-upload.s3.amazonaws.com/uploads/2018/03/17/picture1.png


## Constraints
- n == graph.length
- 1 <= n <= 104
- 0 <= graph[i].length <= n
- 0 <= graph[i][j] <= n - 1
- graph[i] is sorted in a strictly increasing order.
- The graph may contain self-loops.
- The number of edges in the graph will be in the range [1, 4 * 104].

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> eventualSafeNodes(vector<vector<int>>& graph) {
        
    }
};
```

### java
```java
class Solution {
    public List<Integer> eventualSafeNodes(int[][] graph) {
        
    }
}
```

### python
```python
class Solution(object):
    def eventualSafeNodes(self, graph):
        """
        :type graph: List[List[int]]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def eventualSafeNodes(self, graph: List[List[int]]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* eventualSafeNodes(int** graph, int graphSize, int* graphColSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<int> EventualSafeNodes(int[][] graph) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    
};
```

### typescript
```typescript
function eventualSafeNodes(graph: number[][]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $graph
     * @return Integer[]
     */
    function eventualSafeNodes($graph) {
        
    }
}
```

### swift
```swift
class Solution {
    func eventualSafeNodes(_ graph: [[Int]]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun eventualSafeNodes(graph: Array<IntArray>): List<Int> {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> eventualSafeNodes(List<List<int>> graph) {
    
  }
}
```

### golang
```golang
func eventualSafeNodes(graph [][]int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} graph
# @return {Integer[]}
def eventual_safe_nodes(graph)
    
end
```

### scala
```scala
object Solution {
    def eventualSafeNodes(graph: Array[Array[Int]]): List[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn eventual_safe_nodes(graph: Vec<Vec<i32>>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (eventual-safe-nodes graph)
  (-> (listof (listof exact-integer?)) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec eventual_safe_nodes(Graph :: [[integer()]]) -> [integer()].
eventual_safe_nodes(Graph) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec eventual_safe_nodes(graph :: [[integer]]) :: [integer]
  def eventual_safe_nodes(graph) do
    
  end
end
```
