# 757. Set Intersection Size At Least Two

- Difficulty: Hard
- Topics: Array, Greedy, Sorting
- Slug: set-intersection-size-at-least-two
- Problem ID: 759

## Description
You are given a 2D integer array intervals where intervals[i] = [starti, endi] represents all the integers from starti to endi inclusively.
A containing set is an array nums where each interval from intervals has at least two integers in nums.
Return the minimum possible size of a containing set.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: intervals = [[1,3],[3,7],[8,9]]
Output: 5
Explanation: let nums = [2, 3, 4, 8, 9].
It can be shown that there cannot be any containing array of size 4.
```

### Example 2
```text
Input: intervals = [[1,3],[1,4],[2,5],[3,5]]
Output: 3
Explanation: let nums = [2, 3, 4].
It can be shown that there cannot be any containing array of size 2.
```

### Example 3
```text
Input: intervals = [[1,2],[2,3],[2,4],[4,5]]
Output: 5
Explanation: let nums = [1, 2, 3, 4, 5].
It can be shown that there cannot be any containing array of size 4.
```


## Constraints
- 1 <= intervals.length <= 3000
- intervals[i].length == 2
- 0 <= starti < endi <= 108

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int intersectionSizeTwo(vector<vector<int>>& intervals) {
        
    }
};
```

### java
```java
class Solution {
    public int intersectionSizeTwo(int[][] intervals) {
        
    }
}
```

### python
```python
class Solution(object):
    def intersectionSizeTwo(self, intervals):
        """
        :type intervals: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def intersectionSizeTwo(self, intervals: List[List[int]]) -> int:
```

### c
```c
int intersectionSizeTwo(int** intervals, int intervalsSize, int* intervalsColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int IntersectionSizeTwo(int[][] intervals) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function(intervals) {
    
};
```

### typescript
```typescript
function intersectionSizeTwo(intervals: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $intervals
     * @return Integer
     */
    function intersectionSizeTwo($intervals) {
        
    }
}
```

### swift
```swift
class Solution {
    func intersectionSizeTwo(_ intervals: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun intersectionSizeTwo(intervals: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int intersectionSizeTwo(List<List<int>> intervals) {
    
  }
}
```

### golang
```golang
func intersectionSizeTwo(intervals [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} intervals
# @return {Integer}
def intersection_size_two(intervals)
    
end
```

### scala
```scala
object Solution {
    def intersectionSizeTwo(intervals: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn intersection_size_two(intervals: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (intersection-size-two intervals)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec intersection_size_two(Intervals :: [[integer()]]) -> integer().
intersection_size_two(Intervals) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec intersection_size_two(intervals :: [[integer]]) :: integer
  def intersection_size_two(intervals) do
    
  end
end
```
