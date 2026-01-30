# 207. Course Schedule

- Difficulty: Medium
- Topics: Depth-First Search, Breadth-First Search, Graph, Topological Sort
- Slug: course-schedule
- Problem ID: 207

## Description
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
Return true if you can finish all courses. Otherwise, return false.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
```

### Example 2
```text
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
```


## Constraints
- 1 <= numCourses <= 2000
- 0 <= prerequisites.length <= 5000
- prerequisites[i].length == 2
- 0 <= ai, bi < numCourses
- All the pairs prerequisites[i] are unique.

## Hints
- This problem is equivalent to finding if a cycle exists in a directed graph. If a cycle exists, no topological ordering exists and therefore it will be impossible to take all courses.
- <a href="https://www.cs.princeton.edu/~wayne/kleinberg-tardos/pdf/03Graphs.pdf" target="_blank">Topological Sort via DFS</a> - A great tutorial explaining the basic concepts of Topological Sort.
- Topological sort could also be done via <a href="http://en.wikipedia.org/wiki/Topological_sorting#Algorithms" target="_blank">BFS</a>.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        
    }
};
```

### java
```java
class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        
    }
}
```

### python
```python
class Solution(object):
    def canFinish(self, numCourses, prerequisites):
        """
        :type numCourses: int
        :type prerequisites: List[List[int]]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
```

### c
```c
bool canFinish(int numCourses, int** prerequisites, int prerequisitesSize, int* prerequisitesColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool CanFinish(int numCourses, int[][] prerequisites) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    
};
```

### typescript
```typescript
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $numCourses
     * @param Integer[][] $prerequisites
     * @return Boolean
     */
    function canFinish($numCourses, $prerequisites) {
        
    }
}
```

### swift
```swift
class Solution {
    func canFinish(_ numCourses: Int, _ prerequisites: [[Int]]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun canFinish(numCourses: Int, prerequisites: Array<IntArray>): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool canFinish(int numCourses, List<List<int>> prerequisites) {
    
  }
}
```

### golang
```golang
func canFinish(numCourses int, prerequisites [][]int) bool {
    
}
```

### ruby
```ruby
# @param {Integer} num_courses
# @param {Integer[][]} prerequisites
# @return {Boolean}
def can_finish(num_courses, prerequisites)
    
end
```

### scala
```scala
object Solution {
    def canFinish(numCourses: Int, prerequisites: Array[Array[Int]]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn can_finish(num_courses: i32, prerequisites: Vec<Vec<i32>>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (can-finish numCourses prerequisites)
  (-> exact-integer? (listof (listof exact-integer?)) boolean?)
  )
```

### erlang
```erlang
-spec can_finish(NumCourses :: integer(), Prerequisites :: [[integer()]]) -> boolean().
can_finish(NumCourses, Prerequisites) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec can_finish(num_courses :: integer, prerequisites :: [[integer]]) :: boolean
  def can_finish(num_courses, prerequisites) do
    
  end
end
```
