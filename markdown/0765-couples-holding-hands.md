# 765. Couples Holding Hands

- Difficulty: Hard
- Topics: Greedy, Depth-First Search, Breadth-First Search, Union Find, Graph
- Slug: couples-holding-hands
- Problem ID: 770

## Description
There are n couples sitting in 2n seats arranged in a row and want to hold hands.
The people and seats are represented by an integer array row where row[i] is the ID of the person sitting in the ith seat. The couples are numbered in order, the first couple being (0, 1), the second couple being (2, 3), and so on with the last couple being (2n - 2, 2n - 1).
Return the minimum number of swaps so that every couple is sitting side by side. A swap consists of choosing any two people, then they stand up and switch seats.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: row = [0,2,1,3]
Output: 1
Explanation: We only need to swap the second (row[1]) and third (row[2]) person.
```

### Example 2
```text
Input: row = [3,2,0,1]
Output: 0
Explanation: All couples are already seated side by side.
```


## Constraints
- 2n == row.length
- 2 <= n <= 30
- n is even.
- 0 <= row[i] < 2n
- All the elements of row are unique.

## Hints
- Say there are N two-seat couches.  For each couple, draw an edge from the couch of one partner to the couch of the other partner.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int minSwapsCouples(vector<int>& row) {
        
    }
};
```

### java
```java
class Solution {
    public int minSwapsCouples(int[] row) {
        
    }
}
```

### python
```python
class Solution(object):
    def minSwapsCouples(self, row):
        """
        :type row: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minSwapsCouples(self, row: List[int]) -> int:
```

### c
```c
int minSwapsCouples(int* row, int rowSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinSwapsCouples(int[] row) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
    
};
```

### typescript
```typescript
function minSwapsCouples(row: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $row
     * @return Integer
     */
    function minSwapsCouples($row) {
        
    }
}
```

### swift
```swift
class Solution {
    func minSwapsCouples(_ row: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minSwapsCouples(row: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minSwapsCouples(List<int> row) {
    
  }
}
```

### golang
```golang
func minSwapsCouples(row []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} row
# @return {Integer}
def min_swaps_couples(row)
    
end
```

### scala
```scala
object Solution {
    def minSwapsCouples(row: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn min_swaps_couples(row: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (min-swaps-couples row)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec min_swaps_couples(Row :: [integer()]) -> integer().
min_swaps_couples(Row) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec min_swaps_couples(row :: [integer]) :: integer
  def min_swaps_couples(row) do
    
  end
end
```
