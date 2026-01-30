# 1039. Minimum Score Triangulation of Polygon

- Difficulty: Medium
- Topics: Array, Dynamic Programming
- Slug: minimum-score-triangulation-of-polygon
- Problem ID: 1111

## Description
You have a convex n-sided polygon where each vertex has an integer value. You are given an integer array values where values[i] is the value of the ith vertex in clockwise order.
Polygon triangulation is a process where you divide a polygon into a set of triangles and the vertices of each triangle must also be vertices of the original polygon. Note that no other shapes other than triangles are allowed in the division. This process will result in n - 2 triangles.
You will triangulate the polygon. For each triangle, the weight of that triangle is the product of the values at its vertices. The total score of the triangulation is the sum of these weights over all n - 2 triangles.
Return the minimum possible score that you can achieve with some triangulation of the polygon.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: values = [1,2,3]
Output: 6
Explanation: The polygon is already triangulated, and the score of the only triangle is 6.
```

### Example 2
```text
Input: values = [3,7,4,5]
Output: 144
Explanation: There are two triangulations, with possible scores: 3*7*5 + 4*5*7 = 245, or 3*4*5 + 3*4*7 = 144. The minimum score is 144.
```

### Example 3
```text
Input: values = [1,3,1,4,1,5]
Output: 13
Explanation: The minimum score triangulation is 1*1*3 + 1*1*4 + 1*1*5 + 1*1*1 = 13.
```


## Constraints
- n == values.length
- 3 <= n <= 50
- 1 <= values[i] <= 100

## Hints
- Without loss of generality, there is a triangle that uses adjacent vertices A[0] and A[N-1] (where N = A.length).  Depending on your choice K of it, this breaks down the triangulation into two subproblems A[1:K] and A[K+1:N-1].

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int minScoreTriangulation(vector<int>& values) {
        
    }
};
```

### java
```java
class Solution {
    public int minScoreTriangulation(int[] values) {
        
    }
}
```

### python
```python
class Solution(object):
    def minScoreTriangulation(self, values):
        """
        :type values: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minScoreTriangulation(self, values: List[int]) -> int:
```

### c
```c
int minScoreTriangulation(int* values, int valuesSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinScoreTriangulation(int[] values) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function(values) {
    
};
```

### typescript
```typescript
function minScoreTriangulation(values: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $values
     * @return Integer
     */
    function minScoreTriangulation($values) {
        
    }
}
```

### swift
```swift
class Solution {
    func minScoreTriangulation(_ values: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minScoreTriangulation(values: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minScoreTriangulation(List<int> values) {
    
  }
}
```

### golang
```golang
func minScoreTriangulation(values []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} values
# @return {Integer}
def min_score_triangulation(values)
    
end
```

### scala
```scala
object Solution {
    def minScoreTriangulation(values: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn min_score_triangulation(values: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (min-score-triangulation values)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec min_score_triangulation(Values :: [integer()]) -> integer().
min_score_triangulation(Values) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec min_score_triangulation(values :: [integer]) :: integer
  def min_score_triangulation(values) do
    
  end
end
```
