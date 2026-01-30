# 309. Best Time to Buy and Sell Stock with Cooldown

- Difficulty: Medium
- Topics: Array, Dynamic Programming
- Slug: best-time-to-buy-and-sell-stock-with-cooldown
- Problem ID: 309

## Description
You are given an array prices where prices[i] is the price of a given stock on the ith day.
Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:
Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: prices = [1,2,3,0,2]
Output: 3
Explanation: transactions = [buy, sell, cooldown, buy, sell]
```

### Example 2
```text
Input: prices = [1]
Output: 0
```


## Constraints
- 1 <= prices.length <= 5000
- 0 <= prices[i] <= 1000

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
