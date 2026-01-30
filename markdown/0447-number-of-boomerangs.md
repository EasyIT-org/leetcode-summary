# 447. Number of Boomerangs

- Difficulty: Medium
- Topics: Array, Hash Table, Math
- Slug: number-of-boomerangs
- Problem ID: 447

## Description
You are given n points in the plane that are all distinct, where points[i] = [xi, yi]. A boomerang is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).
Return the number of boomerangs.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: points = [[0,0],[1,0],[2,0]]
Output: 2
Explanation: The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]].
```

### Example 2
```text
Input: points = [[1,1],[2,2],[3,3]]
Output: 2
```

### Example 3
```text
Input: points = [[1,1]]
Output: 0
```


## Constraints
- n == points.length
- 1 <= n <= 500
- points[i].length == 2
- -104 <= xi, yi <= 104
- All the points are unique.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numberOfBoomerangs(vector<vector<int>>& points) {
        
    }
};
```

### java
```java
class Solution {
    public int numberOfBoomerangs(int[][] points) {
        
    }
}
```

### python
```python
class Solution(object):
    def numberOfBoomerangs(self, points):
        """
        :type points: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numberOfBoomerangs(self, points: List[List[int]]) -> int:
```

### c
```c
int numberOfBoomerangs(int** points, int pointsSize, int* pointsColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumberOfBoomerangs(int[][] points) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    
};
```

### typescript
```typescript
function numberOfBoomerangs(points: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $points
     * @return Integer
     */
    function numberOfBoomerangs($points) {
        
    }
}
```

### swift
```swift
class Solution {
    func numberOfBoomerangs(_ points: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numberOfBoomerangs(points: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numberOfBoomerangs(List<List<int>> points) {
    
  }
}
```

### golang
```golang
func numberOfBoomerangs(points [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} points
# @return {Integer}
def number_of_boomerangs(points)
    
end
```

### scala
```scala
object Solution {
    def numberOfBoomerangs(points: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn number_of_boomerangs(points: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (number-of-boomerangs points)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec number_of_boomerangs(Points :: [[integer()]]) -> integer().
number_of_boomerangs(Points) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec number_of_boomerangs(points :: [[integer]]) :: integer
  def number_of_boomerangs(points) do
    
  end
end
```
