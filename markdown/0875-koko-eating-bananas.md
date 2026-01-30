# 875. Koko Eating Bananas

- Difficulty: Medium
- Topics: Array, Binary Search
- Slug: koko-eating-bananas
- Problem ID: 907

## Description
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
Return the minimum integer k such that she can eat all the bananas within h hours.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: piles = [3,6,7,11], h = 8
Output: 4
```

### Example 2
```text
Input: piles = [30,11,23,4,20], h = 5
Output: 30
```

### Example 3
```text
Input: piles = [30,11,23,4,20], h = 6
Output: 23
```


## Constraints
- 1 <= piles.length <= 104
- piles.length <= h <= 109
- 1 <= piles[i] <= 109

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int minEatingSpeed(vector<int>& piles, int h) {
        
    }
};
```

### java
```java
class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        
    }
}
```

### python
```python
class Solution(object):
    def minEatingSpeed(self, piles, h):
        """
        :type piles: List[int]
        :type h: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
```

### c
```c
int minEatingSpeed(int* piles, int pilesSize, int h) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinEatingSpeed(int[] piles, int h) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    
};
```

### typescript
```typescript
function minEatingSpeed(piles: number[], h: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $piles
     * @param Integer $h
     * @return Integer
     */
    function minEatingSpeed($piles, $h) {
        
    }
}
```

### swift
```swift
class Solution {
    func minEatingSpeed(_ piles: [Int], _ h: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minEatingSpeed(piles: IntArray, h: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minEatingSpeed(List<int> piles, int h) {
    
  }
}
```

### golang
```golang
func minEatingSpeed(piles []int, h int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} piles
# @param {Integer} h
# @return {Integer}
def min_eating_speed(piles, h)
    
end
```

### scala
```scala
object Solution {
    def minEatingSpeed(piles: Array[Int], h: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn min_eating_speed(piles: Vec<i32>, h: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (min-eating-speed piles h)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec min_eating_speed(Piles :: [integer()], H :: integer()) -> integer().
min_eating_speed(Piles, H) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec min_eating_speed(piles :: [integer], h :: integer) :: integer
  def min_eating_speed(piles, h) do
    
  end
end
```
