# 435. Non-overlapping Intervals

- Difficulty: Medium
- Topics: Array, Dynamic Programming, Greedy, Sorting
- Slug: non-overlapping-intervals
- Problem ID: 435

## Description
Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
```

### Example 2
```text
Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
```

### Example 3
```text
Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
```


## Constraints
- 1 <= intervals.length <= 105
- intervals[i].length == 2
- -5 * 104 <= starti < endi <= 5 * 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int eraseOverlapIntervals(vector<vector<int>>& intervals) {
        
    }
};
```

### java
```java
class Solution {
    public int eraseOverlapIntervals(int[][] intervals) {
        
    }
}
```

### python
```python
class Solution(object):
    def eraseOverlapIntervals(self, intervals):
        """
        :type intervals: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
```

### c
```c
int eraseOverlapIntervals(int** intervals, int intervalsSize, int* intervalsColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int EraseOverlapIntervals(int[][] intervals) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    
};
```

### typescript
```typescript
function eraseOverlapIntervals(intervals: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $intervals
     * @return Integer
     */
    function eraseOverlapIntervals($intervals) {
        
    }
}
```

### swift
```swift
class Solution {
    func eraseOverlapIntervals(_ intervals: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun eraseOverlapIntervals(intervals: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int eraseOverlapIntervals(List<List<int>> intervals) {
    
  }
}
```

### golang
```golang
func eraseOverlapIntervals(intervals [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} intervals
# @return {Integer}
def erase_overlap_intervals(intervals)
    
end
```

### scala
```scala
object Solution {
    def eraseOverlapIntervals(intervals: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn erase_overlap_intervals(intervals: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (erase-overlap-intervals intervals)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec erase_overlap_intervals(Intervals :: [[integer()]]) -> integer().
erase_overlap_intervals(Intervals) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec erase_overlap_intervals(intervals :: [[integer]]) :: integer
  def erase_overlap_intervals(intervals) do
    
  end
end
```
