# 354. Russian Doll Envelopes

- Difficulty: Hard
- Topics: Array, Binary Search, Dynamic Programming, Sorting
- Slug: russian-doll-envelopes
- Problem ID: 354

## Description
You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope.
One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height.
Return the maximum number of envelopes you can Russian doll (i.e., put one inside the other).
Note: You cannot rotate an envelope.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: envelopes = [[5,4],[6,4],[6,7],[2,3]]
Output: 3
Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
```

### Example 2
```text
Input: envelopes = [[1,1],[1,1],[1,1]]
Output: 1
```


## Constraints
- 1 <= envelopes.length <= 105
- envelopes[i].length == 2
- 1 <= wi, hi <= 105

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int maxEnvelopes(vector<vector<int>>& envelopes) {
        
    }
};
```

### java
```java
class Solution {
    public int maxEnvelopes(int[][] envelopes) {
        
    }
}
```

### python
```python
class Solution(object):
    def maxEnvelopes(self, envelopes):
        """
        :type envelopes: List[List[int]]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def maxEnvelopes(self, envelopes: List[List[int]]) -> int:
```

### c
```c
int maxEnvelopes(int** envelopes, int envelopesSize, int* envelopesColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MaxEnvelopes(int[][] envelopes) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    
};
```

### typescript
```typescript
function maxEnvelopes(envelopes: number[][]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param Integer[][] $envelopes
     * @return Integer
     */
    function maxEnvelopes($envelopes) {
        
    }
}
```

### swift
```swift
class Solution {
    func maxEnvelopes(_ envelopes: [[Int]]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun maxEnvelopes(envelopes: Array<IntArray>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int maxEnvelopes(List<List<int>> envelopes) {
    
  }
}
```

### golang
```golang
func maxEnvelopes(envelopes [][]int) int {
    
}
```

### ruby
```ruby
# @param {Integer[][]} envelopes
# @return {Integer}
def max_envelopes(envelopes)
    
end
```

### scala
```scala
object Solution {
    def maxEnvelopes(envelopes: Array[Array[Int]]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn max_envelopes(envelopes: Vec<Vec<i32>>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (max-envelopes envelopes)
  (-> (listof (listof exact-integer?)) exact-integer?)
  )
```

### erlang
```erlang
-spec max_envelopes(Envelopes :: [[integer()]]) -> integer().
max_envelopes(Envelopes) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec max_envelopes(envelopes :: [[integer]]) :: integer
  def max_envelopes(envelopes) do
    
  end
end
```
