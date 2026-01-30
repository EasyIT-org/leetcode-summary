# 1010. Pairs of Songs With Total Durations Divisible by 60

- Difficulty: Medium
- Topics: Array, Hash Table, Counting
- Slug: pairs-of-songs-with-total-durations-divisible-by-60
- Problem ID: 1055

## Description
You are given a list of songs where the ith song has a duration of time[i] seconds.
Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: time = [30,20,150,100,40]
Output: 3
Explanation: Three pairs have a total duration divisible by 60:
(time[0] = 30, time[2] = 150): total duration 180
(time[1] = 20, time[3] = 100): total duration 120
(time[1] = 20, time[4] = 40): total duration 60
```

### Example 2
```text
Input: time = [60,60,60]
Output: 3
Explanation: All three pairs have a total duration of 120, which is divisible by 60.
```


## Constraints
- 1 <= time.length <= 6 * 104
- 1 <= time[i] <= 500

## Hints
- We only need to consider each song length modulo 60.
- We can count the number of songs having same (length % 60), and store that in an array of size 60.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numPairsDivisibleBy60(vector<int>& time) {
        
    }
};
```

### java
```java
class Solution {
    public int numPairsDivisibleBy60(int[] time) {
        
    }
}
```

### python
```python
class Solution(object):
    def numPairsDivisibleBy60(self, time):
        """
        :type time: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numPairsDivisibleBy60(self, time: List[int]) -> int:
```

### c
```c
int numPairsDivisibleBy60(int* time, int timeSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumPairsDivisibleBy60(int[] time) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    
};
```

### typescript
```typescript
function numPairsDivisibleBy60(time: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $time
     * @return Integer
     */
    function numPairsDivisibleBy60($time) {
        
    }
}
```

### swift
```swift
class Solution {
    func numPairsDivisibleBy60(_ time: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numPairsDivisibleBy60(time: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numPairsDivisibleBy60(List<int> time) {
    
  }
}
```

### golang
```golang
func numPairsDivisibleBy60(time []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} time
# @return {Integer}
def num_pairs_divisible_by60(time)
    
end
```

### scala
```scala
object Solution {
    def numPairsDivisibleBy60(time: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_pairs_divisible_by60(time: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-pairs-divisible-by60 time)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec num_pairs_divisible_by60(Time :: [integer()]) -> integer().
num_pairs_divisible_by60(Time) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_pairs_divisible_by60(time :: [integer]) :: integer
  def num_pairs_divisible_by60(time) do
    
  end
end
```
