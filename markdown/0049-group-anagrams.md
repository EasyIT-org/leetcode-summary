# 49. Group Anagrams

- Difficulty: Medium
- Topics: Array, Hash Table, String, Sorting
- Slug: group-anagrams
- Problem ID: 49

## Description
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Explanation:
```

### Example 2
```text
Input: strs = [""]
Output: [[""]]
```

### Example 3
```text
Input: strs = ["a"]
Output: [["a"]]
```


## Constraints
- 1 <= strs.length <= 104
- 0 <= strs[i].length <= 100
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
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        
    }
};
```

### java
```java
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        
    }
}
```

### python
```python
class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
```

### python3
```python3
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
```

### c
```c
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
char*** groupAnagrams(char** strs, int strsSize, int* returnSize, int** returnColumnSizes) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<IList<string>> GroupAnagrams(string[] strs) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
};
```

### typescript
```typescript
function groupAnagrams(strs: string[]): string[][] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $strs
     * @return String[][]
     */
    function groupAnagrams($strs) {
        
    }
}
```

### swift
```swift
class Solution {
    func groupAnagrams(_ strs: [String]) -> [[String]] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun groupAnagrams(strs: Array<String>): List<List<String>> {
        
    }
}
```

### dart
```dart
class Solution {
  List<List<String>> groupAnagrams(List<String> strs) {
    
  }
}
```

### golang
```golang
func groupAnagrams(strs []string) [][]string {
    
}
```

### ruby
```ruby
# @param {String[]} strs
# @return {String[][]}
def group_anagrams(strs)
    
end
```

### scala
```scala
object Solution {
    def groupAnagrams(strs: Array[String]): List[List[String]] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
        
    }
}
```

### racket
```racket
(define/contract (group-anagrams strs)
  (-> (listof string?) (listof (listof string?)))
  )
```

### erlang
```erlang
-spec group_anagrams(Strs :: [unicode:unicode_binary()]) -> [[unicode:unicode_binary()]].
group_anagrams(Strs) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec group_anagrams(strs :: [String.t]) :: [[String.t]]
  def group_anagrams(strs) do
    
  end
end
```
