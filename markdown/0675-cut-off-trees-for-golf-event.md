# 675. Cut Off Trees for Golf Event

- Difficulty: Hard
- Topics: Array, Breadth-First Search, Heap (Priority Queue), Matrix
- Slug: cut-off-trees-for-golf-event
- Problem ID: 675

## Description
You are asked to cut off all the trees in a forest for a golf event. The forest is represented as an m x n matrix. In this matrix:
In one step, you can walk in any of the four directions: north, east, south, and west. If you are standing in a cell with a tree, you can choose whether to cut it off.
You must cut off the trees in order from shortest to tallest. When you cut off a tree, the value at its cell becomes 1 (an empty cell).
Starting from the point (0, 0), return the minimum steps you need to walk to cut off all the trees. If you cannot cut off all the trees, return -1.
Note: The input is generated such that no two trees have the same height, and there is at least one tree needs to be cut off.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: forest = [[1,2,3],[0,0,4],[7,6,5]]
Output: 6
Explanation: Following the path above allows you to cut off the trees from shortest to tallest in 6 steps.
```
Images:
- https://assets.leetcode.com/uploads/2020/11/26/trees1.jpg

### Example 2
```text
Input: forest = [[1,2,3],[0,0,0],[7,6,5]]
Output: -1
Explanation: The trees in the bottom row cannot be accessed as the middle row is blocked.
```
Images:
- https://assets.leetcode.com/uploads/2020/11/26/trees2.jpg

### Example 3
```text
Input: forest = [[2,3,4],[0,0,5],[8,7,6]]
Output: 6
Explanation: You can follow the same path as Example 1 to cut off all the trees.
Note that you can cut off the first tree at (0, 0) before making any steps.
```
Images:
- https://assets.leetcode.com/uploads/2020/11/26/trees2.jpg


## Constraints
- m == forest.length
- n == forest[i].length
- 1 <= m, n <= 50
- 0 <= forest[i][j] <= 109
- Heights of all trees are distinct.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int cutOffTree(vector<vector<int>>& forest) {
        
    }
};
```

### java
```java
class Solution {
    public int cutOffTree(List<List<Integer>> forest) {
        
    }
}
```

### python
```python
class Solution(object):
    def cutOffTree(self, forest):
        """
        :type forest: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def cutOffTree(self, forest: List[List[int]]) -> int:
```

### c
```c
int cutOffTree(int** forest, int forestSize, int* forestColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int CutOffTree(IList<IList<int>> forest) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function(forest) {
    
};
```

### typescript
```typescript
function cutOffTree(forest: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $forest
     * @return Integer
     */
    function cutOffTree($forest) {
        
    }
}
```

### swift
```swift
class Solution {
    func cutOffTree(_ forest: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun cutOffTree(forest: List<List<Int>>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int cutOffTree(List<List<int>> forest) {
    
  }
}
```

### golang
```golang
func cutOffTree(forest [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} forest
# @return {Integer}
def cut_off_tree(forest)
    
end
```

### scala
```scala
object Solution {
    def cutOffTree(forest: List[List[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn cut_off_tree(forest: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (cut-off-tree forest)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec cut_off_tree(Forest :: [[integer()]]) -> integer().
cut_off_tree(Forest) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec cut_off_tree(forest :: [[integer]]) :: integer
  def cut_off_tree(forest) do
    
  end
end
```
