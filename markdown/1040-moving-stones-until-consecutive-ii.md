# 1040. Moving Stones Until Consecutive II

- Difficulty: Medium
- Topics: Array, Math, Sliding Window, Sorting
- Slug: moving-stones-until-consecutive-ii
- Problem ID: 1113

## Description
There are some stones in different positions on the X-axis. You are given an integer array stones, the positions of the stones.
Call a stone an endpoint stone if it has the smallest or largest position. In one move, you pick up an endpoint stone and move it to an unoccupied position so that it is no longer an endpoint stone.
The game ends when you cannot make any more moves (i.e., the stones are in three consecutive positions).
Return an integer array answer of length 2 where:
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: stones = [7,4,9]
Output: [1,2]
Explanation: We can move 4 -> 8 for one move to finish the game.
Or, we can move 9 -> 5, 4 -> 6 for two moves to finish the game.
```

### Example 2
```text
Input: stones = [6,5,4,3,10]
Output: [2,3]
Explanation: We can move 3 -> 8 then 10 -> 7 to finish the game.
Or, we can move 3 -> 7, 4 -> 8, 5 -> 9 to finish the game.
Notice we cannot move 10 -> 2 to finish the game, because that would be an illegal move.
```


## Constraints
- 3 <= stones.length <= 104
- 1 <= stones[i] <= 109
- All the values of stones are unique.

## Hints
- For the minimum, how many stones are already in place?
For the maximum, we have to lose either the gap A[1] - A[0] or A[N-1] - A[N-2]  (where N = A.length), but every other space can be occupied.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> numMovesStonesII(vector<int>& stones) {
        
    }
};
```

### java
```java
class Solution {
    public int[] numMovesStonesII(int[] stones) {
        
    }
}
```

### python
```python
class Solution(object):
    def numMovesStonesII(self, stones):
        """
        :type stones: List[int]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def numMovesStonesII(self, stones: List[int]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* numMovesStonesII(int* stones, int stonesSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] NumMovesStonesII(int[] stones) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} stones
 * @return {number[]}
 */
var numMovesStonesII = function(stones) {
    
};
```

### typescript
```typescript
function numMovesStonesII(stones: number[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $stones
     * @return Integer[]
     */
    function numMovesStonesII($stones) {
        
    }
}
```

### swift
```swift
class Solution {
    func numMovesStonesII(_ stones: [Int]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numMovesStonesII(stones: IntArray): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> numMovesStonesII(List<int> stones) {
    
  }
}
```

### golang
```golang
func numMovesStonesII(stones []int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} stones
# @return {Integer[]}
def num_moves_stones_ii(stones)
    
end
```

### scala
```scala
object Solution {
    def numMovesStonesII(stones: Array[Int]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_moves_stones_ii(stones: Vec<i32>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (num-moves-stones-ii stones)
  (-> (listof exact-integer?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec num_moves_stones_ii(Stones :: [integer()]) -> [integer()].
num_moves_stones_ii(Stones) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_moves_stones_ii(stones :: [integer]) :: [integer]
  def num_moves_stones_ii(stones) do
    
  end
end
```
