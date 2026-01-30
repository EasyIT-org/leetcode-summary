# 322. Coin Change

- Difficulty: Medium
- Topics: Array, Dynamic Programming, Breadth-First Search
- Slug: coin-change
- Problem ID: 322

## Description
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
```

### Example 2
```text
Input: coins = [2], amount = 3
Output: -1
```

### Example 3
```text
Input: coins = [1], amount = 0
Output: 0
```


## Constraints
- 1 <= coins.length <= 12
- 1 <= coins[i] <= 231 - 1
- 0 <= amount <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        
    }
};
```

### java
```java
class Solution {
    public int coinChange(int[] coins, int amount) {
        
    }
}
```

### python
```python
class Solution(object):
    def coinChange(self, coins, amount):
        """
        :type coins: List[int]
        :type amount: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
```

### c
```c
int coinChange(int* coins, int coinsSize, int amount) {
    
}
```

### csharp
```csharp
public class Solution {
    public int CoinChange(int[] coins, int amount) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    
};
```

### typescript
```typescript
function coinChange(coins: number[], amount: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $coins
     * @param Integer $amount
     * @return Integer
     */
    function coinChange($coins, $amount) {
        
    }
}
```

### swift
```swift
class Solution {
    func coinChange(_ coins: [Int], _ amount: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun coinChange(coins: IntArray, amount: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int coinChange(List<int> coins, int amount) {
    
  }
}
```

### golang
```golang
func coinChange(coins []int, amount int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} coins
# @param {Integer} amount
# @return {Integer}
def coin_change(coins, amount)
    
end
```

### scala
```scala
object Solution {
    def coinChange(coins: Array[Int], amount: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn coin_change(coins: Vec<i32>, amount: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (coin-change coins amount)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec coin_change(Coins :: [integer()], Amount :: integer()) -> integer().
coin_change(Coins, Amount) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec coin_change(coins :: [integer], amount :: integer) :: integer
  def coin_change(coins, amount) do
    
  end
end
```
