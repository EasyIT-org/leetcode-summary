# 743. Network Delay Time

- Difficulty: Medium
- Topics: Depth-First Search, Breadth-First Search, Graph, Heap (Priority Queue), Shortest Path
- Slug: network-delay-time
- Problem ID: 744

## Description
You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.
We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
Output: 2
```
Images:
- https://assets.leetcode.com/uploads/2019/05/23/931_example_1.png

### Example 2
```text
Input: times = [[1,2,1]], n = 2, k = 1
Output: 1
```
Images:
- https://assets.leetcode.com/uploads/2019/05/23/931_example_1.png

### Example 3
```text
Input: times = [[1,2,1]], n = 2, k = 2
Output: -1
```
Images:
- https://assets.leetcode.com/uploads/2019/05/23/931_example_1.png


## Constraints
- 1 <= k <= n <= 100
- 1 <= times.length <= 6000
- times[i].length == 3
- 1 <= ui, vi <= n
- ui != vi
- 0 <= wi <= 100
- All the pairs (ui, vi) are unique. (i.e., no multiple edges.)

## Hints
- We visit each node at some time, and if that time is better than the fastest time we've reached this node, we travel along outgoing edges in sorted order.  Alternatively, we could use Dijkstra's algorithm.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int networkDelayTime(vector<vector<int>>& times, int n, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int networkDelayTime(int[][] times, int n, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def networkDelayTime(self, times, n, k):
        """
        :type times: List[List[int]]
        :type n: int
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
```

### c
```c
int networkDelayTime(int** times, int timesSize, int* timesColSize, int n, int k){

}
```

### csharp
```csharp
public class Solution {
    public int NetworkDelayTime(int[][] times, int n, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    
};
```

### typescript
```typescript
function networkDelayTime(times: number[][], n: number, k: number): number {

};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $times
     * @param Integer $n
     * @param Integer $k
     * @return Integer
     */
    function networkDelayTime($times, $n, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func networkDelayTime(_ times: [[Int]], _ n: Int, _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun networkDelayTime(times: Array<IntArray>, n: Int, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int networkDelayTime(List<List<int>> times, int n, int k) {

  }
}
```

### golang
```golang
func networkDelayTime(times [][]int, n int, k int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} times
# @param {Integer} n
# @param {Integer} k
# @return {Integer}
def network_delay_time(times, n, k)
    
end
```

### scala
```scala
object Solution {
    def networkDelayTime(times: Array[Array[Int]], n: Int, k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn network_delay_time(times: Vec<Vec<i32>>, n: i32, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (network-delay-time times n k)
  (-> (listof (listof exact-integer?)) exact-integer? exact-integer? exact-integer?)

  )
```

### erlang
```erlang
-spec network_delay_time(Times :: [[integer()]], N :: integer(), K :: integer()) -> integer().
network_delay_time(Times, N, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec network_delay_time(times :: [[integer]], n :: integer, k :: integer) :: integer
  def network_delay_time(times, n, k) do

  end
end
```
