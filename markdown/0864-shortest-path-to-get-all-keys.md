# 864. Shortest Path to Get All Keys

- Difficulty: Hard
- Topics: Array, Bit Manipulation, Breadth-First Search, Matrix
- Slug: shortest-path-to-get-all-keys
- Problem ID: 895

## Description
You are given an m x n grid grid where:
You start at the starting point and one move consists of walking one space in one of the four cardinal directions. You cannot walk outside the grid, or walk into a wall.
If you walk over a key, you can pick it up and you cannot walk over a lock unless you have its corresponding key.
For some 1 <= k <= 6, there is exactly one lowercase and one uppercase letter of the first k letters of the English alphabet in the grid. This means that there is exactly one key for each lock, and one lock for each key; and also that the letters used to represent the keys and locks were chosen in the same order as the English alphabet.
Return the lowest number of moves to acquire all keys. If it is impossible, return -1.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: grid = ["@.a..","###.#","b.A.B"]
Output: 8
Explanation: Note that the goal is to obtain all the keys not to open all the locks.
```
Images:
- https://assets.leetcode.com/uploads/2021/07/23/lc-keys2.jpg

### Example 2
```text
Input: grid = ["@..aA","..B#.","....b"]
Output: 6
```
Images:
- https://assets.leetcode.com/uploads/2021/07/23/lc-key2.jpg

### Example 3
```text
Input: grid = ["@Aa"]
Output: -1
```
Images:
- https://assets.leetcode.com/uploads/2021/07/23/lc-keys3.jpg


## Constraints
- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 30
- grid[i][j] is either an English letter, '.', '#', or '@'.
- There is exactly one '@' in the grid.
- The number of keys in the grid is in the range [1, 6].
- Each key in the grid is unique.
- Each key in the grid has a matching lock.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int shortestPathAllKeys(vector<string>& grid) {
        
    }
};
```

### java
```java
class Solution {
    public int shortestPathAllKeys(String[] grid) {
        
    }
}
```

### python
```python
class Solution(object):
    def shortestPathAllKeys(self, grid):
        """
        :type grid: List[str]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def shortestPathAllKeys(self, grid: List[str]) -> int:
```

### c
```c
int shortestPathAllKeys(char** grid, int gridSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int ShortestPathAllKeys(string[] grid) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function(grid) {
    
};
```

### typescript
```typescript
function shortestPathAllKeys(grid: string[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $grid
     * @return Integer
     */
    function shortestPathAllKeys($grid) {
        
    }
}
```

### swift
```swift
class Solution {
    func shortestPathAllKeys(_ grid: [String]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun shortestPathAllKeys(grid: Array<String>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int shortestPathAllKeys(List<String> grid) {
    
  }
}
```

### golang
```golang
func shortestPathAllKeys(grid []string) int {
    
}
```

### ruby
```ruby
# @param {String[]} grid
# @return {Integer}
def shortest_path_all_keys(grid)
    
end
```

### scala
```scala
object Solution {
    def shortestPathAllKeys(grid: Array[String]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn shortest_path_all_keys(grid: Vec<String>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (shortest-path-all-keys grid)
  (-> (listof string?) exact-integer?)
  )
```

### erlang
```erlang
-spec shortest_path_all_keys(Grid :: [unicode:unicode_binary()]) -> integer().
shortest_path_all_keys(Grid) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec shortest_path_all_keys(grid :: [String.t]) :: integer
  def shortest_path_all_keys(grid) do
    
  end
end
```
