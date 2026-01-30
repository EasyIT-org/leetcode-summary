# 997. Find the Town Judge

- Difficulty: Easy
- Topics: Array, Hash Table, Graph
- Slug: find-the-town-judge
- Problem ID: 1039

## Description
In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.
If the town judge exists, then:
You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. If a trust relationship does not exist in trust array, then such a trust relationship does not exist.
Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: n = 2, trust = [[1,2]]
Output: 2
```

### Example 2
```text
Input: n = 3, trust = [[1,3],[2,3]]
Output: 3
```

### Example 3
```text
Input: n = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1
```


## Constraints
- 1 <= n <= 1000
- 0 <= trust.length <= 104
- trust[i].length == 2
- All the pairs of trust are unique.
- ai != bi
- 1 <= ai, bi <= n

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int findJudge(int n, vector<vector<int>>& trust) {
        
    }
};
```

### java
```java
class Solution {
    public int findJudge(int n, int[][] trust) {
        
    }
}
```

### python
```python
class Solution(object):
    def findJudge(self, n, trust):
        """
        :type n: int
        :type trust: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
```

### c
```c
int findJudge(int n, int** trust, int trustSize, int* trustColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindJudge(int n, int[][] trust) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    
};
```

### typescript
```typescript
function findJudge(n: number, trust: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $trust
     * @return Integer
     */
    function findJudge($n, $trust) {
        
    }
}
```

### swift
```swift
class Solution {
    func findJudge(_ n: Int, _ trust: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findJudge(n: Int, trust: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findJudge(int n, List<List<int>> trust) {
    
  }
}
```

### golang
```golang
func findJudge(n int, trust [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer[][]} trust
# @return {Integer}
def find_judge(n, trust)
    
end
```

### scala
```scala
object Solution {
    def findJudge(n: Int, trust: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_judge(n: i32, trust: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-judge n trust)
  (-> exact-integer? (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec find_judge(N :: integer(), Trust :: [[integer()]]) -> integer().
find_judge(N, Trust) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_judge(n :: integer, trust :: [[integer]]) :: integer
  def find_judge(n, trust) do
    
  end
end
```
