# 1029. Two City Scheduling

- Difficulty: Medium
- Topics: Array, Greedy, Sorting
- Slug: two-city-scheduling
- Problem ID: 1095

## Description
A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.
Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: costs = [[10,20],[30,200],[400,50],[30,20]]
Output: 110
Explanation: 
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
```

### Example 2
```text
Input: costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
Output: 1859
```

### Example 3
```text
Input: costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]
Output: 3086
```


## Constraints
- 2 * n == costs.length
- 2 <= costs.length <= 100
- costs.length is even.
- 1 <= aCosti, bCosti <= 1000

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int twoCitySchedCost(vector<vector<int>>& costs) {
        
    }
};
```

### java
```java
class Solution {
    public int twoCitySchedCost(int[][] costs) {
        
    }
}
```

### python
```python
class Solution(object):
    def twoCitySchedCost(self, costs):
        """
        :type costs: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def twoCitySchedCost(self, costs: List[List[int]]) -> int:
```

### c
```c
int twoCitySchedCost(int** costs, int costsSize, int* costsColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int TwoCitySchedCost(int[][] costs) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    
};
```

### typescript
```typescript
function twoCitySchedCost(costs: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $costs
     * @return Integer
     */
    function twoCitySchedCost($costs) {
        
    }
}
```

### swift
```swift
class Solution {
    func twoCitySchedCost(_ costs: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun twoCitySchedCost(costs: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int twoCitySchedCost(List<List<int>> costs) {
    
  }
}
```

### golang
```golang
func twoCitySchedCost(costs [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} costs
# @return {Integer}
def two_city_sched_cost(costs)
    
end
```

### scala
```scala
object Solution {
    def twoCitySchedCost(costs: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn two_city_sched_cost(costs: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (two-city-sched-cost costs)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec two_city_sched_cost(Costs :: [[integer()]]) -> integer().
two_city_sched_cost(Costs) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec two_city_sched_cost(costs :: [[integer]]) :: integer
  def two_city_sched_cost(costs) do
    
  end
end
```
