# 650. 2 Keys Keyboard

- Difficulty: Medium
- Topics: Math, Dynamic Programming
- Slug: 2-keys-keyboard
- Problem ID: 650

## Description
There is only one character 'A' on the screen of a notepad. You can perform one of two operations on this notepad for each step:
Given an integer n, return the minimum number of operations to get the character 'A' exactly n times on the screen.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 3
Output: 3
Explanation: Initially, we have one character 'A'.
In step 1, we use Copy All operation.
In step 2, we use Paste operation to get 'AA'.
In step 3, we use Paste operation to get 'AAA'.
```

### Example 2
```text
Input: n = 1
Output: 0
```


## Constraints
- 1 <= n <= 1000

## Hints
- How many characters may be there in the clipboard at the last step if n = 3? n = 7? n = 10? n = 24?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int minSteps(int n) {
        
    }
};
```

### java
```java
class Solution {
    public int minSteps(int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def minSteps(self, n):
        """
        :type n: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minSteps(self, n: int) -> int:
```

### c
```c
int minSteps(int n) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinSteps(int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    
};
```

### typescript
```typescript
function minSteps(n: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function minSteps($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func minSteps(_ n: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minSteps(n: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minSteps(int n) {
    
  }
}
```

### golang
```golang
func minSteps(n int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @return {Integer}
def min_steps(n)
    
end
```

### scala
```scala
object Solution {
    def minSteps(n: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn min_steps(n: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (min-steps n)
  (-> exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec min_steps(N :: integer()) -> integer().
min_steps(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec min_steps(n :: integer) :: integer
  def min_steps(n) do
    
  end
end
```
