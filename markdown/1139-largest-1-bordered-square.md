# 1139. Largest 1-Bordered Square

- Difficulty: Medium
- Topics: Array, Dynamic Programming, Matrix
- Slug: largest-1-bordered-square
- Problem ID: 1239

## Description
Given a 2D grid of 0s and 1s, return the number of elements in the largest square subgrid that has all 1s on its border, or 0 if such a subgrid doesn't exist in the grid.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: grid = [[1,1,1],[1,0,1],[1,1,1]]
Output: 9
```

### Example 2
```text
Input: grid = [[1,1,0,0]]
Output: 1
```


## Constraints
- 1 <= grid.length <= 100
- 1 <= grid[0].length <= 100
- grid[i][j] is 0 or 1

## Hints
- For each square, know how many ones are up, left, down, and right of this square. You can find it in O(N^2) using dynamic programming.
- Now for each square ( O(N^3) ), we can evaluate whether that square is 1-bordered in O(1).

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int largest1BorderedSquare(vector<vector<int>>& grid) {
        
    }
};
```

### java
```java
class Solution {
    public int largest1BorderedSquare(int[][] grid) {
        
    }
}
```

### python
```python
class Solution(object):
    def largest1BorderedSquare(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def largest1BorderedSquare(self, grid: List[List[int]]) -> int:
```

### c
```c


int largest1BorderedSquare(int** grid, int gridSize, int* gridColSize){

}
```

### csharp
```csharp
public class Solution {
    public int Largest1BorderedSquare(int[][] grid) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function(grid) {
    
};
```

### typescript
```typescript
function largest1BorderedSquare(grid: number[][]): number {

};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function largest1BorderedSquare($grid) {
        
    }
}
```

### swift
```swift
class Solution {
    func largest1BorderedSquare(_ grid: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun largest1BorderedSquare(grid: Array<IntArray>): Int {
        
    }
}
```

### golang
```golang
func largest1BorderedSquare(grid [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} grid
# @return {Integer}
def largest1_bordered_square(grid)
    
end
```

### scala
```scala
object Solution {
    def largest1BorderedSquare(grid: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn largest1_bordered_square(grid: Vec<Vec<i32>>) -> i32 {
        
    }
}
```
