# 1014. Best Sightseeing Pair

- Difficulty: Medium
- Topics: Array, Dynamic Programming
- Slug: best-sightseeing-pair
- Problem ID: 1063

## Description
You are given an integer array values where values[i] represents the value of the ith sightseeing spot. Two sightseeing spots i and j have a distance j - i between them.
The score of a pair (i < j) of sightseeing spots is values[i] + values[j] + i - j: the sum of the values of the sightseeing spots, minus the distance between them.
Return the maximum score of a pair of sightseeing spots.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: values = [8,1,5,2,6]
Output: 11
Explanation: i = 0, j = 2, values[i] + values[j] + i - j = 8 + 5 + 0 - 2 = 11
```

### Example 2
```text
Input: values = [1,2]
Output: 2
```


## Constraints
- 2 <= values.length <= 5 * 104
- 1 <= values[i] <= 1000

## Hints
- Can you tell the best sightseeing spot in one pass (ie. as you iterate over the input?)  What should we store or keep track of as we iterate to do this?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxScoreSightseeingPair(vector<int>& values) {
        
    }
};
```

### java
```java
class Solution {
    public int maxScoreSightseeingPair(int[] values) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxScoreSightseeingPair(self, values):
        """
        :type values: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxScoreSightseeingPair(self, values: List[int]) -> int:
```

### c
```c
int maxScoreSightseeingPair(int* values, int valuesSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxScoreSightseeingPair(int[] values) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    
};
```

### typescript
```typescript
function maxScoreSightseeingPair(values: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $values
     * @return Integer
     */
    function maxScoreSightseeingPair($values) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxScoreSightseeingPair(_ values: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxScoreSightseeingPair(values: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxScoreSightseeingPair(List<int> values) {
    
  }
}
```

### golang
```golang
func maxScoreSightseeingPair(values []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} values
# @return {Integer}
def max_score_sightseeing_pair(values)
    
end
```

### scala
```scala
object Solution {
    def maxScoreSightseeingPair(values: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_score_sightseeing_pair(values: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-score-sightseeing-pair values)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec max_score_sightseeing_pair(Values :: [integer()]) -> integer().
max_score_sightseeing_pair(Values) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_score_sightseeing_pair(values :: [integer]) :: integer
  def max_score_sightseeing_pair(values) do
    
  end
end
```
