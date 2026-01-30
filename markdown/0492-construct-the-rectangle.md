# 492. Construct the Rectangle

- Difficulty: Easy
- Topics: Math
- Slug: construct-the-rectangle
- Problem ID: 492

## Description
A web developer needs to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:
Return an array [L, W] where L and W are the length and width of the web page you designed in sequence.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: area = 4
Output: [2,2]
Explanation: The target area is 4, and all the possible ways to construct it are [1,4], [2,2], [4,1]. 
But according to requirement 2, [1,4] is illegal; according to requirement 3,  [4,1] is not optimal compared to [2,2]. So the length L is 2, and the width W is 2.
```

### Example 2
```text
Input: area = 37
Output: [37,1]
```

### Example 3
```text
Input: area = 122122
Output: [427,286]
```


## Constraints
- 1 <= area <= 107

## Hints
- The W is always less than or equal to the square root of the area, so we start searching at sqrt(area) till we find the result.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> constructRectangle(int area) {
        
    }
};
```

### java
```java
class Solution {
    public int[] constructRectangle(int area) {
        
    }
}
```

### python
```python
class Solution(object):
    def constructRectangle(self, area):
        """
        :type area: int
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def constructRectangle(self, area: int) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* constructRectangle(int area, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] ConstructRectangle(int area) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    
};
```

### typescript
```typescript
function constructRectangle(area: number): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $area
     * @return Integer[]
     */
    function constructRectangle($area) {
        
    }
}
```

### swift
```swift
class Solution {
    func constructRectangle(_ area: Int) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun constructRectangle(area: Int): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> constructRectangle(int area) {
    
  }
}
```

### golang
```golang
func constructRectangle(area int) []int {
    
}
```

### ruby
```ruby
# @param {Integer} area
# @return {Integer[]}
def construct_rectangle(area)
    
end
```

### scala
```scala
object Solution {
    def constructRectangle(area: Int): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn construct_rectangle(area: i32) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (construct-rectangle area)
  (-> exact-integer? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec construct_rectangle(Area :: integer()) -> [integer()].
construct_rectangle(Area) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec construct_rectangle(area :: integer) :: [integer]
  def construct_rectangle(area) do
    
  end
end
```
