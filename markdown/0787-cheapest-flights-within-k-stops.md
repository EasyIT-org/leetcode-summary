# 787. Cheapest Flights Within K Stops

- Difficulty: Medium
- Topics: Dynamic Programming, Depth-First Search, Breadth-First Search, Graph, Heap (Priority Queue), Shortest Path
- Slug: cheapest-flights-within-k-stops
- Problem ID: 803

## Description
There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.
You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
Output: 700
Explanation:
The graph is shown above.
The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.
```
Images:
- https://assets.leetcode.com/uploads/2022/03/18/cheapest-flights-within-k-stops-3drawio.png

### Example 2
```text
Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
Output: 200
Explanation:
The graph is shown above.
The optimal path with at most 1 stop from city 0 to 2 is marked in red and has cost 100 + 100 = 200.
```
Images:
- https://assets.leetcode.com/uploads/2022/03/18/cheapest-flights-within-k-stops-1drawio.png

### Example 3
```text
Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0
Output: 500
Explanation:
The graph is shown above.
The optimal path with no stops from city 0 to 2 is marked in red and has cost 500.
```
Images:
- https://assets.leetcode.com/uploads/2022/03/18/cheapest-flights-within-k-stops-2drawio.png


## Constraints
- 1 <= n <= 100
- 0 <= flights.length <= (n * (n - 1) / 2)
- flights[i].length == 3
- 0 <= fromi, toi < n
- fromi != toi
- 1 <= pricei <= 104
- There will not be any multiple flights between two cities.
- 0 <= src, dst, k < n
- src != dst

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findCheapestPrice(int n, vector<vector<int>>& flights, int src, int dst, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def findCheapestPrice(self, n, flights, src, dst, k):
        """
        :type n: int
        :type flights: List[List[int]]
        :type src: int
        :type dst: int
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
```

### c
```c
int findCheapestPrice(int n, int** flights, int flightsSize, int* flightsColSize, int src, int dst, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    
};
```

### typescript
```typescript
function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $flights
     * @param Integer $src
     * @param Integer $dst
     * @param Integer $k
     * @return Integer
     */
    function findCheapestPrice($n, $flights, $src, $dst, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func findCheapestPrice(_ n: Int, _ flights: [[Int]], _ src: Int, _ dst: Int, _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findCheapestPrice(n: Int, flights: Array<IntArray>, src: Int, dst: Int, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findCheapestPrice(int n, List<List<int>> flights, int src, int dst, int k) {
    
  }
}
```

### golang
```golang
func findCheapestPrice(n int, flights [][]int, src int, dst int, k int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer[][]} flights
# @param {Integer} src
# @param {Integer} dst
# @param {Integer} k
# @return {Integer}
def find_cheapest_price(n, flights, src, dst, k)
    
end
```

### scala
```scala
object Solution {
    def findCheapestPrice(n: Int, flights: Array[Array[Int]], src: Int, dst: Int, k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_cheapest_price(n: i32, flights: Vec<Vec<i32>>, src: i32, dst: i32, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-cheapest-price n flights src dst k)
  (-> exact-integer? (listof (listof exact-integer?)) exact-integer? exact-integer? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec find_cheapest_price(N :: integer(), Flights :: [[integer()]], Src :: integer(), Dst :: integer(), K :: integer()) -> integer().
find_cheapest_price(N, Flights, Src, Dst, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_cheapest_price(n :: integer, flights :: [[integer]], src :: integer, dst :: integer, k :: integer) :: integer
  def find_cheapest_price(n, flights, src, dst, k) do
    
  end
end
```
