# 123. Best Time to Buy and Sell Stock III

- Difficulty: Hard
- Topics: Array, Dynamic Programming
- Slug: best-time-to-buy-and-sell-stock-iii
- Problem ID: 123

## Description
You are given an array prices where prices[i] is the price of a given stock on the ith day.
Find the maximum profit you can achieve. You may complete at most two transactions.
Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: prices = [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
```

### Example 2
```text
Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
```

### Example 3
```text
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
```


## Constraints
- 1 <= prices.length <= 105
- 0 <= prices[i] <= 105

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        
    }
};
```

### java
```java
class Solution {
    public int maxProfit(int[] prices) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
```

### c
```c
int maxProfit(int* prices, int pricesSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxProfit(int[] prices) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
};
```

### typescript
```typescript
function maxProfit(prices: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $prices
     * @return Integer
     */
    function maxProfit($prices) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxProfit(_ prices: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxProfit(prices: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxProfit(List<int> prices) {
    
  }
}
```

### golang
```golang
func maxProfit(prices []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
    
end
```

### scala
```scala
object Solution {
    def maxProfit(prices: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_profit(prices: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-profit prices)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec max_profit(Prices :: [integer()]) -> integer().
max_profit(Prices) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_profit(prices :: [integer]) :: integer
  def max_profit(prices) do
    
  end
end
```
