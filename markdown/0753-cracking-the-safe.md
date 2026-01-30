# 753. Cracking the Safe

- Difficulty: Hard
- Topics: Depth-First Search, Graph, Eulerian Circuit
- Slug: cracking-the-safe
- Problem ID: 754

## Description
There is a safe protected by a password. The password is a sequence of n digits where each digit can be in the range [0, k - 1].
The safe has a peculiar way of checking the password. When you enter in a sequence, it checks the most recent n digits that were entered each time you type a digit.
Return any string of minimum length that will unlock the safe at some point of entering it.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 1, k = 2
Output: "10"
Explanation: The password is a single digit, so enter each digit. "01" would also unlock the safe.
```

### Example 2
```text
Input: n = 2, k = 2
Output: "01100"
Explanation: For each possible password:
- "00" is typed in starting from the 4th digit.
- "01" is typed in starting from the 1st digit.
- "10" is typed in starting from the 3rd digit.
- "11" is typed in starting from the 2nd digit.
Thus "01100" will unlock the safe. "10011", and "11001" would also unlock the safe.
```


## Constraints
- 1 <= n <= 4
- 1 <= k <= 10
- 1 <= kn <= 4096

## Hints
- We can think of this problem as the problem of finding an Euler path (a path visiting every edge exactly once) on the following graph: there are $$k^{n-1}$$ nodes with each node having $$k$$ edges.  It turns out this graph always has an Eulerian circuit (path starting where it ends.)

We should visit each node in "post-order" so as to not get stuck in the graph prematurely.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string crackSafe(int n, int k) {
        
    }
};
```

### java
```java
class Solution {
    public String crackSafe(int n, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def crackSafe(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def crackSafe(self, n: int, k: int) -> str:
```

### c
```c
char* crackSafe(int n, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public string CrackSafe(int n, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var crackSafe = function(n, k) {
    
};
```

### typescript
```typescript
function crackSafe(n: number, k: number): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @param Integer $k
     * @return String
     */
    function crackSafe($n, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func crackSafe(_ n: Int, _ k: Int) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun crackSafe(n: Int, k: Int): String {
        
    }
}
```

### dart
```dart
class Solution {
  String crackSafe(int n, int k) {
    
  }
}
```

### golang
```golang
func crackSafe(n int, k int) string {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer} k
# @return {String}
def crack_safe(n, k)
    
end
```

### scala
```scala
object Solution {
    def crackSafe(n: Int, k: Int): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn crack_safe(n: i32, k: i32) -> String {
        
    }
}
```

### racket
```racket
(define/contract (crack-safe n k)
  (-> exact-integer? exact-integer? string?)
  )
```

### erlang
```erlang
-spec crack_safe(N :: integer(), K :: integer()) -> unicode:unicode_binary().
crack_safe(N, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec crack_safe(n :: integer, k :: integer) :: String.t
  def crack_safe(n, k) do
    
  end
end
```
