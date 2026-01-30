# 728. Self Dividing Numbers

- Difficulty: Easy
- Topics: Math
- Slug: self-dividing-numbers
- Problem ID: 728

## Description
A self-dividing number is a number that is divisible by every digit it contains.
A self-dividing number is not allowed to contain the digit zero.
Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right] (both inclusive).
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: left = 1, right = 22
Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
```

### Example 2
```text
Input: left = 47, right = 85
Output: [48,55,66,77]
```


## Constraints
- 1 <= left <= right <= 104

## Hints
- For each number in the range, check whether it is self dividing by converting that number to a character array (or string in Python), then checking that each digit is nonzero and divides the original number.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> selfDividingNumbers(int left, int right) {
        
    }
};
```

### java
```java
class Solution {
    public List<Integer> selfDividingNumbers(int left, int right) {
        
    }
}
```

### python
```python
class Solution(object):
    def selfDividingNumbers(self, left, right):
        """
        :type left: int
        :type right: int
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* selfDividingNumbers(int left, int right, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<int> SelfDividingNumbers(int left, int right) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    
};
```

### typescript
```typescript
function selfDividingNumbers(left: number, right: number): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $left
     * @param Integer $right
     * @return Integer[]
     */
    function selfDividingNumbers($left, $right) {
        
    }
}
```

### swift
```swift
class Solution {
    func selfDividingNumbers(_ left: Int, _ right: Int) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun selfDividingNumbers(left: Int, right: Int): List<Int> {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> selfDividingNumbers(int left, int right) {
    
  }
}
```

### golang
```golang
func selfDividingNumbers(left int, right int) []int {
    
}
```

### ruby
```ruby
# @param {Integer} left
# @param {Integer} right
# @return {Integer[]}
def self_dividing_numbers(left, right)
    
end
```

### scala
```scala
object Solution {
    def selfDividingNumbers(left: Int, right: Int): List[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn self_dividing_numbers(left: i32, right: i32) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (self-dividing-numbers left right)
  (-> exact-integer? exact-integer? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec self_dividing_numbers(Left :: integer(), Right :: integer()) -> [integer()].
self_dividing_numbers(Left, Right) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec self_dividing_numbers(left :: integer, right :: integer) :: [integer]
  def self_dividing_numbers(left, right) do
    
  end
end
```
