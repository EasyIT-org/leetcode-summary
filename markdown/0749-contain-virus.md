# 749. Contain Virus

- Difficulty: Hard
- Topics: Array, Depth-First Search, Breadth-First Search, Matrix, Simulation
- Slug: contain-virus
- Problem ID: 750

## Description
A virus is spreading rapidly, and your task is to quarantine the infected area by installing walls.
The world is modeled as an m x n binary grid isInfected, where isInfected[i][j] == 0 represents uninfected cells, and isInfected[i][j] == 1 represents cells contaminated with the virus. A wall (and only one wall) can be installed between any two 4-directionally adjacent cells, on the shared boundary.
Every night, the virus spreads to all neighboring cells in all four directions unless blocked by a wall. Resources are limited. Each day, you can install walls around only one region (i.e., the affected area (continuous block of infected cells) that threatens the most uninfected cells the following night). There will never be a tie.
Return the number of walls used to quarantine all the infected regions. If the world will become fully infected, return the number of walls used.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: isInfected = [[0,1,0,0,0,0,0,1],[0,1,0,0,0,0,0,1],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0]]
Output: 10
Explanation: There are 2 contaminated regions.
On the first day, add 5 walls to quarantine the viral region on the left. The board after the virus spreads is:

On the second day, add 5 walls to quarantine the viral region on the right. The virus is fully contained.
```
Images:
- https://assets.leetcode.com/uploads/2021/06/01/virus11-grid.jpg

### Example 2
```text
Input: isInfected = [[1,1,1],[1,0,1],[1,1,1]]
Output: 4
Explanation: Even though there is only one cell saved, there are 4 walls built.
Notice that walls are only built on the shared boundary of two different cells.
```
Images:
- https://assets.leetcode.com/uploads/2021/06/01/virus2-grid.jpg

### Example 3
```text
Input: isInfected = [[1,1,1,0,0,0,0,0,0],[1,0,1,0,1,1,1,1,1],[1,1,1,0,0,0,0,0,0]]
Output: 13
Explanation: The region on the left only builds two new walls.
```
Images:
- https://assets.leetcode.com/uploads/2021/06/01/virus2-grid.jpg


## Constraints
- m == isInfected.length
- n == isInfected[i].length
- 1 <= m, n <= 50
- isInfected[i][j] is either 0 or 1.
- There is always a contiguous viral region throughout the described process that will infect strictly more uncontaminated squares in the next round.

## Hints
- The implementation is long - we want to perfrom the following steps:

* Find all viral regions (connected components), additionally for each region keeping track of the frontier (neighboring uncontaminated cells), and the perimeter of the region.

* Disinfect the most viral region, adding it's perimeter to the answer.

* Spread the virus in the remaining regions outward by 1 square.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int containVirus(vector<vector<int>>& isInfected) {
        
    }
};
```

### java
```java
class Solution {
    public int containVirus(int[][] isInfected) {
        
    }
}
```

### python
```python
class Solution(object):
    def containVirus(self, isInfected):
        """
        :type isInfected: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def containVirus(self, isInfected: List[List[int]]) -> int:
```

### c
```c
int containVirus(int** isInfected, int isInfectedSize, int* isInfectedColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int ContainVirus(int[][] isInfected) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} isInfected
 * @return {number}
 */
var containVirus = function(isInfected) {
    
};
```

### typescript
```typescript
function containVirus(isInfected: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $isInfected
     * @return Integer
     */
    function containVirus($isInfected) {
        
    }
}
```

### swift
```swift
class Solution {
    func containVirus(_ isInfected: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun containVirus(isInfected: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int containVirus(List<List<int>> isInfected) {
    
  }
}
```

### golang
```golang
func containVirus(isInfected [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} is_infected
# @return {Integer}
def contain_virus(is_infected)
    
end
```

### scala
```scala
object Solution {
    def containVirus(isInfected: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn contain_virus(is_infected: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (contain-virus isInfected)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec contain_virus(IsInfected :: [[integer()]]) -> integer().
contain_virus(IsInfected) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec contain_virus(is_infected :: [[integer]]) :: integer
  def contain_virus(is_infected) do
    
  end
end
```
