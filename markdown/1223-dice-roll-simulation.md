# 1223. Dice Roll Simulation

- Difficulty: Hard
- Topics: Array, Dynamic Programming
- Slug: dice-roll-simulation
- Problem ID: 1343

## Description
A die simulator generates a random number from 1 to 6 for each roll. You introduced a constraint to the generator such that it cannot roll the number i more than rollMax[i] (1-indexed) consecutive times.
Given an array of integers rollMax and an integer n, return the number of distinct sequences that can be obtained with exact n rolls. Since the answer may be too large, return it modulo 109 + 7.
Two sequences are considered different if at least one element differs from each other.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: n = 2, rollMax = [1,1,2,2,2,3]
Output: 34
Explanation: There will be 2 rolls of die, if there are no constraints on the die, there are 6 * 6 = 36 possible combinations. In this case, looking at rollMax array, the numbers 1 and 2 appear at most once consecutively, therefore sequences (1,1) and (2,2) cannot occur, so the final answer is 36-2 = 34.
```

### Example 2
```text
Input: n = 2, rollMax = [1,1,1,1,1,1]
Output: 30
```

### Example 3
```text
Input: n = 3, rollMax = [1,1,1,2,2,3]
Output: 181
```


## Constraints
- 1 <= n <= 5000
- rollMax.length == 6
- 1 <= rollMax[i] <= 15

## Hints
- Think on Dynamic Programming.
- DP(pos, last) which means we are at the position pos having as last the last character seen.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int dieSimulator(int n, vector<int>& rollMax) {
        
    }
};
```

### java
```java
class Solution {
    public int dieSimulator(int n, int[] rollMax) {
        
    }
}
```

### python
```python
class Solution(object):
    def dieSimulator(self, n, rollMax):
        """
        :type n: int
        :type rollMax: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def dieSimulator(self, n: int, rollMax: List[int]) -> int:
```

### c
```c
int dieSimulator(int n, int* rollMax, int rollMaxSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int DieSimulator(int n, int[] rollMax) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
var dieSimulator = function(n, rollMax) {
    
};
```

### typescript
```typescript
function dieSimulator(n: number, rollMax: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @param Integer[] $rollMax
     * @return Integer
     */
    function dieSimulator($n, $rollMax) {
        
    }
}
```

### swift
```swift
class Solution {
    func dieSimulator(_ n: Int, _ rollMax: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun dieSimulator(n: Int, rollMax: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int dieSimulator(int n, List<int> rollMax) {
    
  }
}
```

### golang
```golang
func dieSimulator(n int, rollMax []int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer[]} roll_max
# @return {Integer}
def die_simulator(n, roll_max)
    
end
```

### scala
```scala
object Solution {
    def dieSimulator(n: Int, rollMax: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn die_simulator(n: i32, roll_max: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (die-simulator n rollMax)
  (-> exact-integer? (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec die_simulator(N :: integer(), RollMax :: [integer()]) -> integer().
die_simulator(N, RollMax) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec die_simulator(n :: integer, roll_max :: [integer]) :: integer
  def die_simulator(n, roll_max) do
    
  end
end
```
