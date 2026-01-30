# 365. Water and Jug Problem

- Difficulty: Medium
- Topics: Math, Depth-First Search, Breadth-First Search
- Slug: water-and-jug-problem
- Problem ID: 365

## Description
You are given two jugs with capacities x liters and y liters. You have an infinite water supply. Return whether the total amount of water in both jugs may reach target using the following operations:
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: x = 3, y = 5, target = 4
Output: true
Explanation:
Follow these steps to reach a total of 4 liters:
Reference: The Die Hard example.
```

### Example 2
```text
Input: x = 2, y = 6, target = 5
Output: false
```

### Example 3
```text
Input: x = 1, y = 2, target = 3
Output: true
Explanation: Fill both jugs. The total amount of water in both jugs is equal to 3 now.
```


## Constraints
- 1 <= x, y, target <= 103

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool canMeasureWater(int x, int y, int target) {
        
    }
};
```

### java
```java
class Solution {
    public boolean canMeasureWater(int x, int y, int target) {
        
    }
}
```

### python
```python
class Solution(object):
    def canMeasureWater(self, x, y, target):
        """
        :type x: int
        :type y: int
        :type target: int
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def canMeasureWater(self, x: int, y: int, target: int) -> bool:
```

### c
```c
bool canMeasureWater(int x, int y, int target) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool CanMeasureWater(int x, int y, int target) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
var canMeasureWater = function(x, y, target) {
    
};
```

### typescript
```typescript
function canMeasureWater(x: number, y: number, target: number): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $x
     * @param Integer $y
     * @param Integer $target
     * @return Boolean
     */
    function canMeasureWater($x, $y, $target) {
        
    }
}
```

### swift
```swift
class Solution {
    func canMeasureWater(_ x: Int, _ y: Int, _ target: Int) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun canMeasureWater(x: Int, y: Int, target: Int): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool canMeasureWater(int x, int y, int target) {
    
  }
}
```

### golang
```golang
func canMeasureWater(x int, y int, target int) bool {
    
}
```

### ruby
```ruby
# @param {Integer} x
# @param {Integer} y
# @param {Integer} target
# @return {Boolean}
def can_measure_water(x, y, target)
    
end
```

### scala
```scala
object Solution {
    def canMeasureWater(x: Int, y: Int, target: Int): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn can_measure_water(x: i32, y: i32, target: i32) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (can-measure-water x y target)
  (-> exact-integer? exact-integer? exact-integer? boolean?)
  )
```

### erlang
```erlang
-spec can_measure_water(X :: integer(), Y :: integer(), Target :: integer()) -> boolean().
can_measure_water(X, Y, Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec can_measure_water(x :: integer, y :: integer, target :: integer) :: boolean
  def can_measure_water(x, y, target) do
    
  end
end
```
