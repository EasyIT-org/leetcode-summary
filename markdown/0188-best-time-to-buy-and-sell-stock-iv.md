# 188. Best Time to Buy and Sell Stock IV

- Difficulty: Hard
- Topics: Array, Dynamic Programming
- Slug: best-time-to-buy-and-sell-stock-iv
- Problem ID: 188

## Description
You are given an integer array prices where prices[i] is the price of a given stock on the ith day, and an integer k.
Find the maximum profit you can achieve. You may complete at most k transactions: i.e. you may buy at most k times and sell at most k times.
Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: k = 2, prices = [2,4,1]
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
```

### Example 2
```text
Input: k = 2, prices = [3,2,6,5,0,3]
Output: 7
Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
```


## Constraints
- 1 <= k <= 100
- 1 <= prices.length <= 1000
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
    int maxProfit(int k, vector<int>& prices) {
        
    }
};
```

### java
```java
class Solution {
    public int maxProfit(int k, int[] prices) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxProfit(self, k, prices):
        """
        :type k: int
        :type prices: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
```

### c
```c
int maxProfit(int k, int* prices, int pricesSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxProfit(int k, int[] prices) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    
};
```

### typescript
```typescript
function maxProfit(k: number, prices: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $k
     * @param Integer[] $prices
     * @return Integer
     */
    function maxProfit($k, $prices) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxProfit(_ k: Int, _ prices: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxProfit(k: Int, prices: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxProfit(int k, List<int> prices) {
    
  }
}
```

### golang
```golang
func maxProfit(k int, prices []int) int {
    
}
```

### ruby
```ruby
# @param {Integer} k
# @param {Integer[]} prices
# @return {Integer}
def max_profit(k, prices)
    
end
```

### scala
```scala
object Solution {
    def maxProfit(k: Int, prices: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_profit(k: i32, prices: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-profit k prices)
  (-> exact-integer? (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec max_profit(K :: integer(), Prices :: [integer()]) -> integer().
max_profit(K, Prices) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_profit(k :: integer, prices :: [integer]) :: integer
  def max_profit(k, prices) do
    
  end
end
```
