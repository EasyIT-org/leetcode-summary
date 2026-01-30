# 833. Find And Replace in String

- Difficulty: Medium
- Topics: Array, Hash Table, String, Sorting
- Slug: find-and-replace-in-string
- Problem ID: 862

## Description
You are given a 0-indexed string s that you must perform k replacement operations on. The replacement operations are given as three 0-indexed parallel arrays, indices, sources, and targets, all of length k.
To complete the ith replacement operation:
For example, if s = "abcd", indices[i] = 0, sources[i] = "ab", and targets[i] = "eee", then the result of this replacement will be "eeecd".
All replacement operations must occur simultaneously, meaning the replacement operations should not affect the indexing of each other. The testcases will be generated such that the replacements will not overlap.
Return the resulting string after performing all replacement operations on s.
A substring is a contiguous sequence of characters in a string.
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: s = "abcd", indices = [0, 2], sources = ["a", "cd"], targets = ["eee", "ffff"]
Output: "eeebffff"
Explanation:
"a" occurs at index 0 in s, so we replace it with "eee".
"cd" occurs at index 2 in s, so we replace it with "ffff".
```
Images:
- https://assets.leetcode.com/uploads/2021/06/12/833-ex1.png

### Example 2
```text
Input: s = "abcd", indices = [0, 2], sources = ["ab","ec"], targets = ["eee","ffff"]
Output: "eeecd"
Explanation:
"ab" occurs at index 0 in s, so we replace it with "eee".
"ec" does not occur at index 2 in s, so we do nothing.
```
Images:
- https://assets.leetcode.com/uploads/2021/06/12/833-ex2-1.png


## Constraints
- 1 <= s.length <= 1000
- k == indices.length == sources.length == targets.length
- 1 <= k <= 100
- 0 <= indexes[i] < s.length
- 1 <= sources[i].length, targets[i].length <= 50
- s consists of only lowercase English letters.
- sources[i] and targets[i] consist of only lowercase English letters.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string findReplaceString(string s, vector<int>& indices, vector<string>& sources, vector<string>& targets) {
        
    }
};
```

### java
```java
class Solution {
    public String findReplaceString(String s, int[] indices, String[] sources, String[] targets) {
        
    }
}
```

### python
```python
class Solution(object):
    def findReplaceString(self, s, indices, sources, targets):
        """
        :type s: str
        :type indices: List[int]
        :type sources: List[str]
        :type targets: List[str]
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def findReplaceString(self, s: str, indices: List[int], sources: List[str], targets: List[str]) -> str:
```

### c
```c
char* findReplaceString(char* s, int* indices, int indicesSize, char** sources, int sourcesSize, char** targets, int targetsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public string FindReplaceString(string s, int[] indices, string[] sources, string[] targets) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
    
};
```

### typescript
```typescript
function findReplaceString(s: string, indices: number[], sources: string[], targets: string[]): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @param Integer[] $indices
     * @param String[] $sources
     * @param String[] $targets
     * @return String
     */
    function findReplaceString($s, $indices, $sources, $targets) {
        
    }
}
```

### swift
```swift
class Solution {
    func findReplaceString(_ s: String, _ indices: [Int], _ sources: [String], _ targets: [String]) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun findReplaceString(s: String, indices: IntArray, sources: Array<String>, targets: Array<String>): String {
        
    }
}
```

### dart
```dart
class Solution {
  String findReplaceString(String s, List<int> indices, List<String> sources, List<String> targets) {
    
  }
}
```

### golang
```golang
func findReplaceString(s string, indices []int, sources []string, targets []string) string {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {Integer[]} indices
# @param {String[]} sources
# @param {String[]} targets
# @return {String}
def find_replace_string(s, indices, sources, targets)
    
end
```

### scala
```scala
object Solution {
    def findReplaceString(s: String, indices: Array[Int], sources: Array[String], targets: Array[String]): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn find_replace_string(s: String, indices: Vec<i32>, sources: Vec<String>, targets: Vec<String>) -> String {
        
    }
}
```

### racket
```racket
(define/contract (find-replace-string s indices sources targets)
  (-> string? (listof exact-integer?) (listof string?) (listof string?) string?)
  )
```

### erlang
```erlang
-spec find_replace_string(S :: unicode:unicode_binary(), Indices :: [integer()], Sources :: [unicode:unicode_binary()], Targets :: [unicode:unicode_binary()]) -> unicode:unicode_binary().
find_replace_string(S, Indices, Sources, Targets) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec find_replace_string(s :: String.t, indices :: [integer], sources :: [String.t], targets :: [String.t]) :: String.t
  def find_replace_string(s, indices, sources, targets) do
    
  end
end
```
