# 959. Regions Cut By Slashes

- Difficulty: Medium
- Topics: Array, Hash Table, Depth-First Search, Breadth-First Search, Union Find, Matrix
- Slug: regions-cut-by-slashes
- Problem ID: 999

## Description
An n x n grid is composed of 1 x 1 squares where each 1 x 1 square consists of a '/', '\', or blank space ' '. These characters divide the square into contiguous regions.
Given the grid grid represented as a string array, return the number of regions.
Note that backslash characters are escaped, so a '\' is represented as '\\'.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: grid = [" /","/ "]
Output: 2
```
Images:
- https://assets.leetcode.com/uploads/2018/12/15/1.png

### Example 2
```text
Input: grid = [" /","  "]
Output: 1
```
Images:
- https://assets.leetcode.com/uploads/2018/12/15/2.png

### Example 3
```text
Input: grid = ["/\\","\\/"]
Output: 5
Explanation: Recall that because \ characters are escaped, "\\/" refers to \/, and "/\\" refers to /\.
```
Images:
- https://assets.leetcode.com/uploads/2018/12/15/4.png


## Constraints
- n == grid.length == grid[i].length
- 1 <= n <= 30
- grid[i][j] is either '/', '\', or ' '.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int regionsBySlashes(vector<string>& grid) {
        
    }
};
```

### java
```java
class Solution {
    public int regionsBySlashes(String[] grid) {
        
    }
}
```

### python
```python
class Solution(object):
    def regionsBySlashes(self, grid):
        """
        :type grid: List[str]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def regionsBySlashes(self, grid: List[str]) -> int:
```

### c
```c
int regionsBySlashes(char** grid, int gridSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int RegionsBySlashes(string[] grid) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
    
};
```

### typescript
```typescript
function regionsBySlashes(grid: string[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $grid
     * @return Integer
     */
    function regionsBySlashes($grid) {
        
    }
}
```

### swift
```swift
class Solution {
    func regionsBySlashes(_ grid: [String]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun regionsBySlashes(grid: Array<String>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int regionsBySlashes(List<String> grid) {
    
  }
}
```

### golang
```golang
func regionsBySlashes(grid []string) int {
    
}
```

### ruby
```ruby
# @param {String[]} grid
# @return {Integer}
def regions_by_slashes(grid)
    
end
```

### scala
```scala
object Solution {
    def regionsBySlashes(grid: Array[String]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn regions_by_slashes(grid: Vec<String>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (regions-by-slashes grid)
  (-> (listof string?) exact-integer?)
  )
```

### erlang
```erlang
-spec regions_by_slashes(Grid :: [unicode:unicode_binary()]) -> integer().
regions_by_slashes(Grid) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec regions_by_slashes(grid :: [String.t]) :: integer
  def regions_by_slashes(grid) do
    
  end
end
```
