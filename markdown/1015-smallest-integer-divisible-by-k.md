# 1015. Smallest Integer Divisible by K

- Difficulty: Medium
- Topics: Hash Table, Math
- Slug: smallest-integer-divisible-by-k
- Problem ID: 1064

## Description
Given a positive integer k, you need to find the length of the smallest positive integer n such that n is divisible by k, and n only contains the digit 1.
Return the length of n. If there is no such n, return -1.
Note: n may not fit in a 64-bit signed integer.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: k = 1
Output: 1
Explanation: The smallest answer is n = 1, which has length 1.
```

### Example 2
```text
Input: k = 2
Output: -1
Explanation: There is no such positive integer n divisible by 2.
```

### Example 3
```text
Input: k = 3
Output: 3
Explanation: The smallest answer is n = 111, which has length 3.
```


## Constraints
- 1 <= k <= 105

## Hints
- 11111 = 1111 * 10 + 1
We only need to store remainders modulo K.
- If we never get a remainder of 0, why would that happen, and how would we know that?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int smallestRepunitDivByK(int k) {
        
    }
};
```

### java
```java
class Solution {
    public int smallestRepunitDivByK(int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def smallestRepunitDivByK(self, k):
        """
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def smallestRepunitDivByK(self, k: int) -> int:
```

### c
```c
int smallestRepunitDivByK(int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int SmallestRepunitDivByK(int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    
};
```

### typescript
```typescript
function smallestRepunitDivByK(k: number): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $k
     * @return Integer
     */
    function smallestRepunitDivByK($k) {
        
    }
}
```

### swift
```swift
class Solution {
    func smallestRepunitDivByK(_ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun smallestRepunitDivByK(k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int smallestRepunitDivByK(int k) {
    
  }
}
```

### golang
```golang
func smallestRepunitDivByK(k int) int {
    
}
```

### ruby
```ruby
# @param {Integer} k
# @return {Integer}
def smallest_repunit_div_by_k(k)
    
end
```

### scala
```scala
object Solution {
    def smallestRepunitDivByK(k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn smallest_repunit_div_by_k(k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (smallest-repunit-div-by-k k)
  (-> exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec smallest_repunit_div_by_k(K :: integer()) -> integer().
smallest_repunit_div_by_k(K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec smallest_repunit_div_by_k(k :: integer) :: integer
  def smallest_repunit_div_by_k(k) do
    
  end
end
```
