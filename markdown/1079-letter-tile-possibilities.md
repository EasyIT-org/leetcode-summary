# 1079. Letter Tile Possibilities

- Difficulty: Medium
- Topics: Hash Table, String, Backtracking, Counting
- Slug: letter-tile-possibilities
- Problem ID: 1160

## Description
You have n  tiles, where each tile has one letter tiles[i] printed on it.
Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: tiles = "AAB"
Output: 8
Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
```

### Example 2
```text
Input: tiles = "AAABBC"
Output: 188
```

### Example 3
```text
Input: tiles = "V"
Output: 1
```


## Constraints
- 1 <= tiles.length <= 7
- tiles consists of uppercase English letters.

## Hints
- Try to build the string with a backtracking DFS by considering what you can put in every position.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numTilePossibilities(string tiles) {
        
    }
};
```

### java
```java
class Solution {
    public int numTilePossibilities(String tiles) {
        
    }
}
```

### python
```python
class Solution(object):
    def numTilePossibilities(self, tiles):
        """
        :type tiles: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numTilePossibilities(self, tiles: str) -> int:
```

### c
```c
int numTilePossibilities(char* tiles) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumTilePossibilities(string tiles) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    
};
```

### typescript
```typescript
function numTilePossibilities(tiles: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $tiles
     * @return Integer
     */
    function numTilePossibilities($tiles) {
        
    }
}
```

### swift
```swift
class Solution {
    func numTilePossibilities(_ tiles: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numTilePossibilities(tiles: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numTilePossibilities(String tiles) {
    
  }
}
```

### golang
```golang
func numTilePossibilities(tiles string) int {
    
}
```

### ruby
```ruby
# @param {String} tiles
# @return {Integer}
def num_tile_possibilities(tiles)
    
end
```

### scala
```scala
object Solution {
    def numTilePossibilities(tiles: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_tile_possibilities(tiles: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-tile-possibilities tiles)
  (-> string? exact-integer?)
  )
```

### erlang
```erlang
-spec num_tile_possibilities(Tiles :: unicode:unicode_binary()) -> integer().
num_tile_possibilities(Tiles) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_tile_possibilities(tiles :: String.t) :: integer
  def num_tile_possibilities(tiles) do
    
  end
end
```
