# 517. Super Washing Machines

- Difficulty: Hard
- Topics: Array, Greedy
- Slug: super-washing-machines
- Problem ID: 517

## Description
You have n super washing machines on a line. Initially, each washing machine has some dresses or is empty.
For each move, you could choose any m (1 <= m <= n) washing machines, and pass one dress of each washing machine to one of its adjacent washing machines at the same time.
Given an integer array machines representing the number of dresses in each washing machine from left to right on the line, return the minimum number of moves to make all the washing machines have the same number of dresses. If it is not possible to do it, return -1.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: machines = [1,0,5]
Output: 3
Explanation:
1st move:    1     0 <-- 5    =>    1     1     4
2nd move:    1 <-- 1 <-- 4    =>    2     1     3
3rd move:    2     1 <-- 3    =>    2     2     2
```

### Example 2
```text
Input: machines = [0,3,0]
Output: 2
Explanation:
1st move:    0 <-- 3     0    =>    1     2     0
2nd move:    1     2 --> 0    =>    1     1     1
```

### Example 3
```text
Input: machines = [0,2,0]
Output: -1
Explanation:
It's impossible to make all three washing machines have the same number of dresses.
```


## Constraints
- n == machines.length
- 1 <= n <= 104
- 0 <= machines[i] <= 105

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findMinMoves(vector<int>& machines) {
        
    }
};
```

### java
```java
class Solution {
    public int findMinMoves(int[] machines) {
        
    }
}
```

### python
```python
class Solution(object):
    def findMinMoves(self, machines):
        """
        :type machines: List[int]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findMinMoves(self, machines: List[int]) -> int:
```

### c
```c
int findMinMoves(int* machines, int machinesSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindMinMoves(int[] machines) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[]} machines
 * @return {number}
 */
var findMinMoves = function(machines) {
    
};
```

### typescript
```typescript
function findMinMoves(machines: number[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[] $machines
     * @return Integer
     */
    function findMinMoves($machines) {
        
    }
}
```

### swift
```swift
class Solution {
    func findMinMoves(_ machines: [Int]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findMinMoves(machines: IntArray): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findMinMoves(List<int> machines) {
    
  }
}
```

### golang
```golang
func findMinMoves(machines []int) int {
    
}
```

### ruby
```ruby
# @param {Integer[]} machines
# @return {Integer}
def find_min_moves(machines)
    
end
```

### scala
```scala
object Solution {
    def findMinMoves(machines: Array[Int]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_min_moves(machines: Vec<i32>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-min-moves machines)
  (-> (listof exact-integer?) exact-integer?)
  )
```

### erlang
```erlang
-spec find_min_moves(Machines :: [integer()]) -> integer().
find_min_moves(Machines) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_min_moves(machines :: [integer]) :: integer
  def find_min_moves(machines) do
    
  end
end
```
