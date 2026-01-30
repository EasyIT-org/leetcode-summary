# 815. Bus Routes

- Difficulty: Hard
- Topics: Array, Hash Table, Breadth-First Search
- Slug: bus-routes
- Problem ID: 833

## Description
You are given an array routes representing bus routes where routes[i] is a bus route that the ith bus repeats forever.
You will start at the bus stop source (You are not on any bus initially), and you want to go to the bus stop target. You can travel between bus stops by buses only.
Return the least number of buses you must take to travel from source to target. Return -1 if it is not possible.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: routes = [[1,2,7],[3,6,7]], source = 1, target = 6
Output: 2
Explanation: The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.
```

### Example 2
```text
Input: routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12
Output: -1
```


## Constraints
- 1 <= routes.length <= 500.
- 1 <= routes[i].length <= 105
- All the values of routes[i] are unique.
- sum(routes[i].length) <= 105
- 0 <= routes[i][j] < 106
- 0 <= source, target < 106

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numBusesToDestination(vector<vector<int>>& routes, int source, int target) {
        
    }
};
```

### java
```java
class Solution {
    public int numBusesToDestination(int[][] routes, int source, int target) {
        
    }
}
```

### python
```python
class Solution(object):
    def numBusesToDestination(self, routes, source, target):
        """
        :type routes: List[List[int]]
        :type source: int
        :type target: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numBusesToDestination(self, routes: List[List[int]], source: int, target: int) -> int:
```

### c
```c
int numBusesToDestination(int** routes, int routesSize, int* routesColSize, int source, int target) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumBusesToDestination(int[][] routes, int source, int target) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
    
};
```

### typescript
```typescript
function numBusesToDestination(routes: number[][], source: number, target: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $routes
     * @param Integer $source
     * @param Integer $target
     * @return Integer
     */
    function numBusesToDestination($routes, $source, $target) {
        
    }
}
```

### swift
```swift
class Solution {
    func numBusesToDestination(_ routes: [[Int]], _ source: Int, _ target: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numBusesToDestination(routes: Array<IntArray>, source: Int, target: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numBusesToDestination(List<List<int>> routes, int source, int target) {
    
  }
}
```

### golang
```golang
func numBusesToDestination(routes [][]int, source int, target int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} routes
# @param {Integer} source
# @param {Integer} target
# @return {Integer}
def num_buses_to_destination(routes, source, target)
    
end
```

### scala
```scala
object Solution {
    def numBusesToDestination(routes: Array[Array[Int]], source: Int, target: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_buses_to_destination(routes: Vec<Vec<i32>>, source: i32, target: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-buses-to-destination routes source target)
  (-> (listof (listof exact-integer?)) exact-integer? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec num_buses_to_destination(Routes :: [[integer()]], Source :: integer(), Target :: integer()) -> integer().
num_buses_to_destination(Routes, Source, Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_buses_to_destination(routes :: [[integer]], source :: integer, target :: integer) :: integer
  def num_buses_to_destination(routes, source, target) do
    
  end
end
```
