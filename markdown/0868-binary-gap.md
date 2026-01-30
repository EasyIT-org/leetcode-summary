# 868. Binary Gap

- Difficulty: Easy
- Topics: Bit Manipulation
- Slug: binary-gap
- Problem ID: 899

## Description
Given a positive integer n, find and return the longest distance between any two adjacent 1's in the binary representation of n. If there are no two adjacent 1's, return 0.
Two 1's are adjacent if there are only 0's separating them (possibly no 0's). The distance between two 1's is the absolute difference between their bit positions. For example, the two 1's in "1001" have a distance of 3.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: n = 22
Output: 2
Explanation: 22 in binary is "10110".
The first adjacent pair of 1's is "10110" with a distance of 2.
The second adjacent pair of 1's is "10110" with a distance of 1.
The answer is the largest of these two distances, which is 2.
Note that "10110" is not a valid pair since there is a 1 separating the two 1's underlined.
```

### Example 2
```text
Input: n = 8
Output: 0
Explanation: 8 in binary is "1000".
There are not any adjacent pairs of 1's in the binary representation of 8, so we return 0.
```

### Example 3
```text
Input: n = 5
Output: 2
Explanation: 5 in binary is "101".
```


## Constraints
- 1 <= n <= 109

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int binaryGap(int n) {
        
    }
};
```

### java
```java
class Solution {
    public int binaryGap(int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def binaryGap(self, n):
        """
        :type n: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def binaryGap(self, n: int) -> int:
```

### c
```c
int binaryGap(int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public int BinaryGap(int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    
};
```

### typescript
```typescript
function binaryGap(n: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function binaryGap($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func binaryGap(_ n: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun binaryGap(n: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int binaryGap(int n) {
    
  }
}
```

### golang
```golang
func binaryGap(n int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @return {Integer}
def binary_gap(n)
    
end
```

### scala
```scala
object Solution {
    def binaryGap(n: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn binary_gap(n: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (binary-gap n)
  (-> exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec binary_gap(N :: integer()) -> integer().
binary_gap(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec binary_gap(n :: integer) :: integer
  def binary_gap(n) do
    
  end
end
```
