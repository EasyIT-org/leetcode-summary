# 1175. Prime Arrangements

- Difficulty: Easy
- Topics: Math
- Slug: prime-arrangements
- Problem ID: 1279

## Description
Return the number of permutations of 1 to n so that prime numbers are at prime indices (1-indexed.)
(Recall that an integer is prime if and only if it is greater than 1, and cannot be written as a product of two positive integers both smaller than it.)
Since the answer may be large, return the answer modulo 10^9 + 7.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 5
Output: 12
Explanation: For example [1,2,5,4,3] is a valid permutation, but [5,2,3,4,1] is not because the prime number 5 is at index 1.
```

### Example 2
```text
Input: n = 100
Output: 682289015
```


## Constraints
- 1 <= n <= 100

## Hints
- Solve the problem for prime numbers and composite numbers separately.
- Multiply the number of permutations of prime numbers over prime indices with the number of permutations of composite numbers over composite indices.
- The number of permutations equals the factorial.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numPrimeArrangements(int n) {
        
    }
};
```

### java
```java
class Solution {
    public int numPrimeArrangements(int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def numPrimeArrangements(self, n):
        """
        :type n: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numPrimeArrangements(self, n: int) -> int:
```

### c
```c
int numPrimeArrangements(int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumPrimeArrangements(int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
    
};
```

### typescript
```typescript
function numPrimeArrangements(n: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function numPrimeArrangements($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func numPrimeArrangements(_ n: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numPrimeArrangements(n: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numPrimeArrangements(int n) {
    
  }
}
```

### golang
```golang
func numPrimeArrangements(n int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @return {Integer}
def num_prime_arrangements(n)
    
end
```

### scala
```scala
object Solution {
    def numPrimeArrangements(n: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_prime_arrangements(n: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-prime-arrangements n)
  (-> exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec num_prime_arrangements(N :: integer()) -> integer().
num_prime_arrangements(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_prime_arrangements(n :: integer) :: integer
  def num_prime_arrangements(n) do
    
  end
end
```
