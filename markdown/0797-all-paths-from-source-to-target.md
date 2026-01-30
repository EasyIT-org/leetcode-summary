# 797. All Paths From Source to Target

- Difficulty: Medium
- Topics: Backtracking, Depth-First Search, Breadth-First Search, Graph
- Slug: all-paths-from-source-to-target
- Problem ID: 813

## Description
Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.
The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: graph = [[1,2],[3],[3],[]]
Output: [[0,1,3],[0,2,3]]
Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
```
Images:
- https://assets.leetcode.com/uploads/2020/09/28/all_1.jpg

### Example 2
```text
Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
```
Images:
- https://assets.leetcode.com/uploads/2020/09/28/all_2.jpg


## Constraints
- n == graph.length
- 2 <= n <= 15
- 0 <= graph[i][j] < n
- graph[i][j] != i (i.e., there will be no self-loops).
- All the elements of graph[i] are unique.
- The input graph is guaranteed to be a DAG.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> allPathsSourceTarget(vector<vector<int>>& graph) {
        
    }
};
```

### java
```java
class Solution {
    public List<List<Integer>> allPathsSourceTarget(int[][] graph) {
        
    }
}
```

### python
```python
class Solution(object):
    def allPathsSourceTarget(self, graph):
        """
        :type graph: List[List[int]]
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** allPathsSourceTarget(int** graph, int graphSize, int* graphColSize, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<IList<int>> AllPathsSourceTarget(int[][] graph) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    
};
```

### typescript
```typescript
function allPathsSourceTarget(graph: number[][]): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $graph
     * @return Integer[][]
     */
    function allPathsSourceTarget($graph) {
        
    }
}
```

### swift
```swift
class Solution {
    func allPathsSourceTarget(_ graph: [[Int]]) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun allPathsSourceTarget(graph: Array<IntArray>): List<List<Int>> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> allPathsSourceTarget(List<List<int>> graph) {
    
  }
}
```

### golang
```golang
func allPathsSourceTarget(graph [][]int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} graph
# @return {Integer[][]}
def all_paths_source_target(graph)
    
end
```

### scala
```scala
object Solution {
    def allPathsSourceTarget(graph: Array[Array[Int]]): List[List[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn all_paths_source_target(graph: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (all-paths-source-target graph)
  (-> (listof (listof exact-integer?)) (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec all_paths_source_target(Graph :: [[integer()]]) -> [[integer()]].
all_paths_source_target(Graph) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec all_paths_source_target(graph :: [[integer]]) :: [[integer]]
  def all_paths_source_target(graph) do
    
  end
end
```
