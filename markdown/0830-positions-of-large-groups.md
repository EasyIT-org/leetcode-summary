# 830. Positions of Large Groups

- Difficulty: Easy
- Topics: String
- Slug: positions-of-large-groups
- Problem ID: 857

## Description
In a string s of lowercase letters, these letters form consecutive groups of the same character.
For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".
A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].
A group is considered large if it has 3 or more characters.
Return the intervals of every large group sorted in increasing order by start index.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "abbxxxxzzy"
Output: [[3,6]]
Explanation: "xxxx" is the only large group with start index 3 and end index 6.
```

### Example 2
```text
Input: s = "abc"
Output: []
Explanation: We have groups "a", "b", and "c", none of which are large groups.
```

### Example 3
```text
Input: s = "abcdddeeeeaabbbcd"
Output: [[3,5],[6,9],[12,14]]
Explanation: The large groups are "ddd", "eeee", and "bbb".
```


## Constraints
- 1 <= s.length <= 1000
- s contains lowercase English letters only.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<vector<int>> largeGroupPositions(string s) {
        
    }
};
```

### java
```java
class Solution {
    public List<List<Integer>> largeGroupPositions(String s) {
        
    }
}
```

### python
```python
class Solution(object):
    def largeGroupPositions(self, s):
        """
        :type s: str
        :rtype: List[List[int]]
        """
```

### python3
```python3
class Solution:
    def largeGroupPositions(self, s: str) -> List[List[int]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** largeGroupPositions(char* s, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<IList<int>> LargeGroupPositions(string s) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    
};
```

### typescript
```typescript
function largeGroupPositions(s: string): number[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @return Integer[][]
     */
    function largeGroupPositions($s) {
        
    }
}
```

### swift
```swift
class Solution {
    func largeGroupPositions(_ s: String) -> [[Int]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun largeGroupPositions(s: String): List<List<Int>> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<int>> largeGroupPositions(String s) {
    
  }
}
```

### golang
```golang
func largeGroupPositions(s string) [][]int {
    
}
```

### ruby
```ruby
# @param {String} s
# @return {Integer[][]}
def large_group_positions(s)
    
end
```

### scala
```scala
object Solution {
    def largeGroupPositions(s: String): List[List[Int]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn large_group_positions(s: String) -> Vec<Vec<i32>> {
        
    }
}
```

### racket
```racket
(define/contract (large-group-positions s)
  (-> string? (listof (listof exact-integer?)))
  )
```

### erlang
```erlang
-spec large_group_positions(S :: unicode:unicode_binary()) -> [[integer()]].
large_group_positions(S) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec large_group_positions(s :: String.t) :: [[integer]]
  def large_group_positions(s) do
    
  end
end
```
