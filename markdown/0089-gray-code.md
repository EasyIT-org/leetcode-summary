# 89. Gray Code

- Difficulty: Medium
- Topics: Math, Backtracking, Bit Manipulation
- Slug: gray-code
- Problem ID: 89

## Description
An n-bit gray code sequence is a sequence of 2n integers where:
Given an integer n, return any valid n-bit gray code sequence.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 2
Output: [0,1,3,2]
Explanation:
The binary representation of [0,1,3,2] is [00,01,11,10].
- 00 and 01 differ by one bit
- 01 and 11 differ by one bit
- 11 and 10 differ by one bit
- 10 and 00 differ by one bit
[0,2,3,1] is also a valid gray code sequence, whose binary representation is [00,10,11,01].
- 00 and 10 differ by one bit
- 10 and 11 differ by one bit
- 11 and 01 differ by one bit
- 01 and 00 differ by one bit
```

### Example 2
```text
Input: n = 1
Output: [0,1]
```


## Constraints
- 1 <= n <= 16

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> grayCode(int n) {
        
    }
};
```

### java
```java
class Solution {
    public List<Integer> grayCode(int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def grayCode(self, n):
        """
        :type n: int
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def grayCode(self, n: int) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* grayCode(int n, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<int> GrayCode(int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    
};
```

### typescript
```typescript
function grayCode(n: number): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @return Integer[]
     */
    function grayCode($n) {
        
    }
}
```

### swift
```swift
class Solution {
    func grayCode(_ n: Int) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun grayCode(n: Int): List<Int> {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> grayCode(int n) {
    
  }
}
```

### golang
```golang
func grayCode(n int) []int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @return {Integer[]}
def gray_code(n)
    
end
```

### scala
```scala
object Solution {
    def grayCode(n: Int): List[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn gray_code(n: i32) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (gray-code n)
  (-> exact-integer? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec gray_code(N :: integer()) -> [integer()].
gray_code(N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec gray_code(n :: integer) :: [integer]
  def gray_code(n) do
    
  end
end
```
