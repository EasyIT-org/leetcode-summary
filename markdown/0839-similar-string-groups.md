# 839. Similar String Groups

- Difficulty: Hard
- Topics: Array, Hash Table, String, Depth-First Search, Breadth-First Search, Union Find
- Slug: similar-string-groups
- Problem ID: 869

## Description
Two strings, X and Y, are considered similar if either they are identical or we can make them equivalent by swapping at most two letters (in distinct positions) within the string X.
For example, "tars" and "rats" are similar (swapping at positions 0 and 2), and "rats" and "arts" are similar, but "star" is not similar to "tars", "rats", or "arts".
Together, these form two connected groups by similarity: {"tars", "rats", "arts"} and {"star"}.  Notice that "tars" and "arts" are in the same group even though they are not similar.  Formally, each group is such that a word is in the group if and only if it is similar to at least one other word in the group.
We are given a list strs of strings where every string in strs is an anagram of every other string in strs. How many groups are there?
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: strs = ["tars","rats","arts","star"]
Output: 2
```

### Example 2
```text
Input: strs = ["omv","ovm"]
Output: 1
```


## Constraints
- 1 <= strs.length <= 300
- 1 <= strs[i].length <= 300
- strs[i] consists of lowercase letters only.
- All words in strs have the same length and are anagrams of each other.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int numSimilarGroups(vector<string>& strs) {
        
    }
};
```

### java
```java
class Solution {
    public int numSimilarGroups(String[] strs) {
        
    }
}
```

### python
```python
class Solution(object):
    def numSimilarGroups(self, strs):
        """
        :type strs: List[str]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def numSimilarGroups(self, strs: List[str]) -> int:
```

### c
```c
int numSimilarGroups(char** strs, int strsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int NumSimilarGroups(string[] strs) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function(strs) {
    
};
```

### typescript
```typescript
function numSimilarGroups(strs: string[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $strs
     * @return Integer
     */
    function numSimilarGroups($strs) {
        
    }
}
```

### swift
```swift
class Solution {
    func numSimilarGroups(_ strs: [String]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun numSimilarGroups(strs: Array<String>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int numSimilarGroups(List<String> strs) {
    
  }
}
```

### golang
```golang
func numSimilarGroups(strs []string) int {
    
}
```

### ruby
```ruby
# @param {String[]} strs
# @return {Integer}
def num_similar_groups(strs)
    
end
```

### scala
```scala
object Solution {
    def numSimilarGroups(strs: Array[String]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn num_similar_groups(strs: Vec<String>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (num-similar-groups strs)
  (-> (listof string?) exact-integer?)
  )
```

### erlang
```erlang
-spec num_similar_groups(Strs :: [unicode:unicode_binary()]) -> integer().
num_similar_groups(Strs) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec num_similar_groups(strs :: [String.t]) :: integer
  def num_similar_groups(strs) do
    
  end
end
```
