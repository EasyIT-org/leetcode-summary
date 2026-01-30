# 853. Car Fleet

- Difficulty: Medium
- Topics: Array, Stack, Sorting, Monotonic Stack
- Slug: car-fleet
- Problem ID: 883

## Description
There are n cars at given miles away from the starting mile 0, traveling to reach the mile target.
You are given two integer arrays position and speed, both of length n, where position[i] is the starting mile of the ith car and speed[i] is the speed of the ith car in miles per hour.
A car cannot pass another car, but it can catch up and then travel next to it at the speed of the slower car.
A car fleet is a car or cars driving next to each other. The speed of the car fleet is the minimum speed of any car in the fleet.
If a car catches up to a car fleet at the mile target, it will still be considered as part of the car fleet.
Return the number of car fleets that will arrive at the destination.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
Output: 3
Explanation:
```

### Example 2
```text
Input: target = 10, position = [3], speed = [3]
Output: 1
Explanation:
```

### Example 3
```text
Input: target = 100, position = [0,2,4], speed = [4,2,1]
Output: 1
Explanation:
```


## Constraints
- n == position.length == speed.length
- 1 <= n <= 105
- 0 < target <= 106
- 0 <= position[i] < target
- All the values of position are unique.
- 0 < speed[i] <= 106

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int carFleet(int target, vector<int>& position, vector<int>& speed) {
        
    }
};
```

### java
```java
class Solution {
    public int carFleet(int target, int[] position, int[] speed) {
        
    }
}
```

### python
```python
class Solution(object):
    def carFleet(self, target, position, speed):
        """
        :type target: int
        :type position: List[int]
        :type speed: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
```

### c
```c
int carFleet(int target, int* position, int positionSize, int* speed, int speedSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int CarFleet(int target, int[] position, int[] speed) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    
};
```

### typescript
```typescript
function carFleet(target: number, position: number[], speed: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $target
     * @param Integer[] $position
     * @param Integer[] $speed
     * @return Integer
     */
    function carFleet($target, $position, $speed) {
        
    }
}
```

### swift
```swift
class Solution {
    func carFleet(_ target: Int, _ position: [Int], _ speed: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun carFleet(target: Int, position: IntArray, speed: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int carFleet(int target, List<int> position, List<int> speed) {
    
  }
}
```

### golang
```golang
func carFleet(target int, position []int, speed []int) int {
    
}
```

### ruby
```ruby
# @param {Integer} target
# @param {Integer[]} position
# @param {Integer[]} speed
# @return {Integer}
def car_fleet(target, position, speed)
    
end
```

### scala
```scala
object Solution {
    def carFleet(target: Int, position: Array[Int], speed: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn car_fleet(target: i32, position: Vec<i32>, speed: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (car-fleet target position speed)
  (-> exact-integer? (listof exact-integer?) (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec car_fleet(Target :: integer(), Position :: [integer()], Speed :: [integer()]) -> integer().
car_fleet(Target, Position, Speed) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec car_fleet(target :: integer, position :: [integer], speed :: [integer]) :: integer
  def car_fleet(target, position, speed) do
    
  end
end
```
