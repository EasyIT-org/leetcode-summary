# 739. Daily Temperatures

- Difficulty: Medium
- Topics: Array, Stack, Monotonic Stack
- Slug: daily-temperatures
- Problem ID: 739

## Description
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
```

### Example 2
```text
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
```

### Example 3
```text
Input: temperatures = [30,60,90]
Output: [1,1,0]
```


## Constraints
- 1 <= temperatures.length <= 105
- 30 <= temperatures[i] <= 100

## Hints
- If the temperature is say, 70 today, then in the future a warmer temperature must be either 71, 72, 73, ..., 99, or 100.  We could remember when all of them occur next.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        
    }
};
```

### java
```java
class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        
    }
}
```

### python
```python
class Solution(object):
    def dailyTemperatures(self, temperatures):
        """
        :type temperatures: List[int]
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* dailyTemperatures(int* temperatures, int temperaturesSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] DailyTemperatures(int[] temperatures) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    
};
```

### typescript
```typescript
function dailyTemperatures(temperatures: number[]): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $temperatures
     * @return Integer[]
     */
    function dailyTemperatures($temperatures) {
        
    }
}
```

### swift
```swift
class Solution {
    func dailyTemperatures(_ temperatures: [Int]) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun dailyTemperatures(temperatures: IntArray): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> dailyTemperatures(List<int> temperatures) {
    
  }
}
```

### golang
```golang
func dailyTemperatures(temperatures []int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} temperatures
# @return {Integer[]}
def daily_temperatures(temperatures)
    
end
```

### scala
```scala
object Solution {
    def dailyTemperatures(temperatures: Array[Int]): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn daily_temperatures(temperatures: Vec<i32>) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (daily-temperatures temperatures)
  (-> (listof exact-integer?) (listof exact-integer?))
  )
```

### erlang
```erlang
-spec daily_temperatures(Temperatures :: [integer()]) -> [integer()].
daily_temperatures(Temperatures) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec daily_temperatures(temperatures :: [integer]) :: [integer]
  def daily_temperatures(temperatures) do
    
  end
end
```
