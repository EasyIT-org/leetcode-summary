# 780. Reaching Points

- Difficulty: Hard
- Topics: Math
- Slug: reaching-points
- Problem ID: 796

## Description
Given four integers sx, sy, tx, and ty, return true if it is possible to convert the point (sx, sy) to the point (tx, ty) through some operations, or false otherwise.
The allowed operation on some point (x, y) is to convert it to either (x, x + y) or (x + y, y).
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: sx = 1, sy = 1, tx = 3, ty = 5
Output: true
Explanation:
One series of moves that transforms the starting point to the target is:
(1, 1) -> (1, 2)
(1, 2) -> (3, 2)
(3, 2) -> (3, 5)
```

### Example 2
```text
Input: sx = 1, sy = 1, tx = 2, ty = 2
Output: false
```

### Example 3
```text
Input: sx = 1, sy = 1, tx = 1, ty = 1
Output: true
```


## Constraints
- 1 <= sx, sy, tx, ty <= 109

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool reachingPoints(int sx, int sy, int tx, int ty) {
        
    }
};
```

### java
```java
class Solution {
    public boolean reachingPoints(int sx, int sy, int tx, int ty) {
        
    }
}
```

### python
```python
class Solution(object):
    def reachingPoints(self, sx, sy, tx, ty):
        """
        :type sx: int
        :type sy: int
        :type tx: int
        :type ty: int
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def reachingPoints(self, sx: int, sy: int, tx: int, ty: int) -> bool:
```

### c
```c
bool reachingPoints(int sx, int sy, int tx, int ty) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool ReachingPoints(int sx, int sy, int tx, int ty) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function(sx, sy, tx, ty) {
    
};
```

### typescript
```typescript
function reachingPoints(sx: number, sy: number, tx: number, ty: number): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $sx
     * @param Integer $sy
     * @param Integer $tx
     * @param Integer $ty
     * @return Boolean
     */
    function reachingPoints($sx, $sy, $tx, $ty) {
        
    }
}
```

### swift
```swift
class Solution {
    func reachingPoints(_ sx: Int, _ sy: Int, _ tx: Int, _ ty: Int) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun reachingPoints(sx: Int, sy: Int, tx: Int, ty: Int): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool reachingPoints(int sx, int sy, int tx, int ty) {
    
  }
}
```

### golang
```golang
func reachingPoints(sx int, sy int, tx int, ty int) bool {
    
}
```

### ruby
```ruby
# @param {Integer} sx
# @param {Integer} sy
# @param {Integer} tx
# @param {Integer} ty
# @return {Boolean}
def reaching_points(sx, sy, tx, ty)
    
end
```

### scala
```scala
object Solution {
    def reachingPoints(sx: Int, sy: Int, tx: Int, ty: Int): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn reaching_points(sx: i32, sy: i32, tx: i32, ty: i32) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (reaching-points sx sy tx ty)
  (-> exact-integer? exact-integer? exact-integer? exact-integer? boolean?)
  )
```

### erlang
```erlang
-spec reaching_points(Sx :: integer(), Sy :: integer(), Tx :: integer(), Ty :: integer()) -> boolean().
reaching_points(Sx, Sy, Tx, Ty) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec reaching_points(sx :: integer, sy :: integer, tx :: integer, ty :: integer) :: boolean
  def reaching_points(sx, sy, tx, ty) do
    
  end
end
```
