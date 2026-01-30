# 338. Counting Bits

- Difficulty: Easy
- Topics: Dynamic Programming, Bit Manipulation
- Slug: counting-bits
- Problem ID: 338

## Description
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
Example 1:
Example 2:
Constraints:
Follow up:

## Examples
### Example 1
```text
Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
```

### Example 2
```text
Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
```


## Constraints
- 0 <= n <= 105

## Hints
- You should make use of what you have produced already.
- Divide the numbers in ranges like [2-3], [4-7], [8-15] and so on. And try to generate new range from previous.
- Or does the odd/even status of the number help you in calculating the number of 1s?

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> countBits(int n) {
        
    }
};
```

### java
```java
class Solution {
    public int[] countBits(int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def countBits(self, n):
        """
        :type n: int
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def countBits(self, n: int) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* countBits(int n, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] CountBits(int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    
};
```

### typescript
```typescript
function countBits(n: number): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @return Integer[]
     */
    function countBits($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func countBits(_ n: Int) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun countBits(n: Int): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> countBits(int n) {
    
  }
}
```

### golang
```golang
func countBits(n int) []int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @return {Integer[]}
def count_bits(n)
    
end
```

### scala
```scala
object Solution {
    def countBits(n: Int): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn count_bits(n: i32) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (count-bits n)
  (-> exact-integer? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec count_bits(N :: integer()) -> [integer()].
count_bits(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec count_bits(n :: integer) :: [integer]
  def count_bits(n) do
    
  end
end
```
