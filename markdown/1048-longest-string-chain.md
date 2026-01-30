# 1048. Longest String Chain

- Difficulty: Medium
- Topics: Array, Hash Table, Two Pointers, String, Dynamic Programming, Sorting
- Slug: longest-string-chain
- Problem ID: 1129

## Description
You are given an array of words where each word consists of lowercase English letters.
wordA is a predecessor of wordB if and only if we can insert exactly one letter anywhere in wordA without changing the order of the other characters to make it equal to wordB.
A word chain is a sequence of words [word1, word2, ..., wordk] with k >= 1, where word1 is a predecessor of word2, word2 is a predecessor of word3, and so on. A single word is trivially a word chain with k == 1.
Return the length of the longest possible word chain with words chosen from the given list of words.
Example 1:
Example 2:
Example 3:
Constraints:

## Examples
### Example 1
```text
Input: words = ["a","b","ba","bca","bda","bdca"]
Output: 4
Explanation: One of the longest word chains is ["a","ba","bda","bdca"].
```

### Example 2
```text
Input: words = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
Output: 5
Explanation: All the words can be put in a word chain ["xb", "xbc", "cxbc", "pcxbc", "pcxbcf"].
```

### Example 3
```text
Input: words = ["abcd","dbqca"]
Output: 1
Explanation: The trivial word chain ["abcd"] is one of the longest word chains.
["abcd","dbqca"] is not a valid word chain because the ordering of the letters is changed.
```


## Constraints
- 1 <= words.length <= 1000
- 1 <= words[i].length <= 16
- words[i] only consists of lowercase English letters.

## Hints
- Instead of adding a character, try deleting a character to form a chain in reverse.
- For each word in order of length, for each word2 which is word with one character removed, length[word2] = max(length[word2], length[word] + 1).

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:
    int longestStrChain(vector<string>& words) {
        
    }
};
```

### java
```java
class Solution {
    public int longestStrChain(String[] words) {
        
    }
}
```

### python
```python
class Solution(object):
    def longestStrChain(self, words):
        """
        :type words: List[str]
        :rtype: int
        """
```

### python3
```python3
class Solution:
    def longestStrChain(self, words: List[str]) -> int:
```

### c
```c
int longestStrChain(char** words, int wordsSize) {
    
}
```

### csharp
```csharp
public class Solution {
    public int LongestStrChain(string[] words) {
        
    }
}
```

### javascript
```javascript
/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    
};
```

### typescript
```typescript
function longestStrChain(words: string[]): number {
    
};
```

### php
```php
class Solution {

    /**
     * @param String[] $words
     * @return Integer
     */
    function longestStrChain($words) {
        
    }
}
```

### swift
```swift
class Solution {
    func longestStrChain(_ words: [String]) -> Int {
        
    }
}
```

### kotlin
```kotlin
class Solution {
    fun longestStrChain(words: Array<String>): Int {
        
    }
}
```

### dart
```dart
class Solution {
  int longestStrChain(List<String> words) {
    
  }
}
```

### golang
```golang
func longestStrChain(words []string) int {
    
}
```

### ruby
```ruby
# @param {String[]} words
# @return {Integer}
def longest_str_chain(words)
    
end
```

### scala
```scala
object Solution {
    def longestStrChain(words: Array[String]): Int = {
        
    }
}
```

### rust
```rust
impl Solution {
    pub fn longest_str_chain(words: Vec<String>) -> i32 {
        
    }
}
```

### racket
```racket
(define/contract (longest-str-chain words)
  (-> (listof string?) exact-integer?)
  )
```

### erlang
```erlang
-spec longest_str_chain(Words :: [unicode:unicode_binary()]) -> integer().
longest_str_chain(Words) ->
  .
```

### elixir
```elixir
defmodule Solution do
  @spec longest_str_chain(words :: [String.t]) :: integer
  def longest_str_chain(words) do
    
  end
end
```
