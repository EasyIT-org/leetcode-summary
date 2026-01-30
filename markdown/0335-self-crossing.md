# 335. Self Crossing

- Difficulty: Hard
- Topics: Array, Math, Geometry
- Slug: self-crossing
- Problem ID: 335

## Description
You are given an array of integers distance.
You start at the point (0, 0) on an X-Y plane, and you move distance[0] meters to the north, then distance[1] meters to the west, distance[2] meters to the south, distance[3] meters to the east, and so on. In other words, after each move, your direction changes counter-clockwise.
Return true if your path crosses itself or false if it does not.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: distance = [2,1,1,2]
Output: true
Explanation: The path crosses itself at the point (0, 1).
```
Images:
- https://assets.leetcode.com/uploads/2022/12/21/11.jpg

### Example 2
```text
Input: distance = [1,2,3,4]
Output: false
Explanation: The path does not cross itself at any point.
```
Images:
- https://assets.leetcode.com/uploads/2022/12/21/22.jpg

### Example 3
```text
Input: distance = [1,1,1,2,1]
Output: true
Explanation: The path crosses itself at the point (0, 0).
```
Images:
- https://assets.leetcode.com/uploads/2022/12/21/33.jpg


## Constraints
- 1 <= distance.length <= 105
- 1 <= distance[i] <= 105

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool isSelfCrossing(vector<int>& distance) {
        
    }
};
```

### java
```java
class Solution {
    public boolean isSelfCrossing(int[] distance) {
        
    }
}
```

### python
```python
class Solution(object):
    def isSelfCrossing(self, distance):
        """
        :type distance: List[int]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def isSelfCrossing(self, distance: List[int]) -> bool:
```

### c
```c
bool isSelfCrossing(int* distance, int distanceSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool IsSelfCrossing(int[] distance) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} distance
 * @return {boolean}
 */
var isSelfCrossing = function(distance) {
    
};
```

### typescript
```typescript
function isSelfCrossing(distance: number[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $distance
     * @return Boolean
     */
    function isSelfCrossing($distance) {
        
    }
}
```

### swift
```swift
class Solution {
    func isSelfCrossing(_ distance: [Int]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun isSelfCrossing(distance: IntArray): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool isSelfCrossing(List<int> distance) {
    
  }
}
```

### golang
```golang
func isSelfCrossing(distance []int) bool {
    
}
```

### ruby
```ruby
# @param {Integer[]} distance
# @return {Boolean}
def is_self_crossing(distance)
    
end
```

### scala
```scala
object Solution {
    def isSelfCrossing(distance: Array[Int]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn is_self_crossing(distance: Vec<i32>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (is-self-crossing distance)
  (-> (listof exact-integer?) boolean?)
  )
```

### erlang
```erlang
-spec is_self_crossing(Distance :: [integer()]) -> boolean().
is_self_crossing(Distance) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec is_self_crossing(distance :: [integer]) :: boolean
  def is_self_crossing(distance) do
    
  end
end
```
