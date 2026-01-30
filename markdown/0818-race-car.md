# 818. Race Car

- Difficulty: Hard
- Topics: Dynamic Programming
- Slug: race-car
- Problem ID: 836

## Description
Your car starts at position 0 and speed +1 on an infinite number line. Your car can go into negative positions. Your car drives automatically according to a sequence of instructions 'A' (accelerate) and 'R' (reverse):
For example, after commands "AAR", your car goes to positions 0 --> 1 --> 3 --> 3, and your speed goes to 1 --> 2 --> 4 --> -1.
Given a target position target, return the length of the shortest sequence of instructions to get there.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: target = 3
Output: 2
Explanation: 
The shortest instruction sequence is "AA".
Your position goes from 0 --> 1 --> 3.
```

### Example 2
```text
Input: target = 6
Output: 5
Explanation: 
The shortest instruction sequence is "AAARA".
Your position goes from 0 --> 1 --> 3 --> 7 --> 7 --> 6.
```


## Constraints
- 1 <= target <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int racecar(int target) {
        
    }
};
```

### java
```java
class Solution {
    public int racecar(int target) {
        
    }
}
```

### python
```python
class Solution(object):
    def racecar(self, target):
        """
        :type target: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def racecar(self, target: int) -> int:
```

### c
```c
int racecar(int target) {
    
}
```

### csharp
```csharp
public class Solution {
    public int Racecar(int target) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} target
 * @return {number}
 */
var racecar = function(target) {
    
};
```

### typescript
```typescript
function racecar(target: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $target
     * @return Integer
     */
    function racecar($target) {
        
    }
}
```

### swift
```swift
class Solution {
    func racecar(_ target: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun racecar(target: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int racecar(int target) {
    
  }
}
```

### golang
```golang
func racecar(target int) int {
    
}
```

### ruby
```ruby
# @param {Integer} target
# @return {Integer}
def racecar(target)
    
end
```

### scala
```scala
object Solution {
    def racecar(target: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn racecar(target: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (racecar target)
  (-> exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec racecar(Target :: integer()) -> integer().
racecar(Target) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec racecar(target :: integer) :: integer
  def racecar(target) do
    
  end
end
```
