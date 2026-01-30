# 762. Prime Number of Set Bits in Binary Representation

- Difficulty: Easy
- Topics: Math, Bit Manipulation
- Slug: prime-number-of-set-bits-in-binary-representation
- Problem ID: 767

## Description
Given two integers left and right, return the count of numbers in the inclusive range [left, right] having a prime number of set bits in their binary representation.
Recall that the number of set bits an integer has is the number of 1's present when written in binary.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: left = 6, right = 10
Output: 4
Explanation:
6  -> 110 (2 set bits, 2 is prime)
7  -> 111 (3 set bits, 3 is prime)
8  -> 1000 (1 set bit, 1 is not prime)
9  -> 1001 (2 set bits, 2 is prime)
10 -> 1010 (2 set bits, 2 is prime)
4 numbers have a prime number of set bits.
```

### Example 2
```text
Input: left = 10, right = 15
Output: 5
Explanation:
10 -> 1010 (2 set bits, 2 is prime)
11 -> 1011 (3 set bits, 3 is prime)
12 -> 1100 (2 set bits, 2 is prime)
13 -> 1101 (3 set bits, 3 is prime)
14 -> 1110 (3 set bits, 3 is prime)
15 -> 1111 (4 set bits, 4 is not prime)
5 numbers have a prime number of set bits.
```


## Constraints
- 1 <= left <= right <= 106
- 0 <= right - left <= 104

## Hints
- Write a helper function to count the number of set bits in a number, then check whether the number of set bits is 2, 3, 5, 7, 11, 13, 17 or 19.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int countPrimeSetBits(int left, int right) {
        
    }
};
```

### java
```java
class Solution {
    public int countPrimeSetBits(int left, int right) {
        
    }
}
```

### python
```python
class Solution(object):
    def countPrimeSetBits(self, left, right):
        """
        :type left: int
        :type right: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def countPrimeSetBits(self, left: int, right: int) -> int:
```

### c
```c
int countPrimeSetBits(int left, int right) {
    
}
```

### csharp
```csharp
public class Solution {
    public int CountPrimeSetBits(int left, int right) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    
};
```

### typescript
```typescript
function countPrimeSetBits(left: number, right: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $left
     * @param Integer $right
     * @return Integer
     */
    function countPrimeSetBits($left, $right) {
        
    }
}
```

### swift
```swift
class Solution {
    func countPrimeSetBits(_ left: Int, _ right: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun countPrimeSetBits(left: Int, right: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int countPrimeSetBits(int left, int right) {
    
  }
}
```

### golang
```golang
func countPrimeSetBits(left int, right int) int {
    
}
```

### ruby
```ruby
# @param {Integer} left
# @param {Integer} right
# @return {Integer}
def count_prime_set_bits(left, right)
    
end
```

### scala
```scala
object Solution {
    def countPrimeSetBits(left: Int, right: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn count_prime_set_bits(left: i32, right: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (count-prime-set-bits left right)
  (-> exact-integer? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec count_prime_set_bits(Left :: integer(), Right :: integer()) -> integer().
count_prime_set_bits(Left, Right) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec count_prime_set_bits(left :: integer, right :: integer) :: integer
  def count_prime_set_bits(left, right) do
    
  end
end
```
