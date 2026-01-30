# 790. Domino and Tromino Tiling

- Difficulty: Medium
- Topics: Dynamic Programming
- Slug: domino-and-tromino-tiling
- Problem ID: 806

## Description
You have two types of tiles: a 2 x 1 domino shape and a tromino shape. You may rotate these shapes.
Given an integer n, return the number of ways to tile an 2 x n board. Since the answer may be very large, return it modulo 109 + 7.
In a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 3
Output: 5
Explanation: The five different ways are shown above.
```
Images:
- https://assets.leetcode.com/uploads/2021/07/15/lc-domino1.jpg

### Example 2
```text
Input: n = 1
Output: 1
```
Images:
- https://assets.leetcode.com/uploads/2021/07/15/lc-domino1.jpg


## Constraints
- 1 <= n <= 1000

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numTilings(int n) {
        
    }
};
```

### java
```java
class Solution {
    public int numTilings(int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def numTilings(self, n):
        """
        :type n: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numTilings(self, n: int) -> int:
```

### c
```c
int numTilings(int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumTilings(int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    
};
```

### typescript
```typescript
function numTilings(n: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function numTilings($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func numTilings(_ n: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numTilings(n: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numTilings(int n) {
    
  }
}
```

### golang
```golang
func numTilings(n int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @return {Integer}
def num_tilings(n)
    
end
```

### scala
```scala
object Solution {
    def numTilings(n: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_tilings(n: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-tilings n)
  (-> exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec num_tilings(N :: integer()) -> integer().
num_tilings(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_tilings(n :: integer) :: integer
  def num_tilings(n) do
    
  end
end
```
