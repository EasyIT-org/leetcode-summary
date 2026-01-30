# 970. Powerful Integers

- Difficulty: Medium
- Topics: Hash Table, Math, Enumeration
- Slug: powerful-integers
- Problem ID: 1010

## Description
Given three integers x, y, and bound, return a list of all the powerful integers that have a value less than or equal to bound.
An integer is powerful if it can be represented as xi + yj for some integers i >= 0 and j >= 0.
You may return the answer in any order. In your answer, each value should occur at most once.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: x = 2, y = 3, bound = 10
Output: [2,3,4,5,7,9,10]
Explanation:
2 = 20 + 30
3 = 21 + 30
4 = 20 + 31
5 = 21 + 31
7 = 22 + 31
9 = 23 + 30
10 = 20 + 32
```

### Example 2
```text
Input: x = 3, y = 5, bound = 15
Output: [2,4,6,8,10,14]
```


## Constraints
- 1 <= x, y <= 100
- 0 <= bound <= 106

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> powerfulIntegers(int x, int y, int bound) {
        
    }
};
```

### java
```java
class Solution {
    public List<Integer> powerfulIntegers(int x, int y, int bound) {
        
    }
}
```

### python
```python
class Solution(object):
    def powerfulIntegers(self, x, y, bound):
        """
        :type x: int
        :type y: int
        :type bound: int
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def powerfulIntegers(self, x: int, y: int, bound: int) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* powerfulIntegers(int x, int y, int bound, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<int> PowerfulIntegers(int x, int y, int bound) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
    
};
```

### typescript
```typescript
function powerfulIntegers(x: number, y: number, bound: number): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $x
     * @param Integer $y
     * @param Integer $bound
     * @return Integer[]
     */
    function powerfulIntegers($x, $y, $bound) {
        
    }
}
```

### swift
```swift
class Solution {
    func powerfulIntegers(_ x: Int, _ y: Int, _ bound: Int) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun powerfulIntegers(x: Int, y: Int, bound: Int): List<Int> {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> powerfulIntegers(int x, int y, int bound) {
    
  }
}
```

### golang
```golang
func powerfulIntegers(x int, y int, bound int) []int {
    
}
```

### ruby
```ruby
# @param {Integer} x
# @param {Integer} y
# @param {Integer} bound
# @return {Integer[]}
def powerful_integers(x, y, bound)
    
end
```

### scala
```scala
object Solution {
    def powerfulIntegers(x: Int, y: Int, bound: Int): List[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn powerful_integers(x: i32, y: i32, bound: i32) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (powerful-integers x y bound)
  (-> exact-integer? exact-integer? exact-integer? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec powerful_integers(X :: integer(), Y :: integer(), Bound :: integer()) -> [integer()].
powerful_integers(X, Y, Bound) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec powerful_integers(x :: integer, y :: integer, bound :: integer) :: [integer]
  def powerful_integers(x, y, bound) do
    
  end
end
```
