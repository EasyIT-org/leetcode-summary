# 310. Minimum Height Trees

- Difficulty: Medium
- Topics: Depth-First Search, Breadth-First Search, Graph, Topological Sort
- Slug: minimum-height-trees
- Problem ID: 310

## Description
A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.
Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes ai and bi in the tree, you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).
Return a list of all MHTs' root labels. You can return the answer in any order.
The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 4, edges = [[1,0],[1,2],[1,3]]
Output: [1]
Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.
```
Images:
- https://assets.leetcode.com/uploads/2020/09/01/e1.jpg

### Example 2
```text
Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
Output: [3,4]
```
Images:
- https://assets.leetcode.com/uploads/2020/09/01/e2.jpg


## Constraints
- 1 <= n <= 2 * 104
- edges.length == n - 1
- 0 <= ai, bi < n
- ai != bi
- All the pairs (ai, bi) are distinct.
- The given input is guaranteed to be a tree and there will be no repeated edges.

## Hints
- How many MHTs can a graph have at most?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> findMinHeightTrees(int n, vector<vector<int>>& edges) {
        
    }
};
```

### java
```java
class Solution {
    public List<Integer> findMinHeightTrees(int n, int[][] edges) {
        
    }
}
```

### python
```python
class Solution(object):
    def findMinHeightTrees(self, n, edges):
        """
        :type n: int
        :type edges: List[List[int]]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* findMinHeightTrees(int n, int** edges, int edgesSize, int* edgesColSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<int> FindMinHeightTrees(int n, int[][] edges) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    
};
```

### typescript
```typescript
function findMinHeightTrees(n: number, edges: number[][]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $edges
     * @return Integer[]
     */
    function findMinHeightTrees($n, $edges) {
        
    }
}
```

### swift
```swift
class Solution {
    func findMinHeightTrees(_ n: Int, _ edges: [[Int]]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findMinHeightTrees(n: Int, edges: Array<IntArray>): List<Int> {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> findMinHeightTrees(int n, List<List<int>> edges) {
    
  }
}
```

### golang
```golang
func findMinHeightTrees(n int, edges [][]int) []int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer[][]} edges
# @return {Integer[]}
def find_min_height_trees(n, edges)
    
end
```

### scala
```scala
object Solution {
    def findMinHeightTrees(n: Int, edges: Array[Array[Int]]): List[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_min_height_trees(n: i32, edges: Vec<Vec<i32>>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (find-min-height-trees n edges)
  (-> exact-integer? (listof (listof exact-integer?)) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec find_min_height_trees(N :: integer(), Edges :: [[integer()]]) -> [integer()].
find_min_height_trees(N, Edges) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_min_height_trees(n :: integer, edges :: [[integer]]) :: [integer]
  def find_min_height_trees(n, edges) do
    
  end
end
```
