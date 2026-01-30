# 210. Course Schedule II

- Difficulty: Medium
- Topics: Depth-First Search, Breadth-First Search, Graph, Topological Sort
- Slug: course-schedule-ii
- Problem ID: 210

## Description
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
```

### Example 2
```text
Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
```

### Example 3
```text
Input: numCourses = 1, prerequisites = []
Output: [0]
```


## Constraints
- 1 <= numCourses <= 2000
- 0 <= prerequisites.length <= numCourses * (numCourses - 1)
- prerequisites[i].length == 2
- 0 <= ai, bi < numCourses
- ai != bi
- All the pairs [ai, bi] are distinct.

## Hints
- This problem is equivalent to finding the topological order in a directed graph. If a cycle exists, no topological ordering exists and therefore it will be impossible to take all courses.
- <a href="https://www.youtube.com/watch?v=ozso3xxkVGU" target="_blank">Topological Sort via DFS</a> - A great video tutorial (21 minutes) on Coursera explaining the basic concepts of Topological Sort.
- Topological sort could also be done via <a href="http://en.wikipedia.org/wiki/Topological_sorting#Algorithms" target="_blank">BFS</a>.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {
        
    }
};
```

### java
```java
class Solution {
    public int[] findOrder(int numCourses, int[][] prerequisites) {
        
    }
}
```

### python
```python
class Solution(object):
    def findOrder(self, numCourses, prerequisites):
        """
        :type numCourses: int
        :type prerequisites: List[List[int]]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* findOrder(int numCourses, int** prerequisites, int prerequisitesSize, int* prerequisitesColSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] FindOrder(int numCourses, int[][] prerequisites) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    
};
```

### typescript
```typescript
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $numCourses
     * @param Integer[][] $prerequisites
     * @return Integer[]
     */
    function findOrder($numCourses, $prerequisites) {
        
    }
}
```

### swift
```swift
class Solution {
    func findOrder(_ numCourses: Int, _ prerequisites: [[Int]]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findOrder(numCourses: Int, prerequisites: Array<IntArray>): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> findOrder(int numCourses, List<List<int>> prerequisites) {
    
  }
}
```

### golang
```golang
func findOrder(numCourses int, prerequisites [][]int) []int {
    
}
```

### ruby
```ruby
# @param {Integer} num_courses
# @param {Integer[][]} prerequisites
# @return {Integer[]}
def find_order(num_courses, prerequisites)
    
end
```

### scala
```scala
object Solution {
    def findOrder(numCourses: Int, prerequisites: Array[Array[Int]]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_order(num_courses: i32, prerequisites: Vec<Vec<i32>>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (find-order numCourses prerequisites)
  (-> exact-integer? (listof (listof exact-integer?)) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec find_order(NumCourses :: integer(), Prerequisites :: [[integer()]]) -> [integer()].
find_order(NumCourses, Prerequisites) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_order(num_courses :: integer, prerequisites :: [[integer]]) :: [integer]
  def find_order(num_courses, prerequisites) do
    
  end
end
```
