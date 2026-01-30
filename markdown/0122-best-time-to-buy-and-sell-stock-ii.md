# 122. Best Time to Buy and Sell Stock II

- Difficulty: Medium
- Topics: Array, Dynamic Programming, Greedy
- Slug: best-time-to-buy-and-sell-stock-ii
- Problem ID: 122

## Description
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
Find and return the maximum profit you can achieve.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
```

### Example 2
```text
Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.
```

### Example 3
```text
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
```


## Constraints
- 1 <= prices.length <= 3 * 104
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
