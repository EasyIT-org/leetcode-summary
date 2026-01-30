# 57. Insert Interval

- Difficulty: Medium
- Topics: Array
- Slug: insert-interval
- Problem ID: 57

## Description
You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
Return intervals after the insertion.
Note that you don't need to modify intervals in-place. You can make a new array and return it.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
```

### Example 2
```text
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
```


## Constraints
- 0 <= intervals.length <= 104
- intervals[i].length == 2
- 0 <= starti <= endi <= 105
- intervals is sorted by starti in ascending order.
- newInterval.length == 2
- 0 <= start <= end <= 105

## Hints
- Intervals Array is sorted. Can you use Binary Search to find the correct position to insert the new Interval.?
- Can you try merging the overlapping intervals while inserting the new interval?
- This can be done by comparing the end of the last interval with the start of the new interval and vice versa.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {
        
    }
};
```

### java
```java
class Solution {
    public int[][] insert(int[][] intervals, int[] newInterval) {
        
    }
}
```

### python
```python
class Solution(object):
    def insert(self, intervals, newInterval):
        """
        :type intervals: List[List[int]]
        :type newInterval: List[int]
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** insert(int** intervals, int intervalsSize, int* intervalsColSize, int* newInterval, int newIntervalSize, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[][] Insert(int[][] intervals, int[] newInterval) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    
};
```

### typescript
```typescript
function insert(intervals: number[][], newInterval: number[]): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $intervals
     * @param Integer[] $newInterval
     * @return Integer[][]
     */
    function insert($intervals, $newInterval) {
        
    }
}
```

### swift
```swift
class Solution {
    func insert(_ intervals: [[Int]], _ newInterval: [Int]) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun insert(intervals: Array<IntArray>, newInterval: IntArray): Array<IntArray> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> insert(List<List<int>> intervals, List<int> newInterval) {
    
  }
}
```

### golang
```golang
func insert(intervals [][]int, newInterval []int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} intervals
# @param {Integer[]} new_interval
# @return {Integer[][]}
def insert(intervals, new_interval)
    
end
```

### scala
```scala
object Solution {
    def insert(intervals: Array[Array[Int]], newInterval: Array[Int]): Array[Array[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn insert(intervals: Vec<Vec<i32>>, new_interval: Vec<i32>) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (insert intervals newInterval)
  (-> (listof (listof exact-integer?)) (listof exact-integer?) (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec insert(Intervals :: [[integer()]], NewInterval :: [integer()]) -> [[integer()]].
insert(Intervals, NewInterval) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec insert(intervals :: [[integer]], new_interval :: [integer]) :: [[integer]]
  def insert(intervals, new_interval) do
    
  end
end
```
