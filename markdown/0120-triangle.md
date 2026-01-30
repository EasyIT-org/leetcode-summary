# 120. Triangle

- Difficulty: Medium
- Topics: Array, Dynamic Programming
- Slug: triangle
- Problem ID: 120

## Description
Given a triangle array, return the minimum path sum from top to bottom.
For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
```

### Example 2
```text
Input: triangle = [[-10]]
Output: -10
```


## Constraints
- 1 <= triangle.length <= 200
- triangle[0].length == 1
- triangle[i].length == triangle[i - 1].length + 1
- -104 <= triangle[i][j] <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int minimumTotal(vector<vector<int>>& triangle) {
        
    }
};
```

### java
```java
class Solution {
    public int minimumTotal(List<List<Integer>> triangle) {
        
    }
}
```

### python
```python
class Solution(object):
    def minimumTotal(self, triangle):
        """
        :type triangle: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
```

### c
```c
int minimumTotal(int** triangle, int triangleSize, int* triangleColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinimumTotal(IList<IList<int>> triangle) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    
};
```

### typescript
```typescript
function minimumTotal(triangle: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $triangle
     * @return Integer
     */
    function minimumTotal($triangle) {
        
    }
}
```

### swift
```swift
class Solution {
    func minimumTotal(_ triangle: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minimumTotal(triangle: List<List<Int>>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minimumTotal(List<List<int>> triangle) {
    
  }
}
```

### golang
```golang
func minimumTotal(triangle [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} triangle
# @return {Integer}
def minimum_total(triangle)
    
end
```

### scala
```scala
object Solution {
    def minimumTotal(triangle: List[List[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn minimum_total(triangle: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (minimum-total triangle)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec minimum_total(Triangle :: [[integer()]]) -> integer().
minimum_total(Triangle) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec minimum_total(triangle :: [[integer]]) :: integer
  def minimum_total(triangle) do
    
  end
end
```
