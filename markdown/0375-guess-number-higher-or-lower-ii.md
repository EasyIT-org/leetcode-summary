# 375. Guess Number Higher or Lower II

- Difficulty: Medium
- Topics: Math, Dynamic Programming, Game Theory
- Slug: guess-number-higher-or-lower-ii
- Problem ID: 375

## Description
We are playing the Guessing Game. The game will work as follows:
Given a particular n, return the minimum amount of money you need to guarantee a win regardless of what number I pick.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: n = 10
Output: 16
Explanation: The winning strategy is as follows:
- The range is [1,10]. Guess 7.
    - If this is my number, your total is $0. Otherwise, you pay $7.
    - If my number is higher, the range is [8,10]. Guess 9.
        - If this is my number, your total is $7. Otherwise, you pay $9.
        - If my number is higher, it must be 10. Guess 10. Your total is $7 + $9 = $16.
        - If my number is lower, it must be 8. Guess 8. Your total is $7 + $9 = $16.
    - If my number is lower, the range is [1,6]. Guess 3.
        - If this is my number, your total is $7. Otherwise, you pay $3.
        - If my number is higher, the range is [4,6]. Guess 5.
            - If this is my number, your total is $7 + $3 = $10. Otherwise, you pay $5.
            - If my number is higher, it must be 6. Guess 6. Your total is $7 + $3 + $5 = $15.
            - If my number is lower, it must be 4. Guess 4. Your total is $7 + $3 + $5 = $15.
        - If my number is lower, the range is [1,2]. Guess 1.
            - If this is my number, your total is $7 + $3 = $10. Otherwise, you pay $1.
            - If my number is higher, it must be 2. Guess 2. Your total is $7 + $3 + $1 = $11.
The worst case in all these scenarios is that you pay $16. Hence, you only need $16 to guarantee a win.
```
Images:
- https://assets.leetcode.com/uploads/2020/09/10/graph.png

### Example 2
```text
Input: n = 1
Output: 0
Explanation: There is only one possible number, so you can guess 1 and not have to pay anything.
```
Images:
- https://assets.leetcode.com/uploads/2020/09/10/graph.png

### Example 3
```text
Input: n = 2
Output: 1
Explanation: There are two possible numbers, 1 and 2.
- Guess 1.
    - If this is my number, your total is $0. Otherwise, you pay $1.
    - If my number is higher, it must be 2. Guess 2. Your total is $1.
The worst case is that you pay $1.
```
Images:
- https://assets.leetcode.com/uploads/2020/09/10/graph.png


## Constraints
- 1 <= n <= 200

## Hints
- The best strategy to play the game is to minimize the maximum loss you could possibly face. Another strategy is to minimize the expected loss. Here, we are interested in the <b>first</b> scenario.
- Take a small example (n = 3). What do you end up paying in the worst case?
- Check out <a href="https://en.wikipedia.org/wiki/Minimax">this article</a> if you're still stuck.
- The purely recursive implementation of minimax would be worthless for even a small n. You MUST use dynamic programming.
- As a follow-up, how would you modify your code to solve the problem of minimizing the expected loss, instead of the worst-case loss?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int getMoneyAmount(int n) {
        
    }
};
```

### java
```java
class Solution {
    public int getMoneyAmount(int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def getMoneyAmount(self, n):
        """
        :type n: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def getMoneyAmount(self, n: int) -> int:
```

### c
```c
int getMoneyAmount(int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public int GetMoneyAmount(int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
    
};
```

### typescript
```typescript
function getMoneyAmount(n: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function getMoneyAmount($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func getMoneyAmount(_ n: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun getMoneyAmount(n: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int getMoneyAmount(int n) {
    
  }
}
```

### golang
```golang
func getMoneyAmount(n int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @return {Integer}
def get_money_amount(n)
    
end
```

### scala
```scala
object Solution {
    def getMoneyAmount(n: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn get_money_amount(n: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (get-money-amount n)
  (-> exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec get_money_amount(N :: integer()) -> integer().
get_money_amount(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec get_money_amount(n :: integer) :: integer
  def get_money_amount(n) do
    
  end
end
```
