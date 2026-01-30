# 546. Remove Boxes

- Difficulty: Hard
- Topics: Array, Dynamic Programming, Memoization
- Slug: remove-boxes
- Problem ID: 546

## Description
You are given several boxes with different colors represented by different positive numbers.
You may experience several rounds to remove boxes until there is no box left. Each time you can choose some continuous boxes with the same color (i.e., composed of k boxes, k >= 1), remove them and get k * k points.
Return the maximum points you can get.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: boxes = [1,3,2,2,2,3,4,3,1]
Output: 23
Explanation:
[1, 3, 2, 2, 2, 3, 4, 3, 1] 
----> [1, 3, 3, 4, 3, 1] (3*3=9 points) 
----> [1, 3, 3, 3, 1] (1*1=1 points) 
----> [1, 1] (3*3=9 points) 
----> [] (2*2=4 points)
```

### Example 2
```text
Input: boxes = [1,1,1]
Output: 9
```

### Example 3
```text
Input: boxes = [1]
Output: 1
```


## Constraints
- 1 <= boxes.length <= 100
- 1 <= boxes[i] <= 100

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int removeBoxes(vector<int>& boxes) {
        
    }
};
```

### java
```java
class Solution {
    public int removeBoxes(int[] boxes) {
        
    }
}
```

### python
```python
class Solution(object):
    def removeBoxes(self, boxes):
        """
        :type boxes: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def removeBoxes(self, boxes: List[int]) -> int:
```

### c
```c
int removeBoxes(int* boxes, int boxesSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int RemoveBoxes(int[] boxes) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} boxes
 * @return {number}
 */
var removeBoxes = function(boxes) {
    
};
```

### typescript
```typescript
function removeBoxes(boxes: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $boxes
     * @return Integer
     */
    function removeBoxes($boxes) {
        
    }
}
```

### swift
```swift
class Solution {
    func removeBoxes(_ boxes: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun removeBoxes(boxes: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int removeBoxes(List<int> boxes) {
    
  }
}
```

### golang
```golang
func removeBoxes(boxes []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} boxes
# @return {Integer}
def remove_boxes(boxes)
    
end
```

### scala
```scala
object Solution {
    def removeBoxes(boxes: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn remove_boxes(boxes: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (remove-boxes boxes)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec remove_boxes(Boxes :: [integer()]) -> integer().
remove_boxes(Boxes) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec remove_boxes(boxes :: [integer]) :: integer
  def remove_boxes(boxes) do
    
  end
end
```
