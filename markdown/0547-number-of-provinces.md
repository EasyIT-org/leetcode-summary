# 547. Number of Provinces

- Difficulty: Medium
- Topics: Depth-First Search, Breadth-First Search, Union Find, Graph
- Slug: number-of-provinces
- Problem ID: 547

## Description
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.
A province is a group of directly or indirectly connected cities and no other cities outside of the group.
You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.
Return the total number of provinces.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2
```
Images:
- https://assets.leetcode.com/uploads/2020/12/24/graph1.jpg

### Example 2
```text
Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
```
Images:
- https://assets.leetcode.com/uploads/2020/12/24/graph2.jpg


## Constraints
- 1 <= n <= 200
- n == isConnected.length
- n == isConnected[i].length
- isConnected[i][j] is 1 or 0.
- isConnected[i][i] == 1
- isConnected[i][j] == isConnected[j][i]

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findCircleNum(vector<vector<int>>& isConnected) {
        
    }
};
```

### java
```java
class Solution {
    public int findCircleNum(int[][] isConnected) {
        
    }
}
```

### python
```python
class Solution(object):
    def findCircleNum(self, isConnected):
        """
        :type isConnected: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
```

### c
```c
int findCircleNum(int** isConnected, int isConnectedSize, int* isConnectedColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindCircleNum(int[][] isConnected) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    
};
```

### typescript
```typescript
function findCircleNum(isConnected: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $isConnected
     * @return Integer
     */
    function findCircleNum($isConnected) {
        
    }
}
```

### swift
```swift
class Solution {
    func findCircleNum(_ isConnected: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findCircleNum(isConnected: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findCircleNum(List<List<int>> isConnected) {
    
  }
}
```

### golang
```golang
func findCircleNum(isConnected [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} is_connected
# @return {Integer}
def find_circle_num(is_connected)
    
end
```

### scala
```scala
object Solution {
    def findCircleNum(isConnected: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_circle_num(is_connected: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-circle-num isConnected)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec find_circle_num(IsConnected :: [[integer()]]) -> integer().
find_circle_num(IsConnected) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_circle_num(is_connected :: [[integer]]) :: integer
  def find_circle_num(is_connected) do
    
  end
end
```
