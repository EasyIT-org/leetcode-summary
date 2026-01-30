# 140. Word Break II

- Difficulty: Hard
- Topics: Array, Hash Table, String, Dynamic Programming, Backtracking, Trie, Memoization
- Slug: word-break-ii
- Problem ID: 140

## Description
Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.
Note that the same word in the dictionary may be reused multiple times in the segmentation.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
Output: ["cats and dog","cat sand dog"]
```

### Example 2
```text
Input: s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
Explanation: Note that you are allowed to reuse a dictionary word.
```

### Example 3
```text
Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: []
```


## Constraints
- 1 <= s.length <= 20
- 1 <= wordDict.length <= 1000
- 1 <= wordDict[i].length <= 10
- s and wordDict[i] consist of only lowercase English letters.
- All the strings of wordDict are unique.
- Input is generated in a way that the length of the answer doesn't exceed 105.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    vector<string> wordBreak(string s, vector<string>& wordDict) {
        
    }
};
```

### java
```java
class Solution {
    public List<String> wordBreak(String s, List<String> wordDict) {
        
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
        :rtype: List[str]
        """
```

### python3
```python3
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
```

### c
```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** wordBreak(char* s, char** wordDict, int wordDictSize, int* returnSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public IList<string> WordBreak(string s, IList<string> wordDict) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    
};
```

### typescript
```typescript
function wordBreak(s: string, wordDict: string[]): string[] {
    
};
```

### php
```php
class Solution {

    /**
     * @param String $s
     * @param String[] $wordDict
     * @return String[]
     */
    function wordBreak($s, $wordDict) {
        
    }
}
```

### swift
```swift
class Solution {
    func wordBreak(_ s: String, _ wordDict: [String]) -> [String] {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun wordBreak(s: String, wordDict: List<String>): List<String> {
        
    }
}
```

### dart
```dart
class Solution {
  List<String> wordBreak(String s, List<String> wordDict) {
    
  }
}
```

### golang
```golang
func wordBreak(s string, wordDict []string) []string {
    
}
```

### ruby
```ruby
# @param {String} s
# @param {String[]} word_dict
# @return {String[]}
def word_break(s, word_dict)
    
end
```

### scala
```scala
object Solution {
    def wordBreak(s: String, wordDict: List[String]): List[String] = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn word_break(s: String, word_dict: Vec<String>) -> Vec<String> {
        
    }
}
```

### racket
```racket
(define/contract (word-break s wordDict)
  (-> string? (listof string?) (listof string?))
  )
```

### erlang
```erlang
-spec word_break(S :: unicode:unicode_binary(), WordDict :: [unicode:unicode_binary()]) -> [unicode:unicode_binary()].
word_break(S, WordDict) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec word_break(s :: String.t, word_dict :: [String.t]) :: [String.t]
  def word_break(s, word_dict) do
    
  end
end
```
