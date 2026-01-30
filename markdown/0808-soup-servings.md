# 808. Soup Servings

- Difficulty: Medium
- Topics: Math, Dynamic Programming, Probability and Statistics
- Slug: soup-servings
- Problem ID: 826

## Description
You have two soups, A and B, each starting with n mL. On every turn, one of the following four serving operations is chosen at random, each with probability 0.25 independent of all previous turns:
Note:
The process stops immediately after any turn in which one of the soups is used up.
Return the probability that A is used up before B, plus half the probability that both soups are used up in the same turn. Answers within 10-5 of the actual answer will be accepted.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 50
Output: 0.62500
Explanation: 
If we perform either of the first two serving operations, soup A will become empty first.
If we perform the third operation, A and B will become empty at the same time.
If we perform the fourth operation, B will become empty first.
So the total probability of A becoming empty first plus half the probability that A and B become empty at the same time, is 0.25 * (1 + 1 + 0.5 + 0) = 0.625.
```

### Example 2
```text
Input: n = 100
Output: 0.71875
Explanation: 
If we perform the first serving operation, soup A will become empty first.
If we perform the second serving operations, A will become empty on performing operation [1, 2, 3], and both A and B become empty on performing operation 4.
If we perform the third operation, A will become empty on performing operation [1, 2], and both A and B become empty on performing operation 3.
If we perform the fourth operation, A will become empty on performing operation 1, and both A and B become empty on performing operation 2.
So the total probability of A becoming empty first plus half the probability that A and B become empty at the same time, is 0.71875.
```


## Constraints
- 0 <= n <= 109

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    double soupServings(int n) {
        
    }
};
```

### java
```java
class Solution {
    public double soupServings(int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def soupServings(self, n):
        """
        :type n: int
        :rtype: float
        """
```

### python3
```python3
class Solution:
    def soupServings(self, n: int) -> float:
```

### c
```c
double soupServings(int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public double SoupServings(int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
    
};
```

### typescript
```typescript
function soupServings(n: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @return Float
     */
    function soupServings($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func soupServings(_ n: Int) -> Double {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun soupServings(n: Int): Double {
        
    }
}
```

### dart
```dart
class Solution {
  double soupServings(int n) {
    
  }
}
```

### golang
```golang
func soupServings(n int) float64 {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @return {Float}
def soup_servings(n)
    
end
```

### scala
```scala
object Solution {
    def soupServings(n: Int): Double = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn soup_servings(n: i32) -> f64 {
        
    }
}
```

### racket
```racket
(define/contract (soup-servings n)
  (-> exact-integer? flonum?)
  )
```

### erlang
```erlang
-spec soup_servings(N :: integer()) -> float().
soup_servings(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec soup_servings(n :: integer) :: float
  def soup_servings(n) do
    
  end
end
```
