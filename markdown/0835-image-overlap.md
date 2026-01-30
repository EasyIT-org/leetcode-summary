# 835. Image Overlap

- Difficulty: Medium
- Topics: Array, Matrix
- Slug: image-overlap
- Problem ID: 864

## Description
You are given two images, img1 and img2, represented as binary, square matrices of size n x n. A binary matrix has only 0s and 1s as values.
We translate one image however we choose by sliding all the 1 bits left, right, up, and/or down any number of units. We then place it on top of the other image. We can then calculate the overlap by counting the number of positions that have a 1 in both images.
Note also that a translation does not include any kind of rotation. Any 1 bits that are translated outside of the matrix borders are erased.
Return the largest possible overlap.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: img1 = [[1,1,0],[0,1,0],[0,1,0]], img2 = [[0,0,0],[0,1,1],[0,0,1]]
Output: 3
Explanation: We translate img1 to right by 1 unit and down by 1 unit.

The number of positions that have a 1 in both images is 3 (shown in red).
```
Images:
- https://assets.leetcode.com/uploads/2020/09/09/overlap1.jpg

### Example 2
```text
Input: img1 = [[1]], img2 = [[1]]
Output: 1
```
Images:
- https://assets.leetcode.com/uploads/2020/09/09/overlap_step2.jpg

### Example 3
```text
Input: img1 = [[0]], img2 = [[0]]
Output: 0
```
Images:
- https://assets.leetcode.com/uploads/2020/09/09/overlap_step2.jpg


## Constraints
- n == img1.length == img1[i].length
- n == img2.length == img2[i].length
- 1 <= n <= 30
- img1[i][j] is either 0 or 1.
- img2[i][j] is either 0 or 1.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int largestOverlap(vector<vector<int>>& img1, vector<vector<int>>& img2) {
        
    }
};
```

### java
```java
class Solution {
    public int largestOverlap(int[][] img1, int[][] img2) {
        
    }
}
```

### python
```python
class Solution(object):
    def largestOverlap(self, img1, img2):
        """
        :type img1: List[List[int]]
        :type img2: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def largestOverlap(self, img1: List[List[int]], img2: List[List[int]]) -> int:
```

### c
```c
int largestOverlap(int** img1, int img1Size, int* img1ColSize, int** img2, int img2Size, int* img2ColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int LargestOverlap(int[][] img1, int[][] img2) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
    
};
```

### typescript
```typescript
function largestOverlap(img1: number[][], img2: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $img1
     * @param Integer[][] $img2
     * @return Integer
     */
    function largestOverlap($img1, $img2) {
        
    }
}
```

### swift
```swift
class Solution {
    func largestOverlap(_ img1: [[Int]], _ img2: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun largestOverlap(img1: Array<IntArray>, img2: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int largestOverlap(List<List<int>> img1, List<List<int>> img2) {
    
  }
}
```

### golang
```golang
func largestOverlap(img1 [][]int, img2 [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} img1
# @param {Integer[][]} img2
# @return {Integer}
def largest_overlap(img1, img2)
    
end
```

### scala
```scala
object Solution {
    def largestOverlap(img1: Array[Array[Int]], img2: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn largest_overlap(img1: Vec<Vec<i32>>, img2: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (largest-overlap img1 img2)
  (-> (listof (listof exact-integer?)) (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec largest_overlap(Img1 :: [[integer()]], Img2 :: [[integer()]]) -> integer().
largest_overlap(Img1, Img2) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec largest_overlap(img1 :: [[integer]], img2 :: [[integer]]) :: integer
  def largest_overlap(img1, img2) do
    
  end
end
```
