# 964. Least Operators to Express Number

- Difficulty: Hard
- Topics: Math, Dynamic Programming, Memoization
- Slug: least-operators-to-express-number
- Problem ID: 1004

## Description
Given a single positive integer x, we will write an expression of the form x (op1) x (op2) x (op3) x ... where each operator op1, op2, etc. is either addition, subtraction, multiplication, or division (+, -, *, or /). For example, with x = 3, we might write 3 * 3 / 3 + 3 - 3 which is a value of 3.
When writing such an expression, we adhere to the following conventions:
We would like to write an expression with the least number of operators such that the expression equals the given target. Return the least number of operators used.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: x = 3, target = 19
Output: 5
Explanation: 3 * 3 + 3 * 3 + 3 / 3.
The expression contains 5 operations.
```

### Example 2
```text
Input: x = 5, target = 501
Output: 8
Explanation: 5 * 5 * 5 * 5 - 5 * 5 * 5 + 5 / 5.
The expression contains 8 operations.
```

### Example 3
```text
Input: x = 100, target = 100000000
Output: 3
Explanation: 100 * 100 * 100 * 100.
The expression contains 3 operations.
```


## Constraints
- 2 <= x <= 100
- 1 <= target <= 2 * 108

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int leastOpsExpressTarget(int x, int target) {
        
    }
};
```

### java
```java
class Solution {
    public int leastOpsExpressTarget(int x, int target) {
        
    }
}
```

### python
```python
class Solution(object):
    def leastOpsExpressTarget(self, x, target):
        """
        :type x: int
        :type target: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def leastOpsExpressTarget(self, x: int, target: int) -> int:
```

### c
```c
int leastOpsExpressTarget(int x, int target) {
    
}
```

### csharp
```csharp
public class Solution {
    public int LeastOpsExpressTarget(int x, int target) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} x
 * @param {number} target
 * @return {number}
 */
var leastOpsExpressTarget = function(x, target) {
    
};
```

### typescript
```typescript
function leastOpsExpressTarget(x: number, target: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $x
     * @param Integer $target
     * @return Integer
     */
    function leastOpsExpressTarget($x, $target) {
        
    }
}
```

### swift
```swift
class Solution {
    func leastOpsExpressTarget(_ x: Int, _ target: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun leastOpsExpressTarget(x: Int, target: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int leastOpsExpressTarget(int x, int target) {
    
  }
}
```

### golang
```golang
func leastOpsExpressTarget(x int, target int) int {
    
}
```

### ruby
```ruby
# @param {Integer} x
# @param {Integer} target
# @return {Integer}
def least_ops_express_target(x, target)
    
end
```

### scala
```scala
object Solution {
    def leastOpsExpressTarget(x: Int, target: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn least_ops_express_target(x: i32, target: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (least-ops-express-target x target)
  (-> exact-integer? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec least_ops_express_target(X :: integer(), Target :: integer()) -> integer().
least_ops_express_target(X, Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec least_ops_express_target(x :: integer, target :: integer) :: integer
  def least_ops_express_target(x, target) do
    
  end
end
```
