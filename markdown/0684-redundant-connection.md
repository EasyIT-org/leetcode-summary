# 684. Redundant Connection

- Difficulty: Medium
- Topics: Depth-First Search, Breadth-First Search, Union Find, Graph
- Slug: redundant-connection
- Problem ID: 684

## Description
In this problem, a tree is an undirected graph that is connected and has no cycles.
You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.
Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that occurs last in the input.
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
- https://assets.leetcode.com/uploads/2021/05/02/reduntant1-1-graph.jpg

### Example 2
```text
Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
Output: [1,4]
```
Images:
- https://assets.leetcode.com/uploads/2021/05/02/reduntant1-2-graph.jpg


## Constraints
- n == edges.length
- 3 <= n <= 1000
- edges[i].length == 2
- 1 <= ai < bi <= edges.length
- ai != bi
- There are no repeated edges.
- The given graph is connected.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> findRedundantConnection(vector<vector<int>>& edges) {
        
    }
};
```

### java
```java
class Solution {
    public int[] findRedundantConnection(int[][] edges) {
        
    }
}
```

### python
```python
class Solution(object):
    def findRedundantConnection(self, edges):
        """
        :type edges: List[List[int]]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* findRedundantConnection(int** edges, int edgesSize, int* edgesColSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] FindRedundantConnection(int[][] edges) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    
};
```

### typescript
```typescript
function findRedundantConnection(edges: number[][]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $edges
     * @return Integer[]
     */
    function findRedundantConnection($edges) {
        
    }
}
```

### swift
```swift
class Solution {
    func findRedundantConnection(_ edges: [[Int]]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findRedundantConnection(edges: Array<IntArray>): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> findRedundantConnection(List<List<int>> edges) {
    
  }
}
```

### golang
```golang
func findRedundantConnection(edges [][]int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} edges
# @return {Integer[]}
def find_redundant_connection(edges)
    
end
```

### scala
```scala
object Solution {
    def findRedundantConnection(edges: Array[Array[Int]]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_redundant_connection(edges: Vec<Vec<i32>>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (find-redundant-connection edges)
  (-> (listof (listof exact-integer?)) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec find_redundant_connection(Edges :: [[integer()]]) -> [integer()].
find_redundant_connection(Edges) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_redundant_connection(edges :: [[integer]]) :: [integer]
  def find_redundant_connection(edges) do
    
  end
end
```
