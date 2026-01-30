# 638. Shopping Offers

- Difficulty: Medium
- Topics: Array, Dynamic Programming, Backtracking, Bit Manipulation, Memoization, Bitmask
- Slug: shopping-offers
- Problem ID: 638

## Description
In LeetCode Store, there are n items to sell. Each item has a price. However, there are some special offers, and a special offer consists of one or more different kinds of items with a sale price.
You are given an integer array price where price[i] is the price of the ith item, and an integer array needs where needs[i] is the number of pieces of the ith item you want to buy.
You are also given an array special where special[i] is of size n + 1 where special[i][j] is the number of pieces of the jth item in the ith offer and special[i][n] (i.e., the last integer in the array) is the price of the ith offer.
Return the lowest price you have to pay for exactly certain items as given, where you could make optimal use of the special offers. You are not allowed to buy more items than you want, even if that would lower the overall price. You could use any of the special offers as many times as you want.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: price = [2,5], special = [[3,0,5],[1,2,10]], needs = [3,2]
Output: 14
Explanation: There are two kinds of items, A and B. Their prices are $2 and $5 respectively. 
In special offer 1, you can pay $5 for 3A and 0B
In special offer 2, you can pay $10 for 1A and 2B. 
You need to buy 3A and 2B, so you may pay $10 for 1A and 2B (special offer #2), and $4 for 2A.
```

### Example 2
```text
Input: price = [2,3,4], special = [[1,1,0,4],[2,2,1,9]], needs = [1,2,1]
Output: 11
Explanation: The price of A is $2, and $3 for B, $4 for C. 
You may pay $4 for 1A and 1B, and $9 for 2A ,2B and 1C. 
You need to buy 1A ,2B and 1C, so you may pay $4 for 1A and 1B (special offer #1), and $3 for 1B, $4 for 1C. 
You cannot add more items, though only $9 for 2A ,2B and 1C.
```


## Constraints
- n == price.length == needs.length
- 1 <= n <= 6
- 0 <= price[i], needs[i] <= 10
- 1 <= special.length <= 100
- special[i].length == n + 1
- 0 <= special[i][j] <= 50
- The input is generated that at least one of special[i][j] is non-zero for 0 <= j <= n - 1.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int shoppingOffers(vector<int>& price, vector<vector<int>>& special, vector<int>& needs) {
        
    }
};
```

### java
```java
class Solution {
    public int shoppingOffers(List<Integer> price, List<List<Integer>> special, List<Integer> needs) {
        
    }
}
```

### python
```python
class Solution(object):
    def shoppingOffers(self, price, special, needs):
        """
        :type price: List[int]
        :type special: List[List[int]]
        :type needs: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def shoppingOffers(self, price: List[int], special: List[List[int]], needs: List[int]) -> int:
```

### c
```c
int shoppingOffers(int* price, int priceSize, int** special, int specialSize, int* specialColSize, int* needs, int needsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int ShoppingOffers(IList<int> price, IList<IList<int>> special, IList<int> needs) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function(price, special, needs) {
    
};
```

### typescript
```typescript
function shoppingOffers(price: number[], special: number[][], needs: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $price
     * @param Integer[][] $special
     * @param Integer[] $needs
     * @return Integer
     */
    function shoppingOffers($price, $special, $needs) {
        
    }
}
```

### swift
```swift
class Solution {
    func shoppingOffers(_ price: [Int], _ special: [[Int]], _ needs: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun shoppingOffers(price: List<Int>, special: List<List<Int>>, needs: List<Int>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int shoppingOffers(List<int> price, List<List<int>> special, List<int> needs) {
    
  }
}
```

### golang
```golang
func shoppingOffers(price []int, special [][]int, needs []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} price
# @param {Integer[][]} special
# @param {Integer[]} needs
# @return {Integer}
def shopping_offers(price, special, needs)
    
end
```

### scala
```scala
object Solution {
    def shoppingOffers(price: List[Int], special: List[List[Int]], needs: List[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn shopping_offers(price: Vec<i32>, special: Vec<Vec<i32>>, needs: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (shopping-offers price special needs)
  (-> (listof exact-integer?) (listof (listof exact-integer?)) (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec shopping_offers(Price :: [integer()], Special :: [[integer()]], Needs :: [integer()]) -> integer().
shopping_offers(Price, Special, Needs) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec shopping_offers(price :: [integer], special :: [[integer]], needs :: [integer]) :: integer
  def shopping_offers(price, special, needs) do
    
  end
end
```
