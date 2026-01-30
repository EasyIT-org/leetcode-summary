# 522. Longest Uncommon Subsequence II

- Difficulty: Medium
- Topics: Array, Hash Table, Two Pointers, String, Sorting
- Slug: longest-uncommon-subsequence-ii
- Problem ID: 522

## Description
Given an array of strings strs, return the length of the longest uncommon subsequence between them. If the longest uncommon subsequence does not exist, return -1.
An uncommon subsequence between an array of strings is a string that is a subsequence of one string but not the others.
A subsequence of a string s is a string that can be obtained after deleting any number of characters from s.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: strs = ["aba","cdc","eae"]
Output: 3
```

### Example 2
```text
Input: strs = ["aaa","aaa","aa"]
Output: -1
```


## Constraints
- 2 <= strs.length <= 50
- 1 <= strs[i].length <= 10
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
    int findLUSlength(vector<string>& strs) {
        
    }
};
```

### java
```java
class Solution {
    public int findLUSlength(String[] strs) {
        
    }
}
```

### python
```python
class Solution(object):
    def findLUSlength(self, strs):
        """
        :type strs: List[str]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def findLUSlength(self, strs: List[str]) -> int:
```

### c
```c
int findLUSlength(char** strs, int strsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int FindLUSlength(string[] strs) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function(strs) {
    
};
```

### typescript
```typescript
function findLUSlength(strs: string[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $strs
     * @return Integer
     */
    function findLUSlength($strs) {
        
    }
}
```

### swift
```swift
class Solution {
    func findLUSlength(_ strs: [String]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findLUSlength(strs: Array<String>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int findLUSlength(List<String> strs) {
    
  }
}
```

### golang
```golang
func findLUSlength(strs []string) int {
    
}
```

### ruby
```ruby
# @param {String[]} strs
# @return {Integer}
def find_lu_slength(strs)
    
end
```

### scala
```scala
object Solution {
    def findLUSlength(strs: Array[String]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_lu_slength(strs: Vec<String>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (find-lu-slength strs)
  (-> (listof string?) exact-integer?)
  )
```

### erlang
```erlang
-spec find_lu_slength(Strs :: [unicode:unicode_binary()]) -> integer().
find_lu_slength(Strs) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_lu_slength(strs :: [String.t]) :: integer
  def find_lu_slength(strs) do
    
  end
end
```
