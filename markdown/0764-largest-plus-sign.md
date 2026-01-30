# 764. Largest Plus Sign

- Difficulty: Medium
- Topics: Array, Dynamic Programming
- Slug: largest-plus-sign
- Problem ID: 769

## Description
You are given an integer n. You have an n x n binary grid grid with all values initially 1's except for some indices given in the array mines. The ith element of the array mines is defined as mines[i] = [xi, yi] where grid[xi][yi] == 0.
Return the order of the largest axis-aligned plus sign of 1's contained in grid. If there is none, return 0.
An axis-aligned plus sign of 1's of order k has some center grid[r][c] == 1 along with four arms of length k - 1 going up, down, left, and right, and made of 1's. Note that there could be 0's or 1's beyond the arms of the plus sign, only the relevant area of the plus sign is checked for 1's.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 5, mines = [[4,2]]
Output: 2
Explanation: In the above grid, the largest plus sign can only be of order 2. One of them is shown.
```
Images:
- https://assets.leetcode.com/uploads/2021/06/13/plus1-grid.jpg

### Example 2
```text
Input: n = 1, mines = [[0,0]]
Output: 0
Explanation: There is no plus sign, so return 0.
```
Images:
- https://assets.leetcode.com/uploads/2021/06/13/plus2-grid.jpg


## Constraints
- 1 <= n <= 500
- 1 <= mines.length <= 5000
- 0 <= xi, yi < n
- All the pairs (xi, yi) are unique.

## Hints
- For each direction such as "left", find left[r][c] = the number of 1s you will see before a zero starting at r, c and walking left.  You can find this in N^2 time with a dp.  The largest plus sign at r, c is just the minimum of left[r][c], up[r][c] etc.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int orderOfLargestPlusSign(int n, vector<vector<int>>& mines) {
        
    }
};
```

### java
```java
class Solution {
    public int orderOfLargestPlusSign(int n, int[][] mines) {
        
    }
}
```

### python
```python
class Solution(object):
    def orderOfLargestPlusSign(self, n, mines):
        """
        :type n: int
        :type mines: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def orderOfLargestPlusSign(self, n: int, mines: List[List[int]]) -> int:
```

### c
```c
int orderOfLargestPlusSign(int n, int** mines, int minesSize, int* minesColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int OrderOfLargestPlusSign(int n, int[][] mines) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function(n, mines) {
    
};
```

### typescript
```typescript
function orderOfLargestPlusSign(n: number, mines: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $mines
     * @return Integer
     */
    function orderOfLargestPlusSign($n, $mines) {
        
    }
}
```

### swift
```swift
class Solution {
    func orderOfLargestPlusSign(_ n: Int, _ mines: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun orderOfLargestPlusSign(n: Int, mines: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int orderOfLargestPlusSign(int n, List<List<int>> mines) {
    
  }
}
```

### golang
```golang
func orderOfLargestPlusSign(n int, mines [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer[][]} mines
# @return {Integer}
def order_of_largest_plus_sign(n, mines)
    
end
```

### scala
```scala
object Solution {
    def orderOfLargestPlusSign(n: Int, mines: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn order_of_largest_plus_sign(n: i32, mines: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (order-of-largest-plus-sign n mines)
  (-> exact-integer? (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec order_of_largest_plus_sign(N :: integer(), Mines :: [[integer()]]) -> integer().
order_of_largest_plus_sign(N, Mines) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec order_of_largest_plus_sign(n :: integer, mines :: [[integer]]) :: integer
  def order_of_largest_plus_sign(n, mines) do
    
  end
end
```
