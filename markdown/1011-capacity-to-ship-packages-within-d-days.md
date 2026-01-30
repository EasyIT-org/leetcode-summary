# 1011. Capacity To Ship Packages Within D Days

- Difficulty: Medium
- Topics: Array, Binary Search
- Slug: capacity-to-ship-packages-within-d-days
- Problem ID: 1056

## Description
A conveyor belt has packages that must be shipped from one port to another within days days.
The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.
Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 5
Output: 15
Explanation: A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
1st day: 1, 2, 3, 4, 5
2nd day: 6, 7
3rd day: 8
4th day: 9
5th day: 10

Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.
```

### Example 2
```text
Input: weights = [3,2,2,4,1,4], days = 3
Output: 6
Explanation: A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
1st day: 3, 2
2nd day: 2, 4
3rd day: 1, 4
```

### Example 3
```text
Input: weights = [1,2,3,1,1], days = 4
Output: 3
Explanation:
1st day: 1
2nd day: 2
3rd day: 3
4th day: 1, 1
```


## Constraints
- 1 <= days <= weights.length <= 5 * 104
- 1 <= weights[i] <= 500

## Hints
- Binary search on the answer.  We need a function possible(capacity) which returns true if and only if we can do the task in D days.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int shipWithinDays(vector<int>& weights, int days) {
        
    }
};
```

### java
```java
class Solution {
    public int shipWithinDays(int[] weights, int days) {
        
    }
}
```

### python
```python
class Solution(object):
    def shipWithinDays(self, weights, days):
        """
        :type weights: List[int]
        :type days: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
```

### c
```c
int shipWithinDays(int* weights, int weightsSize, int days) {
    
}
```

### csharp
```csharp
public class Solution {
    public int ShipWithinDays(int[] weights, int days) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    
};
```

### typescript
```typescript
function shipWithinDays(weights: number[], days: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $weights
     * @param Integer $days
     * @return Integer
     */
    function shipWithinDays($weights, $days) {
        
    }
}
```

### swift
```swift
class Solution {
    func shipWithinDays(_ weights: [Int], _ days: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun shipWithinDays(weights: IntArray, days: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int shipWithinDays(List<int> weights, int days) {
    
  }
}
```

### golang
```golang
func shipWithinDays(weights []int, days int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} weights
# @param {Integer} days
# @return {Integer}
def ship_within_days(weights, days)
    
end
```

### scala
```scala
object Solution {
    def shipWithinDays(weights: Array[Int], days: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn ship_within_days(weights: Vec<i32>, days: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (ship-within-days weights days)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec ship_within_days(Weights :: [integer()], Days :: integer()) -> integer().
ship_within_days(Weights, Days) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec ship_within_days(weights :: [integer], days :: integer) :: integer
  def ship_within_days(weights, days) do
    
  end
end
```
