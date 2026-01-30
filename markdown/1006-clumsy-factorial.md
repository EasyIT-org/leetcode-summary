# 1006. Clumsy Factorial

- Difficulty: Medium
- Topics: Math, Stack, Simulation
- Slug: clumsy-factorial
- Problem ID: 1048

## Description
The factorial of a positive integer n is the product of all positive integers less than or equal to n.
We make a clumsy factorial using the integers in decreasing order by swapping out the multiply operations for a fixed rotation of operations with multiply '*', divide '/', add '+', and subtract '-' in this order.
However, these operations are still applied using the usual order of operations of arithmetic. We do all multiplication and division steps before any addition or subtraction steps, and multiplication and division steps are processed left to right.
Additionally, the division that we use is floor division such that 10 * 9 / 8 = 90 / 8 = 11.
Given an integer n, return the clumsy factorial of n.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 4
Output: 7
Explanation: 7 = 4 * 3 / 2 + 1
```

### Example 2
```text
Input: n = 10
Output: 12
Explanation: 12 = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1
```


## Constraints
- 1 <= n <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int clumsy(int n) {
        
    }
};
```

### java
```java
class Solution {
    public int clumsy(int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def clumsy(self, n):
        """
        :type n: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def clumsy(self, n: int) -> int:
```

### c
```c
int clumsy(int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public int Clumsy(int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var clumsy = function(n) {
    
};
```

### typescript
```typescript
function clumsy(n: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function clumsy($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func clumsy(_ n: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun clumsy(n: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int clumsy(int n) {
    
  }
}
```

### golang
```golang
func clumsy(n int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @return {Integer}
def clumsy(n)
    
end
```

### scala
```scala
object Solution {
    def clumsy(n: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn clumsy(n: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (clumsy n)
  (-> exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec clumsy(N :: integer()) -> integer().
clumsy(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec clumsy(n :: integer) :: integer
  def clumsy(n) do
    
  end
end
```
