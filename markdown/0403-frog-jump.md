# 403. Frog Jump

- Difficulty: Hard
- Topics: Array, Dynamic Programming
- Slug: frog-jump
- Problem ID: 403

## Description
A frog is crossing a river. The river is divided into some number of units, and at each unit, there may or may not exist a stone. The frog can jump on a stone, but it must not jump into the water.
Given a list of stones positions (in units) in sorted ascending order, determine if the frog can cross the river by landing on the last stone. Initially, the frog is on the first stone and assumes the first jump must be 1 unit.
If the frog's last jump was k units, its next jump must be either k - 1, k, or k + 1 units. The frog can only jump in the forward direction.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: stones = [0,1,3,5,6,8,12,17]
Output: true
Explanation: The frog can jump to the last stone by jumping 1 unit to the 2nd stone, then 2 units to the 3rd stone, then 2 units to the 4th stone, then 3 units to the 6th stone, 4 units to the 7th stone, and 5 units to the 8th stone.
```

### Example 2
```text
Input: stones = [0,1,2,3,4,8,9,11]
Output: false
Explanation: There is no way to jump to the last stone as the gap between the 5th and 6th stone is too large.
```


## Constraints
- 2 <= stones.length <= 2000
- 0 <= stones[i] <= 231 - 1
- stones[0] == 0
- stones is sorted in a strictly increasing order.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool canCross(vector<int>& stones) {
        
    }
};
```

### java
```java
class Solution {
    public boolean canCross(int[] stones) {
        
    }
}
```

### python
```python
class Solution(object):
    def canCross(self, stones):
        """
        :type stones: List[int]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def canCross(self, stones: List[int]) -> bool:
```

### c
```c
bool canCross(int* stones, int stonesSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool CanCross(int[] stones) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    
};
```

### typescript
```typescript
function canCross(stones: number[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $stones
     * @return Boolean
     */
    function canCross($stones) {
        
    }
}
```

### swift
```swift
class Solution {
    func canCross(_ stones: [Int]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun canCross(stones: IntArray): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool canCross(List<int> stones) {
    
  }
}
```

### golang
```golang
func canCross(stones []int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} stones
# @return {Boolean}
def can_cross(stones)
    
end
```

### scala
```scala
object Solution {
    def canCross(stones: Array[Int]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn can_cross(stones: Vec<i32>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (can-cross stones)
  (-> (listof exact-integer?) boolean?)
  )
```

### erlang
```erlang
-spec can_cross(Stones :: [integer()]) -> boolean().
can_cross(Stones) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec can_cross(stones :: [integer]) :: boolean
  def can_cross(stones) do
    
  end
end
```
