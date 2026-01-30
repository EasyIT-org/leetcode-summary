# 672. Bulb Switcher II

- Difficulty: Medium
- Topics: Math, Bit Manipulation, Depth-First Search, Breadth-First Search
- Slug: bulb-switcher-ii
- Problem ID: 672

## Description
There is a room with n bulbs labeled from 1 to n that all are turned on initially, and four buttons on the wall. Each of the four buttons has a different functionality where:
You must make exactly presses button presses in total. For each press, you may pick any of the four buttons to press.
Given the two integers n and presses, return the number of different possible statuses after performing all presses button presses.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: n = 1, presses = 1
Output: 2
Explanation: Status can be:
- [off] by pressing button 1
- [on] by pressing button 2
```

### Example 2
```text
Input: n = 2, presses = 1
Output: 3
Explanation: Status can be:
- [off, off] by pressing button 1
- [on, off] by pressing button 2
- [off, on] by pressing button 3
```

### Example 3
```text
Input: n = 3, presses = 1
Output: 4
Explanation: Status can be:
- [off, off, off] by pressing button 1
- [off, on, off] by pressing button 2
- [on, off, on] by pressing button 3
- [off, on, on] by pressing button 4
```


## Constraints
- 1 <= n <= 1000
- 0 <= presses <= 1000

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int flipLights(int n, int presses) {
        
    }
};
```

### java
```java
class Solution {
    public int flipLights(int n, int presses) {
        
    }
}
```

### python
```python
class Solution(object):
    def flipLights(self, n, presses):
        """
        :type n: int
        :type presses: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def flipLights(self, n: int, presses: int) -> int:
```

### c
```c
int flipLights(int n, int presses) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FlipLights(int n, int presses) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @param {number} presses
 * @return {number}
 */
var flipLights = function(n, presses) {
    
};
```

### typescript
```typescript
function flipLights(n: number, presses: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @param Integer $presses
     * @return Integer
     */
    function flipLights($n, $presses) {
        
    }
}
```

### swift
```swift
class Solution {
    func flipLights(_ n: Int, _ presses: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun flipLights(n: Int, presses: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int flipLights(int n, int presses) {
    
  }
}
```

### golang
```golang
func flipLights(n int, presses int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer} presses
# @return {Integer}
def flip_lights(n, presses)
    
end
```

### scala
```scala
object Solution {
    def flipLights(n: Int, presses: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn flip_lights(n: i32, presses: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (flip-lights n presses)
  (-> exact-integer? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec flip_lights(N :: integer(), Presses :: integer()) -> integer().
flip_lights(N, Presses) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec flip_lights(n :: integer, presses :: integer) :: integer
  def flip_lights(n, presses) do
    
  end
end
```
