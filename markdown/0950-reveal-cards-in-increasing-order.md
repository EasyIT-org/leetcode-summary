# 950. Reveal Cards In Increasing Order

- Difficulty: Medium
- Topics: Array, Queue, Sorting, Simulation
- Slug: reveal-cards-in-increasing-order
- Problem ID: 987

## Description
You are given an integer array deck. There is a deck of cards where every card has a unique integer. The integer on the ith card is deck[i].
You can order the deck in any order you want. Initially, all the cards start face down (unrevealed) in one deck.
You will do the following steps repeatedly until all cards are revealed:
Return an ordering of the deck that would reveal the cards in increasing order.
Note that the first entry in the answer is considered to be the top of the deck.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: deck = [17,13,11,2,3,5,7]
Output: [2,13,3,11,5,17,7]
Explanation: 
We get the deck in the order [17,13,11,2,3,5,7] (this order does not matter), and reorder it.
After reordering, the deck starts as [2,13,3,11,5,17,7], where 2 is the top of the deck.
We reveal 2, and move 13 to the bottom.  The deck is now [3,11,5,17,7,13].
We reveal 3, and move 11 to the bottom.  The deck is now [5,17,7,13,11].
We reveal 5, and move 17 to the bottom.  The deck is now [7,13,11,17].
We reveal 7, and move 13 to the bottom.  The deck is now [11,17,13].
We reveal 11, and move 17 to the bottom.  The deck is now [13,17].
We reveal 13, and move 17 to the bottom.  The deck is now [17].
We reveal 17.
Since all the cards revealed are in increasing order, the answer is correct.
```

### Example 2
```text
Input: deck = [1,1000]
Output: [1,1000]
```


## Constraints
- 1 <= deck.length <= 1000
- 1 <= deck[i] <= 106
- All the values of deck are unique.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> deckRevealedIncreasing(vector<int>& deck) {
        
    }
};
```

### java
```java
class Solution {
    public int[] deckRevealedIncreasing(int[] deck) {
        
    }
}
```

### python
```python
class Solution(object):
    def deckRevealedIncreasing(self, deck):
        """
        :type deck: List[int]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def deckRevealedIncreasing(self, deck: List[int]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* deckRevealedIncreasing(int* deck, int deckSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] DeckRevealedIncreasing(int[] deck) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    
};
```

### typescript
```typescript
function deckRevealedIncreasing(deck: number[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $deck
     * @return Integer[]
     */
    function deckRevealedIncreasing($deck) {
        
    }
}
```

### swift
```swift
class Solution {
    func deckRevealedIncreasing(_ deck: [Int]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun deckRevealedIncreasing(deck: IntArray): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> deckRevealedIncreasing(List<int> deck) {
    
  }
}
```

### golang
```golang
func deckRevealedIncreasing(deck []int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} deck
# @return {Integer[]}
def deck_revealed_increasing(deck)
    
end
```

### scala
```scala
object Solution {
    def deckRevealedIncreasing(deck: Array[Int]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn deck_revealed_increasing(deck: Vec<i32>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (deck-revealed-increasing deck)
  (-> (listof exact-integer?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec deck_revealed_increasing(Deck :: [integer()]) -> [integer()].
deck_revealed_increasing(Deck) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec deck_revealed_increasing(deck :: [integer]) :: [integer]
  def deck_revealed_increasing(deck) do
    
  end
end
```
