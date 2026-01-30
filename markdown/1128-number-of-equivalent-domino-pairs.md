# 1128. Number of Equivalent Domino Pairs

- Difficulty: Easy
- Topics: Array, Hash Table, Counting
- Slug: number-of-equivalent-domino-pairs
- Problem ID: 1227

## Description
Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a == c and b == d), or (a == d and b == c) - that is, one domino can be rotated to be equal to another domino.
Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
Output: 1
```

### Example 2
```text
Input: dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]
Output: 3
```


## Constraints
- 1 <= dominoes.length <= 4 * 104
- dominoes[i].length == 2
- 1 <= dominoes[i][j] <= 9

## Hints
- For each domino j, find the number of dominoes you've already seen (dominoes i with i < j) that are equivalent.
- You can keep track of what you've seen using a hashmap.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numEquivDominoPairs(vector<vector<int>>& dominoes) {
        
    }
};
```

### java
```java
class Solution {
    public int numEquivDominoPairs(int[][] dominoes) {
        
    }
}
```

### python
```python
class Solution(object):
    def numEquivDominoPairs(self, dominoes):
        """
        :type dominoes: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numEquivDominoPairs(self, dominoes: List[List[int]]) -> int:
```

### c
```c
int numEquivDominoPairs(int** dominoes, int dominoesSize, int* dominoesColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumEquivDominoPairs(int[][] dominoes) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    
};
```

### typescript
```typescript
function numEquivDominoPairs(dominoes: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $dominoes
     * @return Integer
     */
    function numEquivDominoPairs($dominoes) {
        
    }
}
```

### swift
```swift
class Solution {
    func numEquivDominoPairs(_ dominoes: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numEquivDominoPairs(dominoes: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numEquivDominoPairs(List<List<int>> dominoes) {
    
  }
}
```

### golang
```golang
func numEquivDominoPairs(dominoes [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} dominoes
# @return {Integer}
def num_equiv_domino_pairs(dominoes)
    
end
```

### scala
```scala
object Solution {
    def numEquivDominoPairs(dominoes: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_equiv_domino_pairs(dominoes: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-equiv-domino-pairs dominoes)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec num_equiv_domino_pairs(Dominoes :: [[integer()]]) -> integer().
num_equiv_domino_pairs(Dominoes) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_equiv_domino_pairs(dominoes :: [[integer]]) :: integer
  def num_equiv_domino_pairs(dominoes) do
    
  end
end
```
