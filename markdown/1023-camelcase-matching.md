# 1023. Camelcase Matching

- Difficulty: Medium
- Topics: Array, Two Pointers, String, Trie, String Matching
- Slug: camelcase-matching
- Problem ID: 1080

## Description
Given an array of strings queries and a string pattern, return a boolean array answer where answer[i] is true if queries[i] matches pattern, and false otherwise.
A query word queries[i] matches pattern if you can insert lowercase English letters into the pattern so that it equals the query. You may insert a character at any position in pattern or you may choose not to insert any characters at all.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FB"
Output: [true,false,true,true,false]
Explanation: "FooBar" can be generated like this "F" + "oo" + "B" + "ar".
"FootBall" can be generated like this "F" + "oot" + "B" + "all".
"FrameBuffer" can be generated like this "F" + "rame" + "B" + "uffer".
```

### Example 2
```text
Input: queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FoBa"
Output: [true,false,true,false,false]
Explanation: "FooBar" can be generated like this "Fo" + "o" + "Ba" + "r".
"FootBall" can be generated like this "Fo" + "ot" + "Ba" + "ll".
```

### Example 3
```text
Input: queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FoBaT"
Output: [false,true,false,false,false]
Explanation: "FooBarTest" can be generated like this "Fo" + "o" + "Ba" + "r" + "T" + "est".
```


## Constraints
- 1 <= pattern.length, queries.length <= 100
- 1 <= queries[i].length <= 100
- queries[i] and pattern consist of English letters.

## Hints
- Given a single pattern and word, how can we solve it?
- One way to do it is using a DP (pos1, pos2) where pos1 is a pointer to the word and pos2 to the pattern and returns true if we can match the pattern with the given word.
- We have two scenarios: The first one is when `word[pos1] == pattern[pos2]`, then the transition will be just DP(pos1 + 1, pos2 + 1). The second scenario is when `word[pos1]` is lowercase then we can add this character to the pattern so that the transition is just DP(pos1 + 1, pos2)
The case base is `if (pos1 == n && pos2 == m) return true;` Where n and m are the sizes of the strings word and pattern respectively.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<bool> camelMatch(vector<string>& queries, string pattern) {
        
    }
};
```

### java
```java
class Solution {
    public List<Boolean> camelMatch(String[] queries, String pattern) {
        
    }
}
```

### python
```python
class Solution(object):
    def camelMatch(self, queries, pattern):
        """
        :type queries: List[str]
        :type pattern: str
        :rtype: List[bool]
        """
```

### python3
```python3
class Solution:
    def camelMatch(self, queries: List[str], pattern: str) -> List[bool]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
bool* camelMatch(char** queries, int queriesSize, char* pattern, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<bool> CamelMatch(string[] queries, string pattern) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function(queries, pattern) {
    
};
```

### typescript
```typescript
function camelMatch(queries: string[], pattern: string): boolean[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $queries
     * @param String $pattern
     * @return Boolean[]
     */
    function camelMatch($queries, $pattern) {
        
    }
}
```

### swift
```swift
class Solution {
    func camelMatch(_ queries: [String], _ pattern: String) -> [Bool] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun camelMatch(queries: Array<String>, pattern: String): List<Boolean> {
        
    }
}
```

### dart
```dart
class Solution {
  List<bool> camelMatch(List<String> queries, String pattern) {
    
  }
}
```

### golang
```golang
func camelMatch(queries []string, pattern string) []bool {
    
}
```

### ruby
```ruby
# @param {String[]} queries
# @param {String} pattern
# @return {Boolean[]}
def camel_match(queries, pattern)
    
end
```

### scala
```scala
object Solution {
    def camelMatch(queries: Array[String], pattern: String): List[Boolean] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn camel_match(queries: Vec<String>, pattern: String) -> Vec<bool> {
        
    }
}
```

### racket
```racket
(define/contract (camel-match queries pattern)
  (-> (listof string?) string? (listof boolean?))
  )
```

### erlang
```erlang
-spec camel_match(Queries :: [unicode:unicode_binary()], Pattern :: unicode:unicode_binary()) -> [boolean()].
camel_match(Queries, Pattern) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec camel_match(queries :: [String.t], pattern :: String.t) :: [boolean]
  def camel_match(queries, pattern) do
    
  end
end
```
