# 118. Pascal's Triangle

- Difficulty: Easy
- Topics: Array, Dynamic Programming
- Slug: pascals-triangle
- Problem ID: 118

## Description
Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
```
Images:
- https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif

### Example 2
```text
Input: numRows = 1
Output: [[1]]
```
Images:
- https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif


## Constraints
- 1 <= numRows <= 30

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        
    }
};
```

### java
```java
class Solution {
    public List<List<Integer>> generate(int numRows) {
        
    }
}
```

### python
```python
class Solution(object):
    def generate(self, numRows):
        """
        :type numRows: int
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** generate(int numRows, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<IList<int>> Generate(int numRows) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
};
```

### typescript
```typescript
function generate(numRows: number): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $numRows
     * @return Integer[][]
     */
    function generate($numRows) {
        
    }
}
```

### swift
```swift
class Solution {
    func generate(_ numRows: Int) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun generate(numRows: Int): List<List<Int>> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> generate(int numRows) {
    
  }
}
```

### golang
```golang
func generate(numRows int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer} num_rows
# @return {Integer[][]}
def generate(num_rows)
    
end
```

### scala
```scala
object Solution {
    def generate(numRows: Int): List[List[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn generate(num_rows: i32) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (generate numRows)
  (-> exact-integer? (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec generate(NumRows :: integer()) -> [[integer()]].
generate(NumRows) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec generate(num_rows :: integer) :: [[integer]]
  def generate(num_rows) do
    
  end
end
```
