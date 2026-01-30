# 598. Range Addition II

- Difficulty: Easy
- Topics: Array, Math
- Slug: range-addition-ii
- Problem ID: 598

## Description
You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.
Count and return the number of maximum integers in the matrix after performing all the operations.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: m = 3, n = 3, ops = [[2,2],[3,3]]
Output: 4
Explanation: The maximum integer in M is 2, and there are four of it in M. So return 4.
```
Images:
- https://assets.leetcode.com/uploads/2020/10/02/ex1.jpg

### Example 2
```text
Input: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
Output: 4
```
Images:
- https://assets.leetcode.com/uploads/2020/10/02/ex1.jpg

### Example 3
```text
Input: m = 3, n = 3, ops = []
Output: 9
```
Images:
- https://assets.leetcode.com/uploads/2020/10/02/ex1.jpg


## Constraints
- 1 <= m, n <= 4 * 104
- 0 <= ops.length <= 104
- ops[i].length == 2
- 1 <= ai <= m
- 1 <= bi <= n

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxCount(int m, int n, vector<vector<int>>& ops) {
        
    }
};
```

### java
```java
class Solution {
    public int maxCount(int m, int n, int[][] ops) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxCount(self, m, n, ops):
        """
        :type m: int
        :type n: int
        :type ops: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxCount(self, m: int, n: int, ops: List[List[int]]) -> int:
```

### c
```c
int maxCount(int m, int n, int** ops, int opsSize, int* opsColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxCount(int m, int n, int[][] ops) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    
};
```

### typescript
```typescript
function maxCount(m: number, n: number, ops: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $m
     * @param Integer $n
     * @param Integer[][] $ops
     * @return Integer
     */
    function maxCount($m, $n, $ops) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxCount(_ m: Int, _ n: Int, _ ops: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxCount(m: Int, n: Int, ops: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxCount(int m, int n, List<List<int>> ops) {
    
  }
}
```

### golang
```golang
func maxCount(m int, n int, ops [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer} m
# @param {Integer} n
# @param {Integer[][]} ops
# @return {Integer}
def max_count(m, n, ops)
    
end
```

### scala
```scala
object Solution {
    def maxCount(m: Int, n: Int, ops: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_count(m: i32, n: i32, ops: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-count m n ops)
  (-> exact-integer? exact-integer? (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec max_count(M :: integer(), N :: integer(), Ops :: [[integer()]]) -> integer().
max_count(M, N, Ops) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_count(m :: integer, n :: integer, ops :: [[integer]]) :: integer
  def max_count(m, n, ops) do
    
  end
end
```
