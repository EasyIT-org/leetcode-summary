# 849. Maximize Distance to Closest Person

- Difficulty: Medium
- Topics: Array
- Slug: maximize-distance-to-closest-person
- Problem ID: 879

## Description
You are given an array representing a row of seats where seats[i] = 1 represents a person sitting in the ith seat, and seats[i] = 0 represents that the ith seat is empty (0-indexed).
There is at least one empty seat, and at least one person sitting.
Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized.
Return that maximum distance to the closest person.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: seats = [1,0,0,0,1,0,1]
Output: 2
Explanation: 
If Alex sits in the second open seat (i.e. seats[2]), then the closest person has distance 2.
If Alex sits in any other open seat, the closest person has distance 1.
Thus, the maximum distance to the closest person is 2.
```
Images:
- https://assets.leetcode.com/uploads/2020/09/10/distance.jpg

### Example 2
```text
Input: seats = [1,0,0,0]
Output: 3
Explanation: 
If Alex sits in the last seat (i.e. seats[3]), the closest person is 3 seats away.
This is the maximum distance possible, so the answer is 3.
```
Images:
- https://assets.leetcode.com/uploads/2020/09/10/distance.jpg

### Example 3
```text
Input: seats = [0,1]
Output: 1
```
Images:
- https://assets.leetcode.com/uploads/2020/09/10/distance.jpg


## Constraints
- 2 <= seats.length <= 2 * 104
- seats[i] is 0 or 1.
- At least one seat is empty.
- At least one seat is occupied.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxDistToClosest(vector<int>& seats) {
        
    }
};
```

### java
```java
class Solution {
    public int maxDistToClosest(int[] seats) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxDistToClosest(self, seats):
        """
        :type seats: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxDistToClosest(self, seats: List[int]) -> int:
```

### c
```c
int maxDistToClosest(int* seats, int seatsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxDistToClosest(int[] seats) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    
};
```

### typescript
```typescript
function maxDistToClosest(seats: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $seats
     * @return Integer
     */
    function maxDistToClosest($seats) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxDistToClosest(_ seats: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxDistToClosest(seats: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxDistToClosest(List<int> seats) {
    
  }
}
```

### golang
```golang
func maxDistToClosest(seats []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} seats
# @return {Integer}
def max_dist_to_closest(seats)
    
end
```

### scala
```scala
object Solution {
    def maxDistToClosest(seats: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_dist_to_closest(seats: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-dist-to-closest seats)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec max_dist_to_closest(Seats :: [integer()]) -> integer().
max_dist_to_closest(Seats) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_dist_to_closest(seats :: [integer]) :: integer
  def max_dist_to_closest(seats) do
    
  end
end
```
