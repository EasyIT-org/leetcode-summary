# 793. Preimage Size of Factorial Zeroes Function

- Difficulty: Hard
- Topics: Math, Binary Search
- Slug: preimage-size-of-factorial-zeroes-function
- Problem ID: 809

## Description
Let f(x) be the number of zeroes at the end of x!. Recall that x! = 1 * 2 * 3 * ... * x and by convention, 0! = 1.
Given an integer k, return the number of non-negative integers x have the property that f(x) = k.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: k = 0
Output: 5
Explanation: 0!, 1!, 2!, 3!, and 4! end with k = 0 zeroes.
```

### Example 2
```text
Input: k = 5
Output: 0
Explanation: There is no x such that x! ends in k = 5 zeroes.
```

### Example 3
```text
Input: k = 3
Output: 5
```


## Constraints
- 0 <= k <= 109

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int preimageSizeFZF(int k) {
        
    }
};
```

### java
```java
class Solution {
    public int preimageSizeFZF(int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def preimageSizeFZF(self, k):
        """
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def preimageSizeFZF(self, k: int) -> int:
```

### c
```c
int preimageSizeFZF(int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int PreimageSizeFZF(int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} k
 * @return {number}
 */
var preimageSizeFZF = function(k) {
    
};
```

### typescript
```typescript
function preimageSizeFZF(k: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $k
     * @return Integer
     */
    function preimageSizeFZF($k) {
        
    }
}
```

### swift
```swift
class Solution {
    func preimageSizeFZF(_ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun preimageSizeFZF(k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int preimageSizeFZF(int k) {
    
  }
}
```

### golang
```golang
func preimageSizeFZF(k int) int {
    
}
```

### ruby
```ruby
# @param {Integer} k
# @return {Integer}
def preimage_size_fzf(k)
    
end
```

### scala
```scala
object Solution {
    def preimageSizeFZF(k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn preimage_size_fzf(k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (preimage-size-fzf k)
  (-> exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec preimage_size_fzf(K :: integer()) -> integer().
preimage_size_fzf(K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec preimage_size_fzf(k :: integer) :: integer
  def preimage_size_fzf(k) do
    
  end
end
```
