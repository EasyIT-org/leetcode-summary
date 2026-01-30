# 738. Monotone Increasing Digits

- Difficulty: Medium
- Topics: Math, Greedy
- Slug: monotone-increasing-digits
- Problem ID: 738

## Description
An integer has monotone increasing digits if and only if each pair of adjacent digits x and y satisfy x <= y.
Given an integer n, return the largest number that is less than or equal to n with monotone increasing digits.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: n = 10
Output: 9
```

### Example 2
```text
Input: n = 1234
Output: 1234
```

### Example 3
```text
Input: n = 332
Output: 299
```


## Constraints
- 0 <= n <= 109

## Hints
- Build the answer digit by digit, adding the largest possible one that would make the number still less than or equal to N.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int monotoneIncreasingDigits(int n) {
        
    }
};
```

### java
```java
class Solution {
    public int monotoneIncreasingDigits(int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def monotoneIncreasingDigits(self, n):
        """
        :type n: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def monotoneIncreasingDigits(self, n: int) -> int:
```

### c
```c
int monotoneIncreasingDigits(int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MonotoneIncreasingDigits(int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
    
};
```

### typescript
```typescript
function monotoneIncreasingDigits(n: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function monotoneIncreasingDigits($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func monotoneIncreasingDigits(_ n: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun monotoneIncreasingDigits(n: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int monotoneIncreasingDigits(int n) {
    
  }
}
```

### golang
```golang
func monotoneIncreasingDigits(n int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @return {Integer}
def monotone_increasing_digits(n)
    
end
```

### scala
```scala
object Solution {
    def monotoneIncreasingDigits(n: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn monotone_increasing_digits(n: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (monotone-increasing-digits n)
  (-> exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec monotone_increasing_digits(N :: integer()) -> integer().
monotone_increasing_digits(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec monotone_increasing_digits(n :: integer) :: integer
  def monotone_increasing_digits(n) do
    
  end
end
```
