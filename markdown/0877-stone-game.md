# 877. Stone Game

- Difficulty: Medium
- Topics: Array, Math, Dynamic Programming, Game Theory
- Slug: stone-game
- Problem ID: 909

## Description
Alice and Bob play a game with piles of stones. There are an even number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].
The objective of the game is to end with the most stones. The total number of stones across all the piles is odd, so there are no ties.
Alice and Bob take turns, with Alice starting first. Each turn, a player takes the entire pile of stones either from the beginning or from the end of the row. This continues until there are no more piles left, at which point the person with the most stones wins.
Assuming Alice and Bob play optimally, return true if Alice wins the game, or false if Bob wins.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: piles = [5,3,4,5]
Output: true
Explanation: 
Alice starts first, and can only take the first 5 or the last 5.
Say she takes the first 5, so that the row becomes [3, 4, 5].
If Bob takes 3, then the board is [4, 5], and Alice takes 5 to win with 10 points.
If Bob takes the last 5, then the board is [3, 4], and Alice takes 4 to win with 9 points.
This demonstrated that taking the first 5 was a winning move for Alice, so we return true.
```

### Example 2
```text
Input: piles = [3,7,2,3]
Output: true
```


## Constraints
- 2 <= piles.length <= 500
- piles.length is even.
- 1 <= piles[i] <= 500
- sum(piles[i]) is odd.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool stoneGame(vector<int>& piles) {
        
    }
};
```

### java
```java
class Solution {
    public boolean stoneGame(int[] piles) {
        
    }
}
```

### python
```python
class Solution(object):
    def stoneGame(self, piles):
        """
        :type piles: List[int]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def stoneGame(self, piles: List[int]) -> bool:
```

### c
```c
bool stoneGame(int* piles, int pilesSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool StoneGame(int[] piles) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    
};
```

### typescript
```typescript
function stoneGame(piles: number[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $piles
     * @return Boolean
     */
    function stoneGame($piles) {
        
    }
}
```

### swift
```swift
class Solution {
    func stoneGame(_ piles: [Int]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun stoneGame(piles: IntArray): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool stoneGame(List<int> piles) {
    
  }
}
```

### golang
```golang
func stoneGame(piles []int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} piles
# @return {Boolean}
def stone_game(piles)
    
end
```

### scala
```scala
object Solution {
    def stoneGame(piles: Array[Int]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn stone_game(piles: Vec<i32>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (stone-game piles)
  (-> (listof exact-integer?) boolean?)
  )
```

### erlang
```erlang
-spec stone_game(Piles :: [integer()]) -> boolean().
stone_game(Piles) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec stone_game(piles :: [integer]) :: boolean
  def stone_game(piles) do
    
  end
end
```
