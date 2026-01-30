# 1042. Flower Planting With No Adjacent

- Difficulty: Medium
- Topics: Depth-First Search, Breadth-First Search, Graph
- Slug: flower-planting-with-no-adjacent
- Problem ID: 1120

## Description
You have n gardens, labeled from 1 to n, and an array paths where paths[i] = [xi, yi] describes a bidirectional path between garden xi to garden yi. In each garden, you want to plant one of 4 types of flowers.
All gardens have at most 3 paths coming into or leaving it.
Your task is to choose a flower type for each garden such that, for any two gardens connected by a path, they have different types of flowers.
Return any such a choice as an array answer, where answer[i] is the type of flower planted in the (i+1)th garden. The flower types are denoted 1, 2, 3, or 4. It is guaranteed an answer exists.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: n = 3, paths = [[1,2],[2,3],[3,1]]
Output: [1,2,3]
Explanation:
Gardens 1 and 2 have different types.
Gardens 2 and 3 have different types.
Gardens 3 and 1 have different types.
Hence, [1,2,3] is a valid answer. Other valid answers include [1,2,4], [1,4,2], and [3,2,1].
```

### Example 2
```text
Input: n = 4, paths = [[1,2],[3,4]]
Output: [1,2,1,2]
```

### Example 3
```text
Input: n = 4, paths = [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]
Output: [1,2,3,4]
```


## Constraints
- 1 <= n <= 104
- 0 <= paths.length <= 2 * 104
- paths[i].length == 2
- 1 <= xi, yi <= n
- xi != yi
- Every garden has at most 3 paths coming into or leaving it.

## Hints
- Since each garden is connected to at most 3 gardens, there's always an available color for each garden.  For example, if one garden is next to gardens with colors 1, 3, 4,  then color #2 is available.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> gardenNoAdj(int n, vector<vector<int>>& paths) {
        
    }
};
```

### java
```java
class Solution {
    public int[] gardenNoAdj(int n, int[][] paths) {
        
    }
}
```

### python
```python
class Solution(object):
    def gardenNoAdj(self, n, paths):
        """
        :type n: int
        :type paths: List[List[int]]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def gardenNoAdj(self, n: int, paths: List[List[int]]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* gardenNoAdj(int n, int** paths, int pathsSize, int* pathsColSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] GardenNoAdj(int n, int[][] paths) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(n, paths) {
    
};
```

### typescript
```typescript
function gardenNoAdj(n: number, paths: number[][]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $paths
     * @return Integer[]
     */
    function gardenNoAdj($n, $paths) {
        
    }
}
```

### swift
```swift
class Solution {
    func gardenNoAdj(_ n: Int, _ paths: [[Int]]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun gardenNoAdj(n: Int, paths: Array<IntArray>): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> gardenNoAdj(int n, List<List<int>> paths) {
    
  }
}
```

### golang
```golang
func gardenNoAdj(n int, paths [][]int) []int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer[][]} paths
# @return {Integer[]}
def garden_no_adj(n, paths)
    
end
```

### scala
```scala
object Solution {
    def gardenNoAdj(n: Int, paths: Array[Array[Int]]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn garden_no_adj(n: i32, paths: Vec<Vec<i32>>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (garden-no-adj n paths)
  (-> exact-integer? (listof (listof exact-integer?)) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec garden_no_adj(N :: integer(), Paths :: [[integer()]]) -> [integer()].
garden_no_adj(N, Paths) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec garden_no_adj(n :: integer, paths :: [[integer]]) :: [integer]
  def garden_no_adj(n, paths) do
    
  end
end
```
