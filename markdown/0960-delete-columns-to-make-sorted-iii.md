# 960. Delete Columns to Make Sorted III

- Difficulty: Hard
- Topics: Array, String, Dynamic Programming
- Slug: delete-columns-to-make-sorted-iii
- Problem ID: 1000

## Description
You are given an array of n strings strs, all of the same length.
We may choose any deletion indices, and we delete all the characters in those indices for each string.
For example, if we have strs = ["abcdef","uvwxyz"] and deletion indices {0, 2, 3}, then the final array after deletions is ["bef", "vyz"].
Suppose we chose a set of deletion indices answer such that after deletions, the final array has every string (row) in lexicographic order. (i.e., (strs[0][0] <= strs[0][1] <= ... <= strs[0][strs[0].length - 1]), and (strs[1][0] <= strs[1][1] <= ... <= strs[1][strs[1].length - 1]), and so on). Return the minimum possible value of answer.length.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: strs = ["babca","bbazb"]
Output: 3
Explanation: After deleting columns 0, 1, and 4, the final array is strs = ["bc", "az"].
Both these rows are individually in lexicographic order (ie. strs[0][0] <= strs[0][1] and strs[1][0] <= strs[1][1]).
Note that strs[0] > strs[1] - the array strs is not necessarily in lexicographic order.
```

### Example 2
```text
Input: strs = ["edcba"]
Output: 4
Explanation: If we delete less than 4 columns, the only row will not be lexicographically sorted.
```

### Example 3
```text
Input: strs = ["ghi","def","abc"]
Output: 0
Explanation: All rows are already lexicographically sorted.
```


## Constraints
- n == strs.length
- 1 <= n <= 100
- 1 <= strs[i].length <= 100
- strs[i] consists of lowercase English letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int minDeletionSize(vector<string>& strs) {
        
    }
};
```

### java
```java
class Solution {
    public int minDeletionSize(String[] strs) {
        
    }
}
```

### python
```python
class Solution(object):
    def minDeletionSize(self, strs):
        """
        :type strs: List[str]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def minDeletionSize(self, strs: List[str]) -> int:
```

### c
```c
int minDeletionSize(char** strs, int strsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int MinDeletionSize(string[] strs) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    
};
```

### typescript
```typescript
function minDeletionSize(strs: string[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $strs
     * @return Integer
     */
    function minDeletionSize($strs) {
        
    }
}
```

### swift
```swift
class Solution {
    func minDeletionSize(_ strs: [String]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun minDeletionSize(strs: Array<String>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int minDeletionSize(List<String> strs) {
    
  }
}
```

### golang
```golang
func minDeletionSize(strs []string) int {
    
}
```

### ruby
```ruby
# @param {String[]} strs
# @return {Integer}
def min_deletion_size(strs)
    
end
```

### scala
```scala
object Solution {
    def minDeletionSize(strs: Array[String]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn min_deletion_size(strs: Vec<String>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (min-deletion-size strs)
  (-> (listof string?) exact-integer?)
  )
```

### erlang
```erlang
-spec min_deletion_size(Strs :: [unicode:unicode_binary()]) -> integer().
min_deletion_size(Strs) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec min_deletion_size(strs :: [String.t]) :: integer
  def min_deletion_size(strs) do
    
  end
end
```
