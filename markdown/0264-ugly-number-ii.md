# 264. Ugly Number II

- Difficulty: Medium
- Topics: Hash Table, Math, Dynamic Programming, Heap (Priority Queue)
- Slug: ugly-number-ii
- Problem ID: 264

## Description
An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
Given an integer n, return the nth ugly number.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 10
Output: 12
Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.
```

### Example 2
```text
Input: n = 1
Output: 1
Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
```


## Constraints
- 1 <= n <= 1690

## Hints
- The naive approach is to call <code>isUgly</code> for every number until you reach the n<sup>th</sup> one. Most numbers are <i>not</i> ugly. Try to focus your effort on generating only the ugly ones.
- An ugly number must be multiplied by either 2, 3, or 5 from a smaller ugly number.
- The key is how to maintain the order of the ugly numbers. Try a similar approach of merging from three sorted lists: L<sub>1</sub>, L<sub>2</sub>, and L<sub>3</sub>.
- Assume you have U<sub>k</sub>, the k<sup>th</sup> ugly number. Then U<sub>k+1</sub> must be Min(L<sub>1</sub> * 2, L<sub>2</sub> * 3, L<sub>3</sub> * 5).

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int nthUglyNumber(int n) {
        
    }
};
```

### java
```java
class Solution {
    public int nthUglyNumber(int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def nthUglyNumber(self, n):
        """
        :type n: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def nthUglyNumber(self, n: int) -> int:
```

### c
```c
int nthUglyNumber(int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NthUglyNumber(int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    
};
```

### typescript
```typescript
function nthUglyNumber(n: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function nthUglyNumber($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func nthUglyNumber(_ n: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun nthUglyNumber(n: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int nthUglyNumber(int n) {
    
  }
}
```

### golang
```golang
func nthUglyNumber(n int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @return {Integer}
def nth_ugly_number(n)
    
end
```

### scala
```scala
object Solution {
    def nthUglyNumber(n: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn nth_ugly_number(n: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (nth-ugly-number n)
  (-> exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec nth_ugly_number(N :: integer()) -> integer().
nth_ugly_number(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec nth_ugly_number(n :: integer) :: integer
  def nth_ugly_number(n) do
    
  end
end
```
