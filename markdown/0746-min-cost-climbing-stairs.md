# 746. Min Cost Climbing Stairs

- Difficulty: Easy
- Topics: Array, Dynamic Programming
- Slug: min-cost-climbing-stairs
- Problem ID: 747

## Description
You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.
You can either start from the step with index 0, or the step with index 1.
Return the minimum cost to reach the top of the floor.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: cost = [10,15,20]
Output: 15
Explanation: You will start at index 1.
- Pay 15 and climb two steps to reach the top.
The total cost is 15.
```

### Example 2
```text
Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
Explanation: You will start at index 0.
- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
The total cost is 6.
```


## Constraints
- 2 <= cost.length <= 1000
- 0 <= cost[i] <= 999

## Hints
- Build an array dp where dp[i] is the minimum cost to climb to the top starting from the ith staircase.
- Assuming we have n staircase labeled from 0 to n - 1 and assuming the top is n, then dp[n] = 0, marking that if you are at the top, the cost is 0.
- Now, looping from n - 1 to 0, the dp[i] = cost[i] + min(dp[i + 1], dp[i + 2]). The answer will be the minimum of dp[0] and dp[1]

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int minCostClimbingStairs(vector<int>& cost) {
        
    }
};
```

### java
```java
class Solution {
    public int minCostClimbingStairs(int[] cost) {
        
    }
}
```

### python
```python
class Solution(object):
    def minCostClimbingStairs(self, cost):
        """
        :type cost: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
```

### c
```c
int minCostClimbingStairs(int* cost, int costSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinCostClimbingStairs(int[] cost) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    
};
```

### typescript
```typescript
function minCostClimbingStairs(cost: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $cost
     * @return Integer
     */
    function minCostClimbingStairs($cost) {
        
    }
}
```

### swift
```swift
class Solution {
    func minCostClimbingStairs(_ cost: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minCostClimbingStairs(cost: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minCostClimbingStairs(List<int> cost) {
    
  }
}
```

### golang
```golang
func minCostClimbingStairs(cost []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} cost
# @return {Integer}
def min_cost_climbing_stairs(cost)
    
end
```

### scala
```scala
object Solution {
    def minCostClimbingStairs(cost: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn min_cost_climbing_stairs(cost: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (min-cost-climbing-stairs cost)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec min_cost_climbing_stairs(Cost :: [integer()]) -> integer().
min_cost_climbing_stairs(Cost) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec min_cost_climbing_stairs(cost :: [integer]) :: integer
  def min_cost_climbing_stairs(cost) do
    
  end
end
```
