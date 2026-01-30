# 1033. Moving Stones Until Consecutive

- Difficulty: Medium
- Topics: Math, Brainteaser
- Slug: moving-stones-until-consecutive
- Problem ID: 1103

## Description
There are three stones in different positions on the X-axis. You are given three integers a, b, and c, the positions of the stones.
In one move, you pick up a stone at an endpoint (i.e., either the lowest or highest position stone), and move it to an unoccupied position between those endpoints. Formally, let's say the stones are currently at positions x, y, and z with x < y < z. You pick up the stone at either position x or position z, and move that stone to an integer position k, with x < k < z and k != y.
The game ends when you cannot make any more moves (i.e., the stones are in three consecutive positions).
Return an integer array answer of length 2 where:
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: a = 1, b = 2, c = 5
Output: [1,2]
Explanation: Move the stone from 5 to 3, or move the stone from 5 to 4 to 3.
```

### Example 2
```text
Input: a = 4, b = 3, c = 2
Output: [0,0]
Explanation: We cannot make any moves.
```

### Example 3
```text
Input: a = 3, b = 5, c = 1
Output: [1,2]
Explanation: Move the stone from 1 to 4; or move the stone from 1 to 2 to 4.
```


## Constraints
- 1 <= a, b, c <= 100
- a, b, and c have different values.

## Hints
- For the minimum:  We can always do it in at most 2 moves, by moving one stone next to another, then the third stone next to the other two.  When can we do it in 1 move?  0 moves?

For the maximum:  Every move, the maximum position minus the minimum position must decrease by at least 1.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> numMovesStones(int a, int b, int c) {
        
    }
};
```

### java
```java
class Solution {
    public int[] numMovesStones(int a, int b, int c) {
        
    }
}
```

### python
```python
class Solution(object):
    def numMovesStones(self, a, b, c):
        """
        :type a: int
        :type b: int
        :type c: int
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def numMovesStones(self, a: int, b: int, c: int) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* numMovesStones(int a, int b, int c, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] NumMovesStones(int a, int b, int c) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
    
};
```

### typescript
```typescript
function numMovesStones(a: number, b: number, c: number): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $a
     * @param Integer $b
     * @param Integer $c
     * @return Integer[]
     */
    function numMovesStones($a, $b, $c) {
        
    }
}
```

### swift
```swift
class Solution {
    func numMovesStones(_ a: Int, _ b: Int, _ c: Int) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numMovesStones(a: Int, b: Int, c: Int): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> numMovesStones(int a, int b, int c) {
    
  }
}
```

### golang
```golang
func numMovesStones(a int, b int, c int) []int {
    
}
```

### ruby
```ruby
# @param {Integer} a
# @param {Integer} b
# @param {Integer} c
# @return {Integer[]}
def num_moves_stones(a, b, c)
    
end
```

### scala
```scala
object Solution {
    def numMovesStones(a: Int, b: Int, c: Int): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_moves_stones(a: i32, b: i32, c: i32) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (num-moves-stones a b c)
  (-> exact-integer? exact-integer? exact-integer? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec num_moves_stones(A :: integer(), B :: integer(), C :: integer()) -> [integer()].
num_moves_stones(A, B, C) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_moves_stones(a :: integer, b :: integer, c :: integer) :: [integer]
  def num_moves_stones(a, b, c) do
    
  end
end
```
