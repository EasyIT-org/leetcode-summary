# 822. Card Flipping Game

- Difficulty: Medium
- Topics: Array, Hash Table
- Slug: card-flipping-game
- Problem ID: 842

## Description
You are given two 0-indexed integer arrays fronts and backs of length n, where the ith card has the positive integer fronts[i] printed on the front and backs[i] printed on the back. Initially, each card is placed on a table such that the front number is facing up and the other is facing down. You may flip over any number of cards (possibly zero).
After flipping the cards, an integer is considered good if it is facing down on some card and not facing up on any card.
Return the minimum possible good integer after flipping the cards. If there are no good integers, return 0.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: fronts = [1,2,4,4,7], backs = [1,3,4,1,3]
Output: 2
Explanation:
If we flip the second card, the face up numbers are [1,3,4,4,7] and the face down are [1,2,4,1,3].
2 is the minimum good integer as it appears facing down but not facing up.
It can be shown that 2 is the minimum possible good integer obtainable after flipping some cards.
```

### Example 2
```text
Input: fronts = [1], backs = [1]
Output: 0
Explanation:
There are no good integers no matter how we flip the cards, so we return 0.
```


## Constraints
- n == fronts.length == backs.length
- 1 <= n <= 1000
- 1 <= fronts[i], backs[i] <= 2000

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int flipgame(vector<int>& fronts, vector<int>& backs) {
        
    }
};
```

### java
```java
class Solution {
    public int flipgame(int[] fronts, int[] backs) {
        
    }
}
```

### python
```python
class Solution(object):
    def flipgame(self, fronts, backs):
        """
        :type fronts: List[int]
        :type backs: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def flipgame(self, fronts: List[int], backs: List[int]) -> int:
```

### c
```c
int flipgame(int* fronts, int frontsSize, int* backs, int backsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int Flipgame(int[] fronts, int[] backs) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
var flipgame = function(fronts, backs) {
    
};
```

### typescript
```typescript
function flipgame(fronts: number[], backs: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $fronts
     * @param Integer[] $backs
     * @return Integer
     */
    function flipgame($fronts, $backs) {
        
    }
}
```

### swift
```swift
class Solution {
    func flipgame(_ fronts: [Int], _ backs: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun flipgame(fronts: IntArray, backs: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int flipgame(List<int> fronts, List<int> backs) {
    
  }
}
```

### golang
```golang
func flipgame(fronts []int, backs []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} fronts
# @param {Integer[]} backs
# @return {Integer}
def flipgame(fronts, backs)
    
end
```

### scala
```scala
object Solution {
    def flipgame(fronts: Array[Int], backs: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn flipgame(fronts: Vec<i32>, backs: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (flipgame fronts backs)
  (-> (listof exact-integer?) (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec flipgame(Fronts :: [integer()], Backs :: [integer()]) -> integer().
flipgame(Fronts, Backs) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec flipgame(fronts :: [integer], backs :: [integer]) :: integer
  def flipgame(fronts, backs) do
    
  end
end
```
