# 357. Count Numbers with Unique Digits

- Difficulty: Medium
- Topics: Math, Dynamic Programming, Backtracking
- Slug: count-numbers-with-unique-digits
- Problem ID: 357

## Description
Given an integer n, return the count of all numbers with unique digits, x, where 0 <= x < 10n.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 2
Output: 91
Explanation: The answer should be the total numbers in the range of 0 ≤ x < 100, excluding 11,22,33,44,55,66,77,88,99
```

### Example 2
```text
Input: n = 0
Output: 1
```


## Constraints
- 0 <= n <= 8

## Hints
- A direct way is to use the backtracking approach.
- Backtracking should contains three states which are (the current number, number of steps to get that number and a bitmask which represent which number is marked as visited so far in the current number). Start with state (0,0,0) and count all valid number till we reach number of steps equals to 10<sup>n</sup>.
- This problem can also be solved using a dynamic programming approach and some knowledge of combinatorics.
- Let f(k) = count of numbers with unique digits with length equals k.
- f(1) = 10, ..., f(k) = 9 * 9 * 8 * ... (9 - k + 2) [The first factor is 9 because a number cannot start with 0].

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int countNumbersWithUniqueDigits(int n) {
        
    }
};
```

### java
```java
class Solution {
    public int countNumbersWithUniqueDigits(int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def countNumbersWithUniqueDigits(self, n):
        """
        :type n: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def countNumbersWithUniqueDigits(self, n: int) -> int:
```

### c
```c
int countNumbersWithUniqueDigits(int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public int CountNumbersWithUniqueDigits(int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    
};
```

### typescript
```typescript
function countNumbersWithUniqueDigits(n: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function countNumbersWithUniqueDigits($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func countNumbersWithUniqueDigits(_ n: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun countNumbersWithUniqueDigits(n: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int countNumbersWithUniqueDigits(int n) {
    
  }
}
```

### golang
```golang
func countNumbersWithUniqueDigits(n int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @return {Integer}
def count_numbers_with_unique_digits(n)
    
end
```

### scala
```scala
object Solution {
    def countNumbersWithUniqueDigits(n: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn count_numbers_with_unique_digits(n: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (count-numbers-with-unique-digits n)
  (-> exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec count_numbers_with_unique_digits(N :: integer()) -> integer().
count_numbers_with_unique_digits(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec count_numbers_with_unique_digits(n :: integer) :: integer
  def count_numbers_with_unique_digits(n) do
    
  end
end
```
