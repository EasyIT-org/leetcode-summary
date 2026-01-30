# 1184. Distance Between Bus Stops

- Difficulty: Easy
- Topics: Array
- Slug: distance-between-bus-stops
- Problem ID: 1287

## Description
A bus has n stops numbered from 0 to n - 1 that form a circle. We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n.
The bus goes along both directions i.e. clockwise and counterclockwise.
Return the shortest distance between the given start and destination stops.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: distance = [1,2,3,4], start = 0, destination = 1
Output: 1
Explanation: Distance between 0 and 1 is 1 or 9, minimum is 1.
```
Images:
- https://assets.leetcode.com/uploads/2019/09/03/untitled-diagram-1.jpg

### Example 2
```text
Input: distance = [1,2,3,4], start = 0, destination = 2
Output: 3
Explanation: Distance between 0 and 2 is 3 or 7, minimum is 3.
```
Images:
- https://assets.leetcode.com/uploads/2019/09/03/untitled-diagram-1-1.jpg

### Example 3
```text
Input: distance = [1,2,3,4], start = 0, destination = 3
Output: 4
Explanation: Distance between 0 and 3 is 6 or 4, minimum is 4.
```
Images:
- https://assets.leetcode.com/uploads/2019/09/03/untitled-diagram-1-2.jpg


## Constraints
- 1 <= n <= 10^4
- distance.length == n
- 0 <= start, destination < n
- 0 <= distance[i] <= 10^4

## Hints
- Find the distance between the two stops if the bus moved in clockwise or counterclockwise directions.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int distanceBetweenBusStops(vector<int>& distance, int start, int destination) {
        
    }
};
```

### java
```java
class Solution {
    public int distanceBetweenBusStops(int[] distance, int start, int destination) {
        
    }
}
```

### python
```python
class Solution(object):
    def distanceBetweenBusStops(self, distance, start, destination):
        """
        :type distance: List[int]
        :type start: int
        :type destination: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def distanceBetweenBusStops(self, distance: List[int], start: int, destination: int) -> int:
```

### c
```c


int distanceBetweenBusStops(int* distance, int distanceSize, int start, int destination){

}
```

### csharp
```csharp
public class Solution {
    public int DistanceBetweenBusStops(int[] distance, int start, int destination) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    
};
```

### typescript
```typescript
function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {

};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $distance
     * @param Integer $start
     * @param Integer $destination
     * @return Integer
     */
    function distanceBetweenBusStops($distance, $start, $destination) {
        
    }
}
```

### swift
```swift
class Solution {
    func distanceBetweenBusStops(_ distance: [Int], _ start: Int, _ destination: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun distanceBetweenBusStops(distance: IntArray, start: Int, destination: Int): Int {
        
    }
}
```

### golang
```golang
func distanceBetweenBusStops(distance []int, start int, destination int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} distance
# @param {Integer} start
# @param {Integer} destination
# @return {Integer}
def distance_between_bus_stops(distance, start, destination)
    
end
```

### scala
```scala
object Solution {
    def distanceBetweenBusStops(distance: Array[Int], start: Int, destination: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn distance_between_bus_stops(distance: Vec<i32>, start: i32, destination: i32) -> i32 {
        
    }
}
```
