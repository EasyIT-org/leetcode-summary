# 452. Minimum Number of Arrows to Burst Balloons

- Difficulty: Medium
- Topics: Array, Greedy, Sorting
- Slug: minimum-number-of-arrows-to-burst-balloons
- Problem ID: 452

## Description
There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend. You do not know the exact y-coordinates of the balloons.
Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.
Given the array points, return the minimum number of arrows that must be shot to burst all balloons.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: points = [[10,16],[2,8],[1,6],[7,12]]
Output: 2
Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
- Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].
```

### Example 2
```text
Input: points = [[1,2],[3,4],[5,6],[7,8]]
Output: 4
Explanation: One arrow needs to be shot for each balloon for a total of 4 arrows.
```

### Example 3
```text
Input: points = [[1,2],[2,3],[3,4],[4,5]]
Output: 2
Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
- Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].
```


## Constraints
- 1 <= points.length <= 105
- points[i].length == 2
- -231 <= xstart < xend <= 231 - 1

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findMinArrowShots(vector<vector<int>>& points) {
        
    }
};
```

### java
```java
class Solution {
    public int findMinArrowShots(int[][] points) {
        
    }
}
```

### python
```python
class Solution(object):
    def findMinArrowShots(self, points):
        """
        :type points: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
```

### c
```c
int findMinArrowShots(int** points, int pointsSize, int* pointsColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindMinArrowShots(int[][] points) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    
};
```

### typescript
```typescript
function findMinArrowShots(points: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $points
     * @return Integer
     */
    function findMinArrowShots($points) {
        
    }
}
```

### swift
```swift
class Solution {
    func findMinArrowShots(_ points: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findMinArrowShots(points: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findMinArrowShots(List<List<int>> points) {
    
  }
}
```

### golang
```golang
func findMinArrowShots(points [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} points
# @return {Integer}
def find_min_arrow_shots(points)
    
end
```

### scala
```scala
object Solution {
    def findMinArrowShots(points: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_min_arrow_shots(points: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-min-arrow-shots points)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec find_min_arrow_shots(Points :: [[integer()]]) -> integer().
find_min_arrow_shots(Points) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_min_arrow_shots(points :: [[integer]]) :: integer
  def find_min_arrow_shots(points) do
    
  end
end
```
