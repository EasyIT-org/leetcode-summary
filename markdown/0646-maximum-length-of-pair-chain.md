# 646. Maximum Length of Pair Chain

- Difficulty: Medium
- Topics: Array, Dynamic Programming, Greedy, Sorting
- Slug: maximum-length-of-pair-chain
- Problem ID: 646

## Description
You are given an array of n pairs pairs where pairs[i] = [lefti, righti] and lefti < righti.
A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c. A chain of pairs can be formed in this fashion.
Return the length longest chain which can be formed.
You do not need to use up all the given intervals. You can select pairs in any order.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: pairs = [[1,2],[2,3],[3,4]]
Output: 2
Explanation: The longest chain is [1,2] -> [3,4].
```

### Example 2
```text
Input: pairs = [[1,2],[7,8],[4,5]]
Output: 3
Explanation: The longest chain is [1,2] -> [4,5] -> [7,8].
```


## Constraints
- n == pairs.length
- 1 <= n <= 1000
- -1000 <= lefti < righti <= 1000

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findLongestChain(vector<vector<int>>& pairs) {
        
    }
};
```

### java
```java
class Solution {
    public int findLongestChain(int[][] pairs) {
        
    }
}
```

### python
```python
class Solution(object):
    def findLongestChain(self, pairs):
        """
        :type pairs: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findLongestChain(self, pairs: List[List[int]]) -> int:
```

### c
```c
int findLongestChain(int** pairs, int pairsSize, int* pairsColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindLongestChain(int[][] pairs) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    
};
```

### typescript
```typescript
function findLongestChain(pairs: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $pairs
     * @return Integer
     */
    function findLongestChain($pairs) {
        
    }
}
```

### swift
```swift
class Solution {
    func findLongestChain(_ pairs: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findLongestChain(pairs: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findLongestChain(List<List<int>> pairs) {
    
  }
}
```

### golang
```golang
func findLongestChain(pairs [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} pairs
# @return {Integer}
def find_longest_chain(pairs)
    
end
```

### scala
```scala
object Solution {
    def findLongestChain(pairs: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_longest_chain(pairs: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-longest-chain pairs)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec find_longest_chain(Pairs :: [[integer()]]) -> integer().
find_longest_chain(Pairs) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_longest_chain(pairs :: [[integer]]) :: integer
  def find_longest_chain(pairs) do
    
  end
end
```
