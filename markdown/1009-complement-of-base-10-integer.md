# 1009. Complement of Base 10 Integer

- Difficulty: Easy
- Topics: Bit Manipulation
- Slug: complement-of-base-10-integer
- Problem ID: 1054

## Description
The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.
Given an integer n, return its complement.
Example 1:
Example 2:
Example 3:
Constraints:
Note: This question is the same as 476: https://leetcode.com/problems/number-complement/

## Examples
### Example 1
```text
Input: n = 5
Output: 2
Explanation: 5 is "101" in binary, with complement "010" in binary, which is 2 in base-10.
```

### Example 2
```text
Input: n = 7
Output: 0
Explanation: 7 is "111" in binary, with complement "000" in binary, which is 0 in base-10.
```

### Example 3
```text
Input: n = 10
Output: 5
Explanation: 10 is "1010" in binary, with complement "0101" in binary, which is 5 in base-10.
```


## Constraints
- 0 <= n < 109

## Hints
- A binary number plus its complement will equal 111....111 in binary.  Also, N = 0 is a corner case.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int bitwiseComplement(int n) {
        
    }
};
```

### java
```java
class Solution {
    public int bitwiseComplement(int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def bitwiseComplement(self, n):
        """
        :type n: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def bitwiseComplement(self, n: int) -> int:
```

### c
```c
int bitwiseComplement(int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public int BitwiseComplement(int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    
};
```

### typescript
```typescript
function bitwiseComplement(n: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function bitwiseComplement($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func bitwiseComplement(_ n: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun bitwiseComplement(n: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int bitwiseComplement(int n) {
    
  }
}
```

### golang
```golang
func bitwiseComplement(n int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @return {Integer}
def bitwise_complement(n)
    
end
```

### scala
```scala
object Solution {
    def bitwiseComplement(n: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn bitwise_complement(n: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (bitwise-complement n)
  (-> exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec bitwise_complement(N :: integer()) -> integer().
bitwise_complement(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec bitwise_complement(n :: integer) :: integer
  def bitwise_complement(n) do
    
  end
end
```
