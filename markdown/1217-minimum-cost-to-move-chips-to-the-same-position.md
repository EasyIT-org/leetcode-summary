# 1217. Minimum Cost to Move Chips to The Same Position

- Difficulty: Easy
- Topics: Array, Math, Greedy
- Slug: minimum-cost-to-move-chips-to-the-same-position
- Problem ID: 1329

## Description
We have n chips, where the position of the ith chip is position[i].
We need to move all the chips to the same position. In one step, we can change the position of the ith chip from position[i] to:
Return the minimum cost needed to move all the chips to the same position.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: position = [1,2,3]
Output: 1
Explanation: First step: Move the chip at position 3 to position 1 with cost = 0.
Second step: Move the chip at position 2 to position 1 with cost = 1.
Total cost is 1.
```
Images:
- https://assets.leetcode.com/uploads/2020/08/15/chips_e1.jpg

### Example 2
```text
Input: position = [2,2,2,3,3]
Output: 2
Explanation: We can move the two chips at position  3 to position 2. Each move has cost = 1. The total cost = 2.
```
Images:
- https://assets.leetcode.com/uploads/2020/08/15/chip_e2.jpg

### Example 3
```text
Input: position = [1,1000000000]
Output: 1
```
Images:
- https://assets.leetcode.com/uploads/2020/08/15/chip_e2.jpg


## Constraints
- 1 <= position.length <= 100
- 1 <= position[i] <= 10^9

## Hints
- The first move keeps the parity of the element as it is.
- The second move changes the parity of the element.
- Since the first move is free, if all the numbers have the same parity, the answer would be zero.
- Find the minimum cost to make all the numbers have the same parity.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int minCostToMoveChips(vector<int>& position) {
        
    }
};
```

### java
```java
class Solution {
    public int minCostToMoveChips(int[] position) {
        
    }
}
```

### python
```python
class Solution(object):
    def minCostToMoveChips(self, position):
        """
        :type position: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minCostToMoveChips(self, position: List[int]) -> int:
```

### c
```c
int minCostToMoveChips(int* position, int positionSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinCostToMoveChips(int[] position) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    
};
```

### typescript
```typescript
function minCostToMoveChips(position: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $position
     * @return Integer
     */
    function minCostToMoveChips($position) {
        
    }
}
```

### swift
```swift
class Solution {
    func minCostToMoveChips(_ position: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minCostToMoveChips(position: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minCostToMoveChips(List<int> position) {
    
  }
}
```

### golang
```golang
func minCostToMoveChips(position []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} position
# @return {Integer}
def min_cost_to_move_chips(position)
    
end
```

### scala
```scala
object Solution {
    def minCostToMoveChips(position: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn min_cost_to_move_chips(position: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (min-cost-to-move-chips position)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec min_cost_to_move_chips(Position :: [integer()]) -> integer().
min_cost_to_move_chips(Position) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec min_cost_to_move_chips(position :: [integer]) :: integer
  def min_cost_to_move_chips(position) do
    
  end
end
```
