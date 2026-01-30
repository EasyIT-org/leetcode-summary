# 526. Beautiful Arrangement

- Difficulty: Medium
- Topics: Array, Dynamic Programming, Backtracking, Bit Manipulation, Bitmask
- Slug: beautiful-arrangement
- Problem ID: 526

## Description
Suppose you have n integers labeled 1 through n. A permutation of those n integers perm (1-indexed) is considered a beautiful arrangement if for every i (1 <= i <= n), either of the following is true:
Given an integer n, return the number of the beautiful arrangements that you can construct.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 2
Output: 2
Explanation: 
The first beautiful arrangement is [1,2]:
    - perm[1] = 1 is divisible by i = 1
    - perm[2] = 2 is divisible by i = 2
The second beautiful arrangement is [2,1]:
    - perm[1] = 2 is divisible by i = 1
    - i = 2 is divisible by perm[2] = 1
```

### Example 2
```text
Input: n = 1
Output: 1
```


## Constraints
- 1 <= n <= 15

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int countArrangement(int n) {
        
    }
};
```

### java
```java
class Solution {
    public int countArrangement(int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def countArrangement(self, n):
        """
        :type n: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def countArrangement(self, n: int) -> int:
```

### c
```c
int countArrangement(int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public int CountArrangement(int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
    
};
```

### typescript
```typescript
function countArrangement(n: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function countArrangement($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func countArrangement(_ n: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun countArrangement(n: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int countArrangement(int n) {
    
  }
}
```

### golang
```golang
func countArrangement(n int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @return {Integer}
def count_arrangement(n)
    
end
```

### scala
```scala
object Solution {
    def countArrangement(n: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn count_arrangement(n: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (count-arrangement n)
  (-> exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec count_arrangement(N :: integer()) -> integer().
count_arrangement(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec count_arrangement(n :: integer) :: integer
  def count_arrangement(n) do
    
  end
end
```
