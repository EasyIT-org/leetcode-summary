# 1094. Car Pooling

- Difficulty: Medium
- Topics: Array, Sorting, Heap (Priority Queue), Simulation, Prefix Sum
- Slug: car-pooling
- Problem ID: 1184

## Description
There is a car with capacity empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).
You are given the integer capacity and an array trips where trips[i] = [numPassengersi, fromi, toi] indicates that the ith trip has numPassengersi passengers and the locations to pick them up and drop them off are fromi and toi respectively. The locations are given as the number of kilometers due east from the car's initial location.
Return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: trips = [[2,1,5],[3,3,7]], capacity = 4
Output: false
```

### Example 2
```text
Input: trips = [[2,1,5],[3,3,7]], capacity = 5
Output: true
```


## Constraints
- 1 <= trips.length <= 1000
- trips[i].length == 3
- 1 <= numPassengersi <= 100
- 0 <= fromi < toi <= 1000
- 1 <= capacity <= 105

## Hints
- Sort the pickup and dropoff events by location, then process them in order.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool carPooling(vector<vector<int>>& trips, int capacity) {
        
    }
};
```

### java
```java
class Solution {
    public boolean carPooling(int[][] trips, int capacity) {
        
    }
}
```

### python
```python
class Solution(object):
    def carPooling(self, trips, capacity):
        """
        :type trips: List[List[int]]
        :type capacity: int
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
```

### c
```c
bool carPooling(int** trips, int tripsSize, int* tripsColSize, int capacity) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool CarPooling(int[][] trips, int capacity) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    
};
```

### typescript
```typescript
function carPooling(trips: number[][], capacity: number): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $trips
     * @param Integer $capacity
     * @return Boolean
     */
    function carPooling($trips, $capacity) {
        
    }
}
```

### swift
```swift
class Solution {
    func carPooling(_ trips: [[Int]], _ capacity: Int) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun carPooling(trips: Array<IntArray>, capacity: Int): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool carPooling(List<List<int>> trips, int capacity) {
    
  }
}
```

### golang
```golang
func carPooling(trips [][]int, capacity int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[][]} trips
# @param {Integer} capacity
# @return {Boolean}
def car_pooling(trips, capacity)
    
end
```

### scala
```scala
object Solution {
    def carPooling(trips: Array[Array[Int]], capacity: Int): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn car_pooling(trips: Vec<Vec<i32>>, capacity: i32) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (car-pooling trips capacity)
  (-> (listof (listof exact-integer?)) exact-integer? boolean?)
  )
```

### erlang
```erlang
-spec car_pooling(Trips :: [[integer()]], Capacity :: integer()) -> boolean().
car_pooling(Trips, Capacity) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec car_pooling(trips :: [[integer]], capacity :: integer) :: boolean
  def car_pooling(trips, capacity) do
    
  end
end
```
