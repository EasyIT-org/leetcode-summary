# 887. Super Egg Drop

- Difficulty: Hard
- Topics: Math, Binary Search, Dynamic Programming
- Slug: super-egg-drop
- Problem ID: 923

## Description
You are given k identical eggs and you have access to a building with n floors labeled from 1 to n.
You know that there exists a floor f where 0 <= f <= n such that any egg dropped at a floor higher than f will break, and any egg dropped at or below floor f will not break.
Each move, you may take an unbroken egg and drop it from any floor x (where 1 <= x <= n). If the egg breaks, you can no longer use it. However, if the egg does not break, you may reuse it in future moves.
Return the minimum number of moves that you need to determine with certainty what the value of f is.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: k = 1, n = 2
Output: 2
Explanation: 
Drop the egg from floor 1. If it breaks, we know that f = 0.
Otherwise, drop the egg from floor 2. If it breaks, we know that f = 1.
If it does not break, then we know f = 2.
Hence, we need at minimum 2 moves to determine with certainty what the value of f is.
```

### Example 2
```text
Input: k = 2, n = 6
Output: 3
```

### Example 3
```text
Input: k = 3, n = 14
Output: 4
```


## Constraints
- 1 <= k <= 100
- 1 <= n <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int superEggDrop(int k, int n) {
        
    }
};
```

### java
```java
class Solution {
    public int superEggDrop(int k, int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def superEggDrop(self, k, n):
        """
        :type k: int
        :type n: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def superEggDrop(self, k: int, n: int) -> int:
```

### c
```c
int superEggDrop(int k, int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public int SuperEggDrop(int k, int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function(k, n) {
    
};
```

### typescript
```typescript
function superEggDrop(k: number, n: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $k
     * @param Integer $n
     * @return Integer
     */
    function superEggDrop($k, $n) {
        
    }
}
```

### swift
```swift
class Solution {
    func superEggDrop(_ k: Int, _ n: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun superEggDrop(k: Int, n: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int superEggDrop(int k, int n) {
    
  }
}
```

### golang
```golang
func superEggDrop(k int, n int) int {
    
}
```

### ruby
```ruby
# @param {Integer} k
# @param {Integer} n
# @return {Integer}
def super_egg_drop(k, n)
    
end
```

### scala
```scala
object Solution {
    def superEggDrop(k: Int, n: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn super_egg_drop(k: i32, n: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (super-egg-drop k n)
  (-> exact-integer? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec super_egg_drop(K :: integer(), N :: integer()) -> integer().
super_egg_drop(K, N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec super_egg_drop(k :: integer, n :: integer) :: integer
  def super_egg_drop(k, n) do
    
  end
end
```
