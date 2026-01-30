# 204. Count Primes

- Difficulty: Medium
- Topics: Array, Math, Enumeration, Number Theory
- Slug: count-primes
- Problem ID: 204

## Description
Given an integer n, return the number of prime numbers that are strictly less than n.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
```

### Example 2
```text
Input: n = 0
Output: 0
```

### Example 3
```text
Input: n = 1
Output: 0
```


## Constraints
- 0 <= n <= 5 * 106

## Hints
- Checking all the integers in the range [1, n - 1] is not efficient. Think about a better approach.
- Since most of the numbers are not primes, we need a fast approach to exclude the non-prime integers.
- Use Sieve of Eratosthenes.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int countPrimes(int n) {
        
    }
};
```

### java
```java
class Solution {
    public int countPrimes(int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def countPrimes(self, n):
        """
        :type n: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def countPrimes(self, n: int) -> int:
```

### c
```c
int countPrimes(int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public int CountPrimes(int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    
};
```

### typescript
```typescript
function countPrimes(n: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function countPrimes($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func countPrimes(_ n: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun countPrimes(n: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int countPrimes(int n) {
    
  }
}
```

### golang
```golang
func countPrimes(n int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @return {Integer}
def count_primes(n)
    
end
```

### scala
```scala
object Solution {
    def countPrimes(n: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn count_primes(n: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (count-primes n)
  (-> exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec count_primes(N :: integer()) -> integer().
count_primes(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec count_primes(n :: integer) :: integer
  def count_primes(n) do
    
  end
end
```
