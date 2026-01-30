# 629. K Inverse Pairs Array

- Difficulty: Hard
- Topics: Dynamic Programming
- Slug: k-inverse-pairs-array
- Problem ID: 629

## Description
For an integer array nums, an inverse pair is a pair of integers [i, j] where 0 <= i < j < nums.length and nums[i] > nums[j].
Given two integers n and k, return the number of different arrays consisting of numbers from 1 to n such that there are exactly k inverse pairs. Since the answer can be huge, return it modulo 109 + 7.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 3, k = 0
Output: 1
Explanation: Only the array [1,2,3] which consists of numbers from 1 to 3 has exactly 0 inverse pairs.
```

### Example 2
```text
Input: n = 3, k = 1
Output: 2
Explanation: The array [1,3,2] and [2,1,3] have exactly 1 inverse pair.
```


## Constraints
- 1 <= n <= 1000
- 0 <= k <= 1000

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int kInversePairs(int n, int k) {
        
    }
};
```

### java
```java
class Solution {
    public int kInversePairs(int n, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def kInversePairs(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def kInversePairs(self, n: int, k: int) -> int:
```

### c
```c
int kInversePairs(int n, int k) {
    
}
```

### csharp
```csharp
public class Solution {
    public int KInversePairs(int n, int k) {
        
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
var kInversePairs = function(n, k) {
    
};
```

### typescript
```typescript
function kInversePairs(n: number, k: number): number {
    
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
    function kInversePairs($n, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func kInversePairs(_ n: Int, _ k: Int) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun kInversePairs(n: Int, k: Int): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int kInversePairs(int n, int k) {
    
  }
}
```

### golang
```golang
func kInversePairs(n int, k int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer} k
# @return {Integer}
def k_inverse_pairs(n, k)
    
end
```

### scala
```scala
object Solution {
    def kInversePairs(n: Int, k: Int): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn k_inverse_pairs(n: i32, k: i32) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (k-inverse-pairs n k)
  (-> exact-integer? exact-integer? exact-integer?)
  )
```

### erlang
```erlang
-spec k_inverse_pairs(N :: integer(), K :: integer()) -> integer().
k_inverse_pairs(N, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec k_inverse_pairs(n :: integer, k :: integer) :: integer
  def k_inverse_pairs(n, k) do
    
  end
end
```
