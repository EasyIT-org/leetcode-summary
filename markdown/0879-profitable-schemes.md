# 879. Profitable Schemes

- Difficulty: Hard
- Topics: Array, Dynamic Programming
- Slug: profitable-schemes
- Problem ID: 911

## Description
There is a group of n members, and a list of various crimes they could commit. The ith crime generates a profit[i] and requires group[i] members to participate in it. If a member participates in one crime, that member can't participate in another crime.
Let's call a profitable scheme any subset of these crimes that generates at least minProfit profit, and the total number of members participating in that subset of crimes is at most n.
Return the number of schemes that can be chosen. Since the answer may be very large, return it modulo 109 + 7.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 5, minProfit = 3, group = [2,2], profit = [2,3]
Output: 2
Explanation: To make a profit of at least 3, the group could either commit crimes 0 and 1, or just crime 1.
In total, there are 2 schemes.
```

### Example 2
```text
Input: n = 10, minProfit = 5, group = [2,3,5], profit = [6,7,8]
Output: 7
Explanation: To make a profit of at least 5, the group could commit any crimes, as long as they commit one.
There are 7 possible schemes: (0), (1), (2), (0,1), (0,2), (1,2), and (0,1,2).
```


## Constraints
- 1 <= n <= 100
- 0 <= minProfit <= 100
- 1 <= group.length <= 100
- 1 <= group[i] <= 100
- profit.length == group.length
- 0 <= profit[i] <= 100

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int profitableSchemes(int n, int minProfit, vector<int>& group, vector<int>& profit) {
        
    }
};
```

### java
```java
class Solution {
    public int profitableSchemes(int n, int minProfit, int[] group, int[] profit) {
        
    }
}
```

### python
```python
class Solution(object):
    def profitableSchemes(self, n, minProfit, group, profit):
        """
        :type n: int
        :type minProfit: int
        :type group: List[int]
        :type profit: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def profitableSchemes(self, n: int, minProfit: int, group: List[int], profit: List[int]) -> int:
```

### c
```c
int profitableSchemes(int n, int minProfit, int* group, int groupSize, int* profit, int profitSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int ProfitableSchemes(int n, int minProfit, int[] group, int[] profit) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function(n, minProfit, group, profit) {
    
};
```

### typescript
```typescript
function profitableSchemes(n: number, minProfit: number, group: number[], profit: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @param Integer $minProfit
     * @param Integer[] $group
     * @param Integer[] $profit
     * @return Integer
     */
    function profitableSchemes($n, $minProfit, $group, $profit) {
        
    }
}
```

### swift
```swift
class Solution {
    func profitableSchemes(_ n: Int, _ minProfit: Int, _ group: [Int], _ profit: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun profitableSchemes(n: Int, minProfit: Int, group: IntArray, profit: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int profitableSchemes(int n, int minProfit, List<int> group, List<int> profit) {
    
  }
}
```

### golang
```golang
func profitableSchemes(n int, minProfit int, group []int, profit []int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer} min_profit
# @param {Integer[]} group
# @param {Integer[]} profit
# @return {Integer}
def profitable_schemes(n, min_profit, group, profit)
    
end
```

### scala
```scala
object Solution {
    def profitableSchemes(n: Int, minProfit: Int, group: Array[Int], profit: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn profitable_schemes(n: i32, min_profit: i32, group: Vec<i32>, profit: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (profitable-schemes n minProfit group profit)
  (-> exact-integer? exact-integer? (listof exact-integer?) (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec profitable_schemes(N :: integer(), MinProfit :: integer(), Group :: [integer()], Profit :: [integer()]) -> integer().
profitable_schemes(N, MinProfit, Group, Profit) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec profitable_schemes(n :: integer, min_profit :: integer, group :: [integer], profit :: [integer]) :: integer
  def profitable_schemes(n, min_profit, group, profit) do
    
  end
end
```
