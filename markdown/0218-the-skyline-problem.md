# 218. The Skyline Problem

- Difficulty: Hard
- Topics: Array, Divide and Conquer, Binary Indexed Tree, Segment Tree, Line Sweep, Heap (Priority Queue), Ordered Set
- Slug: the-skyline-problem
- Problem ID: 218

## Description
A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Given the locations and heights of all the buildings, return the skyline formed by these buildings collectively.
The geometric information of each building is given in the array buildings where buildings[i] = [lefti, righti, heighti]:
You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0.
The skyline should be represented as a list of "key points" sorted by their x-coordinate in the form [[x1,y1],[x2,y2],...]. Each key point is the left endpoint of some horizontal segment in the skyline except the last point in the list, which always has a y-coordinate 0 and is used to mark the skyline's termination where the rightmost building ends. Any ground between the leftmost and rightmost buildings should be part of the skyline's contour.
Note: There must be no consecutive horizontal lines of equal height in the output skyline. For instance, [...,[2 3],[4 5],[7 5],[11 5],[12 7],...] is not acceptable; the three lines of height 5 should be merged into one in the final output as such: [...,[2 3],[4 5],[12 7],...]
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
Output: [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
Explanation:
Figure A shows the buildings of the input.
Figure B shows the skyline formed by those buildings. The red points in figure B represent the key points in the output list.
```
Images:
- https://assets.leetcode.com/uploads/2020/12/01/merged.jpg

### Example 2
```text
Input: buildings = [[0,2,3],[2,5,3]]
Output: [[0,3],[5,0]]
```
Images:
- https://assets.leetcode.com/uploads/2020/12/01/merged.jpg


## Constraints
- 1 <= buildings.length <= 104
- 0 <= lefti < righti <= 231 - 1
- 1 <= heighti <= 231 - 1
- buildings is sorted by lefti in non-decreasing order.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> getSkyline(vector<vector<int>>& buildings) {
        
    }
};
```

### java
```java
class Solution {
    public List<List<Integer>> getSkyline(int[][] buildings) {
        
    }
}
```

### python
```python
class Solution(object):
    def getSkyline(self, buildings):
        """
        :type buildings: List[List[int]]
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def getSkyline(self, buildings: List[List[int]]) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** getSkyline(int** buildings, int buildingsSize, int* buildingsColSize, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<IList<int>> GetSkyline(int[][] buildings) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
    
};
```

### typescript
```typescript
function getSkyline(buildings: number[][]): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $buildings
     * @return Integer[][]
     */
    function getSkyline($buildings) {
        
    }
}
```

### swift
```swift
class Solution {
    func getSkyline(_ buildings: [[Int]]) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun getSkyline(buildings: Array<IntArray>): List<List<Int>> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> getSkyline(List<List<int>> buildings) {
    
  }
}
```

### golang
```golang
func getSkyline(buildings [][]int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} buildings
# @return {Integer[][]}
def get_skyline(buildings)
    
end
```

### scala
```scala
object Solution {
    def getSkyline(buildings: Array[Array[Int]]): List[List[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn get_skyline(buildings: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (get-skyline buildings)
  (-> (listof (listof exact-integer?)) (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec get_skyline(Buildings :: [[integer()]]) -> [[integer()]].
get_skyline(Buildings) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec get_skyline(buildings :: [[integer]]) :: [[integer]]
  def get_skyline(buildings) do
    
  end
end
```
