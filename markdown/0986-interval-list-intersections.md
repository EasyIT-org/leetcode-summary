# 986. Interval List Intersections

- Difficulty: Medium
- Topics: Array, Two Pointers, Line Sweep
- Slug: interval-list-intersections
- Problem ID: 1028

## Description
You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.
Return the intersection of these two interval lists.
A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.
The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
```
Images:
- https://assets.leetcode.com/uploads/2019/01/30/interval1.png

### Example 2
```text
Input: firstList = [[1,3],[5,9]], secondList = []
Output: []
```
Images:
- https://assets.leetcode.com/uploads/2019/01/30/interval1.png


## Constraints
- 0 <= firstList.length, secondList.length <= 1000
- firstList.length + secondList.length >= 1
- 0 <= starti < endi <= 109
- endi < starti+1
- 0 <= startj < endj <= 109
- endj < startj+1

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> intervalIntersection(vector<vector<int>>& firstList, vector<vector<int>>& secondList) {
        
    }
};
```

### java
```java
class Solution {
    public int[][] intervalIntersection(int[][] firstList, int[][] secondList) {
        
    }
}
```

### python
```python
class Solution(object):
    def intervalIntersection(self, firstList, secondList):
        """
        :type firstList: List[List[int]]
        :type secondList: List[List[int]]
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def intervalIntersection(self, firstList: List[List[int]], secondList: List[List[int]]) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** intervalIntersection(int** firstList, int firstListSize, int* firstListColSize, int** secondList, int secondListSize, int* secondListColSize, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[][] IntervalIntersection(int[][] firstList, int[][] secondList) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    
};
```

### typescript
```typescript
function intervalIntersection(firstList: number[][], secondList: number[][]): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $firstList
     * @param Integer[][] $secondList
     * @return Integer[][]
     */
    function intervalIntersection($firstList, $secondList) {
        
    }
}
```

### swift
```swift
class Solution {
    func intervalIntersection(_ firstList: [[Int]], _ secondList: [[Int]]) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun intervalIntersection(firstList: Array<IntArray>, secondList: Array<IntArray>): Array<IntArray> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> intervalIntersection(List<List<int>> firstList, List<List<int>> secondList) {
    
  }
}
```

### golang
```golang
func intervalIntersection(firstList [][]int, secondList [][]int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} first_list
# @param {Integer[][]} second_list
# @return {Integer[][]}
def interval_intersection(first_list, second_list)
    
end
```

### scala
```scala
object Solution {
    def intervalIntersection(firstList: Array[Array[Int]], secondList: Array[Array[Int]]): Array[Array[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn interval_intersection(first_list: Vec<Vec<i32>>, second_list: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (interval-intersection firstList secondList)
  (-> (listof (listof exact-integer?)) (listof (listof exact-integer?)) (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec interval_intersection(FirstList :: [[integer()]], SecondList :: [[integer()]]) -> [[integer()]].
interval_intersection(FirstList, SecondList) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec interval_intersection(first_list :: [[integer]], second_list :: [[integer]]) :: [[integer]]
  def interval_intersection(first_list, second_list) do
    
  end
end
```
