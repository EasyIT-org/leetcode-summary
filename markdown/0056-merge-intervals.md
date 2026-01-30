# 56. Merge Intervals

- Difficulty: Medium
- Topics: Array, Sorting
- Slug: merge-intervals
- Problem ID: 56

## Description
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
```

### Example 2
```text
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
```


## Constraints
- 1 <= intervals.length <= 104
- intervals[i].length == 2
- 0 <= starti <= endi <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        
    }
};
```

### java
```java
class Solution {
    public int[][] merge(int[][] intervals) {
        
    }
}
```

### python
```python
class Solution(object):
    def merge(self, intervals):
        """
        :type intervals: List[List[int]]
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** merge(int** intervals, int intervalsSize, int* intervalsColSize, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[][] Merge(int[][] intervals) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
};
```

### typescript
```typescript
function merge(intervals: number[][]): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $intervals
     * @return Integer[][]
     */
    function merge($intervals) {
        
    }
}
```

### swift
```swift
class Solution {
    func merge(_ intervals: [[Int]]) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun merge(intervals: Array<IntArray>): Array<IntArray> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> merge(List<List<int>> intervals) {
    
  }
}
```

### golang
```golang
func merge(intervals [][]int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} intervals
# @return {Integer[][]}
def merge(intervals)
    
end
```

### scala
```scala
object Solution {
    def merge(intervals: Array[Array[Int]]): Array[Array[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn merge(intervals: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (merge intervals)
  (-> (listof (listof exact-integer?)) (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec merge(Intervals :: [[integer()]]) -> [[integer()]].
merge(Intervals) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec merge(intervals :: [[integer]]) :: [[integer]]
  def merge(intervals) do
    
  end
end
```
