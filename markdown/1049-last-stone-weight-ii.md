# 1049. Last Stone Weight II

- Difficulty: Medium
- Topics: Array, Dynamic Programming
- Slug: last-stone-weight-ii
- Problem ID: 1130

## Description
You are given an array of integers stones where stones[i] is the weight of the ith stone.
We are playing a game with the stones. On each turn, we choose any two stones and smash them together. Suppose the stones have weights x and y with x <= y. The result of this smash is:
At the end of the game, there is at most one stone left.
Return the smallest possible weight of the left stone. If there are no stones left, return 0.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: stones = [2,7,4,1,8,1]
Output: 1
Explanation:
We can combine 2 and 4 to get 2, so the array converts to [2,7,1,8,1] then,
we can combine 7 and 8 to get 1, so the array converts to [2,1,1,1] then,
we can combine 2 and 1 to get 1, so the array converts to [1,1,1] then,
we can combine 1 and 1 to get 0, so the array converts to [1], then that's the optimal value.
```

### Example 2
```text
Input: stones = [31,26,33,21,40]
Output: 5
```


## Constraints
- 1 <= stones.length <= 30
- 1 <= stones[i] <= 100

## Hints
- Think of the final answer as a sum of weights with + or - sign symbols infront of each weight.  Actually, all sums with 1 of each sign symbol are possible.
- Use dynamic programming: for every possible sum with N stones, those sums +x or -x is possible with N+1 stones, where x is the value of the newest stone.  (This overcounts sums that are all positive or all negative, but those don't matter.)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int lastStoneWeightII(vector<int>& stones) {
        
    }
};
```

### java
```java
class Solution {
    public int lastStoneWeightII(int[] stones) {
        
    }
}
```

### python
```python
class Solution(object):
    def lastStoneWeightII(self, stones):
        """
        :type stones: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def lastStoneWeightII(self, stones: List[int]) -> int:
```

### c
```c
int lastStoneWeightII(int* stones, int stonesSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int LastStoneWeightII(int[] stones) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    
};
```

### typescript
```typescript
function lastStoneWeightII(stones: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $stones
     * @return Integer
     */
    function lastStoneWeightII($stones) {
        
    }
}
```

### swift
```swift
class Solution {
    func lastStoneWeightII(_ stones: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun lastStoneWeightII(stones: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int lastStoneWeightII(List<int> stones) {
    
  }
}
```

### golang
```golang
func lastStoneWeightII(stones []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} stones
# @return {Integer}
def last_stone_weight_ii(stones)
    
end
```

### scala
```scala
object Solution {
    def lastStoneWeightII(stones: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn last_stone_weight_ii(stones: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (last-stone-weight-ii stones)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec last_stone_weight_ii(Stones :: [integer()]) -> integer().
last_stone_weight_ii(Stones) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec last_stone_weight_ii(stones :: [integer]) :: integer
  def last_stone_weight_ii(stones) do
    
  end
end
```
