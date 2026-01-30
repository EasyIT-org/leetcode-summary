# 1140. Stone Game II

- Difficulty: Medium
- Topics: Array, Math, Dynamic Programming, Prefix Sum, Game Theory
- Slug: stone-game-ii
- Problem ID: 1240

## Description
Alice and Bob continue their games with piles of stones. There are a number of piles arranged in a row, and each pile has a positive integer number of stones piles[i]. The objective of the game is to end with the most stones.
Alice and Bob take turns, with Alice starting first.
On each player's turn, that player can take all the stones in the first X remaining piles, where 1 <= X <= 2M. Then, we set M = max(M, X). Initially, M = 1.
The game continues until all the stones have been taken.
Assuming Alice and Bob play optimally, return the maximum number of stones Alice can get.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: piles = [2,7,9,4,4]
Output: 10
Explanation:
So we return 10 since it's larger.
```

### Example 2
```text
Input: piles = [1,2,3,4,5,100]
Output: 104
```


## Constraints
- 1 <= piles.length <= 100
- 1 <= piles[i] <= 104

## Hints
- Use dynamic programming: the states are (i, m) for the answer of piles[i:] and that given m.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int stoneGameII(vector<int>& piles) {
        
    }
};
```

### java
```java
class Solution {
    public int stoneGameII(int[] piles) {
        
    }
}
```

### python
```python
class Solution(object):
    def stoneGameII(self, piles):
        """
        :type piles: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def stoneGameII(self, piles: List[int]) -> int:
```

### c
```c
int stoneGameII(int* piles, int pilesSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int StoneGameII(int[] piles) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    
};
```

### typescript
```typescript
function stoneGameII(piles: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $piles
     * @return Integer
     */
    function stoneGameII($piles) {
        
    }
}
```

### swift
```swift
class Solution {
    func stoneGameII(_ piles: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun stoneGameII(piles: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int stoneGameII(List<int> piles) {
    
  }
}
```

### golang
```golang
func stoneGameII(piles []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} piles
# @return {Integer}
def stone_game_ii(piles)
    
end
```

### scala
```scala
object Solution {
    def stoneGameII(piles: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn stone_game_ii(piles: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (stone-game-ii piles)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec stone_game_ii(Piles :: [integer()]) -> integer().
stone_game_ii(Piles) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec stone_game_ii(piles :: [integer]) :: integer
  def stone_game_ii(piles) do
    
  end
end
```
