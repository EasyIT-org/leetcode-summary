# 139. Word Break

- Difficulty: Medium
- Topics: Array, Hash Table, String, Dynamic Programming, Trie, Memoization
- Slug: word-break
- Problem ID: 139

## Description
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
Note that the same word in the dictionary may be reused multiple times in the segmentation.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
```

### Example 2
```text
Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
```

### Example 3
```text
Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
```


## Constraints
- 1 <= s.length <= 300
- 1 <= wordDict.length <= 1000
- 1 <= wordDict[i].length <= 20
- s and wordDict[i] consist of only lowercase English letters.
- All the strings of wordDict are unique.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    bool wordBreak(string s, vector<string>& wordDict) {
        
    }
};
```

### java
```java
class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        
    }
}
```

### python
```python
class Solution(object):
    def wordBreak(self, s, wordDict):
        """
        :type s: str
        :type wordDict: List[str]
        :rtype: bool
        """
```

### python3
```python3
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
```

### c
```c
bool wordBreak(char* s, char** wordDict, int wordDictSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public bool WordBreak(string s, IList<string> wordDict) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    
};
```

### typescript
```typescript
function wordBreak(s: string, wordDict: string[]): boolean {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @param String[] $wordDict
     * @return Boolean
     */
    function wordBreak($s, $wordDict) {
        
    }
}
```

### swift
```swift
class Solution {
    func wordBreak(_ s: String, _ wordDict: [String]) -> Bool {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun wordBreak(s: String, wordDict: List<String>): Boolean {
        
    }
}
```

### dart
```dart
class Solution {
  bool wordBreak(String s, List<String> wordDict) {
    
  }
}
```

### golang
```golang
func wordBreak(s string, wordDict []string) bool {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {String[]} word_dict
# @return {Boolean}
def word_break(s, word_dict)
    
end
```

### scala
```scala
object Solution {
    def wordBreak(s: String, wordDict: List[String]): Boolean = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn word_break(s: String, word_dict: Vec<String>) -> bool {
        
    }
}
```

### racket
```racket
(define/contract (word-break s wordDict)
  (-> string? (listof string?) boolean?)
  )
```

### erlang
```erlang
-spec word_break(S :: unicode:unicode_binary(), WordDict :: [unicode:unicode_binary()]) -> boolean().
word_break(S, WordDict) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec word_break(s :: String.t, word_dict :: [String.t]) :: boolean
  def word_break(s, word_dict) do
    
  end
end
```
