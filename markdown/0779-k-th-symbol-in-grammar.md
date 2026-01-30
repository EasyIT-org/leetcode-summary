# 779. K-th Symbol in Grammar

- Difficulty: Medium
- Topics: Math, Bit Manipulation, Recursion
- Slug: k-th-symbol-in-grammar
- Problem ID: 795

## Description
We build a table of n rows (1-indexed). We start by writing 0 in the 1st row. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.
Given two integer n and k, return the kth (1-indexed) symbol in the nth row of a table of n rows.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: n = 1, k = 1
Output: 0
Explanation: row 1: 0
```

### Example 2
```text
Input: n = 2, k = 1
Output: 0
Explanation: 
row 1: 0
row 2: 01
```

### Example 3
```text
Input: n = 2, k = 2
Output: 1
Explanation: 
row 1: 0
row 2: 01
```


## Constraints
- 1 <= n <= 30
- 1 <= k <= 2n - 1

## Hints
- Try to represent the current (N, K) in terms of some (N-1, prevK).  What is prevK ?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int kthGrammar(int n, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int kthGrammar(int n, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def kthGrammar(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def kthGrammar(self, n: int, k: int) -> int:
```

### c
```c
int kthGrammar(int n, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int KthGrammar(int n, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    
};
```

### typescript
```typescript
function kthGrammar(n: number, k: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @param Integer $k
     * @return Integer
     */
    function kthGrammar($n, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func kthGrammar(_ n: Int, _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun kthGrammar(n: Int, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int kthGrammar(int n, int k) {
    
  }
}
```

### golang
```golang
func kthGrammar(n int, k int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer} k
# @return {Integer}
def kth_grammar(n, k)
    
end
```

### scala
```scala
object Solution {
    def kthGrammar(n: Int, k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn kth_grammar(n: i32, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (kth-grammar n k)
  (-> exact-integer? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec kth_grammar(N :: integer(), K :: integer()) -> integer().
kth_grammar(N, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec kth_grammar(n :: integer, k :: integer) :: integer
  def kth_grammar(n, k) do
    
  end
end
```
