# 661. Image Smoother

- Difficulty: Easy
- Topics: Array, Matrix
- Slug: image-smoother
- Problem ID: 661

## Description
An image smoother is a filter of the size 3 x 3 that can be applied to each cell of an image by rounding down the average of the cell and the eight surrounding cells (i.e., the average of the nine cells in the blue smoother). If one or more of the surrounding cells of a cell is not present, we do not consider it in the average (i.e., the average of the four cells in the red smoother).
Given an m x n integer matrix img representing the grayscale of an image, return the image after applying the smoother on each cell of it.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: img = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[0,0,0],[0,0,0],[0,0,0]]
Explanation:
For the points (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
For the points (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
For the point (1,1): floor(8/9) = floor(0.88888889) = 0
```
Images:
- https://assets.leetcode.com/uploads/2021/05/03/smooth-grid.jpg

### Example 2
```text
Input: img = [[100,200,100],[200,50,200],[100,200,100]]
Output: [[137,141,137],[141,138,141],[137,141,137]]
Explanation:
For the points (0,0), (0,2), (2,0), (2,2): floor((100+200+200+50)/4) = floor(137.5) = 137
For the points (0,1), (1,0), (1,2), (2,1): floor((200+200+50+200+100+100)/6) = floor(141.666667) = 141
For the point (1,1): floor((50+200+200+200+200+100+100+100+100)/9) = floor(138.888889) = 138
```
Images:
- https://assets.leetcode.com/uploads/2021/05/03/smooth2-grid.jpg


## Constraints
- m == img.length
- n == img[i].length
- 1 <= m, n <= 200
- 0 <= img[i][j] <= 255

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> imageSmoother(vector<vector<int>>& img) {
        
    }
};
```

### java
```java
class Solution {
    public int[][] imageSmoother(int[][] img) {
        
    }
}
```

### python
```python
class Solution(object):
    def imageSmoother(self, img):
        """
        :type img: List[List[int]]
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def imageSmoother(self, img: List[List[int]]) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** imageSmoother(int** img, int imgSize, int* imgColSize, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[][] ImageSmoother(int[][] img) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    
};
```

### typescript
```typescript
function imageSmoother(img: number[][]): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $img
     * @return Integer[][]
     */
    function imageSmoother($img) {
        
    }
}
```

### swift
```swift
class Solution {
    func imageSmoother(_ img: [[Int]]) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun imageSmoother(img: Array<IntArray>): Array<IntArray> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> imageSmoother(List<List<int>> img) {
    
  }
}
```

### golang
```golang
func imageSmoother(img [][]int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} img
# @return {Integer[][]}
def image_smoother(img)
    
end
```

### scala
```scala
object Solution {
    def imageSmoother(img: Array[Array[Int]]): Array[Array[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn image_smoother(img: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (image-smoother img)
  (-> (listof (listof exact-integer?)) (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec image_smoother(Img :: [[integer()]]) -> [[integer()]].
image_smoother(Img) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec image_smoother(img :: [[integer]]) :: [[integer]]
  def image_smoother(img) do
    
  end
end
```
