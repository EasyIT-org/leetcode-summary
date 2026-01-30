# 121. Best Time to Buy and Sell Stock

- Difficulty: Easy
- Topics: Array, Dynamic Programming
- Slug: best-time-to-buy-and-sell-stock
- Problem ID: 121

## Description
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

### Example 2
```text
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```


## Constraints
- 1 <= prices.length <= 105
- 0 <= prices[i] <= 104

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
