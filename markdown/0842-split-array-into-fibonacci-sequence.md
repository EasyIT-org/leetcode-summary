# 842. Split Array into Fibonacci Sequence

- Difficulty: Medium
- Topics: String, Backtracking
- Slug: split-array-into-fibonacci-sequence
- Problem ID: 872

## Description
You are given a string of digits num, such as "123456579". We can split it into a Fibonacci-like sequence [123, 456, 579].
Formally, a Fibonacci-like sequence is a list f of non-negative integers such that:
Note that when splitting the string into pieces, each piece must not have extra leading zeroes, except if the piece is the number 0 itself.
Return any Fibonacci-like sequence split from num, or return [] if it cannot be done.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: num = "1101111"
Output: [11,0,11,11]
Explanation: The output [110, 1, 111] would also be accepted.
```

### Example 2
```text
Input: num = "112358130"
Output: []
Explanation: The task is impossible.
```

### Example 3
```text
Input: num = "0123"
Output: []
Explanation: Leading zeroes are not allowed, so "01", "2", "3" is not valid.
```


## Constraints
- 1 <= num.length <= 200
- num contains only digits.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> splitIntoFibonacci(string num) {
        
    }
};
```

### java
```java
class Solution {
    public List<Integer> splitIntoFibonacci(String num) {
        
    }
}
```

### python
```python
class Solution(object):
    def splitIntoFibonacci(self, num):
        """
        :type num: str
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def splitIntoFibonacci(self, num: str) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* splitIntoFibonacci(char* num, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<int> SplitIntoFibonacci(string num) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} num
 * @return {number[]}
 */
var splitIntoFibonacci = function(num) {
    
};
```

### typescript
```typescript
function splitIntoFibonacci(num: string): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $num
     * @return Integer[]
     */
    function splitIntoFibonacci($num) {
        
    }
}
```

### swift
```swift
class Solution {
    func splitIntoFibonacci(_ num: String) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun splitIntoFibonacci(num: String): List<Int> {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> splitIntoFibonacci(String num) {
    
  }
}
```

### golang
```golang
func splitIntoFibonacci(num string) []int {
    
}
```

### ruby
```ruby
# @param {String} num
# @return {Integer[]}
def split_into_fibonacci(num)
    
end
```

### scala
```scala
object Solution {
    def splitIntoFibonacci(num: String): List[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn split_into_fibonacci(num: String) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (split-into-fibonacci num)
  (-> string? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec split_into_fibonacci(Num :: unicode:unicode_binary()) -> [integer()].
split_into_fibonacci(Num) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec split_into_fibonacci(num :: String.t) :: [integer]
  def split_into_fibonacci(num) do
    
  end
end
```
