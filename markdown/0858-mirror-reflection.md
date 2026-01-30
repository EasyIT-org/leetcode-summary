# 858. Mirror Reflection

- Difficulty: Medium
- Topics: Math, Geometry, Number Theory
- Slug: mirror-reflection
- Problem ID: 888

## Description
There is a special square room with mirrors on each of the four walls. Except for the southwest corner, there are receptors on each of the remaining corners, numbered 0, 1, and 2.
The square room has walls of length p and a laser ray from the southwest corner first meets the east wall at a distance q from the 0th receptor.
Given the two integers p and q, return the number of the receptor that the ray meets first.
The test cases are guaranteed so that the ray will meet a receptor eventually.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: p = 2, q = 1
Output: 2
Explanation: The ray meets receptor 2 the first time it gets reflected back to the left wall.
```
Images:
- https://s3-lc-upload.s3.amazonaws.com/uploads/2018/06/18/reflection.png

### Example 2
```text
Input: p = 3, q = 1
Output: 1
```
Images:
- https://s3-lc-upload.s3.amazonaws.com/uploads/2018/06/18/reflection.png


## Constraints
- 1 <= q <= p <= 1000

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int mirrorReflection(int p, int q) {
        
    }
};
```

### java
```java
class Solution {
    public int mirrorReflection(int p, int q) {
        
    }
}
```

### python
```python
class Solution(object):
    def mirrorReflection(self, p, q):
        """
        :type p: int
        :type q: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def mirrorReflection(self, p: int, q: int) -> int:
```

### c
```c
int mirrorReflection(int p, int q) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MirrorReflection(int p, int q) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function(p, q) {
    
};
```

### typescript
```typescript
function mirrorReflection(p: number, q: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $p
     * @param Integer $q
     * @return Integer
     */
    function mirrorReflection($p, $q) {
        
    }
}
```

### swift
```swift
class Solution {
    func mirrorReflection(_ p: Int, _ q: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun mirrorReflection(p: Int, q: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int mirrorReflection(int p, int q) {
    
  }
}
```

### golang
```golang
func mirrorReflection(p int, q int) int {
    
}
```

### ruby
```ruby
# @param {Integer} p
# @param {Integer} q
# @return {Integer}
def mirror_reflection(p, q)
    
end
```

### scala
```scala
object Solution {
    def mirrorReflection(p: Int, q: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn mirror_reflection(p: i32, q: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (mirror-reflection p q)
  (-> exact-integer? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec mirror_reflection(P :: integer(), Q :: integer()) -> integer().
mirror_reflection(P, Q) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec mirror_reflection(p :: integer, q :: integer) :: integer
  def mirror_reflection(p, q) do
    
  end
end
```
