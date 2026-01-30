# 944. Delete Columns to Make Sorted

- Difficulty: Easy
- Topics: Array, String
- Slug: delete-columns-to-make-sorted
- Problem ID: 981

## Description
You are given an array of n strings strs, all of the same length.
The strings can be arranged such that there is one on each line, making a grid.
You want to delete the columns that are not sorted lexicographically. In the above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted, while column 1 ('b', 'c', 'a') is not, so you would delete column 1.
Return the number of columns that you will delete.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
abc
bce
cae
```

### Example 2
```text
Input: strs = ["cba","daf","ghi"]
Output: 1
Explanation: The grid looks as follows:
  cba
  daf
  ghi
Columns 0 and 2 are sorted, but column 1 is not, so you only need to delete 1 column.
```

### Example 3
```text
Input: strs = ["a","b"]
Output: 0
Explanation: The grid looks as follows:
  a
  b
Column 0 is the only column and is sorted, so you will not delete any columns.
```

### Example 4
```text
Input: strs = ["zyx","wvu","tsr"]
Output: 3
Explanation: The grid looks as follows:
  zyx
  wvu
  tsr
All 3 columns are not sorted, so you will delete all 3.
```


## Constraints
- n == strs.length
- 1 <= n <= 100
- 1 <= strs[i].length <= 1000
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
