# 1137. N-th Tribonacci Number

- Difficulty: Easy
- Topics: Math, Dynamic Programming, Memoization
- Slug: n-th-tribonacci-number
- Problem ID: 1236

## Description
The Tribonacci sequence Tn is defined as follows:
T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
Given n, return the value of Tn.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
```

### Example 2
```text
Input: n = 25
Output: 1389537
```


## Constraints
- 0 <= n <= 37
- The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.

## Hints
- Make an array F of length 38, and set F[0] = 0, F[1] = F[2] = 1.
- Now write a loop where you set F[n+3] = F[n] + F[n+1] + F[n+2], and return F[n].

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int tribonacci(int n) {
        
    }
};
```

### java
```java
class Solution {
    public int tribonacci(int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def tribonacci(self, n):
        """
        :type n: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def tribonacci(self, n: int) -> int:
```

### c
```c
int tribonacci(int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public int Tribonacci(int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    
};
```

### typescript
```typescript
function tribonacci(n: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function tribonacci($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func tribonacci(_ n: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun tribonacci(n: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int tribonacci(int n) {
    
  }
}
```

### golang
```golang
func tribonacci(n int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @return {Integer}
def tribonacci(n)
    
end
```

### scala
```scala
object Solution {
    def tribonacci(n: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn tribonacci(n: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (tribonacci n)
  (-> exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec tribonacci(N :: integer()) -> integer().
tribonacci(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec tribonacci(n :: integer) :: integer
  def tribonacci(n) do
    
  end
end
```
