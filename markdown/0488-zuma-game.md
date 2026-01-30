# 488. Zuma Game

- Difficulty: Hard
- Topics: String, Dynamic Programming, Stack, Breadth-First Search, Memoization
- Slug: zuma-game
- Problem ID: 488

## Description
You are playing a variation of the game Zuma.
In this variation of Zuma, there is a single row of colored balls on a board, where each ball can be colored red 'R', yellow 'Y', blue 'B', green 'G', or white 'W'. You also have several colored balls in your hand.
Your goal is to clear all of the balls from the board. On each turn:
Given a string board, representing the row of balls on the board, and a string hand, representing the balls in your hand, return the minimum number of balls you have to insert to clear all the balls from the board. If you cannot clear all the balls from the board using the balls in your hand, return -1.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: board = "WRRBBW", hand = "RB"
Output: -1
Explanation: It is impossible to clear all the balls. The best you can do is:
- Insert 'R' so the board becomes WRRRBBW. WRRRBBW -> WBBW.
- Insert 'B' so the board becomes WBBBW. WBBBW -> WW.
There are still balls remaining on the board, and you are out of balls to insert.
```

### Example 2
```text
Input: board = "WWRRBBWW", hand = "WRBRW"
Output: 2
Explanation: To make the board empty:
- Insert 'R' so the board becomes WWRRRBBWW. WWRRRBBWW -> WWBBWW.
- Insert 'B' so the board becomes WWBBBWW. WWBBBWW -> WWWW -> empty.
2 balls from your hand were needed to clear the board.
```

### Example 3
```text
Input: board = "G", hand = "GGGGG"
Output: 2
Explanation: To make the board empty:
- Insert 'G' so the board becomes GG.
- Insert 'G' so the board becomes GGG. GGG -> empty.
2 balls from your hand were needed to clear the board.
```


## Constraints
- 1 <= board.length <= 16
- 1 <= hand.length <= 5
- board and hand consist of the characters 'R', 'Y', 'B', 'G', and 'W'.
- The initial row of balls on the board will not have any groups of three or more consecutive balls of the same color.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findMinStep(string board, string hand) {
        
    }
};
```

### java
```java
class Solution {
    public int findMinStep(String board, String hand) {
        
    }
}
```

### python
```python
class Solution(object):
    def findMinStep(self, board, hand):
        """
        :type board: str
        :type hand: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findMinStep(self, board: str, hand: str) -> int:
```

### c
```c
int findMinStep(char* board, char* hand) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindMinStep(string board, string hand) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
var findMinStep = function(board, hand) {
    
};
```

### typescript
```typescript
function findMinStep(board: string, hand: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $board
     * @param String $hand
     * @return Integer
     */
    function findMinStep($board, $hand) {
        
    }
}
```

### swift
```swift
class Solution {
    func findMinStep(_ board: String, _ hand: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findMinStep(board: String, hand: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findMinStep(String board, String hand) {
    
  }
}
```

### golang
```golang
func findMinStep(board string, hand string) int {
    
}
```

### ruby
```ruby
# @param {String} board
# @param {String} hand
# @return {Integer}
def find_min_step(board, hand)
    
end
```

### scala
```scala
object Solution {
    def findMinStep(board: String, hand: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_min_step(board: String, hand: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-min-step board hand)
  (-> string? string? exact-integer?)
  )
```

### erlang
```erlang
-spec find_min_step(Board :: unicode:unicode_binary(), Hand :: unicode:unicode_binary()) -> integer().
find_min_step(Board, Hand) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_min_step(board :: String.t, hand :: String.t) :: integer
  def find_min_step(board, hand) do
    
  end
end
```
