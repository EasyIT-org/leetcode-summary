# 837. New 21 Game

- Difficulty: Medium
- Topics: Math, Dynamic Programming, Sliding Window, Probability and Statistics
- Slug: new-21-game
- Problem ID: 867

## Description
Alice plays the following game, loosely based on the card game "21".
Alice starts with 0 points and draws numbers while she has less than k points. During each draw, she gains an integer number of points randomly from the range [1, maxPts], where maxPts is an integer. Each draw is independent and the outcomes have equal probabilities.
Alice stops drawing numbers when she gets k or more points.
Return the probability that Alice has n or fewer points.
Answers within 10-5 of the actual answer are considered accepted.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: n = 10, k = 1, maxPts = 10
Output: 1.00000
Explanation: Alice gets a single card, then stops.
```

### Example 2
```text
Input: n = 6, k = 1, maxPts = 10
Output: 0.60000
Explanation: Alice gets a single card, then stops.
In 6 out of 10 possibilities, she is at or below 6 points.
```

### Example 3
```text
Input: n = 21, k = 17, maxPts = 10
Output: 0.73278
```


## Constraints
- 0 <= k <= n <= 104
- 1 <= maxPts <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    double new21Game(int n, int k, int maxPts) {
        
    }
};
```

### java
```java
class Solution {
    public double new21Game(int n, int k, int maxPts) {
        
    }
}
```

### python
```python
class Solution(object):
    def new21Game(self, n, k, maxPts):
        """
        :type n: int
        :type k: int
        :type maxPts: int
        :rtype: float
        """
```

### python3
```python3
class Solution:
    def new21Game(self, n: int, k: int, maxPts: int) -> float:
```

### c
```c
double new21Game(int n, int k, int maxPts) {
    
}
```

### csharp
```csharp
public class Solution {
    public double New21Game(int n, int k, int maxPts) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function(n, k, maxPts) {
    
};
```

### typescript
```typescript
function new21Game(n: number, k: number, maxPts: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @param Integer $k
     * @param Integer $maxPts
     * @return Float
     */
    function new21Game($n, $k, $maxPts) {
        
    }
}
```

### swift
```swift
class Solution {
    func new21Game(_ n: Int, _ k: Int, _ maxPts: Int) -> Double {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun new21Game(n: Int, k: Int, maxPts: Int): Double {
        
    }
}
```

### dart
```dart
class Solution {
  double new21Game(int n, int k, int maxPts) {
    
  }
}
```

### golang
```golang
func new21Game(n int, k int, maxPts int) float64 {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer} k
# @param {Integer} max_pts
# @return {Float}
def new21_game(n, k, max_pts)
    
end
```

### scala
```scala
object Solution {
    def new21Game(n: Int, k: Int, maxPts: Int): Double = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn new21_game(n: i32, k: i32, max_pts: i32) -> f64 {
        
    }
}
```

### racket
```racket
(define/contract (new21-game n k maxPts)
  (-> exact-integer? exact-integer? exact-integer? flonum?)
  )
```

### erlang
```erlang
-spec new21_game(N :: integer(), K :: integer(), MaxPts :: integer()) -> float().
new21_game(N, K, MaxPts) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec new21_game(n :: integer, k :: integer, max_pts :: integer) :: float
  def new21_game(n, k, max_pts) do
    
  end
end
```
