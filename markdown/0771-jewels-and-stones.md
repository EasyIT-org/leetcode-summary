# 771. Jewels and Stones

- Difficulty: Easy
- Topics: Hash Table, String
- Slug: jewels-and-stones
- Problem ID: 782

## Description
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
Letters are case sensitive, so "a" is considered a different type of stone from "A".
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
```

### Example 2
```text
Input: jewels = "z", stones = "ZZ"
Output: 0
```


## Constraints
- 1 <= jewels.length, stones.length <= 50
- jewels and stones consist of only English letters.
- All the characters of jewels are unique.

## Hints
- For each stone, check if it is a jewel.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numJewelsInStones(string jewels, string stones) {
        
    }
};
```

### java
```java
class Solution {
    public int numJewelsInStones(String jewels, String stones) {
        
    }
}
```

### python
```python
class Solution(object):
    def numJewelsInStones(self, jewels, stones):
        """
        :type jewels: str
        :type stones: str
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
```

### c
```c
int numJewelsInStones(char* jewels, char* stones) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumJewelsInStones(string jewels, string stones) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    
};
```

### typescript
```typescript
function numJewelsInStones(jewels: string, stones: string): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $jewels
     * @param String $stones
     * @return Integer
     */
    function numJewelsInStones($jewels, $stones) {
        
    }
}
```

### swift
```swift
class Solution {
    func numJewelsInStones(_ jewels: String, _ stones: String) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numJewelsInStones(jewels: String, stones: String): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numJewelsInStones(String jewels, String stones) {
    
  }
}
```

### golang
```golang
func numJewelsInStones(jewels string, stones string) int {
    
}
```

### ruby
```ruby
# @param {String} jewels
# @param {String} stones
# @return {Integer}
def num_jewels_in_stones(jewels, stones)
    
end
```

### scala
```scala
object Solution {
    def numJewelsInStones(jewels: String, stones: String): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_jewels_in_stones(jewels: String, stones: String) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-jewels-in-stones jewels stones)
  (-> string? string? exact-integer?)
  )
```

### erlang
```erlang
-spec num_jewels_in_stones(Jewels :: unicode:unicode_binary(), Stones :: unicode:unicode_binary()) -> integer().
num_jewels_in_stones(Jewels, Stones) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_jewels_in_stones(jewels :: String.t, stones :: String.t) :: integer
  def num_jewels_in_stones(jewels, stones) do
    
  end
end
```
