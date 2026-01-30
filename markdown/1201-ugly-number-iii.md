# 1201. Ugly Number III

- Difficulty: Medium
- Topics: Math, Binary Search, Combinatorics, Number Theory
- Slug: ugly-number-iii
- Problem ID: 1307

## Description
An ugly number is a positive integer that is divisible by a, b, or c.
Given four integers n, a, b, and c, return the nth ugly number.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: n = 3, a = 2, b = 3, c = 5
Output: 4
Explanation: The ugly numbers are 2, 3, 4, 5, 6, 8, 9, 10... The 3rd is 4.
```

### Example 2
```text
Input: n = 4, a = 2, b = 3, c = 4
Output: 6
Explanation: The ugly numbers are 2, 3, 4, 6, 8, 9, 10, 12... The 4th is 6.
```

### Example 3
```text
Input: n = 5, a = 2, b = 11, c = 13
Output: 10
Explanation: The ugly numbers are 2, 4, 6, 8, 10, 11, 12, 13... The 5th is 10.
```


## Constraints
- 1 <= n, a, b, c <= 109
- 1 <= a * b * c <= 1018
- It is guaranteed that the result will be in range [1, 2 * 109].

## Hints
- Write a function f(k) to determine how many ugly numbers smaller than k. As f(k) is non-decreasing, try binary search.
- Find all ugly numbers in [1, LCM(a, b, c)] (LCM is Least Common Multiple). Use inclusion-exclusion principle to expand the result.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int nthUglyNumber(int n, int a, int b, int c) {
        
    }
};
```

### java
```java
class Solution {
    public int nthUglyNumber(int n, int a, int b, int c) {
        
    }
}
```

### python
```python
class Solution(object):
    def nthUglyNumber(self, n, a, b, c):
        """
        :type n: int
        :type a: int
        :type b: int
        :type c: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def nthUglyNumber(self, n: int, a: int, b: int, c: int) -> int:
```

### c
```c
int nthUglyNumber(int n, int a, int b, int c) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NthUglyNumber(int n, int a, int b, int c) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function(n, a, b, c) {
    
};
```

### typescript
```typescript
function nthUglyNumber(n: number, a: number, b: number, c: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @param Integer $a
     * @param Integer $b
     * @param Integer $c
     * @return Integer
     */
    function nthUglyNumber($n, $a, $b, $c) {
        
    }
}
```

### swift
```swift
class Solution {
    func nthUglyNumber(_ n: Int, _ a: Int, _ b: Int, _ c: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun nthUglyNumber(n: Int, a: Int, b: Int, c: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int nthUglyNumber(int n, int a, int b, int c) {
    
  }
}
```

### golang
```golang
func nthUglyNumber(n int, a int, b int, c int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer} a
# @param {Integer} b
# @param {Integer} c
# @return {Integer}
def nth_ugly_number(n, a, b, c)
    
end
```

### scala
```scala
object Solution {
    def nthUglyNumber(n: Int, a: Int, b: Int, c: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn nth_ugly_number(n: i32, a: i32, b: i32, c: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (nth-ugly-number n a b c)
  (-> exact-integer? exact-integer? exact-integer? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec nth_ugly_number(N :: integer(), A :: integer(), B :: integer(), C :: integer()) -> integer().
nth_ugly_number(N, A, B, C) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec nth_ugly_number(n :: integer, a :: integer, b :: integer, c :: integer) :: integer
  def nth_ugly_number(n, a, b, c) do
    
  end
end
```
