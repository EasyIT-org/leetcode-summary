# 14. Longest Common Prefix

- Difficulty: Easy
- Topics: Array, String, Trie
- Slug: longest-common-prefix
- Problem ID: 14

## Description
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
Example 1:
Example 2:
Constraints:

## Examples
### Example 1
```text
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

### Example 2
```text
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```


## Constraints
- 1 <= strs.length <= 200
- 0 <= strs[i].length <= 200
- strs[i] consists of only lowercase English letters if it is non-empty.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        
    }
};
```

### java
```java
class Solution {
    public String longestCommonPrefix(String[] strs) {
        
    }
}
```

### python
```python
class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
```

### python3
```python3
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
```

### c
```c
char* longestCommonPrefix(char** strs, int strsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public string LongestCommonPrefix(string[] strs) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
};
```

### typescript
```typescript
function longestCommonPrefix(strs: string[]): string {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $strs
     * @return String
     */
    function longestCommonPrefix($strs) {
        
    }
}
```

### swift
```swift
class Solution {
    func longestCommonPrefix(_ strs: [String]) -> String {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun longestCommonPrefix(strs: Array<String>): String {
        
    }
}
```

### dart
```dart
class Solution {
  String longestCommonPrefix(List<String> strs) {
    
  }
}
```

### golang
```golang
func longestCommonPrefix(strs []string) string {
    
}
```

### ruby
```ruby
# @param {String[]} strs
# @return {String}
def longest_common_prefix(strs)
    
end
```

### scala
```scala
object Solution {
    def longestCommonPrefix(strs: Array[String]): String = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn longest_common_prefix(strs: Vec<String>) -> String {
        
    }
}
```

### racket
```racket
(define/contract (longest-common-prefix strs)
  (-> (listof string?) string?)
  )
```

### erlang
```erlang
-spec longest_common_prefix(Strs :: [unicode:unicode_binary()]) -> unicode:unicode_binary().
longest_common_prefix(Strs) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec longest_common_prefix(strs :: [String.t]) :: String.t
  def longest_common_prefix(strs) do
    
  end
end
```
