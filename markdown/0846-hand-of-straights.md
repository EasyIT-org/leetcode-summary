# 846. Hand of Straights

- Difficulty: Medium
- Topics: Array, Hash Table, Greedy, Sorting
- Slug: hand-of-straights
- Problem ID: 876

## Description
Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.
Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.
Example 1:
Example 2:
Constraints:
Note: This question is the same as 1296: https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/

## Examples
### Example 1
```text
Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
Output: true
Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]
```

### Example 2
```text
Input: hand = [1,2,3,4,5], groupSize = 4
Output: false
Explanation: Alice's hand can not be rearranged into groups of 4.
```


## Constraints
- 1 <= hand.length <= 104
- 0 <= hand[i] <= 109
- 1 <= groupSize <= hand.length

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isNStraightHand(vector<int>& hand, int groupSize) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isNStraightHand(int[] hand, int groupSize) {
        
    }
}
```

### python
```python
class Solution(object):
    def isNStraightHand(self, hand, groupSize):
        """
        :type hand: List[int]
        :type groupSize: int
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
```

### c
```c
bool isNStraightHand(int* hand, int handSize, int groupSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsNStraightHand(int[] hand, int groupSize) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    
};
```

### typescript
```typescript
function isNStraightHand(hand: number[], groupSize: number): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $hand
     * @param Integer $groupSize
     * @return Boolean
     */
    function isNStraightHand($hand, $groupSize) {
        
    }
}
```

### swift
```swift
class Solution {
    func isNStraightHand(_ hand: [Int], _ groupSize: Int) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isNStraightHand(hand: IntArray, groupSize: Int): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isNStraightHand(List<int> hand, int groupSize) {
    
  }
}
```

### golang
```golang
func isNStraightHand(hand []int, groupSize int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} hand
# @param {Integer} group_size
# @return {Boolean}
def is_n_straight_hand(hand, group_size)
    
end
```

### scala
```scala
object Solution {
    def isNStraightHand(hand: Array[Int], groupSize: Int): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_n_straight_hand(hand: Vec<i32>, group_size: i32) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-n-straight-hand hand groupSize)
  (-> (listof exact-integer?) exact-integer? boolean?)
  )
```

### erlang
```erlang
-spec is_n_straight_hand(Hand :: [integer()], GroupSize :: integer()) -> boolean().
is_n_straight_hand(Hand, GroupSize) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_n_straight_hand(hand :: [integer], group_size :: integer) :: boolean
  def is_n_straight_hand(hand, group_size) do
    
  end
end
```
