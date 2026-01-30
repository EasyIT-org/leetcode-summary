# 587. Erect the Fence

- Difficulty: Hard
- Topics: Array, Math, Geometry
- Slug: erect-the-fence
- Problem ID: 587

## Description
You are given an array trees where trees[i] = [xi, yi] represents the location of a tree in the garden.
Fence the entire garden using the minimum length of rope, as it is expensive. The garden is well-fenced only if all the trees are enclosed.
Return the coordinates of trees that are exactly located on the fence perimeter. You may return the answer in any order.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: trees = [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]
Output: [[1,1],[2,0],[4,2],[3,3],[2,4]]
Explanation: All the trees will be on the perimeter of the fence except the tree at [2, 2], which will be inside the fence.
```
Images:
- https://assets.leetcode.com/uploads/2021/04/24/erect2-plane.jpg

### Example 2
```text
Input: trees = [[1,2],[2,2],[4,2]]
Output: [[4,2],[2,2],[1,2]]
Explanation: The fence forms a line that passes through all the trees.
```
Images:
- https://assets.leetcode.com/uploads/2021/04/24/erect1-plane.jpg


## Constraints
- 1 <= trees.length <= 3000
- trees[i].length == 2
- 0 <= xi, yi <= 100
- All the given positions are unique.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> outerTrees(vector<vector<int>>& trees) {
        
    }
};
```

### java
```java
class Solution {
    public int[][] outerTrees(int[][] trees) {
        
    }
}
```

### python
```python
class Solution(object):
    def outerTrees(self, trees):
        """
        :type trees: List[List[int]]
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def outerTrees(self, trees: List[List[int]]) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** outerTrees(int** trees, int treesSize, int* treesColSize, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[][] OuterTrees(int[][] trees) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
var outerTrees = function(trees) {
    
};
```

### typescript
```typescript
function outerTrees(trees: number[][]): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $trees
     * @return Integer[][]
     */
    function outerTrees($trees) {
        
    }
}
```

### swift
```swift
class Solution {
    func outerTrees(_ trees: [[Int]]) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun outerTrees(trees: Array<IntArray>): Array<IntArray> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> outerTrees(List<List<int>> trees) {
    
  }
}
```

### golang
```golang
func outerTrees(trees [][]int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} trees
# @return {Integer[][]}
def outer_trees(trees)
    
end
```

### scala
```scala
object Solution {
    def outerTrees(trees: Array[Array[Int]]): Array[Array[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn outer_trees(trees: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (outer-trees trees)
  (-> (listof (listof exact-integer?)) (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec outer_trees(Trees :: [[integer()]]) -> [[integer()]].
outer_trees(Trees) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec outer_trees(trees :: [[integer]]) :: [[integer]]
  def outer_trees(trees) do
    
  end
end
```
