# 593. Valid Square

- Difficulty: Medium
- Topics: Math, Geometry
- Slug: valid-square
- Problem ID: 593

## Description
Given the coordinates of four points in 2D space p1, p2, p3 and p4, return true if the four points construct a square.
The coordinate of a point pi is represented as [xi, yi]. The input is not given in any order.
A valid square has four equal sides with positive length and four equal angles (90-degree angles).
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
Output: true
```

### Example 2
```text
Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]
Output: false
```

### Example 3
```text
Input: p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]
Output: true
```


## Constraints
- p1.length == p2.length == p3.length == p4.length == 2
- -104 <= xi, yi <= 104

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool validSquare(vector<int>& p1, vector<int>& p2, vector<int>& p3, vector<int>& p4) {
        
    }
};
```

### java
```java
class Solution {
    public boolean validSquare(int[] p1, int[] p2, int[] p3, int[] p4) {
        
    }
}
```

### python
```python
class Solution(object):
    def validSquare(self, p1, p2, p3, p4):
        """
        :type p1: List[int]
        :type p2: List[int]
        :type p3: List[int]
        :type p4: List[int]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def validSquare(self, p1: List[int], p2: List[int], p3: List[int], p4: List[int]) -> bool:
```

### c
```c
bool validSquare(int* p1, int p1Size, int* p2, int p2Size, int* p3, int p3Size, int* p4, int p4Size) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool ValidSquare(int[] p1, int[] p2, int[] p3, int[] p4) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
    
};
```

### typescript
```typescript
function validSquare(p1: number[], p2: number[], p3: number[], p4: number[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $p1
     * @param Integer[] $p2
     * @param Integer[] $p3
     * @param Integer[] $p4
     * @return Boolean
     */
    function validSquare($p1, $p2, $p3, $p4) {
        
    }
}
```

### swift
```swift
class Solution {
    func validSquare(_ p1: [Int], _ p2: [Int], _ p3: [Int], _ p4: [Int]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun validSquare(p1: IntArray, p2: IntArray, p3: IntArray, p4: IntArray): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool validSquare(List<int> p1, List<int> p2, List<int> p3, List<int> p4) {
    
  }
}
```

### golang
```golang
func validSquare(p1 []int, p2 []int, p3 []int, p4 []int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} p1
# @param {Integer[]} p2
# @param {Integer[]} p3
# @param {Integer[]} p4
# @return {Boolean}
def valid_square(p1, p2, p3, p4)
    
end
```

### scala
```scala
object Solution {
    def validSquare(p1: Array[Int], p2: Array[Int], p3: Array[Int], p4: Array[Int]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn valid_square(p1: Vec<i32>, p2: Vec<i32>, p3: Vec<i32>, p4: Vec<i32>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (valid-square p1 p2 p3 p4)
  (-> (listof exact-integer?) (listof exact-integer?) (listof exact-integer?) (listof exact-integer?) boolean?)
  )
```

### erlang
```erlang
-spec valid_square(P1 :: [integer()], P2 :: [integer()], P3 :: [integer()], P4 :: [integer()]) -> boolean().
valid_square(P1, P2, P3, P4) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec valid_square(p1 :: [integer], p2 :: [integer], p3 :: [integer], p4 :: [integer]) :: boolean
  def valid_square(p1, p2, p3, p4) do
    
  end
end
```
