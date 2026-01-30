# 1202. Smallest String With Swaps

- Difficulty: Medium
- Topics: Array, Hash Table, String, Depth-First Search, Breadth-First Search, Union Find, Sorting
- Slug: smallest-string-with-swaps
- Problem ID: 1308

## Description
You are given a string s, and an array of pairs of indices in the string pairs where pairs[i] = [a, b] indicates 2 indices(0-indexed) of the string.
You can swap the characters at any pair of indices in the given pairs any number of times.
Return the lexicographically smallest string that s can be changed to after using the swaps.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "dcab", pairs = [[0,3],[1,2]]
Output: "bacd"
Explaination: 
Swap s[0] and s[3], s = "bcad"
Swap s[1] and s[2], s = "bacd"
```

### Example 2
```text
Input: s = "dcab", pairs = [[0,3],[1,2],[0,2]]
Output: "abcd"
Explaination: 
Swap s[0] and s[3], s = "bcad"
Swap s[0] and s[2], s = "acbd"
Swap s[1] and s[2], s = "abcd"
```

### Example 3
```text
Input: s = "cba", pairs = [[0,1],[1,2]]
Output: "abc"
Explaination: 
Swap s[0] and s[1], s = "bca"
Swap s[1] and s[2], s = "bac"
Swap s[0] and s[1], s = "abc"
```


## Constraints
- 1 <= s.length <= 10^5
- 0 <= pairs.length <= 10^5
- 0 <= pairs[i][0], pairs[i][1] < s.length
- s only contains lower case English letters.

## Hints
- Think of it as a graph problem.
- Consider the pairs as connected nodes in the graph, what can you do with a connected component of indices ?
- We can sort each connected component alone to get the lexicographically minimum string.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string smallestStringWithSwaps(string s, vector<vector<int>>& pairs) {
        
    }
};
```

### java
```java
class Solution {
    public String smallestStringWithSwaps(String s, List<List<Integer>> pairs) {
        
    }
}
```

### python
```python
class Solution(object):
    def smallestStringWithSwaps(self, s, pairs):
        """
        :type s: str
        :type pairs: List[List[int]]
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def smallestStringWithSwaps(self, s: str, pairs: List[List[int]]) -> str:
```

### c
```c
char* smallestStringWithSwaps(char* s, int** pairs, int pairsSize, int* pairsColSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public string SmallestStringWithSwaps(string s, IList<IList<int>> pairs) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
    
};
```

### typescript
```typescript
function smallestStringWithSwaps(s: string, pairs: number[][]): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @param Integer[][] $pairs
     * @return String
     */
    function smallestStringWithSwaps($s, $pairs) {
        
    }
}
```

### swift
```swift
class Solution {
    func smallestStringWithSwaps(_ s: String, _ pairs: [[Int]]) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun smallestStringWithSwaps(s: String, pairs: List<List<Int>>): String {
        
    }
}
```

### dart
```dart
class Solution {
  String smallestStringWithSwaps(String s, List<List<int>> pairs) {
    
  }
}
```

### golang
```golang
func smallestStringWithSwaps(s string, pairs [][]int) string {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {Integer[][]} pairs
# @return {String}
def smallest_string_with_swaps(s, pairs)
    
end
```

### scala
```scala
object Solution {
    def smallestStringWithSwaps(s: String, pairs: List[List[Int]]): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn smallest_string_with_swaps(s: String, pairs: Vec<Vec<i32>>) -> String {
        
    }
}
```

### racket
```racket
(define/contract (smallest-string-with-swaps s pairs)
  (-> string? (listof (listof exact-integer?)) string?)
  )
```

### erlang
```erlang
-spec smallest_string_with_swaps(S :: unicode:unicode_binary(), Pairs :: [[integer()]]) -> unicode:unicode_binary().
smallest_string_with_swaps(S, Pairs) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec smallest_string_with_swaps(s :: String.t, pairs :: [[integer]]) :: String.t
  def smallest_string_with_swaps(s, pairs) do
    
  end
end
```
