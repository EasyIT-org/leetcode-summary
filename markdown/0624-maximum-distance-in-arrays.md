# 624. Maximum Distance in Arrays

- Difficulty: Medium
- Topics: Array, Greedy
- Slug: maximum-distance-in-arrays
- Problem ID: 624

## Description
You are given m arrays, where each array is sorted in ascending order.
You can pick up two integers from two different arrays (each array picks one) and calculate the distance. We define the distance between two integers a and b to be their absolute difference |a - b|.
Return the maximum distance.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: arrays = [[1,2,3],[4,5],[1,2,3]]
Output: 4
Explanation: One way to reach the maximum distance 4 is to pick 1 in the first or third array and pick 5 in the second array.
```

### Example 2
```text
Input: arrays = [[1],[1]]
Output: 0
```


## Constraints
- m == arrays.length
- 2 <= m <= 105
- 1 <= arrays[i].length <= 500
- -104 <= arrays[i][j] <= 104
- arrays[i] is sorted in ascending order.
- There will be at most 105 integers in all the arrays.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxDistance(vector<vector<int>>& arrays) {
        
    }
};
```

### java
```java
class Solution {
    public int maxDistance(List<List<Integer>> arrays) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxDistance(self, arrays):
        """
        :type arrays: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxDistance(self, arrays: List[List[int]]) -> int:
```

### c
```c
int maxDistance(int** arrays, int arraysSize, int* arraysColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxDistance(IList<IList<int>> arrays) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    
};
```

### typescript
```typescript
function maxDistance(arrays: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $arrays
     * @return Integer
     */
    function maxDistance($arrays) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxDistance(_ arrays: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxDistance(arrays: List<List<Int>>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxDistance(List<List<int>> arrays) {
    
  }
}
```

### golang
```golang
func maxDistance(arrays [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} arrays
# @return {Integer}
def max_distance(arrays)
    
end
```

### scala
```scala
object Solution {
    def maxDistance(arrays: List[List[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_distance(arrays: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-distance arrays)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec max_distance(Arrays :: [[integer()]]) -> integer().
max_distance(Arrays) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_distance(arrays :: [[integer]]) :: integer
  def max_distance(arrays) do
    
  end
end
```
