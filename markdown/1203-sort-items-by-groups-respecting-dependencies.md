# 1203. Sort Items by Groups Respecting Dependencies

- Difficulty: Hard
- Topics: Depth-First Search, Breadth-First Search, Graph, Topological Sort
- Slug: sort-items-by-groups-respecting-dependencies
- Problem ID: 1309

## Description
There are n items each belonging to zero or one of m groups where group[i] is the group that the i-th item belongs to and it's equal to -1 if the i-th item belongs to no group. The items and the groups are zero indexed. A group can have no item belonging to it.
Return a sorted list of the items such that:
Return any solution if there is more than one solution and return an empty list if there is no solution.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3,6],[],[],[]]
Output: [6,3,4,1,5,2,0,7]
```
Images:
- https://assets.leetcode.com/uploads/2019/09/11/1359_ex1.png

### Example 2
```text
Input: n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3],[],[4],[]]
Output: []
Explanation: This is the same as example 1 except that 4 needs to be before 6 in the sorted list.
```
Images:
- https://assets.leetcode.com/uploads/2019/09/11/1359_ex1.png


## Constraints
- 1 <= m <= n <= 3 * 104
- group.length == beforeItems.length == n
- -1 <= group[i] <= m - 1
- 0 <= beforeItems[i].length <= n - 1
- 0 <= beforeItems[i][j] <= n - 1
- i != beforeItems[i][j]
- beforeItems[i] does not contain duplicates elements.

## Hints
- Think of it as a graph problem.
- We need to find a topological order on the dependency graph.
- Build two graphs, one for the groups and another for the items.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> sortItems(int n, int m, vector<int>& group, vector<vector<int>>& beforeItems) {
        
    }
};
```

### java
```java
class Solution {
    public int[] sortItems(int n, int m, int[] group, List<List<Integer>> beforeItems) {
        
    }
}
```

### python
```python
class Solution(object):
    def sortItems(self, n, m, group, beforeItems):
        """
        :type n: int
        :type m: int
        :type group: List[int]
        :type beforeItems: List[List[int]]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def sortItems(self, n: int, m: int, group: List[int], beforeItems: List[List[int]]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* sortItems(int n, int m, int* group, int groupSize, int** beforeItems, int beforeItemsSize, int* beforeItemsColSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] SortItems(int n, int m, int[] group, IList<IList<int>> beforeItems) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */
var sortItems = function(n, m, group, beforeItems) {
    
};
```

### typescript
```typescript
function sortItems(n: number, m: number, group: number[], beforeItems: number[][]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @param Integer $m
     * @param Integer[] $group
     * @param Integer[][] $beforeItems
     * @return Integer[]
     */
    function sortItems($n, $m, $group, $beforeItems) {
        
    }
}
```

### swift
```swift
class Solution {
    func sortItems(_ n: Int, _ m: Int, _ group: [Int], _ beforeItems: [[Int]]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun sortItems(n: Int, m: Int, group: IntArray, beforeItems: List<List<Int>>): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> sortItems(int n, int m, List<int> group, List<List<int>> beforeItems) {
    
  }
}
```

### golang
```golang
func sortItems(n int, m int, group []int, beforeItems [][]int) []int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer} m
# @param {Integer[]} group
# @param {Integer[][]} before_items
# @return {Integer[]}
def sort_items(n, m, group, before_items)
    
end
```

### scala
```scala
object Solution {
    def sortItems(n: Int, m: Int, group: Array[Int], beforeItems: List[List[Int]]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn sort_items(n: i32, m: i32, group: Vec<i32>, before_items: Vec<Vec<i32>>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (sort-items n m group beforeItems)
  (-> exact-integer? exact-integer? (listof exact-integer?) (listof (listof exact-integer?)) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec sort_items(N :: integer(), M :: integer(), Group :: [integer()], BeforeItems :: [[integer()]]) -> [integer()].
sort_items(N, M, Group, BeforeItems) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec sort_items(n :: integer, m :: integer, group :: [integer], before_items :: [[integer]]) :: [integer]
  def sort_items(n, m, group, before_items) do
    
  end
end
```
