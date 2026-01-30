# 77. Combinations

- Difficulty: Medium
- Topics: Backtracking
- Slug: combinations
- Problem ID: 77

## Description
Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
You may return the answer in any order.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Explanation: There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
```

### Example 2
```text
Input: n = 1, k = 1
Output: [[1]]
Explanation: There is 1 choose 1 = 1 total combination.
```


## Constraints
- 1 <= n <= 20
- 1 <= k <= n

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> combine(int n, int k) {
        
    }
};
```

### java
```java
class Solution {
    public List<List<Integer>> combine(int n, int k) {
        
    }
}
```

### python
```python
class Solution(object):
    def combine(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** combine(int n, int k, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<IList<int>> Combine(int n, int k) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    
};
```

### typescript
```typescript
function combine(n: number, k: number): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer $n
     * @param Integer $k
     * @return Integer[][]
     */
    function combine($n, $k) {
        
    }
}
```

### swift
```swift
class Solution {
    func combine(_ n: Int, _ k: Int) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun combine(n: Int, k: Int): List<List<Int>> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> combine(int n, int k) {
    
  }
}
```

### golang
```golang
func combine(n int, k int) [][]int {
    
}
```

### ruby
```ruby
# @param {Integer} n
# @param {Integer} k
# @return {Integer[][]}
def combine(n, k)
    
end
```

### scala
```scala
object Solution {
    def combine(n: Int, k: Int): List[List[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn combine(n: i32, k: i32) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (combine n k)
  (-> exact-integer? exact-integer? (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec combine(N :: integer(), K :: integer()) -> [[integer()]].
combine(N, K) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec combine(n :: integer, k :: integer) :: [[integer]]
  def combine(n, k) do
    
  end
end
```
