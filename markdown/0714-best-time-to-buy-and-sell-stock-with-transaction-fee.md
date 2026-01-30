# 714. Best Time to Buy and Sell Stock with Transaction Fee

- Difficulty: Medium
- Topics: Array, Dynamic Programming, Greedy
- Slug: best-time-to-buy-and-sell-stock-with-transaction-fee
- Problem ID: 714

## Description
You are given an array prices where prices[i] is the price of a given stock on the ith day, and an integer fee representing a transaction fee.
Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.
Note:
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: prices = [1,3,2,8,4,9], fee = 2
Output: 8
Explanation: The maximum profit can be achieved by:
- Buying at prices[0] = 1
- Selling at prices[3] = 8
- Buying at prices[4] = 4
- Selling at prices[5] = 9
The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
```

### Example 2
```text
Input: prices = [1,3,7,5,10,3], fee = 3
Output: 6
```


## Constraints
- 1 <= prices.length <= 5 * 104
- 1 <= prices[i] < 5 * 104
- 0 <= fee < 5 * 104

## Hints
- Consider the first K stock prices.  At the end, the only legal states are that you don't own a share of stock, or that you do.  Calculate the most profit you could have under each of these two cases.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxProfit(vector<int>& prices, int fee) {
        
    }
};
```

### java
```java
class Solution {
    public int maxProfit(int[] prices, int fee) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxProfit(self, prices, fee):
        """
        :type prices: List[int]
        :type fee: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxProfit(self, prices: List[int], fee: int) -> int:
```

### c
```c
int maxProfit(int* prices, int pricesSize, int fee) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxProfit(int[] prices, int fee) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    
};
```

### typescript
```typescript
function maxProfit(prices: number[], fee: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $prices
     * @param Integer $fee
     * @return Integer
     */
    function maxProfit($prices, $fee) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxProfit(_ prices: [Int], _ fee: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxProfit(prices: IntArray, fee: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxProfit(List<int> prices, int fee) {
    
  }
}
```

### golang
```golang
func maxProfit(prices []int, fee int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} prices
# @param {Integer} fee
# @return {Integer}
def max_profit(prices, fee)
    
end
```

### scala
```scala
object Solution {
    def maxProfit(prices: Array[Int], fee: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_profit(prices: Vec<i32>, fee: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-profit prices fee)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec max_profit(Prices :: [integer()], Fee :: integer()) -> integer().
max_profit(Prices, Fee) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_profit(prices :: [integer], fee :: integer) :: integer
  def max_profit(prices, fee) do
    
  end
end
```
