# 685. Redundant Connection II

- Difficulty: Hard
- Topics: Depth-First Search, Breadth-First Search, Union Find, Graph
- Slug: redundant-connection-ii
- Problem ID: 685

## Description
In this problem, a rooted tree is a directed graph such that, there is exactly one node (the root) for which all other nodes are descendants of this node, plus every node has exactly one parent, except for the root node which has no parents.
The given input is a directed graph that started as a rooted tree with n nodes (with distinct values from 1 to n), with one additional directed edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed.
The resulting graph is given as a 2D-array of edges. Each element of edges is a pair [ui, vi] that represents a directed edge connecting nodes ui and vi, where ui is a parent of child vi.
Return an edge that can be removed so that the resulting graph is a rooted tree of n nodes. If there are multiple answers, return the answer that occurs last in the given 2D-array.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: edges = [[1,2],[1,3],[2,3]]
Output: [2,3]
```
Images:
- https://assets.leetcode.com/uploads/2020/12/20/graph1.jpg

### Example 2
```text
Input: edges = [[1,2],[2,3],[3,4],[4,1],[1,5]]
Output: [4,1]
```
Images:
- https://assets.leetcode.com/uploads/2020/12/20/graph2.jpg


## Constraints
- n == edges.length
- 3 <= n <= 1000
- edges[i].length == 2
- 1 <= ui, vi <= n
- ui != vi

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> findRedundantDirectedConnection(vector<vector<int>>& edges) {
        
    }
};
```

### java
```java
class Solution {
    public int[] findRedundantDirectedConnection(int[][] edges) {
        
    }
}
```

### python
```python
class Solution(object):
    def findRedundantDirectedConnection(self, edges):
        """
        :type edges: List[List[int]]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def findRedundantDirectedConnection(self, edges: List[List[int]]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* findRedundantDirectedConnection(int** edges, int edgesSize, int* edgesColSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] FindRedundantDirectedConnection(int[][] edges) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function(edges) {
    
};
```

### typescript
```typescript
function findRedundantDirectedConnection(edges: number[][]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $edges
     * @return Integer[]
     */
    function findRedundantDirectedConnection($edges) {
        
    }
}
```

### swift
```swift
class Solution {
    func findRedundantDirectedConnection(_ edges: [[Int]]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findRedundantDirectedConnection(edges: Array<IntArray>): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> findRedundantDirectedConnection(List<List<int>> edges) {
    
  }
}
```

### golang
```golang
func findRedundantDirectedConnection(edges [][]int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} edges
# @return {Integer[]}
def find_redundant_directed_connection(edges)
    
end
```

### scala
```scala
object Solution {
    def findRedundantDirectedConnection(edges: Array[Array[Int]]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_redundant_directed_connection(edges: Vec<Vec<i32>>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (find-redundant-directed-connection edges)
  (-> (listof (listof exact-integer?)) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec find_redundant_directed_connection(Edges :: [[integer()]]) -> [integer()].
find_redundant_directed_connection(Edges) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_redundant_directed_connection(edges :: [[integer]]) :: [integer]
  def find_redundant_directed_connection(edges) do
    
  end
end
```
