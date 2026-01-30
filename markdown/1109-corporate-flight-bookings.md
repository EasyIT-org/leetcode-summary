# 1109. Corporate Flight Bookings

- Difficulty: Medium
- Topics: Array, Prefix Sum
- Slug: corporate-flight-bookings
- Problem ID: 1206

## Description
There are n flights that are labeled from 1 to n.
You are given an array of flight bookings bookings, where bookings[i] = [firsti, lasti, seatsi] represents a booking for flights firsti through lasti (inclusive) with seatsi seats reserved for each flight in the range.
Return an array answer of length n, where answer[i] is the total number of seats reserved for flight i.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
Output: [10,55,45,25,25]
Explanation:
Flight labels:        1   2   3   4   5
Booking 1 reserved:  10  10
Booking 2 reserved:      20  20
Booking 3 reserved:      25  25  25  25
Total seats:         10  55  45  25  25
Hence, answer = [10,55,45,25,25]
```

### Example 2
```text
Input: bookings = [[1,2,10],[2,2,15]], n = 2
Output: [10,25]
Explanation:
Flight labels:        1   2
Booking 1 reserved:  10  10
Booking 2 reserved:      15
Total seats:         10  25
Hence, answer = [10,25]
```


## Constraints
- 1 <= n <= 2 * 104
- 1 <= bookings.length <= 2 * 104
- bookings[i].length == 3
- 1 <= firsti <= lasti <= n
- 1 <= seatsi <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> corpFlightBookings(vector<vector<int>>& bookings, int n) {
        
    }
};
```

### java
```java
class Solution {
    public int[] corpFlightBookings(int[][] bookings, int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def corpFlightBookings(self, bookings, n):
        """
        :type bookings: List[List[int]]
        :type n: int
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def corpFlightBookings(self, bookings: List[List[int]], n: int) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* corpFlightBookings(int** bookings, int bookingsSize, int* bookingsColSize, int n, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] CorpFlightBookings(int[][] bookings, int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    
};
```

### typescript
```typescript
function corpFlightBookings(bookings: number[][], n: number): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $bookings
     * @param Integer $n
     * @return Integer[]
     */
    function corpFlightBookings($bookings, $n) {
        
    }
}
```

### swift
```swift
class Solution {
    func corpFlightBookings(_ bookings: [[Int]], _ n: Int) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun corpFlightBookings(bookings: Array<IntArray>, n: Int): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> corpFlightBookings(List<List<int>> bookings, int n) {
    
  }
}
```

### golang
```golang
func corpFlightBookings(bookings [][]int, n int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} bookings
# @param {Integer} n
# @return {Integer[]}
def corp_flight_bookings(bookings, n)
    
end
```

### scala
```scala
object Solution {
    def corpFlightBookings(bookings: Array[Array[Int]], n: Int): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn corp_flight_bookings(bookings: Vec<Vec<i32>>, n: i32) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (corp-flight-bookings bookings n)
  (-> (listof (listof exact-integer?)) exact-integer? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec corp_flight_bookings(Bookings :: [[integer()]], N :: integer()) -> [integer()].
corp_flight_bookings(Bookings, N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec corp_flight_bookings(bookings :: [[integer]], n :: integer) :: [integer]
  def corp_flight_bookings(bookings, n) do
    
  end
end
```
