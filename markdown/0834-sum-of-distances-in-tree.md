# 834. Sum of Distances in Tree

- Difficulty: Hard
- Topics: Dynamic Programming, Tree, Depth-First Search, Graph
- Slug: sum-of-distances-in-tree
- Problem ID: 863

## Description
There is an undirected connected tree with n nodes labeled from 0 to n - 1 and n - 1 edges.
You are given the integer n and the array edges where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree.
Return an array answer of length n where answer[i] is the sum of the distances between the ith node in the tree and all other nodes.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: n = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]
Output: [8,12,6,10,10,10]
Explanation: The tree is shown above.
We can see that dist(0,1) + dist(0,2) + dist(0,3) + dist(0,4) + dist(0,5)
equals 1 + 1 + 2 + 2 + 2 = 8.
Hence, answer[0] = 8, and so on.
```
Images:
- https://assets.leetcode.com/uploads/2021/07/23/lc-sumdist1.jpg

### Example 2
```text
Input: n = 1, edges = []
Output: [0]
```
Images:
- https://assets.leetcode.com/uploads/2021/07/23/lc-sumdist2.jpg

### Example 3
```text
Input: n = 2, edges = [[1,0]]
Output: [1,1]
```
Images:
- https://assets.leetcode.com/uploads/2021/07/23/lc-sumdist3.jpg


## Constraints
- 1 <= n <= 3 * 104
- edges.length == n - 1
- edges[i].length == 2
- 0 <= ai, bi < n
- ai != bi
- The given input represents a valid tree.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> sumOfDistancesInTree(int n, vector<vector<int>>& edges) {
        
    }
};
```

### java
```java
class Solution {
    public int[] sumOfDistancesInTree(int n, int[][] edges) {
        
    }
}
```

### python
```python
class Solution(object):
    def sumOfDistancesInTree(self, n, edges):
        """
        :type n: int
        :type edges: List[List[int]]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def sumOfDistancesInTree(self, n: int, edges: List[List[int]]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* sumOfDistancesInTree(int n, int** edges, int edgesSize, int* edgesColSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] SumOfDistancesInTree(int n, int[][] edges) {
        
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
var sumOfDistancesInTree = function(n, edges) {
    
};
```

### typescript
```typescript
function sumOfDistancesInTree(n: number, edges: number[][]): number[] {
    
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
    function sumOfDistancesInTree($n, $edges) {
        
    }
}
```

### swift
```swift
class Solution {
    func sumOfDistancesInTree(_ n: Int, _ edges: [[Int]]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun sumOfDistancesInTree(n: Int, edges: Array<IntArray>): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> sumOfDistancesInTree(int n, List<List<int>> edges) {
    
  }
}
```

### golang
```golang
func sumOfDistancesInTree(n int, edges [][]int) []int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer[][]} edges
# @return {Integer[]}
def sum_of_distances_in_tree(n, edges)
    
end
```

### scala
```scala
object Solution {
    def sumOfDistancesInTree(n: Int, edges: Array[Array[Int]]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn sum_of_distances_in_tree(n: i32, edges: Vec<Vec<i32>>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (sum-of-distances-in-tree n edges)
  (-> exact-integer? (listof (listof exact-integer?)) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec sum_of_distances_in_tree(N :: integer(), Edges :: [[integer()]]) -> [integer()].
sum_of_distances_in_tree(N, Edges) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec sum_of_distances_in_tree(n :: integer, edges :: [[integer]]) :: [integer]
  def sum_of_distances_in_tree(n, edges) do
    
  end
end
```
