# 913. Cat and Mouse

- Difficulty: Hard
- Topics: Math, Dynamic Programming, Graph, Topological Sort, Memoization, Game Theory
- Slug: cat-and-mouse
- Problem ID: 949

## Description
A game on an undirected graph is played by two players, Mouse and Cat, who alternate turns.
The graph is given as follows: graph[a] is a list of all nodes b such that ab is an edge of the graph.
The mouse starts at node 1 and goes first, the cat starts at node 2 and goes second, and there is a hole at node 0.
During each player's turn, they must travel along one edge of the graph that meets where they are.  For example, if the Mouse is at node 1, it must travel to any node in graph[1].
Additionally, it is not allowed for the Cat to travel to the Hole (node 0).
Then, the game can end in three ways:
Given a graph, and assuming both players play optimally, return
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: graph = [[2,5],[3],[0,4,5],[1,4,5],[2,3],[0,2,3]]
Output: 0
```
Images:
- https://assets.leetcode.com/uploads/2020/11/17/cat1.jpg

### Example 2
```text
Input: graph = [[1,3],[0],[3],[0,2]]
Output: 1
```
Images:
- https://assets.leetcode.com/uploads/2020/11/17/cat2.jpg


## Constraints
- 3 <= graph.length <= 50
- 1 <= graph[i].length < graph.length
- 0 <= graph[i][j] < graph.length
- graph[i][j] != i
- graph[i] is unique.
- The mouse and the cat can always move.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int catMouseGame(vector<vector<int>>& graph) {
        
    }
};
```

### java
```java
class Solution {
    public int catMouseGame(int[][] graph) {
        
    }
}
```

### python
```python
class Solution(object):
    def catMouseGame(self, graph):
        """
        :type graph: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def catMouseGame(self, graph: List[List[int]]) -> int:
```

### c
```c
int catMouseGame(int** graph, int graphSize, int* graphColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int CatMouseGame(int[][] graph) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} graph
 * @return {number}
 */
var catMouseGame = function(graph) {
    
};
```

### typescript
```typescript
function catMouseGame(graph: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $graph
     * @return Integer
     */
    function catMouseGame($graph) {
        
    }
}
```

### swift
```swift
class Solution {
    func catMouseGame(_ graph: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun catMouseGame(graph: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int catMouseGame(List<List<int>> graph) {
    
  }
}
```

### golang
```golang
func catMouseGame(graph [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} graph
# @return {Integer}
def cat_mouse_game(graph)
    
end
```

### scala
```scala
object Solution {
    def catMouseGame(graph: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn cat_mouse_game(graph: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (cat-mouse-game graph)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec cat_mouse_game(Graph :: [[integer()]]) -> integer().
cat_mouse_game(Graph) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec cat_mouse_game(graph :: [[integer]]) :: integer
  def cat_mouse_game(graph) do
    
  end
end
```
