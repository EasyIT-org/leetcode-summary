# 935. Knight Dialer

- Difficulty: Medium
- Topics: Dynamic Programming
- Slug: knight-dialer
- Problem ID: 972

## Description
The chess knight has a unique movement, it may move two squares vertically and one square horizontally, or two squares horizontally and one square vertically (with both forming the shape of an L). The possible movements of chess knight are shown in this diagram:
A chess knight can move as indicated in the chess diagram below:
We have a chess knight and a phone pad as shown below, the knight can only stand on a numeric cell (i.e. blue cell).
Given an integer n, return how many distinct phone numbers of length n we can dial.
You are allowed to place the knight on any numeric cell initially and then you should perform n - 1 jumps to dial a number of length n. All jumps should be valid knight jumps.
As the answer may be very large, return the answer modulo 109 + 7.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: n = 1
Output: 10
Explanation: We need to dial a number of length 1, so placing the knight over any numeric cell of the 10 cells is sufficient.
```
Images:
- https://assets.leetcode.com/uploads/2020/08/18/phone.jpg

### Example 2
```text
Input: n = 2
Output: 20
Explanation: All the valid number we can dial are [04, 06, 16, 18, 27, 29, 34, 38, 40, 43, 49, 60, 61, 67, 72, 76, 81, 83, 92, 94]
```
Images:
- https://assets.leetcode.com/uploads/2020/08/18/phone.jpg

### Example 3
```text
Input: n = 3131
Output: 136006598
Explanation: Please take care of the mod.
```
Images:
- https://assets.leetcode.com/uploads/2020/08/18/phone.jpg


## Constraints
- 1 <= n <= 5000

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int knightDialer(int n) {
        
    }
};
```

### java
```java
class Solution {
    public int knightDialer(int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def knightDialer(self, n):
        """
        :type n: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def knightDialer(self, n: int) -> int:
```

### c
```c
int knightDialer(int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public int KnightDialer(int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
    
};
```

### typescript
```typescript
function knightDialer(n: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function knightDialer($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func knightDialer(_ n: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun knightDialer(n: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int knightDialer(int n) {
    
  }
}
```

### golang
```golang
func knightDialer(n int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @return {Integer}
def knight_dialer(n)
    
end
```

### scala
```scala
object Solution {
    def knightDialer(n: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn knight_dialer(n: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (knight-dialer n)
  (-> exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec knight_dialer(N :: integer()) -> integer().
knight_dialer(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec knight_dialer(n :: integer) :: integer
  def knight_dialer(n) do
    
  end
end
```
