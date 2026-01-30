# 1124. Longest Well-Performing Interval

- Difficulty: Medium
- Topics: Array, Hash Table, Stack, Monotonic Stack, Prefix Sum
- Slug: longest-well-performing-interval
- Problem ID: 1219

## Description
We are given hours, a list of the number of hours worked per day for a given employee.
A day is considered to be a tiring day if and only if the number of hours worked is (strictly) greater than 8.
A well-performing interval is an interval of days for which the number of tiring days is strictly larger than the number of non-tiring days.
Return the length of the longest well-performing interval.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: hours = [9,9,6,0,6,6,9]
Output: 3
Explanation: The longest well-performing interval is [9,9,6].
```

### Example 2
```text
Input: hours = [6,6,6]
Output: 0
```


## Constraints
- 1 <= hours.length <= 104
- 0 <= hours[i] <= 16

## Hints
- Make a new array A of +1/-1s corresponding to if hours[i] is > 8 or not. The goal is to find the longest subarray with positive sum.
- Using prefix sums (PrefixSum[i+1] = A[0] + A[1] + ... + A[i]), you need to find for each j, the smallest i < j with PrefixSum[i] + 1 == PrefixSum[j].

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int longestWPI(vector<int>& hours) {
        
    }
};
```

### java
```java
class Solution {
    public int longestWPI(int[] hours) {
        
    }
}
```

### python
```python
class Solution(object):
    def longestWPI(self, hours):
        """
        :type hours: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def longestWPI(self, hours: List[int]) -> int:
```

### c
```c
int longestWPI(int* hours, int hoursSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int LongestWPI(int[] hours) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {
    
};
```

### typescript
```typescript
function longestWPI(hours: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $hours
     * @return Integer
     */
    function longestWPI($hours) {
        
    }
}
```

### swift
```swift
class Solution {
    func longestWPI(_ hours: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun longestWPI(hours: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int longestWPI(List<int> hours) {
    
  }
}
```

### golang
```golang
func longestWPI(hours []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} hours
# @return {Integer}
def longest_wpi(hours)
    
end
```

### scala
```scala
object Solution {
    def longestWPI(hours: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn longest_wpi(hours: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (longest-wpi hours)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec longest_wpi(Hours :: [integer()]) -> integer().
longest_wpi(Hours) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec longest_wpi(hours :: [integer]) :: integer
  def longest_wpi(hours) do
    
  end
end
```
