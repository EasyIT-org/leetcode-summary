# 957. Prison Cells After N Days

- Difficulty: Medium
- Topics: Array, Hash Table, Math, Bit Manipulation
- Slug: prison-cells-after-n-days
- Problem ID: 994

## Description
There are 8 prison cells in a row and each cell is either occupied or vacant.
Each day, whether the cell is occupied or vacant changes according to the following rules:
Note that because the prison is a row, the first and the last cells in the row can't have two adjacent neighbors.
You are given an integer array cells where cells[i] == 1 if the ith cell is occupied and cells[i] == 0 if the ith cell is vacant, and you are given an integer n.
Return the state of the prison after n days (i.e., n such changes described above).
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: cells = [0,1,0,1,1,0,0,1], n = 7
Output: [0,0,1,1,0,0,0,0]
Explanation: The following table summarizes the state of the prison on each day:
Day 0: [0, 1, 0, 1, 1, 0, 0, 1]
Day 1: [0, 1, 1, 0, 0, 0, 0, 0]
Day 2: [0, 0, 0, 0, 1, 1, 1, 0]
Day 3: [0, 1, 1, 0, 0, 1, 0, 0]
Day 4: [0, 0, 0, 0, 0, 1, 0, 0]
Day 5: [0, 1, 1, 1, 0, 1, 0, 0]
Day 6: [0, 0, 1, 0, 1, 1, 0, 0]
Day 7: [0, 0, 1, 1, 0, 0, 0, 0]
```

### Example 2
```text
Input: cells = [1,0,0,1,0,0,1,0], n = 1000000000
Output: [0,0,1,1,1,1,1,0]
```


## Constraints
- cells.length == 8
- cells[i] is either 0 or 1.
- 1 <= n <= 109

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<int> prisonAfterNDays(vector<int>& cells, int n) {
        
    }
};
```

### java
```java
class Solution {
    public int[] prisonAfterNDays(int[] cells, int n) {
        
    }
}
```

### python
```python
class Solution(object):
    def prisonAfterNDays(self, cells, n):
        """
        :type cells: List[int]
        :type n: int
        :rtype: List[int]
        """
```

### python3
```python3
class Solution:
    def prisonAfterNDays(self, cells: List[int], n: int) -> List[int]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* prisonAfterNDays(int* cells, int cellsSize, int n, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int[] PrisonAfterNDays(int[] cells, int n) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, n) {
    
};
```

### typescript
```typescript
function prisonAfterNDays(cells: number[], n: number): number[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $cells
     * @param Integer $n
     * @return Integer[]
     */
    function prisonAfterNDays($cells, $n) {
        
    }
}
```

### swift
```swift
class Solution {
    func prisonAfterNDays(_ cells: [Int], _ n: Int) -> [Int] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun prisonAfterNDays(cells: IntArray, n: Int): IntArray {
        
    }
}
```

### dart
```dart
class Solution {
  List<int> prisonAfterNDays(List<int> cells, int n) {
    
  }
}
```

### golang
```golang
func prisonAfterNDays(cells []int, n int) []int {
    
}
```

### ruby
```ruby
# @param {Integer[]} cells
# @param {Integer} n
# @return {Integer[]}
def prison_after_n_days(cells, n)
    
end
```

### scala
```scala
object Solution {
    def prisonAfterNDays(cells: Array[Int], n: Int): Array[Int] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn prison_after_n_days(cells: Vec<i32>, n: i32) -> Vec<i32> {
        
    }
}
```

### racket
```racket
(define/contract (prison-after-n-days cells n)
  (-> (listof exact-integer?) exact-integer? (listof exact-integer?))
  )
```

### erlang
```erlang
-spec prison_after_n_days(Cells :: [integer()], N :: integer()) -> [integer()].
prison_after_n_days(Cells, N) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec prison_after_n_days(cells :: [integer], n :: integer) :: [integer]
  def prison_after_n_days(cells, n) do
    
  end
end
```
