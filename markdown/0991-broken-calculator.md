# 991. Broken Calculator

- Difficulty: Medium
- Topics: Math, Greedy
- Slug: broken-calculator
- Problem ID: 1033

## Description
There is a broken calculator that has the integer startValue on its display initially. In one operation, you can:
Given two integers startValue and target, return the minimum number of operations needed to display target on the calculator.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: startValue = 2, target = 3
Output: 2
Explanation: Use double operation and then decrement operation {2 -> 4 -> 3}.
```

### Example 2
```text
Input: startValue = 5, target = 8
Output: 2
Explanation: Use decrement and then double {5 -> 4 -> 8}.
```

### Example 3
```text
Input: startValue = 3, target = 10
Output: 3
Explanation: Use double, decrement and double {3 -> 6 -> 5 -> 10}.
```


## Constraints
- 1 <= startValue, target <= 109

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int brokenCalc(int startValue, int target) {
        
    }
};
```

### java
```java
class Solution {
    public int brokenCalc(int startValue, int target) {
        
    }
}
```

### python
```python
class Solution(object):
    def brokenCalc(self, startValue, target):
        """
        :type startValue: int
        :type target: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def brokenCalc(self, startValue: int, target: int) -> int:
```

### c
```c
int brokenCalc(int startValue, int target) {
    
}
```

### csharp
```csharp
public class Solution {
    public int BrokenCalc(int startValue, int target) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
var brokenCalc = function(startValue, target) {
    
};
```

### typescript
```typescript
function brokenCalc(startValue: number, target: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $startValue
     * @param Integer $target
     * @return Integer
     */
    function brokenCalc($startValue, $target) {
        
    }
}
```

### swift
```swift
class Solution {
    func brokenCalc(_ startValue: Int, _ target: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun brokenCalc(startValue: Int, target: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int brokenCalc(int startValue, int target) {
    
  }
}
```

### golang
```golang
func brokenCalc(startValue int, target int) int {
    
}
```

### ruby
```ruby
# @param {Integer} start_value
# @param {Integer} target
# @return {Integer}
def broken_calc(start_value, target)
    
end
```

### scala
```scala
object Solution {
    def brokenCalc(startValue: Int, target: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn broken_calc(start_value: i32, target: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (broken-calc startValue target)
  (-> exact-integer? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec broken_calc(StartValue :: integer(), Target :: integer()) -> integer().
broken_calc(StartValue, Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec broken_calc(start_value :: integer, target :: integer) :: integer
  def broken_calc(start_value, target) do
    
  end
end
```
