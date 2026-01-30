# 832. Flipping an Image

- Difficulty: Easy
- Topics: Array, Two Pointers, Bit Manipulation, Matrix, Simulation
- Slug: flipping-an-image
- Problem ID: 861

## Description
Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.
To flip an image horizontally means that each row of the image is reversed.
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: image = [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
```

### Example 2
```text
Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
```


## Constraints
- n == image.length
- n == image[i].length
- 1 <= n <= 20
- images[i][j] is either 0 or 1.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> flipAndInvertImage(vector<vector<int>>& image) {
        
    }
};
```

### java
```java
class Solution {
    public int[][] flipAndInvertImage(int[][] image) {
        
    }
}
```

### python
```python
class Solution(object):
    def flipAndInvertImage(self, image):
        """
        :type image: List[List[int]]
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def flipAndInvertImage(self, image: List[List[int]]) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** flipAndInvertImage(int** image, int imageSize, int* imageColSize, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[][] FlipAndInvertImage(int[][] image) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    
};
```

### typescript
```typescript
function flipAndInvertImage(image: number[][]): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $image
     * @return Integer[][]
     */
    function flipAndInvertImage($image) {
        
    }
}
```

### swift
```swift
class Solution {
    func flipAndInvertImage(_ image: [[Int]]) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun flipAndInvertImage(image: Array<IntArray>): Array<IntArray> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> flipAndInvertImage(List<List<int>> image) {
    
  }
}
```

### golang
```golang
func flipAndInvertImage(image [][]int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} image
# @return {Integer[][]}
def flip_and_invert_image(image)
    
end
```

### scala
```scala
object Solution {
    def flipAndInvertImage(image: Array[Array[Int]]): Array[Array[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn flip_and_invert_image(image: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (flip-and-invert-image image)
  (-> (listof (listof exact-integer?)) (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec flip_and_invert_image(Image :: [[integer()]]) -> [[integer()]].
flip_and_invert_image(Image) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec flip_and_invert_image(image :: [[integer]]) :: [[integer]]
  def flip_and_invert_image(image) do
    
  end
end
```
