# 221. Maximal Square

- Difficulty: Medium
- Topics: Array, Dynamic Programming, Matrix
- Slug: maximal-square
- Problem ID: 221

## Description
Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 4
```
Images:
- https://assets.leetcode.com/uploads/2020/11/26/max1grid.jpg

### Example 2
```text
Input: matrix = [["0","1"],["1","0"]]
Output: 1
```
Images:
- https://assets.leetcode.com/uploads/2020/11/26/max2grid.jpg

### Example 3
```text
Input: matrix = [["0"]]
Output: 0
```
Images:
- https://assets.leetcode.com/uploads/2020/11/26/max2grid.jpg


## Constraints
- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 300
- matrix[i][j] is '0' or '1'.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maximalSquare(vector<vector<char>>& matrix) {
        
    }
};
```

### java
```java
class Solution {
    public int maximalSquare(char[][] matrix) {
        
    }
}
```

### python
```python
class Solution(object):
    def maximalSquare(self, matrix):
        """
        :type matrix: List[List[str]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maximalSquare(self, matrix: List[List[str]]) -> int:
```

### c
```c
int maximalSquare(char** matrix, int matrixSize, int* matrixColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaximalSquare(char[][] matrix) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    
};
```

### typescript
```typescript
function maximalSquare(matrix: string[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[][] $matrix
     * @return Integer
     */
    function maximalSquare($matrix) {
        
    }
}
```

### swift
```swift
class Solution {
    func maximalSquare(_ matrix: [[Character]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maximalSquare(matrix: Array<CharArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maximalSquare(List<List<String>> matrix) {
    
  }
}
```

### golang
```golang
func maximalSquare(matrix [][]byte) int {
    
}
```

### ruby
```ruby
# @param {Character[][]} matrix
# @return {Integer}
def maximal_square(matrix)
    
end
```

### scala
```scala
object Solution {
    def maximalSquare(matrix: Array[Array[Char]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn maximal_square(matrix: Vec<Vec<char>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (maximal-square matrix)
  (-> (listof (listof char?)) exact-integer?)
  )
```

### erlang
```erlang
-spec maximal_square(Matrix :: [[char()]]) -> integer().
maximal_square(Matrix) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec maximal_square(matrix :: [[char]]) :: integer
  def maximal_square(matrix) do
    
  end
end
```
