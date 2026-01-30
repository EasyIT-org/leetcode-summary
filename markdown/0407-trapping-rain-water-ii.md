# 407. Trapping Rain Water II

- Difficulty: Hard
- Topics: Array, Breadth-First Search, Heap (Priority Queue), Matrix
- Slug: trapping-rain-water-ii
- Problem ID: 407

## Description
Given an m x n integer matrix heightMap representing the height of each unit cell in a 2D elevation map, return the volume of water it can trap after raining.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]
Output: 4
Explanation: After the rain, water is trapped between the blocks.
We have two small ponds 1 and 3 units trapped.
The total volume of water trapped is 4.
```
Images:
- https://assets.leetcode.com/uploads/2021/04/08/trap1-3d.jpg

### Example 2
```text
Input: heightMap = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]
Output: 10
```
Images:
- https://assets.leetcode.com/uploads/2021/04/08/trap2-3d.jpg


## Constraints
- m == heightMap.length
- n == heightMap[i].length
- 1 <= m, n <= 200
- 0 <= heightMap[i][j] <= 2 * 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int trapRainWater(vector<vector<int>>& heightMap) {
        
    }
};
```

### java
```java
class Solution {
    public int trapRainWater(int[][] heightMap) {
        
    }
}
```

### python
```python
class Solution(object):
    def trapRainWater(self, heightMap):
        """
        :type heightMap: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def trapRainWater(self, heightMap: List[List[int]]) -> int:
```

### c
```c
int trapRainWater(int** heightMap, int heightMapSize, int* heightMapColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int TrapRainWater(int[][] heightMap) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
    
};
```

### typescript
```typescript
function trapRainWater(heightMap: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $heightMap
     * @return Integer
     */
    function trapRainWater($heightMap) {
        
    }
}
```

### swift
```swift
class Solution {
    func trapRainWater(_ heightMap: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun trapRainWater(heightMap: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int trapRainWater(List<List<int>> heightMap) {
    
  }
}
```

### golang
```golang
func trapRainWater(heightMap [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} height_map
# @return {Integer}
def trap_rain_water(height_map)
    
end
```

### scala
```scala
object Solution {
    def trapRainWater(heightMap: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn trap_rain_water(height_map: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (trap-rain-water heightMap)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec trap_rain_water(HeightMap :: [[integer()]]) -> integer().
trap_rain_water(HeightMap) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec trap_rain_water(height_map :: [[integer]]) :: integer
  def trap_rain_water(height_map) do
    
  end
end
```
