# 119. Pascal's Triangle II

- Difficulty: Easy
- Topics: Array, Dynamic Programming
- Slug: pascals-triangle-ii
- Problem ID: 119

## Description
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
Example 1:
Example 2:
Example 3:
Constraints:
Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?

## Examples
### Example 1
```text
Input: rowIndex = 3
Output: [1,3,3,1]
```
Images:
- https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif

### Example 2
```text
Input: rowIndex = 0
Output: [1]
```
Images:
- https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif

### Example 3
```text
Input: rowIndex = 1
Output: [1,1]
```
Images:
- https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif


## Constraints
- 0 <= rowIndex <= 33

## Hints
(none)

## Follow Ups
- Could you optimize your algorithm to use only O(rowIndex) extra space?

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> getRow(int rowIndex) {
        
    }
};
```

### java
```java
class Solution {
    public List<Integer> getRow(int rowIndex) {
        
    }
}
```

### python
```python
class Solution(object):
    def getRow(self, rowIndex):
        """
        :type rowIndex: int
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* getRow(int rowIndex, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<int> GetRow(int rowIndex) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    
};
```

### typescript
```typescript
function getRow(rowIndex: number): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $rowIndex
     * @return Integer[]
     */
    function getRow($rowIndex) {
        
    }
}
```

### swift
```swift
class Solution {
    func getRow(_ rowIndex: Int) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun getRow(rowIndex: Int): List<Int> {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> getRow(int rowIndex) {
    
  }
}
```

### golang
```golang
func getRow(rowIndex int) []int {
    
}
```

### ruby
```ruby
# @param {Integer} row_index
# @return {Integer[]}
def get_row(row_index)
    
end
```

### scala
```scala
object Solution {
    def getRow(rowIndex: Int): List[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn get_row(row_index: i32) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (get-row rowIndex)
  (-> exact-integer? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec get_row(RowIndex :: integer()) -> [integer()].
get_row(RowIndex) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec get_row(row_index :: integer) :: [integer]
  def get_row(row_index) do
    
  end
end
```
