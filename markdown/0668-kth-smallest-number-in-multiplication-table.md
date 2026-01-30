# 668. Kth Smallest Number in Multiplication Table

- Difficulty: Hard
- Topics: Math, Binary Search
- Slug: kth-smallest-number-in-multiplication-table
- Problem ID: 668

## Description
Nearly everyone has used the Multiplication Table. The multiplication table of size m x n is an integer matrix mat where mat[i][j] == i * j (1-indexed).
Given three integers m, n, and k, return the kth smallest element in the m x n multiplication table.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: m = 3, n = 3, k = 5
Output: 3
Explanation: The 5th smallest number is 3.
```
Images:
- https://assets.leetcode.com/uploads/2021/05/02/multtable1-grid.jpg

### Example 2
```text
Input: m = 2, n = 3, k = 6
Output: 6
Explanation: The 6th smallest number is 6.
```
Images:
- https://assets.leetcode.com/uploads/2021/05/02/multtable2-grid.jpg


## Constraints
- 1 <= m, n <= 3 * 104
- 1 <= k <= m * n

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findKthNumber(int m, int n, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int findKthNumber(int m, int n, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def findKthNumber(self, m, n, k):
        """
        :type m: int
        :type n: int
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findKthNumber(self, m: int, n: int, k: int) -> int:
```

### c
```c
int findKthNumber(int m, int n, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindKthNumber(int m, int n, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(m, n, k) {
    
};
```

### typescript
```typescript
function findKthNumber(m: number, n: number, k: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $m
     * @param Integer $n
     * @param Integer $k
     * @return Integer
     */
    function findKthNumber($m, $n, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func findKthNumber(_ m: Int, _ n: Int, _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findKthNumber(m: Int, n: Int, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findKthNumber(int m, int n, int k) {
    
  }
}
```

### golang
```golang
func findKthNumber(m int, n int, k int) int {
    
}
```

### ruby
```ruby
# @param {Integer} m
# @param {Integer} n
# @param {Integer} k
# @return {Integer}
def find_kth_number(m, n, k)
    
end
```

### scala
```scala
object Solution {
    def findKthNumber(m: Int, n: Int, k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_kth_number(m: i32, n: i32, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-kth-number m n k)
  (-> exact-integer? exact-integer? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec find_kth_number(M :: integer(), N :: integer(), K :: integer()) -> integer().
find_kth_number(M, N, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_kth_number(m :: integer, n :: integer, k :: integer) :: integer
  def find_kth_number(m, n, k) do
    
  end
end
```
