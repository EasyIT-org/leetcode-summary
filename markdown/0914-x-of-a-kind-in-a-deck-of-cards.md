# 914. X of a Kind in a Deck of Cards

- Difficulty: Easy
- Topics: Array, Hash Table, Math, Counting, Number Theory
- Slug: x-of-a-kind-in-a-deck-of-cards
- Problem ID: 950

## Description
You are given an integer array deck where deck[i] represents the number written on the ith card.
Partition the cards into one or more groups such that:
Return true if such partition is possible, or false otherwise.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: deck = [1,2,3,4,4,3,2,1]
Output: true
Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
```

### Example 2
```text
Input: deck = [1,1,1,2,2,2,3,3]
Output: false
Explanation: No possible partition.
```


## Constraints
- 1 <= deck.length <= 104
- 0 <= deck[i] < 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool hasGroupsSizeX(vector<int>& deck) {
        
    }
};
```

### java
```java
class Solution {
    public boolean hasGroupsSizeX(int[] deck) {
        
    }
}
```

### python
```python
class Solution(object):
    def hasGroupsSizeX(self, deck):
        """
        :type deck: List[int]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def hasGroupsSizeX(self, deck: List[int]) -> bool:
```

### c
```c
bool hasGroupsSizeX(int* deck, int deckSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool HasGroupsSizeX(int[] deck) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    
};
```

### typescript
```typescript
function hasGroupsSizeX(deck: number[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $deck
     * @return Boolean
     */
    function hasGroupsSizeX($deck) {
        
    }
}
```

### swift
```swift
class Solution {
    func hasGroupsSizeX(_ deck: [Int]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun hasGroupsSizeX(deck: IntArray): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool hasGroupsSizeX(List<int> deck) {
    
  }
}
```

### golang
```golang
func hasGroupsSizeX(deck []int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} deck
# @return {Boolean}
def has_groups_size_x(deck)
    
end
```

### scala
```scala
object Solution {
    def hasGroupsSizeX(deck: Array[Int]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn has_groups_size_x(deck: Vec<i32>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (has-groups-size-x deck)
  (-> (listof exact-integer?) boolean?)
  )
```

### erlang
```erlang
-spec has_groups_size_x(Deck :: [integer()]) -> boolean().
has_groups_size_x(Deck) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec has_groups_size_x(deck :: [integer]) :: boolean
  def has_groups_size_x(deck) do
    
  end
end
```
