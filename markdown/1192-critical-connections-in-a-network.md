# 1192. Critical Connections in a Network

- Difficulty: Hard
- Topics: Depth-First Search, Graph, Biconnected Component
- Slug: critical-connections-in-a-network
- Problem ID: 1300

## Description
There are n servers numbered from 0 to n - 1 connected by undirected server-to-server connections forming a network where connections[i] = [ai, bi] represents a connection between servers ai and bi. Any server can reach other servers directly or indirectly through the network.
A critical connection is a connection that, if removed, will make some servers unable to reach some other server.
Return all critical connections in the network in any order.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
Output: [[1,3]]
Explanation: [[3,1]] is also accepted.
```
Images:
- https://assets.leetcode.com/uploads/2019/09/03/1537_ex1_2.png

### Example 2
```text
Input: n = 2, connections = [[0,1]]
Output: [[0,1]]
```
Images:
- https://assets.leetcode.com/uploads/2019/09/03/1537_ex1_2.png


## Constraints
- 2 <= n <= 105
- n - 1 <= connections.length <= 105
- 0 <= ai, bi <= n - 1
- ai != bi
- There are no repeated connections.

## Hints
- Use Tarjan's algorithm.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> criticalConnections(int n, vector<vector<int>>& connections) {
        
    }
};
```

### java
```java
class Solution {
    public List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {
        
    }
}
```

### python
```python
class Solution(object):
    def criticalConnections(self, n, connections):
        """
        :type n: int
        :type connections: List[List[int]]
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def criticalConnections(self, n: int, connections: List[List[int]]) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** criticalConnections(int n, int** connections, int connectionsSize, int* connectionsColSize, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<IList<int>> CriticalConnections(int n, IList<IList<int>> connections) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
    
};
```

### typescript
```typescript
function criticalConnections(n: number, connections: number[][]): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $connections
     * @return Integer[][]
     */
    function criticalConnections($n, $connections) {
        
    }
}
```

### swift
```swift
class Solution {
    func criticalConnections(_ n: Int, _ connections: [[Int]]) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun criticalConnections(n: Int, connections: List<List<Int>>): List<List<Int>> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> criticalConnections(int n, List<List<int>> connections) {
    
  }
}
```

### golang
```golang
func criticalConnections(n int, connections [][]int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer[][]} connections
# @return {Integer[][]}
def critical_connections(n, connections)
    
end
```

### scala
```scala
object Solution {
    def criticalConnections(n: Int, connections: List[List[Int]]): List[List[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn critical_connections(n: i32, connections: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (critical-connections n connections)
  (-> exact-integer? (listof (listof exact-integer?)) (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec critical_connections(N :: integer(), Connections :: [[integer()]]) -> [[integer()]].
critical_connections(N, Connections) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec critical_connections(n :: integer, connections :: [[integer]]) :: [[integer]]
  def critical_connections(n, connections) do
    
  end
end
```
