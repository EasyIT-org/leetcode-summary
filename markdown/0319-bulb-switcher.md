# 319. Bulb Switcher

- Difficulty: Medium
- Topics: Math, Brainteaser
- Slug: bulb-switcher
- Problem ID: 319

## Description
There are n bulbs that are initially off. You first turn on all the bulbs, then you turn off every second bulb.
On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb.
Return the number of bulbs that are on after n rounds.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: n = 3
Output: 1
Explanation: At first, the three bulbs are [off, off, off].
After the first round, the three bulbs are [on, on, on].
After the second round, the three bulbs are [on, off, on].
After the third round, the three bulbs are [on, off, off]. 
So you should return 1 because there is only one bulb is on.
```
Images:
- https://assets.leetcode.com/uploads/2020/11/05/bulb.jpg

### Example 2
```text
Input: n = 0
Output: 0
```
Images:
- https://assets.leetcode.com/uploads/2020/11/05/bulb.jpg

### Example 3
```text
Input: n = 1
Output: 1
```
Images:
- https://assets.leetcode.com/uploads/2020/11/05/bulb.jpg


## Constraints
- 0 <= n <= 109

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int bulbSwitch(int n) {
        
    }
};
```

### java
```java
class Solution {
    public int bulbSwitch(int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def bulbSwitch(self, n):
        """
        :type n: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def bulbSwitch(self, n: int) -> int:
```

### c
```c
int bulbSwitch(int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public int BulbSwitch(int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    
};
```

### typescript
```typescript
function bulbSwitch(n: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function bulbSwitch($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func bulbSwitch(_ n: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun bulbSwitch(n: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int bulbSwitch(int n) {
    
  }
}
```

### golang
```golang
func bulbSwitch(n int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @return {Integer}
def bulb_switch(n)
    
end
```

### scala
```scala
object Solution {
    def bulbSwitch(n: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn bulb_switch(n: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (bulb-switch n)
  (-> exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec bulb_switch(N :: integer()) -> integer().
bulb_switch(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec bulb_switch(n :: integer) :: integer
  def bulb_switch(n) do
    
  end
end
```
