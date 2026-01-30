# 733. Flood Fill

- Difficulty: Easy
- Topics: Array, Depth-First Search, Breadth-First Search, Matrix
- Slug: flood-fill
- Problem ID: 733

## Description
You are given an image represented by an m x n grid of integers image, where image[i][j] represents the pixel value of the image. You are also given three integers sr, sc, and color. Your task is to perform a flood fill on the image starting from the pixel image[sr][sc].
To perform a flood fill:
Return the modified image after performing the flood fill.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation:

From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not horizontally or vertically connected to the starting pixel.
```
Images:
- https://assets.leetcode.com/uploads/2021/06/01/flood1-grid.jpg

### Example 2
```text
Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
Output: [[0,0,0],[0,0,0]]
Explanation:
The starting pixel is already colored with 0, which is the same as the target color. Therefore, no changes are made to the image.
```


## Constraints
- m == image.length
- n == image[i].length
- 1 <= m, n <= 50
- 0 <= image[i][j], color < 216
- 0 <= sr < m
- 0 <= sc < n

## Hints
- Write a recursive function that paints the pixel if it's the correct color, then recurses on neighboring pixels.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int color) {
        
    }
};
```

### java
```java
class Solution {
    public int[][] floodFill(int[][] image, int sr, int sc, int color) {
        
    }
}
```

### python
```python
class Solution(object):
    def floodFill(self, image, sr, sc, color):
        """
        :type image: List[List[int]]
        :type sr: int
        :type sc: int
        :type color: int
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** floodFill(int** image, int imageSize, int* imageColSize, int sr, int sc, int color, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[][] FloodFill(int[][] image, int sr, int sc, int color) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    
};
```

### typescript
```typescript
function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $image
     * @param Integer $sr
     * @param Integer $sc
     * @param Integer $color
     * @return Integer[][]
     */
    function floodFill($image, $sr, $sc, $color) {
        
    }
}
```

### swift
```swift
class Solution {
    func floodFill(_ image: [[Int]], _ sr: Int, _ sc: Int, _ color: Int) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun floodFill(image: Array<IntArray>, sr: Int, sc: Int, color: Int): Array<IntArray> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> floodFill(List<List<int>> image, int sr, int sc, int color) {
    
  }
}
```

### golang
```golang
func floodFill(image [][]int, sr int, sc int, color int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} image
# @param {Integer} sr
# @param {Integer} sc
# @param {Integer} color
# @return {Integer[][]}
def flood_fill(image, sr, sc, color)
    
end
```

### scala
```scala
object Solution {
    def floodFill(image: Array[Array[Int]], sr: Int, sc: Int, color: Int): Array[Array[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn flood_fill(image: Vec<Vec<i32>>, sr: i32, sc: i32, color: i32) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (flood-fill image sr sc color)
  (-> (listof (listof exact-integer?)) exact-integer? exact-integer? exact-integer? (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec flood_fill(Image :: [[integer()]], Sr :: integer(), Sc :: integer(), Color :: integer()) -> [[integer()]].
flood_fill(Image, Sr, Sc, Color) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec flood_fill(image :: [[integer]], sr :: integer, sc :: integer, color :: integer) :: [[integer]]
  def flood_fill(image, sr, sc, color) do
    
  end
end
```
