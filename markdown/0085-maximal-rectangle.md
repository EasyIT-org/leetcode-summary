# 85. Maximal Rectangle

- Difficulty: Hard
- Topics: Array, Dynamic Programming, Stack, Matrix, Monotonic Stack
- Slug: maximal-rectangle
- Problem ID: 85

## Description
Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 6
Explanation: The maximal rectangle is shown in the above picture.
```
Images:
- https://assets.leetcode.com/uploads/2020/09/14/maximal.jpg

### Example 2
```text
Input: matrix = [["0"]]
Output: 0
```
Images:
- https://assets.leetcode.com/uploads/2020/09/14/maximal.jpg

### Example 3
```text
Input: matrix = [["1"]]
Output: 1
```
Images:
- https://assets.leetcode.com/uploads/2020/09/14/maximal.jpg


## Constraints
- rows == matrix.length
- cols == matrix[i].length
- 1 <= row, cols <= 200
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
    int maximalRectangle(vector<vector<char>>& matrix) {
        
    }
};
```

### java
```java
class Solution {
    public int maximalRectangle(char[][] matrix) {
        
    }
}
```

### python
```python
class Solution(object):
    def maximalRectangle(self, matrix):
        """
        :type matrix: List[List[str]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maximalRectangle(self, matrix: List[List[str]]) -> int:
```

### c
```c
int maximalRectangle(char** matrix, int matrixSize, int* matrixColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaximalRectangle(char[][] matrix) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    
};
```

### typescript
```typescript
function maximalRectangle(matrix: string[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[][] $matrix
     * @return Integer
     */
    function maximalRectangle($matrix) {
        
    }
}
```

### swift
```swift
class Solution {
    func maximalRectangle(_ matrix: [[Character]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maximalRectangle(matrix: Array<CharArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maximalRectangle(List<List<String>> matrix) {
    
  }
}
```

### golang
```golang
func maximalRectangle(matrix [][]byte) int {
    
}
```

### ruby
```ruby
# @param {Character[][]} matrix
# @return {Integer}
def maximal_rectangle(matrix)
    
end
```

### scala
```scala
object Solution {
    def maximalRectangle(matrix: Array[Array[Char]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn maximal_rectangle(matrix: Vec<Vec<char>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (maximal-rectangle matrix)
  (-> (listof (listof char?)) exact-integer?)
  )
```

### erlang
```erlang
-spec maximal_rectangle(Matrix :: [[char()]]) -> integer().
maximal_rectangle(Matrix) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec maximal_rectangle(matrix :: [[char]]) :: integer
  def maximal_rectangle(matrix) do
    
  end
end
```
