# 518. Coin Change II

- Difficulty: Medium
- Topics: Array, Dynamic Programming
- Slug: coin-change-ii
- Problem ID: 518

## Description
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.
You may assume that you have an infinite number of each kind of coin.
The answer is guaranteed to fit into a signed 32-bit integer.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: amount = 5, coins = [1,2,5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
```

### Example 2
```text
Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.
```

### Example 3
```text
Input: amount = 10, coins = [10]
Output: 1
```


## Constraints
- 1 <= coins.length <= 300
- 1 <= coins[i] <= 5000
- All the values of coins are unique.
- 0 <= amount <= 5000

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int change(int amount, vector<int>& coins) {
        
    }
};
```

### java
```java
class Solution {
    public int change(int amount, int[] coins) {
        
    }
}
```

### python
```python
class Solution(object):
    def change(self, amount, coins):
        """
        :type amount: int
        :type coins: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
```

### c
```c
int change(int amount, int* coins, int coinsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int Change(int amount, int[] coins) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    
};
```

### typescript
```typescript
function change(amount: number, coins: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $amount
     * @param Integer[] $coins
     * @return Integer
     */
    function change($amount, $coins) {
        
    }
}
```

### swift
```swift
class Solution {
    func change(_ amount: Int, _ coins: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun change(amount: Int, coins: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int change(int amount, List<int> coins) {
    
  }
}
```

### golang
```golang
func change(amount int, coins []int) int {
    
}
```

### ruby
```ruby
# @param {Integer} amount
# @param {Integer[]} coins
# @return {Integer}
def change(amount, coins)
    
end
```

### scala
```scala
object Solution {
    def change(amount: Int, coins: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn change(amount: i32, coins: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (change amount coins)
  (-> exact-integer? (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec change(Amount :: integer(), Coins :: [integer()]) -> integer().
change(Amount, Coins) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec change(amount :: integer, coins :: [integer]) :: integer
  def change(amount, coins) do
    
  end
end
```
