# 495. Teemo Attacking

- Difficulty: Easy
- Topics: Array, Simulation
- Slug: teemo-attacking
- Problem ID: 495

## Description
Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly duration seconds. More formally, an attack at second t will mean Ashe is poisoned during the inclusive time interval [t, t + duration - 1]. If Teemo attacks again before the poison effect ends, the timer for it is reset, and the poison effect will end duration seconds after the new attack.
You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration.
Return the total number of seconds that Ashe is poisoned.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: timeSeries = [1,4], duration = 2
Output: 4
Explanation: Teemo's attacks on Ashe go as follows:
- At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
- At second 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5.
Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total.
```

### Example 2
```text
Input: timeSeries = [1,2], duration = 2
Output: 3
Explanation: Teemo's attacks on Ashe go as follows:
- At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
- At second 2 however, Teemo attacks again and resets the poison timer. Ashe is poisoned for seconds 2 and 3.
Ashe is poisoned for seconds 1, 2, and 3, which is 3 seconds in total.
```


## Constraints
- 1 <= timeSeries.length <= 104
- 0 <= timeSeries[i], duration <= 107
- timeSeries is sorted in non-decreasing order.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findPoisonedDuration(vector<int>& timeSeries, int duration) {
        
    }
};
```

### java
```java
class Solution {
    public int findPoisonedDuration(int[] timeSeries, int duration) {
        
    }
}
```

### python
```python
class Solution(object):
    def findPoisonedDuration(self, timeSeries, duration):
        """
        :type timeSeries: List[int]
        :type duration: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:
```

### c
```c
int findPoisonedDuration(int* timeSeries, int timeSeriesSize, int duration) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindPoisonedDuration(int[] timeSeries, int duration) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    
};
```

### typescript
```typescript
function findPoisonedDuration(timeSeries: number[], duration: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $timeSeries
     * @param Integer $duration
     * @return Integer
     */
    function findPoisonedDuration($timeSeries, $duration) {
        
    }
}
```

### swift
```swift
class Solution {
    func findPoisonedDuration(_ timeSeries: [Int], _ duration: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findPoisonedDuration(timeSeries: IntArray, duration: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findPoisonedDuration(List<int> timeSeries, int duration) {
    
  }
}
```

### golang
```golang
func findPoisonedDuration(timeSeries []int, duration int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} time_series
# @param {Integer} duration
# @return {Integer}
def find_poisoned_duration(time_series, duration)
    
end
```

### scala
```scala
object Solution {
    def findPoisonedDuration(timeSeries: Array[Int], duration: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_poisoned_duration(time_series: Vec<i32>, duration: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-poisoned-duration timeSeries duration)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec find_poisoned_duration(TimeSeries :: [integer()], Duration :: integer()) -> integer().
find_poisoned_duration(TimeSeries, Duration) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_poisoned_duration(time_series :: [integer], duration :: integer) :: integer
  def find_poisoned_duration(time_series, duration) do
    
  end
end
```
