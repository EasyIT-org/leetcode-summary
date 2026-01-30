# 50. Pow(x, n)

- Difficulty: Medium
- Topics: Math, Recursion
- Slug: powx-n
- Problem ID: 50

## Description
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: x = 2.00000, n = 10
Output: 1024.00000
```

### Example 2
```text
Input: x = 2.10000, n = 3
Output: 9.26100
```

### Example 3
```text
Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
```


## Constraints
- -100.0 < x < 100.0
- -231 <= n <= 231-1
- n is an integer.
- Either x is not zero or n > 0.
- -104 <= xn <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    double myPow(double x, int n) {
        
    }
};
```

### java
```java
class Solution {
    public double myPow(double x, int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def myPow(self, x, n):
        """
        :type x: float
        :type n: int
        :rtype: float
        """
```

### python3
```python3
class Solution:
    def myPow(self, x: float, n: int) -> float:
```

### c
```c
double myPow(double x, int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public double MyPow(double x, int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    
};
```

### typescript
```typescript
function myPow(x: number, n: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Float $x
     * @param Integer $n
     * @return Float
     */
    function myPow($x, $n) {
        
    }
}
```

### swift
```swift
class Solution {
    func myPow(_ x: Double, _ n: Int) -> Double {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun myPow(x: Double, n: Int): Double {
        
    }
}
```

### dart
```dart
class Solution {
  double myPow(double x, int n) {
    
  }
}
```

### golang
```golang
func myPow(x float64, n int) float64 {
    
}
```

### ruby
```ruby
# @param {Float} x
# @param {Integer} n
# @return {Float}
def my_pow(x, n)
    
end
```

### scala
```scala
object Solution {
    def myPow(x: Double, n: Int): Double = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn my_pow(x: f64, n: i32) -> f64 {
        
    }
}
```

### racket
```racket
(define/contract (my-pow x n)
  (-> flonum? exact-integer? flonum?)
  )
```

### erlang
```erlang
-spec my_pow(X :: float(), N :: integer()) -> float().
my_pow(X, N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec my_pow(x :: float, n :: integer) :: float
  def my_pow(x, n) do
    
  end
end
```
