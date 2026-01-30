# 313. Super Ugly Number

- Difficulty: Medium
- Topics: Array, Math, Dynamic Programming
- Slug: super-ugly-number
- Problem ID: 313

## Description
A super ugly number is a positive integer whose prime factors are in the array primes.
Given an integer n and an array of integers primes, return the nth super ugly number.
The nth super ugly number is guaranteed to fit in a 32-bit signed integer.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 12, primes = [2,7,13,19]
Output: 32
Explanation: [1,2,4,7,8,13,14,16,19,26,28,32] is the sequence of the first 12 super ugly numbers given primes = [2,7,13,19].
```

### Example 2
```text
Input: n = 1, primes = [2,3,5]
Output: 1
Explanation: 1 has no prime factors, therefore all of its prime factors are in the array primes = [2,3,5].
```


## Constraints
- 1 <= n <= 105
- 1 <= primes.length <= 100
- 2 <= primes[i] <= 1000
- primes[i] is guaranteed to be a prime number.
- All the values of primes are unique and sorted in ascending order.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int nthSuperUglyNumber(int n, vector<int>& primes) {
        
    }
};
```

### java
```java
class Solution {
    public int nthSuperUglyNumber(int n, int[] primes) {
        
    }
}
```

### python
```python
class Solution(object):
    def nthSuperUglyNumber(self, n, primes):
        """
        :type n: int
        :type primes: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def nthSuperUglyNumber(self, n: int, primes: List[int]) -> int:
```

### c
```c
int nthSuperUglyNumber(int n, int* primes, int primesSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NthSuperUglyNumber(int n, int[] primes) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    
};
```

### typescript
```typescript
function nthSuperUglyNumber(n: number, primes: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @param Integer[] $primes
     * @return Integer
     */
    function nthSuperUglyNumber($n, $primes) {
        
    }
}
```

### swift
```swift
class Solution {
    func nthSuperUglyNumber(_ n: Int, _ primes: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun nthSuperUglyNumber(n: Int, primes: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int nthSuperUglyNumber(int n, List<int> primes) {
    
  }
}
```

### golang
```golang
func nthSuperUglyNumber(n int, primes []int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer[]} primes
# @return {Integer}
def nth_super_ugly_number(n, primes)
    
end
```

### scala
```scala
object Solution {
    def nthSuperUglyNumber(n: Int, primes: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn nth_super_ugly_number(n: i32, primes: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (nth-super-ugly-number n primes)
  (-> exact-integer? (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec nth_super_ugly_number(N :: integer(), Primes :: [integer()]) -> integer().
nth_super_ugly_number(N, Primes) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec nth_super_ugly_number(n :: integer, primes :: [integer]) :: integer
  def nth_super_ugly_number(n, primes) do
    
  end
end
```
