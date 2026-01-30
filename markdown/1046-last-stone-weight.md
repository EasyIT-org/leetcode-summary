# 1046. Last Stone Weight

- Difficulty: Easy
- Topics: Array, Heap (Priority Queue)
- Slug: last-stone-weight
- Problem ID: 1127

## Description
You are given an array of integers stones where stones[i] is the weight of the ith stone.
We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:
At the end of the game, there is at most one stone left.
Return the weight of the last remaining stone. If there are no stones left, return 0.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: stones = [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.
```

### Example 2
```text
Input: stones = [1]
Output: 1
```


## Constraints
- 1 <= stones.length <= 30
- 1 <= stones[i] <= 1000

## Hints
- Simulate the process.  We can do it with a heap, or by sorting some list of stones every time we take a turn.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int lastStoneWeight(vector<int>& stones) {
        
    }
};
```

### java
```java
class Solution {
    public int lastStoneWeight(int[] stones) {
        
    }
}
```

### python
```python
class Solution(object):
    def lastStoneWeight(self, stones):
        """
        :type stones: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
```

### c
```c
int lastStoneWeight(int* stones, int stonesSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int LastStoneWeight(int[] stones) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    
};
```

### typescript
```typescript
function lastStoneWeight(stones: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $stones
     * @return Integer
     */
    function lastStoneWeight($stones) {
        
    }
}
```

### swift
```swift
class Solution {
    func lastStoneWeight(_ stones: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun lastStoneWeight(stones: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int lastStoneWeight(List<int> stones) {
    
  }
}
```

### golang
```golang
func lastStoneWeight(stones []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} stones
# @return {Integer}
def last_stone_weight(stones)
    
end
```

### scala
```scala
object Solution {
    def lastStoneWeight(stones: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn last_stone_weight(stones: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (last-stone-weight stones)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec last_stone_weight(Stones :: [integer()]) -> integer().
last_stone_weight(Stones) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec last_stone_weight(stones :: [integer]) :: integer
  def last_stone_weight(stones) do
    
  end
end
```
