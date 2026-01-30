# 886. Possible Bipartition

- Difficulty: Medium
- Topics: Depth-First Search, Breadth-First Search, Union Find, Graph
- Slug: possible-bipartition
- Problem ID: 922

## Description
We want to split a group of n people (labeled from 1 to n) into two groups of any size. Each person may dislike some other people, and they should not go into the same group.
Given the integer n and the array dislikes where dislikes[i] = [ai, bi] indicates that the person labeled ai does not like the person labeled bi, return true if it is possible to split everyone into two groups in this way.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 4, dislikes = [[1,2],[1,3],[2,4]]
Output: true
Explanation: The first group has [1,4], and the second group has [2,3].
```

### Example 2
```text
Input: n = 3, dislikes = [[1,2],[1,3],[2,3]]
Output: false
Explanation: We need at least 3 groups to divide them. We cannot put them in two groups.
```


## Constraints
- 1 <= n <= 2000
- 0 <= dislikes.length <= 104
- dislikes[i].length == 2
- 1 <= ai < bi <= n
- All the pairs of dislikes are unique.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool possibleBipartition(int n, vector<vector<int>>& dislikes) {
        
    }
};
```

### java
```java
class Solution {
    public boolean possibleBipartition(int n, int[][] dislikes) {
        
    }
}
```

### python
```python
class Solution(object):
    def possibleBipartition(self, n, dislikes):
        """
        :type n: int
        :type dislikes: List[List[int]]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def possibleBipartition(self, n: int, dislikes: List[List[int]]) -> bool:
```

### c
```c
bool possibleBipartition(int n, int** dislikes, int dislikesSize, int* dislikesColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool PossibleBipartition(int n, int[][] dislikes) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
    
};
```

### typescript
```typescript
function possibleBipartition(n: number, dislikes: number[][]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $dislikes
     * @return Boolean
     */
    function possibleBipartition($n, $dislikes) {
        
    }
}
```

### swift
```swift
class Solution {
    func possibleBipartition(_ n: Int, _ dislikes: [[Int]]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun possibleBipartition(n: Int, dislikes: Array<IntArray>): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool possibleBipartition(int n, List<List<int>> dislikes) {
    
  }
}
```

### golang
```golang
func possibleBipartition(n int, dislikes [][]int) bool {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer[][]} dislikes
# @return {Boolean}
def possible_bipartition(n, dislikes)
    
end
```

### scala
```scala
object Solution {
    def possibleBipartition(n: Int, dislikes: Array[Array[Int]]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn possible_bipartition(n: i32, dislikes: Vec<Vec<i32>>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (possible-bipartition n dislikes)
  (-> exact-integer? (listof (listof exact-integer?)) boolean?)
  )
```

### erlang
```erlang
-spec possible_bipartition(N :: integer(), Dislikes :: [[integer()]]) -> boolean().
possible_bipartition(N, Dislikes) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec possible_bipartition(n :: integer, dislikes :: [[integer]]) :: boolean
  def possible_bipartition(n, dislikes) do
    
  end
end
```
