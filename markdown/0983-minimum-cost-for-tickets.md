# 983. Minimum Cost For Tickets

- Difficulty: Medium
- Topics: Array, Dynamic Programming
- Slug: minimum-cost-for-tickets
- Problem ID: 1025

## Description
You have planned some train traveling one year in advance. The days of the year in which you will travel are given as an integer array days. Each day is an integer from 1 to 365.
Train tickets are sold in three different ways:
The passes allow that many days of consecutive travel.
Return the minimum number of dollars you need to travel every day in the given list of days.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: days = [1,4,6,7,8,20], costs = [2,7,15]
Output: 11
Explanation: For example, here is one way to buy passes that lets you travel your travel plan:
On day 1, you bought a 1-day pass for costs[0] = $2, which covered day 1.
On day 3, you bought a 7-day pass for costs[1] = $7, which covered days 3, 4, ..., 9.
On day 20, you bought a 1-day pass for costs[0] = $2, which covered day 20.
In total, you spent $11 and covered all the days of your travel.
```

### Example 2
```text
Input: days = [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15]
Output: 17
Explanation: For example, here is one way to buy passes that lets you travel your travel plan:
On day 1, you bought a 30-day pass for costs[2] = $15 which covered days 1, 2, ..., 30.
On day 31, you bought a 1-day pass for costs[0] = $2 which covered day 31.
In total, you spent $17 and covered all the days of your travel.
```


## Constraints
- 1 <= days.length <= 365
- 1 <= days[i] <= 365
- days is in strictly increasing order.
- costs.length == 3
- 1 <= costs[i] <= 1000

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int mincostTickets(vector<int>& days, vector<int>& costs) {
        
    }
};
```

### java
```java
class Solution {
    public int mincostTickets(int[] days, int[] costs) {
        
    }
}
```

### python
```python
class Solution(object):
    def mincostTickets(self, days, costs):
        """
        :type days: List[int]
        :type costs: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def mincostTickets(self, days: List[int], costs: List[int]) -> int:
```

### c
```c
int mincostTickets(int* days, int daysSize, int* costs, int costsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MincostTickets(int[] days, int[] costs) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    
};
```

### typescript
```typescript
function mincostTickets(days: number[], costs: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $days
     * @param Integer[] $costs
     * @return Integer
     */
    function mincostTickets($days, $costs) {
        
    }
}
```

### swift
```swift
class Solution {
    func mincostTickets(_ days: [Int], _ costs: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun mincostTickets(days: IntArray, costs: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int mincostTickets(List<int> days, List<int> costs) {
    
  }
}
```

### golang
```golang
func mincostTickets(days []int, costs []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} days
# @param {Integer[]} costs
# @return {Integer}
def mincost_tickets(days, costs)
    
end
```

### scala
```scala
object Solution {
    def mincostTickets(days: Array[Int], costs: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn mincost_tickets(days: Vec<i32>, costs: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (mincost-tickets days costs)
  (-> (listof exact-integer?) (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec mincost_tickets(Days :: [integer()], Costs :: [integer()]) -> integer().
mincost_tickets(Days, Costs) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec mincost_tickets(days :: [integer], costs :: [integer]) :: integer
  def mincost_tickets(days, costs) do
    
  end
end
```
