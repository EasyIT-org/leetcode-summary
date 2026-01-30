# 62. Unique Paths

- Difficulty: Medium
- Topics: Math, Dynamic Programming, Combinatorics
- Slug: unique-paths
- Problem ID: 62

## Description
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
The test cases are generated so that the answer will be less than or equal to 2 * 109.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: m = 3, n = 7
Output: 28
```
Images:
- https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png

### Example 2
```text
Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
```
Images:
- https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png


## Constraints
- 1 <= m, n <= 100

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int uniquePaths(int m, int n) {
        
    }
};
```

### java
```java
class Solution {
    public int uniquePaths(int m, int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def uniquePaths(self, m, n):
        """
        :type m: int
        :type n: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
```

### c
```c
int uniquePaths(int m, int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public int UniquePaths(int m, int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    
};
```

### typescript
```typescript
function uniquePaths(m: number, n: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $m
     * @param Integer $n
     * @return Integer
     */
    function uniquePaths($m, $n) {
        
    }
}
```

### swift
```swift
class Solution {
    func uniquePaths(_ m: Int, _ n: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun uniquePaths(m: Int, n: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int uniquePaths(int m, int n) {
    
  }
}
```

### golang
```golang
func uniquePaths(m int, n int) int {
    
}
```

### ruby
```ruby
# @param {Integer} m
# @param {Integer} n
# @return {Integer}
def unique_paths(m, n)
    
end
```

### scala
```scala
object Solution {
    def uniquePaths(m: Int, n: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn unique_paths(m: i32, n: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (unique-paths m n)
  (-> exact-integer? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec unique_paths(M :: integer(), N :: integer()) -> integer().
unique_paths(M, N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec unique_paths(m :: integer, n :: integer) :: integer
  def unique_paths(m, n) do
    
  end
end
```
